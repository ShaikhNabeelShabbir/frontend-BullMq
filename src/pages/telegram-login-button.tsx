import { LoginButton } from "@telegram-auth/react";

const TelegramloginButton = () => {
  return (
    <LoginButton
      botUsername={"tg_react_auth_test_bot"}
      buttonSize="large" // "large" | "medium" | "small"
      cornerRadius={5} // 0 - 20
      showAvatar={true} // true | false
      lang="en"
      onAuthCallback={(authData) => {
        console.log(authData);
      }}
    />
  );
};

export default TelegramloginButton;
