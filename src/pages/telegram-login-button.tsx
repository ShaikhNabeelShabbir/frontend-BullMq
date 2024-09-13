import { LoginButton } from "@telegram-auth/react";

const TelegramloginButton = () => {
  return (
    <div className="App">
      <LoginButton
        botUsername="Phenoxide_bot"
        authCallbackUrl="https://1dc8-103-232-238-200.ngrok-free.app"
        buttonSize="large" // "large" | "medium" | "small"
        cornerRadius={5} // 0 - 20
        showAvatar={true} // true | false
        lang="en"
        onAuthCallback={(data) => {
          console.log(data);
          // call your backend here to validate the data and sign in the user
        }}
      />
    </div>
  );
};

export default TelegramloginButton;
