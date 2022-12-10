import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostsDiagram from "./CostsDiagram";
import "./Costs.css";
import { useState } from "react";
import CostList from "./CostList";

const Costs = ({ costs }) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const changeYear = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={changeYear} />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
