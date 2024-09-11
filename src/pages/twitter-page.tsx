import React from "react";
import TwitterLogin from "react-twitter-login";

const consumerKey = "OniuvNQ5GR77k6AfTINn0LLYu"; // Replace with your Twitter API Key
const consumerSecret = "NSWcstdG2FJkBTbN7eMEI4ussshbFd64QvjrQBkVe2RpCPck6Wq"; // Replace with your Twitter API Secret Key
const TwitterLoginButton: React.FC = () => {
  const authHandler = (err: any, data: any) => {
    if (err) {
      console.error("Twitter login error:", err);
    } else {
      console.log("Twitter login success:", data);
      // Process the returned data, typically includes oauth_token and oauth_token_secret
    }
  };

  return (
    <TwitterLogin
      authCallback={authHandler}
      consumerKey={consumerKey}
      consumerSecret={consumerSecret}
      callbackUrl="http://localhost:5173/twitter" // Replace with your app's callback URL
    />
  );
};

export default TwitterLoginButton;
