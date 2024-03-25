import React from "react";

import { CiSearch } from "react-icons/ci";
import Filters from "./Filters";

const Search = () => {
  const addFilter = () => {};

  const removeFilter = () => {};
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      {/* <Header /> */}
      <div className="container-fluid bg-white header-background">
        <div className="p-2 ps-5 pb-5">
          <div className="d-flex flex-column align-items-center mt-5">
            <div className="text-center" style={{ maxWidth: "50%" }}>
              <h1 className="mb-2 fw-bold fst-6" style={{ fontSize: "3em" }}>
                Unleash the <span className="text-primary">Power of AI </span>
                with enhanced templates
              </h1>
              <p style={{ fontSize: "1.5em" }}>
                Search, use, and share amazing templates created by the
                community of developers.
              </p>
            </div>
            <div
              className="input-group d-flex justify-content-center mt-4"
              style={{ width: "50%" }}
            >
              <div className="" style={{ width: "50%" }}>
                <div
                  className="input-group border"
                  style={{ height: "101%", width: "100%" }}
                >
                  <span
                    className="input-group-text bg-white border-0"
                    id="basic-addon1"
                  >
                    <CiSearch />
                  </span>
                  <input
                    type="text"
                    className="form-control border-0 w-50 shadow-none bg-white"
                    placeholder="Whar are you looking for ?"
                    aria-label="job"
                    aria-describedby="basic-addon1"
                    style={{ outline: "none" }}
                  />
                </div>
              </div>
              <Filters addFilter={addFilter} removeFilter={removeFilter} />
              <button className="btn btn-primary" type="button" style={{}}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Content /> */}
    </div>
  );
};

export default Search;
