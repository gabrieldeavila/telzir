import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../pages/Home/style";
import Form from "../form";
import { Button, Input, Option, Select } from "../form/style";
import { SimulationWrapper } from "./style";
import { selectOptions, SimulationProps } from "./interface";

export default function Simulation() {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle>{t("home.simulation")}</SectionTitle>
      <SimulationWrapper>
        <Form schema="simulation">
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
          <Button submit>SIMULAR!!!</Button>
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
