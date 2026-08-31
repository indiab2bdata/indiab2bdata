import { NextResponse } from "next/server";

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

  const lead = {
    name,
    company: formData.get("company")?.toString().trim() || null,
    phone,
    email: formData.get("email")?.toString().trim() || null,
    requirement,
    message: formData.get("message")?.toString().trim() || null,
    source: formData.get("source")?.toString().trim() || "popup",
    receivedAt: new Date().toISOString(),
  };

  // TODO: wire this up to your CRM/email/lead-storage of choice
  // (e.g. Resend, SMTP, a Google Sheet, or a database write).
  console.log("New sample request:", lead);

  return NextResponse.json({ success: true });
}
