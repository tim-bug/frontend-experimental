import { useState } from "react";
import { useEffect } from "react";
import { BackendFetch } from "lib/FetchAxios";
import { useCtx } from "lib/Context";
import dynamic from "next/dynamic";

const Auth = () => {
  const { dispatch } = useCtx();
  const [isLogged, setIsLogged] = useState(false);
  const [isFetch, setIsFetch] = useState(false);
  const fetchAuth = async () => {
    try {
      setIsFetch(true);
      const rr = await BackendFetch("current-user", {
        method: "GET",
      });

      if (!rr.status) throw new Error("BAD_REQUEST");

      if (rr.data && rr.data?.data) {
        setIsFetch(false);
        setIsLogged(true);
        return dispatch({
          type: "SET_PROFILE",
          payload: {
            profile: rr.data?.data,
          },
        });
      }
      return null;
    } catch (err) {
      setIsFetch(false);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    fetchAuth();
  }, []);

  return <>access /dashboard</>;
};

export default Auth;
