import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type LeadPayload = {
  name: string;
  company: string | null;
  phone: string;
  email: string | null;
  requirement: string;
  message: string | null;
  source: string;
  receivedAt: string;
};

/** Escapes visitor-supplied text before it goes into the HTML email body. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatLeadEmail(lead: LeadPayload) {
  const h = {
    name: escapeHtml(lead.name),
    phone: escapeHtml(lead.phone),
    email: escapeHtml(lead.email || "Not provided"),
    company: escapeHtml(lead.company || "Not provided"),
    requirement: escapeHtml(lead.requirement),
    source: escapeHtml(lead.source),
    receivedAt: escapeHtml(lead.receivedAt),
    message: escapeHtml(lead.message || "No additional notes").replace(/\n/g, "<br />"),
  };
  const lines = [
    "New sample request received",
    "===========================",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || "Not provided"}`,
    `Company: ${lead.company || "Not provided"}`,
    `Requirement: ${lead.requirement}`,
    `Source: ${lead.source}`,
    `Received At: ${lead.receivedAt}`,
    "",
    "Message / Notes:",
    lead.message || "No additional notes",
  ];

  return {
    text: lines.join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
        <h2 style="margin: 0 0 12px; color: #0f172a;">New sample request received</h2>
        <ul style="padding-left: 18px; margin: 0 0 12px;">
          <li><strong>Name:</strong> ${h.name}</li>
          <li><strong>Phone:</strong> ${h.phone}</li>
          <li><strong>Email:</strong> ${h.email}</li>
          <li><strong>Company:</strong> ${h.company}</li>
          <li><strong>Requirement:</strong> ${h.requirement}</li>
          <li><strong>Source:</strong> ${h.source}</li>
          <li><strong>Received At:</strong> ${h.receivedAt}</li>
        </ul>
        <div>
          <strong>Message / Notes:</strong>
          <p style="margin: 8px 0 0;">${h.message}</p>
        </div>
      </div>
    `,
  };
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = formData.get("name")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const requirement = formData.get("requirement")?.toString().trim();

  if (!name || !phone || !requirement) {
    return NextResponse.json(
      { success: false, message: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const lead: LeadPayload = {
    name,
    company: formData.get("company")?.toString().trim() || null,
    phone,
    email: formData.get("email")?.toString().trim() || null,
    requirement,
    message: formData.get("message")?.toString().trim() || null,
    source: formData.get("source")?.toString().trim() || "popup",
    receivedAt: new Date().toISOString(),
  };

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || smtpUser || "noreply@localhost";
  const smtpTo = process.env.SMTP_TO || smtpFrom;

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.log("New sample request (mail not configured):", lead);
    return NextResponse.json(
      {
        success: false,
        message: "Email service is not configured yet. Please contact us directly.",
      },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const { text, html } = formatLeadEmail(lead);

    await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      replyTo: lead.email || undefined,
      subject: `New sample request from ${lead.name.replace(/[\r\n]+/g, " ").slice(0, 80)}`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact form email:", error);

    return NextResponse.json(
      {
        success: false,
        message: "We could not send your request right now. Please call or WhatsApp us directly.",
      },
      { status: 500 }
    );
  }
}
