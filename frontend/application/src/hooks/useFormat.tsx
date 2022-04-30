import { t } from "i18next";
import { useCallback } from "react";
import Logo from "../components/logo";
import _ from "lodash";
import { FormattedLogo } from "../components/logo/style";

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

    if (parts.length > 1) {
      return (
        <FormattedLogo>
          {parts.map((part) => {
            // doesn't return if the part is empty
            if (_.isEmpty(part)) {
              return;
            }

            // if the part is the first, it's the Telzir. part
            if (part.length % 2 !== 0) {
              return part;
            }

            return (
              <>
                {part}
                <Logo type="dark" size="sm" />
              </>
            );
          })}
        </FormattedLogo>
      );
    }

    return phrase;
  };

  return { format, formatTelzirLogo };
};
