"use client";

import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";

const isLocalhost =
  typeof window !== "undefined" &&
  window.location.hostname === "localhost";

const redirectUrl = isLocalhost
  ? "http://localhost:3000/"
  : "https://main.d37zocj71ah20c.amplifyapp.com/";

// amplifyconfiguration.json uses the legacy config shape.
// We patch the oauth redirect URLs at runtime based on environment.
const patchedConfig = {
  ...config,
  oauth: {
    ...config.oauth,
    redirectSignIn: redirectUrl,
    redirectSignOut: redirectUrl,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Amplify.configure(patchedConfig as any, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}
