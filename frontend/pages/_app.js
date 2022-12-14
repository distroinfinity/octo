import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { Auth } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import LandingPage from "../components/LandingPage";
import { Toaster } from "react-hot-toast";

Amplify.configure({
  Auth: {
    region: process.env.NEXT_PUBLIC_REGION,

    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,

    userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_WEB_CLIENT_ID,

    mandatorySignIn: process.env.NEXT_PUBLIC_MANDATORY_SIGN_IN,

    signUpVerificationMethod:
      process.env.NEXT_PUBLIC_SIGNUP_VERIFICATION_METHOD,
  },
  ssr: true,
});

// You can get the current config object
const currentConfig = Auth.configure();

function MyApp({ Component, pageProps }) {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    // setLogin(false);
  }, []);

  return (
    <div className={`${!login && "h-screen"} bg-[#0a0a0b]`}>
      <div className="h-full flex flex-col bg-[#0a0a0b]">
        <div className="flex">
          <Sidebar />
          {/* {console.log("this is user", user)} */}
          <Toaster />
          <Component {...pageProps} />
        </div>
      </div>
      {/* {login ? (
        <div>
        //signOut={signOut}
          <Authenticator>
            {({ signOut, user }) => (
              <div className="h-full flex flex-col bg-[#0a0a0b]">
                <div className="flex">
                  <Sidebar signOut={signOut} />
                  {console.log("this is user", user)}
                  <Toaster />
                  <Component {...pageProps} />
                </div>
              </div>
            )}
          </Authenticator>
        </div>
      ) : (
        <LandingPage setLogin={setLogin} />
      )} */}
    </div>
  );
}

export default MyApp;
