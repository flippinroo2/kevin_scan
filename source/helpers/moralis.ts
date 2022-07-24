// import { Moralis } from 'moralis';
import { useMoralis, useMoralisCloudFunction, useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";

// This is all messed up now because you can only use hooks inside the body of a functional component.

const moralis = useMoralis(); // = { auth, authenticate, enableWeb3, isAuthenticated, isAuthenticating, isWeb3Enabled, isWeb3EnableLoading, login, logout, Moralis, signup, user, web3, web3EnableError }

export const auth = moralis.auth;
export const authenticate = moralis.authenticate;
export const enableWeb3 = moralis.enableWeb3;
export const login = moralis.login;
export const signup = moralis.signup;
export const user = moralis.user;
export const web3 = moralis.web3;

export const connectWeb3 = async () => {
  // const moralis: any = Moralis; // Did this to avoid error with the "Plugins" directive. (ALSO, plugins may not be enabled on the older version I'm using >.<)
  const moralisWeb3 = useMoralisWeb3Api();
  try {
    const web3Enabled = await enableWeb3();

    var err: any;
    var errorCode: number;
    switch (auth.state) {
      case "error":
        // TODO: Consider throwing an error here and doing a switch statement in the "catch" block below for the different error codes.
        err = auth.error;
        errorCode = err.code;
        console.dir(err);
        if (errorCode == 101) {
          console.log("Invalid Username / Password");
          signup("testUsername", "testPassword", "test@email.com");
          break;
        }
        if (errorCode = 202) {
          console.log("This username is taken");
          break;
        }
      case "authenticating":
        console.log("authenticating");
        break;
      case "authenticated":
        break;
      case "logging_out":
        console.log("logging_out");
        break;
      case "unauthenticated":
        // const authenticationStatus = authenticate({ onComplete: () => { alert("Authenticated"); }, provider: "walletconnect" }); // Requires Metamask or another Web3 Provider. You can also pass in "walletconnect" to the "provider" argument to use that instead of Metamask.
        const loginTest = login("testUsername", "testPassword");
        // const signUpTest = signup("testUsername", "testPassword", "test@email.com");
        break;
      default:
        err = auth.error;
        console.log("default");
    }
    // const web3Installed = await moralis.ensureWeb3IsInstalled();
    // if (web3Installed) {
    //   console.log("BREAK");
    //   const test1 = await moralis.enable();
    //   const test2 = await moralis.getWeb3Provider();
    //   const test3 = await moralis.authenticate();
    //   console.log("BREAK");
    // }
    console.dir(user);
    // console.dir(await moralis.Session.current());
    // console.dir(Moralis.User); // loginOrSignup() seems useful
    // console.dir(moralis.AnonymousUtils);
  } catch (err: any) {
    alert(err.message);
  }
  console.log("BREAK");
}
