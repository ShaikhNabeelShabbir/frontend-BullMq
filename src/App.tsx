import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CreateToken from "./pages/CreateToken";
import ViewTokens from "./pages/ViewTokens";
import DeleteToken from "./pages/DeleteToken";
import UpdateToken from "./pages/UpdateToken";
import "./styles.css";
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
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import LinkedInPage from "./pages/LinkedInPage";

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

        <SignedIn>
          <>
            <br />
            <Button onClick={handleLogout}>
              <br /> <UserButton />
            </Button>
            <br />
            <div className="flex w-full">
              {/* Replace LinkedIn button with LinkedInPage component */}
              <LinkedInPage />
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

        <SignedOut>
          <header>
            <SignInButton />
          </header>
          <Routes></Routes>
        </SignedOut>

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
          {/* Add a route for LinkedIn authentication */}
          <Route path="/linkedin" element={<LinkedInPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
