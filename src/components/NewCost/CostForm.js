import { useState } from "react";
import "./CostForm.css";

const CostForm = ({ onSaveCostData, onCancel }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const costData = {
      description,
      amount,
      date: new Date(date),
    };

    onSaveCostData(costData);

    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__controls">
          <label>Название</label>
          <input type="text" onChange={descriptionChangeHandler} value={description} />
        </div>
        <div className="new-cost__controls">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-cost__controls">
          <label>Дата</label>
          <input type="date" min="2019-01-01" onChange={dateChangeHandler} value={date} />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button type="button" onClick={onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
