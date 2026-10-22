import type { StateContent } from "@/types/landing";
import maharashtra from "@/content/states/maharashtra";
import gujarat from "@/content/states/gujarat";
import tamilNadu from "@/content/states/tamil-nadu";
import delhi from "@/content/states/delhi";
import uttarPradesh from "@/content/states/uttar-pradesh";
import karnataka from "@/content/states/karnataka";
import haryana from "@/content/states/haryana";
import telangana from "@/content/states/telangana";

/** Every state page, in display order (footer, /database hub, sitemap, llms.txt). Register new files here. */
export const states: StateContent[] = [
  maharashtra,
  gujarat,
  tamilNadu,
  delhi,
  uttarPradesh,
  karnataka,
  haryana,
  telangana,
];
