import { black, white, red } from "../../assets/base/colors";

// Logo can have different types or sizes.
export interface LogoProps {
  type?: "dark" | "light" | "red";
  size?: "sm" | "md" | "lg";
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
    sm: {
      mobile: "1rem",
    },
    md: {
      mobile: "1.5rem",
    },
    lg: {
      mobile: "2rem",
    },
  },
};
