import { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = ({ onAddCost }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (objCostData) => {
    const costData = {
      ...objCostData,
      id: Math.random().toString(),
    };
    onAddCost(costData);
    setIsFormVisible(false);
  };

  const inputCostdataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <dir className="new-cost">
      {!isFormVisible && <button onClick={inputCostdataHandler}>Добавить новый расход</button>}
      {isFormVisible && (
        <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler} />
      )}
    </dir>
  );
};

export default NewCost;
