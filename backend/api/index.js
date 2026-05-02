"use strict";

const path = require("path");

// Load compiled app (built by vercel-build: prisma generate && npm run build).
const { createApp } = require(path.join(__dirname, "..", "dist", "app.js"));

const app = createApp();
module.exports = app;
