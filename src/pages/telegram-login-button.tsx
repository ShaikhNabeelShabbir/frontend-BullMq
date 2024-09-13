import { LoginButton } from "@telegram-auth/react";

const TelegramloginButton = () => {
  return (
    <div className="App">
      <LoginButton
        botUsername="Phenoxide_bot"
        authCallbackUrl="https://c3d8-103-232-238-200.ngrok-free.app"
        buttonSize="large" // "large" | "medium" | "small"
        cornerRadius={5} // 0 - 20
        showAvatar={true} // true | false
        lang="en"
      />
    </div>
  );
};

export default TelegramloginButton;
