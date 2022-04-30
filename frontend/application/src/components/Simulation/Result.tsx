import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../pages/Home/style";
import { ModeProps, result } from "./interface";
import { formats } from "./format";
import {
  ResultItem,
  ResultItemKey,
  ResultItemValue,
  ResultWrapper,
} from "./style";
import { useFormat } from "../../hooks/useFormat";
import { Button } from "../form/style";

export default function Result(props: ModeProps) {
  const { t } = useTranslation();
  const { format, formatTelzirLogo } = useFormat();

  const keys = Object.keys(result);

  const goBack = useCallback(() => {
    props.setMode("simulator");
  }, [props.mode]);

  return (
    <>
      <SectionTitle>{t("simulation_page.result")}</SectionTitle>
      <ResultWrapper>
        {keys.map((key) => {
          let value = result[key as keyof typeof result];
          let type = formats[key as keyof typeof formats];

          let formattedValue = format(type, value);
          let translatedKey = t(`simulation_page.${key}`);

          return (
            <ResultItem>
              <ResultItemKey>{formatTelzirLogo(translatedKey)}:</ResultItemKey>
              <ResultItemValue>{formattedValue}</ResultItemValue>
            </ResultItem>
          );
        })}
      </ResultWrapper>
      <Button submit={false} onClick={goBack}>
        {t("simulation_page.back")}
      </Button>
    </>
  );
}
