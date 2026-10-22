// Usage: node --import ./scripts/lib/register.mjs scripts/<check>.ts
// Lets check scripts import src/ modules (content registry, schemas, config) through the "@/" alias.
import { register } from "node:module";

register("./alias-hooks.mjs", import.meta.url);
