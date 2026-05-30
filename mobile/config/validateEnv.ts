import { ENV } from "./env";
import {
  REQUIRED_ENV_VARS,
} from "./schema";

export function validateEnv() {

  const missing: string[] = [];

  REQUIRED_ENV_VARS.forEach((key) => {
    const value =
      process.env[key];

    if (
      value === undefined ||
      value === null ||
      value.trim() === ""
    ) {
      missing.push(key);
    }
  });

  if (missing.length > 0) {
    throw new Error(
      [
        "Missing required environment variables:",
        ...missing,
      ].join("\n")
    );
  }

  const validEnvironments = [
    "development",
    "staging",
    "production",
  ];

  if (
    !validEnvironments.includes(
      ENV.APP_ENV ?? ""
    )
  ) {
    throw new Error(
      `Invalid EXPO_PUBLIC_APP_ENV: ${ENV.APP_ENV}`
    );
  }

  const validNetworks = [
    "testnet",
    "mainnet",
  ];

  if (
    !validNetworks.includes(
      ENV.NETWORK ?? ""
    )
  ) {
    throw new Error(
      `Invalid EXPO_PUBLIC_NETWORK: ${ENV.NETWORK}`
    );
  }
}