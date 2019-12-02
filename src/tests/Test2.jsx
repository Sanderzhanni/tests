import React from "react";
import {TiHeartFullOutline} from "react-icons/ti";

const Test2 = () => {
  let likes = 0;
  return (
    <div>
      <div className={"description"}>
        Ülesanne 2:
        <p>
          Rakendus peab arvet pidama mitu korda on südame ikooni klikitud ning vastava numbri <code>likes:</code> järel kuvama.
        </p>
      </div>

      <div style={{display:"flex", alignItems: "center"}}>
        <div id="likes">
          Likes: 0
        </div>
        <TiHeartFullOutline onClick={() => {likes++;document.getElementById("likes").innerHTML = "Likes: " + likes;}}/>
        <div>Click me</div>
      </div>
    </div>
  );
};

export default Test2;
