import React from "react";
import { useParams } from "react-router-dom";

export default function Projectpage() {
  const params = useParams();
  console.log(params.id);
  const id = params.id;

  return (
    <div>
      <h2>DineRich JuiceBar</h2>
      <p>Stack:</p>
      <p>HTML, CSS</p>
      <button>LIVE PREVIEW</button>
      <div>
        <img src="" alt="" />
      </div>
      <h3>Description</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ad debitis
        labore voluptates itaque amet inventore, rem maiores
      </p>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
