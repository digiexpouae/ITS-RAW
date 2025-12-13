import { SignedIn, SignedOut, useAuth  ,useClerk} from '@clerk/nextjs';
import { useEffect } from 'react';
import { LoaderCircle } from 'lucide-react';
import LoaderPopup from "../components/popup"; // make sure this matches your file


export const AuthWrapper = ({ children}) => {
  const { isSignedIn, isLoaded } = useAuth();
      const clerk = useClerk();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      // Redirect to Clerk-hosted Sign In page
      clerk.redirectToSignIn();
    }
  }, [isLoaded, isSignedIn, clerk]);

  if (!isLoaded && !isSignedIn ) {
     return <LoaderPopup isOpen={true} />;
  }


  return( 
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        {/* <Popup isOpen={true}/> */}
      </SignedOut>
    </>
  )
};
