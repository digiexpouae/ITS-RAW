'use client';
import "@/styles/globals.css";

import { Poppins } from "next/font/google";
import { PostHogProvider } from 'posthog-js/react'
import {
  ClerkProvider,

} from '@clerk/nextjs'
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
});

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>

      <PostHogProvider
        apiKey={process.env.VITE_PUBLIC_POSTHOG_HOST}
        options={{
          api_host: process.env.VITE_PUBLIC_POSTHOG_HOST,
          capture_exceptions: true,
          debug: process.env.NODE_ENV === "development",
        }}
      >
        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
      </PostHogProvider>
    </ClerkProvider>
  );
}
