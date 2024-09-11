import { Button } from "@/components/ui/button";
import { useLinkedIn } from "react-linkedin-login-oauth2";

function LinkedInPage() {
  const { linkedInLogin } = useLinkedIn({
    clientId: "77pfbe2756bxhc", // Your LinkedIn Client ID
    redirectUri: "http://localhost:5173/linkedin", // Make sure this matches LinkedIn app settings
    onSuccess: (code) => {
      console.log("Authorization Code:", code);
    },
    onError: (error) => {
      console.error("Error during login:", error);
    },
  });

  return (
    <>
      <Button
        onClick={linkedInLogin}
        style={{ maxWidth: "180px", cursor: "pointer" }}
      >
        Linkedin
      </Button>
    </>
  );
}

export default LinkedInPage;
