import React from "react";

import {
  View,
  Text,
  Switch,
} from "react-native";

import {
  useTheme,
} from "../../hooks/useTheme";

export default function ThemeToggle() {

  const {
    theme,
    toggleTheme,
    colors,
  } = useTheme();

  return (
    <View
      style={{
        backgroundColor:
          colors.card,
      }}
      className="
        flex-row
        items-center
        justify-between
        p-4
        rounded-xl
      "
    >
      <Text
        style={{
          color:
            colors.text,
        }}
      >
        Dark Mode
      </Text>

      <Switch
        value={
          theme === "dark"
        }
        onValueChange={
          toggleTheme
        }
      />
    </View>
  );
}