"use client";

import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";

const isLocalhost = typeof window !== "undefined" && window.location.hostname === "localhost";

const productionUrl = "https://main.d37zocj71ah20c.amplifyapp.com/";
const localUrl = "http://localhost:3000/";

Amplify.configure(
  {
    ...config,
    oauth: {
      ...config.oauth,
      redirectSignIn: isLocalhost ? localUrl : productionUrl,
      redirectSignOut: isLocalhost ? localUrl : productionUrl,
    },
  },
  { ssr: true }
);

export default function ConfigureAmplifyClientSide() {
  return null;
}
