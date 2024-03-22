import React from "react";
import { Card, useTheme } from "@nextui-org/react";

export const useDarkModeCardHover = () => {
  const { isDark } = useTheme();

  const cardHoverStyle = {
    backgroundColor: isDark ? "#333" : "#eee",
    transition: "background-color 0.3s ease",
  };
  return cardHoverStyle;
};
