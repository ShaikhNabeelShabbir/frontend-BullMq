import { LoginButton } from "@telegram-auth/react";

const TelegramloginButton = () => {
  return (
    <div className="App">
      <LoginButton
        botUsername="Phenoxide_bot"
        buttonSize="large" // "large" | "medium" | "small"
        cornerRadius={5} // 0 - 20
        showAvatar={true} // true | false
        lang="en"
        onAuthCallback={async (data) => {
          console.log("in Auth callback");
          console.log("Authenticated user:", data);
          const { id: telegram_user_id, first_name } = data;

          // Send telegram_user_id to your backend
          try {
            const response = await fetch("http://localhost:3000/schedule-job", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                telegram_user_id,
                message: `Hello ${first_name}!`, // Fixed the template literal
              }),
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log("Response from backend:", responseData);
          } catch (error) {
            console.error("Failed to send telegram_user_id to backend:", error);
          }
        }}
      />
    </div>
  );
};

export default TelegramloginButton;
