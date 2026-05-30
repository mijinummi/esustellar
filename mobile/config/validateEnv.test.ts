import { validateEnv }
  from "./validateEnv";

describe(
  "validateEnv",
  () => {
    it(
      "throws when required variables are missing",
      () => {
        const original =
          process.env
            .EXPO_PUBLIC_API_URL;

        delete process.env
          .EXPO_PUBLIC_API_URL;

        expect(() =>
          validateEnv()
        ).toThrow();

        process.env
          .EXPO_PUBLIC_API_URL =
          original;
      }
    );
  }
);