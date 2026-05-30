export const REQUIRED_ENV_VARS = [
  "EXPO_PUBLIC_APP_ENV",
  "EXPO_PUBLIC_API_URL",
  "EXPO_PUBLIC_NETWORK",
  "EXPO_PUBLIC_RPC_URL",
  "EXPO_PUBLIC_ESCROW_CONTRACT_ID",
] as const;

export type RequiredEnvVar =
  (typeof REQUIRED_ENV_VARS)[number];