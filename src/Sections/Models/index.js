import React from "react";
import "./styles.css";

import modelsData from "./modelData";
function Models() {
  return (
    <div className="models-container">
      {modelsData.map((model) => (
        <div className="model-card" key={ model.name }>
          <img src={model.img} alt={`Civc ${model.name}`} />
          <h3>{model.name}</h3>
          <ul>
            <li>{model.text1}</li>
            <li>{model.text2}</li>
            <li>{model.text3}</li>
            <li>{model.text4}</li>
            <li>{model.text5}</li>
            {model.text6 && <li>{model.text6}</li>}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Models;
