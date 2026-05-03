import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_DB_URL);

const db = client.db();

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: [
    "https://qurbani-hat-8lyn.vercel.app",
    "http://localhost:3000"
  ],
  emailAndPassword: {
    enabled: true
  },
  socialProviders: {
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    }, 
  },
  database: mongodbAdapter(db, {
    client
  }),
});