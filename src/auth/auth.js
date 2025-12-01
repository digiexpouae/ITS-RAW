import { useClerk, SignIn } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

export default function AuthWrapper({ children }) {
  const clerk = useClerk();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (clerk.loaded && clerk.isSignedIn) {
      setLoading(false); // user is signed in, stop loading
    }
  }, [clerk]);

  if (!clerk.loaded || loading) {
    return <LoaderCircle className="animate-spin" />;
  }

  // If user is NOT signed in, render Clerk's SignIn component
  if (!clerk.isSignedIn) {
    return <SignIn  />;
  }

  // If signed in, render children
  return <>{children}</>;
}
