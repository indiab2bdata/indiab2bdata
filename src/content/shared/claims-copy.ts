import { CLAIMS } from "@/config/claims";

/** "usually within 2-6 working hours" - or a neutral phrase when no time is claimed. */
export function deliveryPhrase() {
  return CLAIMS.deliveryTime ? `usually within ${CLAIMS.deliveryTime}` : "on an agreed timeline";
}

export function removalSentence() {
  return CLAIMS.suppressionList
    ? "We delete the record and add it to a suppression list, so it never reappears in a future delivery."
    : "We delete the record from our database.";
}
