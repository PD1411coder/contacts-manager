import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["CSV"];

function Importer() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="importer-container">
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </div>
  );
}

export default Importer;
