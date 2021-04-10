import React from "react";

const IconTitleWidget = ({ path, title, isShowTitle = true }) => {
  return (
    <div id="iconTitle">
      <div className="row">
        <div id="icon" style={{ textAlign: "center", paddingBottom: "30px" }}>
          <img src={path} alt="not found" height="60" width="60" />
        </div>
        {isShowTitle && (
          <div id="iconTitle" style={{ color: "white", textAlign: "center", fontWeight:700}}>
            {title}
          </div>
        )}
      </div>
    </div>
  );
};

export default IconTitleWidget;
