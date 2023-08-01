import React from "react";

const Upload = () => {
  return (
    <>
      <div className="uploadDetails">
        <h1>Modelo</h1>
        <input type="file" />
        <input type="number" onWheel={(e) => e.target.blur()} />
      </div>
    </>
  );
};

export default Upload;
