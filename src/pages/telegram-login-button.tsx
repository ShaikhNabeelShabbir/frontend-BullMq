import { LoginButton } from "@telegram-auth/react";

const TelegramloginButton = () => {
  return (
    <LoginButton
      botUsername={"Phenoxide_bot"}
      buttonSize="large" // "large" | "medium" | "small"
      cornerRadius={5} // 0 - 20
      lang="en"
      onAuthCallback={(authData) => {
        console.log("hello", authData);
      }}
    />
  );
};

export default TelegramloginButton;
