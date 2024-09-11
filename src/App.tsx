import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

// Import pages
import CreateToken from "./pages/CreateToken";
import ViewTokens from "./pages/ViewTokens";
import DeleteToken from "./pages/DeleteToken";
import UpdateToken from "./pages/UpdateToken";
import LinkedInPage from "./pages/linkedIn-page";
export * from "./pages/login-button-telegram";
export * from "./pages/create-script";
export * from "./pages/types";

// Import components
import { Button } from "./components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

// Import styles
import "./styles.css";
import GitHubPage from "./pages/github-login-page";
import TwitterPage from "./pages/twitter-page";
import { LoginButton } from "./pages/login-button-telegram";

const App: React.FC = () => {
  const [token, setToken] = useState<string>(() => {
    const savedToken = sessionStorage.getItem("token");
    return savedToken || "";
  });

  const handleLogout = () => {
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
    setToken("");
  };

  return (
    <div className="container text-xl w-full h-full p-8">
      <Router>
        <h3>Welcome to the App</h3>

        {/* If the user is signed in, display this section */}
        <SignedIn>
          <>
            <br />
            <Button onClick={handleLogout}>
              <UserButton />
              <span> Logout</span>
            </Button>
            <br />
            <div className="flex w-fit flex-col space-y-5 ">
              <LinkedInPage />
              <GitHubPage />
              <TwitterPage />
              <LoginButton
                botUsername={"Phenoxide_bot"}
                authCallbackUrl="https://ae53-103-232-238-211.ngrok-free.app/telegramAuth"
                buttonSize="large" // "large" | "medium" | "small"
                cornerRadius={5} // 0 - 20
                showAvatar={true} // true | false
                lang="en"
              />
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Options?</AccordionTrigger>
                <AccordionContent>
                  <Link to="/change-password">
                    <Button>Change Password</Button>
                  </Link>
                  <br />
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger>Token Menu</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>
                          <Link to="/create-token">Create Token</Link>
                          <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                          <Link to="/view-tokens">View Tokens</Link>
                        </MenubarItem>
                        <MenubarItem>
                          <Link to="/delete-token">Delete Token</Link>
                        </MenubarItem>
                        <MenubarItem>
                          <Link to="/update-token">Update Token</Link>
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </>
        </SignedIn>

        {/* If the user is signed out, display this section */}
        <SignedOut>
          <header>
            <SignInButton />
          </header>
          <Routes></Routes>
        </SignedOut>

        {/* Define routes */}
        <Routes>
          <Route
            path="/create-token"
            element={
              <SignedIn>
                <CreateToken token={token} />
              </SignedIn>
            }
          />
          <Route
            path="/view-tokens"
            element={
              <SignedIn>
                <ViewTokens />
              </SignedIn>
            }
          />
          <Route
            path="/delete-token"
            element={
              <SignedIn>
                <DeleteToken />
              </SignedIn>
            }
          />
          <Route
            path="/update-token"
            element={
              <SignedIn>
                <UpdateToken />
              </SignedIn>
            }
          />
          {/* Route for LinkedIn authentication */}
          <Route path="/linkedin" element={<LinkedInPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
