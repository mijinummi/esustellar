import AsyncStorage from
  "@react-native-async-storage/async-storage";

const STORAGE_KEY =
  "esustellar_theme";

export async function saveTheme(
  theme: string
) {
  await AsyncStorage.setItem(
    STORAGE_KEY,
    theme
  );
}

export async function getTheme() {
  return AsyncStorage.getItem(
    STORAGE_KEY
  );
}