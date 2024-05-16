import React from "react";

const Section = () => {
  return (
    <div className="section">
      <h1>Science Fiction Stories</h1>
      <div className="button">
        <button type="button" class="btn btn-primary">
          New
        </button>
        <button type="button" class="btn btn-warning">
          In Progress
        </button>
        <button type="button" class="btn btn-success">
          Completed
        </button>
        <button type="button" class="btn btn-primary">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Section;
