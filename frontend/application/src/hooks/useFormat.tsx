import { t } from "i18next";
import { useCallback } from "react";
import Logo from "../components/logo";
import _ from "lodash";

export const useFormat = () => {
  const format = (type: string, value: string | number) => {
    value = value.toString();

    // find the format
    switch (type) {
      case "string":
        return value;
      case "number":
        return parseFloat(value);
      case "minutes":
        return `${value.padStart(2, "0")} min`;
      case "BRL":
        return parseFloat(value).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
      case "percent":
        return `${parseFloat(value).toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        })}%`;
      case "translate":
        return t(value);
      default:
        return value;
    }
  };

  // checks if a string has Telzir., if so, substitutes it for the Telzir logo
  const formatTelzirLogo = (phrase: string) => {
    let parts = phrase.split("Telzir.");

    return parts.map((part) => {
      if (_.isEmpty(part)) {
        return <Logo type="dark" size="sm" />;
      }
      return part;
    });
  };

  return { format, formatTelzirLogo };
};
