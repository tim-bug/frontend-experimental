import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getIdTokenResult,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import getConfig from "next/config";
import { initializeApp } from "firebase/app";
const Login = () => {
  const [user, setUser] = useState();
  const { publicRuntimeConfig } = getConfig();

  // const ages = ["das", "gregr", "eee", "tttt"];

  // function checkAge(age: string[]) {
  //   const numbers = [1, 2, 3, 4, 5, 6];
  //   const evenNumbers = numbers.filter(number => number % 2 === 0);

  //   console.log(evenNumbers);
  // }

  // useEffect(() => {
  //   checkAge(ages);
  // });

  return (
    <div className="bg-blue-700 w-full h-screen">
      {/* <form
        onSubmit={async (s) => {
          s.preventDefault();
          if (s.currentTarget.email.value.length < 1)
            return console.log("no content");
          try {
            initializeApp(publicRuntimeConfig?.firebaseConfig);
            const auth = getAuth();

            const isExist = await fetchSignInMethodsForEmail(
              auth,
              s.currentTarget.email.value as string
            );

            return console.log(isExist);
          } catch (error) {
            return console.log(error);
          }
        }}
      >
        <label>Check user auth strategy</label>
        <input type="text" autoComplete="off" name="email" />
      </form> */}

      {/* <form
        onSubmit={async (s) => {
          s.preventDefault();
          if (s.currentTarget.email.value.length < 1)
            return console.log("no content");
          try {
            initializeApp(publicRuntimeConfig?.firebaseConfig);
            const auth = getAuth();

            const isCreated = await createUserWithEmailAndPassword(
              auth,
              s.currentTarget.email.value as string,
              s.currentTarget.password.value as string
            );

            return console.log(isCreated);
          } catch (error) {
            return console.log(error);
          }
        }}
      >
        <label>Email</label>
        <input type="text" autoComplete="off" name="email" />
        <label>Password</label>
        <input type="text" autoComplete="off" name="password" />
        <input type="submit" />
      </form> */}

      {/* <form
        onSubmit={async (s) => {
          s.preventDefault();
          if (s.currentTarget.email.value.length < 1)
            return console.log("no content");
          try {
            initializeApp(publicRuntimeConfig?.firebaseConfig);
            const auth = getAuth();

            const isCreated = await signInWithEmailAndPassword(
              auth,
              s.currentTarget.email.value as string,
              s.currentTarget.password.value as string
            );

            console.log(
              "Access",
              isCreated.user?.toJSON()?.stsTokenManager?.accessToken
            );
            console.log(
              "Refresh",
              isCreated.user?.toJSON()?.stsTokenManager?.refreshToken
            );
          } catch (error) {
            return console.log(error);
          }
        }}
      >
        <label>Email to login</label>
        <input type="text" autoComplete="off" name="email" />
        <label>Password to login</label>
        <input type="text" autoComplete="off" name="password" />
        <input type="submit" />
      </form> */}

      {/* 
      <button
        onClick={async () => {
          try {
            initializeApp(publicRuntimeConfig?.firebaseConfig);

            const auth = getAuth();

            const user = await signInWithPopup(auth, new GoogleAuthProvider());

            console.log(
              "Access",
              user.user?.toJSON()?.stsTokenManager?.accessToken
            );
            console.log(
              "Refresh",
              user.user?.toJSON()?.stsTokenManager?.refreshToken
            );
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Google
      </button> */}
    </div>
  );
};

export default Login;

// https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?login_hint&prompt=login&response_type=code&redirect_uri=https%3A%2F%2Fauth0.openai.com%2Flogin%2Fcallback&scope=email%20profile&state=iQj8Nlw3Zo0GJDCOkl5UtAkpcgv-KPpD&client_id=799222349882-ne3i0s9jdm5s0p7ll2d7tlsi1vc1halt.apps.googleusercontent.com&service=lso&o2v=1&flowName=GeneralOAuthFlow
// https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=100207958086-4c9dgp9g2740btm0kvslbc6ujdsmaep4.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fsquaremetre-app.firebaseapp.com%2F__%2Fauth%2Fhandler&state=AMbdmDlOf8xmanmei9y3qEbF7T8ta_ZtqEUsQ6mpJms88P8wLz3PUYnjxBtNzWR1IDSEXSQJvxKA-SZ8nPEpm9AwOIDjSiQjdR6PXJR3sQ0_28CS6DxiwHuY3ZFzpRQkJ5i64lA8L9g14qtwwTmvCQVSbz2bhmQXa-jmkFpryT_-KEhlzZElXL3HHs-lgz0nDkczQtSHPn3SMX9uk6Vk7Fc7PY-66exnWhC0cL_vf9EYC7VRk5eB147rg-WRGEObpaNJ-TyLfj6n5ykHTCG6H18_RUF2y3433-8K4BOyDZ1q089bFa9XDT7f7Au_xuMryOwmtUjNOraERA&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20profile&context_uri=http%3A%2F%2Flocalhost%3A3000&service=lso&o2v=1&flowName=GeneralOAuthFlow
