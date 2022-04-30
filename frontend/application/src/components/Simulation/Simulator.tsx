import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../pages/Home/style";
import Form from "../form";
import { Button, Input, Option, Select } from "../form/style";
import { SimulationWrapper } from "./style";
import {
  ModeProps,
  selectOptions,
  SimulationProps,
  SubmitValues,
} from "./interface";
import { useCallback } from "react";
import { setSimulate } from "./../../redux/effects/Simulate";
import { useDispatch } from "react-redux";

export default function Simulator({ mode, setMode }: ModeProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleSubmit = useCallback((values: SubmitValues) => {
    // @ts-ignore
    dispatch(setSimulate(values));
    setMode("result");
  }, []);

  return (
    <>
      <SectionTitle>{t("simulation_page.simulation")}</SectionTitle>
      <SimulationWrapper>
        <Form schema="simulation" onSubmit={handleSubmit}>
          <Select avoidSelectLabel name="ddd_from">
            <Options use="ddd" />
          </Select>
          <Select avoidSelectLabel name="ddd_to">
            <Options use="ddd" />
          </Select>
          <Input type="number" name="call_time" min="0" />
          <Select avoidSelectLabel name="choose_plan">
            <Options use="plan" />
          </Select>
          <Button submit>{t("simulation_page.simulate")}</Button>
        </Form>
      </SimulationWrapper>
    </>
  );
}

const Options = ({ use }: SimulationProps) => {
  const options = selectOptions[use];
  const { t } = useTranslation();

  return (
    <>
      <Option value={undefined}></Option>
      {options.map((option) => (
        <Option value={option}>
          {use === "ddd" ? option : t(`simulation_page.${option}`)}
        </Option>
      ))}
    </>
  );
};
