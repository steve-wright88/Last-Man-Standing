import React from "react";
import BottomNav from "./BottomNav";

import "../css/Fixtures.scss";

const Fixtures = () => {
  return (
    <>
      <div className="fixtures">
        <div className="premierleague">
          <iframe
            title="prem"
            className="iframeContainer"
            frameborder="0"
            scrolling="no"
            src="https://www.fctables.com/england/premier-league/iframe/?type=league-scores&lang_id=2&country=67&template=10&team=180231&timezone=Europe/London&time=24&font=Arial&fs=13&bg=FFFFFF&fc=333333&logo=1&tlink=0&scoreb=f4454f&scorefc=FFFFFF&sgdcoreb=8f8d8d&sgdcorefc=FFFFFF&sh=1&hfb=1&hbc=5db47f&hfc=FFFFFF"
          ></iframe>
        </div>
        {/* <div className="championship">
          <iframe
            title="champ"
            className="iframeContainer"
            frameborder="0"
            scrolling="no"
            src="https://www.fctables.com/england/championship/iframe/?type=league-scores&lang_id=2&country=67&template=11&team=180231&timezone=Europe/London&time=24&font=Arial&fs=13&bg=FFFFFF&fc=333333&logo=1&tlink=0&scoreb=f4454f&scorefc=FFFFFF&sgdcoreb=8f8d8d&sgdcorefc=FFFFFF&sh=1&hfb=1&hbc=5db47f&hfc=FFFFFF"
          ></iframe>
        </div> */}
      </div>
      <BottomNav />
    </>
  );
};

export default Fixtures;
