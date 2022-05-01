import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../pages/Home/style";
import { ModeProps } from "./interface";
import { formats } from "./format";
import {
  ResultItem,
  ResultItemKey,
  ResultItemValue,
  ResultWarning,
  ResultWrapper,
} from "./style";
import { useFormat } from "../../hooks/useFormat";
import { Button } from "../form/style";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../redux/store";
import { simulateInitialStateSetCreate } from "../../redux/reducers/SimulateReducer";
import _ from "lodash";
import Loader from "./../loader/index";
import { setSimulateAction } from "../../redux/actions/SimulateActions";

export default function Result({ setMode, mode }: ModeProps) {
  const { t } = useTranslation();
  const { format, formatTelzirLogo } = useFormat();
  const dispatch = useDispatch();

  const simulationResult = useSelector(
    // @ts-ignore
    (state: AppState) => state.simulate.simulate
  );

  const keys = Object.keys(simulationResult);

  const goBack = useCallback(() => {
    dispatch(setSimulateAction({ ...simulateInitialStateSetCreate.simulate }));
    setMode("simulator");
  }, [dispatch, setMode]);

  return (
    <>
      <SectionTitle id="simulation">{t("simulation_page.result")}</SectionTitle>
      <ResultWrapper>
        {_.isEmpty(simulationResult.choose_plan) ? (
          <Loader />
        ) : (
          <>
            {keys.map((key) => {
              let value =
                simulationResult[key as keyof typeof simulationResult];
              let type = formats[key as keyof typeof formats];

              let formattedValue = format(type, value);
              let translatedKey = t(`simulation_page.${key}`);

              return (
                <ResultItem>
                  <ResultItemKey>
                    {formatTelzirLogo(translatedKey)}:
                  </ResultItemKey>
                  <ResultItemValue>{formattedValue}</ResultItemValue>
                </ResultItem>
              );
            })}
            {simulationResult.economy === "-" && (
              <ResultWarning>{t("simulation_page.warning")}</ResultWarning>
            )}
          </>
        )}
      </ResultWrapper>
      <Button submit={false} onClick={goBack}>
        {t("simulation_page.back")}
      </Button>
    </>
  );
}
