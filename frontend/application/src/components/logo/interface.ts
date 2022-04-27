import { black, white, red } from "../../assets/base/colors";

// Logo can have different types, sizes or be justified in a different way.
export interface LogoProps {
  type?: "dark" | "light" | "red";
  size?: "sm" | "md" | "lg";
  justify?: "center" | "flex-start" | "flex-end";
}

// Possible options for the logo.
export const LogoOptions = {
  type: {
    dark: {
      name: black,
      dot: red,
    },
    light: {
      name: white,
      dot: red,
    },
    red: {
      name: red,
      dot: black,
    },
  },

  size: {
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
  },
};
