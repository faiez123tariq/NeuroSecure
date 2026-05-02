import type { Express } from "express";
import { createApp } from "../src/app";

/**
 * Vercel serverless: Express handles `req`/`res`. Do not rely on `dist/` here —
 * the platform bundles this file + transitive `src/**` imports.
 */
const app: Express = createApp();

export default app;
