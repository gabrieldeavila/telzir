import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../pages/Home/style";
import { ModeProps } from "./interface";
import { formats } from "./format";
import {
  ResultItem,
  ResultItemKey,
  ResultItemValue,
  ResultWrapper,
} from "./style";
import { useFormat } from "../../hooks/useFormat";
import { Button } from "../form/style";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

export default function Result({ setMode, mode }: ModeProps) {
  const { t } = useTranslation();
  const { format, formatTelzirLogo } = useFormat();

  const simulationResult = useSelector(
    (state: AppState) => state.simulate.simulate
  );

  const keys = Object.keys(simulationResult);

  const goBack = useCallback(() => {
    setMode("simulator");
  }, [mode]);

  return (
    <>
      <SectionTitle>{t("simulation_page.result")}</SectionTitle>
      <ResultWrapper>
        {keys.map((key) => {
          let value = simulationResult[key as keyof typeof simulationResult];
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
