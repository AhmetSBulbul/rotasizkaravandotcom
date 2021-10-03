import React from "react";

import { WorksFigure } from "../../components/figures";

const WorksPage = () => {
  return (
    <>
      <div className="pageLead">
        <WorksFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>İşlerimiz</h1>
        </div>
      </div>
    </>
  );
};

export default WorksPage;
