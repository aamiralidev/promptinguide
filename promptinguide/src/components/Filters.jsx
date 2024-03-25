import React, { useState } from "react";
import MultiSelect from "../components/MultiSelect";
import CheckBox from "../components/CheckBox";
import "../index.css";

const Filters = ({ addFilter, removeFilter }) => {
  const [selectedPublishDate, setSelectedPublishDate] = useState([]);

  const categoryOptions = [
    { id: "input", name: "Input Semantics" },
    { id: "output", name: "Output Customization" },
    { id: "error", name: "Error Identification" },
    { id: "improvement", name: "Prompt Improvement" },
    { id: "interaction", name: "Interaction" },
    { id: "context", name: "Context Control" },
  ];

  categoryOptions.forEach((option) => (option.type = "category"));

  return (
    <>
      <MultiSelect
        options={categoryOptions}
        addFilter={addFilter}
        removeFilter={removeFilter}
        placeholder="Category"
      />
    </>
  );
};

export default Filters;
