import credits from "../../../public/images/industries/CREDITS.json";
import topicCredits from "../../../public/images/topics/CREDITS.json";

/** /image-credits (noindex). The credit list itself comes from the CREDITS.json files next to the images. */
export const IMAGE_CREDITS = {
  meta: {
    title: "Image Credits",
    description: "Sources and licences for the photographs used on IndiaB2BData.com.",
    path: "/image-credits",
  },
  hero: {
    eyebrow: "Attribution",
    title: "Image Credits",
    description:
      "Source links and licences for photographs on our homepage and database pages. Topic images are illustrative stock photographs, not endorsements or portraits of people listed in a database.",
  },
  breadcrumb: "Image Credits",
  credits: [...credits.map((credit) => ({ ...credit, provider: "Wikimedia Commons" })), ...topicCredits],
  /** One credit line: "{title} {by author | via provider}{licensedUnder} {licence}{resized}" */
  line: {
    by: (author: string) => `by ${author}`,
    via: (provider: string) => `via ${provider}`,
    licensedUnder: ", licensed under",
    resized: ". Resized for web.",
  },
  licenseUrls: {
    "Pexels License": "https://www.pexels.com/license/",
    "CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/",
    "CC BY 3.0": "https://creativecommons.org/licenses/by/3.0/",
    "CC BY 4.0": "https://creativecommons.org/licenses/by/4.0/",
    "CC BY-SA 2.0": "https://creativecommons.org/licenses/by-sa/2.0/",
    "CC BY-SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/",
    "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
    CC0: "https://creativecommons.org/publicdomain/zero/1.0/",
  } as Record<string, string>,
};
