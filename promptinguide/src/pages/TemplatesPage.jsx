import React from "react";
import Search from "../components/Search";
import Filters from "../components/Filters";
import Sidebar from "../components/Sidebar";
import JobGroup from "../components/TemplateGroup";
import TemplateGroup from "../components/TemplateGroup";

const TemplatesPage = () => {
  return (
    <>
      <Search />
      <div
        className="d-flex m-5 justify-content-around pb-5"
        style={{ backgroundColor: "#F5F5F5", minHeight: "vh100" }}
      >
        <div className="ms-5 me-5">
          {/* <SelectedFilters
          selectedFilters={selectedFilters}
          removeFilter={removeFilter}
        /> */}
          <TemplateGroup />
        </div>
      </div>
    </>
  );
};

export default TemplatesPage;
