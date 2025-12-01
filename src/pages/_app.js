'use client';
import "@/styles/globals.css";

import { Poppins } from "next/font/google";
import {
  ClerkProvider,
 
} from '@clerk/nextjs'
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
});

export default function App({ Component, pageProps }) {
  return (
            <ClerkProvider  publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>

    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
    </ClerkProvider>
  );
}
