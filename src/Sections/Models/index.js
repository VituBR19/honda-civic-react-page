import React from "react";
import "./styles.css";

import modelsData from "./modelData";

import { useSpring, animated } from 'react-spring'

function Models() {
  const modelsAniamtion = useSpring({
    from: { opacity: 0 },
    to: {  opacity: 1 },
    delay: 1000,
    config: { duration: 1000 },
  });

  return (
    <div className="models-container">
      {modelsData.map((model, index) => (
        <animated.div style={ modelsAniamtion } className="model-card" key={ model.name }>
          <img src={model.img} loading="lazy" alt={`Civc ${model.name}`} />
          <h3>{model.name}</h3>
          <ul>
            <li>{model.text1}</li>
            <li>{model.text2}</li>
            <li>{model.text3}</li>
            <li>{model.text4}</li>
            <li>{model.text5}</li>
            {model.text6 && <li>{model.text6}</li>}
          </ul>
        </animated.div>
      ))}
    </div>
  );
}

export default Models;
