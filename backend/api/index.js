/**
 * Vercel serverless entry: Express is invoked as `app(req,res)` — no HTTP listen().
 * Requires `npm run build` before deploy (`dist/` must exist).
 */
"use strict";

const { createApp } = require("../dist/app");

const app = createApp();
module.exports = app;
