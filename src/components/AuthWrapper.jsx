import {SignedIn, SignedOut, useClerk} from "@clerk/clerk-react";
import {LoaderCircle} from "lucide-react";

export const AuthWrapper = () => {
  const clerk = useClerk();

  if (!clerk.loaded) {
    return <LoaderCircle className="animate-spin"/>
  }

  if (!clerk.isSignedIn) {
    clerk.redirectToSignIn().then()
  }

  return (
    <>
      <SignedIn>
        <Outlet/>
      </SignedIn>
      <SignedOut>
        <LoaderCircle className="animate-spin"/>
      </SignedOut>
    </>
  );
};
