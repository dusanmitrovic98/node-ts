import dotenv from "dotenv";

dotenv.config();

const WEBSITE_URL = process.env.WEBSITE_URL || "http://example.com";

async function app(): Promise<void> {}

export default app;
