import type { CityContent } from "@/types/landing";
import uttarPradeshNoida from "@/content/cities/uttar-pradesh-noida";
import uttarPradeshGreaterNoida from "@/content/cities/uttar-pradesh-greater-noida";
import haryanaGurgaon from "@/content/cities/haryana-gurgaon";
import maharashtraMumbai from "@/content/cities/maharashtra-mumbai";
import maharashtraPune from "@/content/cities/maharashtra-pune";

/** Every city page, in display order (city lists, sitemap, llms.txt). Register new files here. */
export const cities: CityContent[] = [
  uttarPradeshNoida,
  uttarPradeshGreaterNoida,
  haryanaGurgaon,
  maharashtraMumbai,
  maharashtraPune,
];
