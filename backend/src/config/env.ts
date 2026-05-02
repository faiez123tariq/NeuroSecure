import "dotenv/config";
import { z } from "zod";

const envSchema = z
  .object({
    SUPABASE_URL: z.string().url(),
    SUPABASE_ANON_KEY: z.string().min(1),
    SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
    SUPABASE_JWT_SECRET: z.string().min(1),
    DATABASE_URL: z.string().min(1),
    DIRECT_URL: z.string().min(1),
    PORT: z
      .string()
      .default("3000")
      .transform((v) => Number.parseInt(v, 10))
      .pipe(z.number().int().positive()),
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
    CORS_ORIGIN: z.string().default("*"),
    GMAIL_USER: z.string().email(),
    GMAIL_APP_PASSWORD: z.string().min(1),
    ALERT_EMAIL: z.string().email(),
  })
  .passthrough();

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "❌ Invalid environment configuration:\n",
    parsed.error.flatten().fieldErrors
  );
  process.exit(1);
}

export const env = parsed.data;
export type Env = typeof env;
