import React from "react";
import BottomNav from "./BottomNav";

import "../css/Fixtures.scss";

const Fixtures = () => {
  return (
    <>
      <div className="fixtures">
        <div className="premierleague">
          <iframe
            className="iframeContainer"
            frameborder="0"
            scrolling="no"
            src="https://www.fctables.com/england/premier-league/iframe/?type=league-scores&lang_id=2&country=67&template=10&team=180231&timezone=Europe/Berlin&time=24&font=Arial&fs=13&bg=FFFFFF&fc=333333&logo=1&tlink=0&scoreb=f4454f&scorefc=FFFFFF&sgdcoreb=8f8d8d&sgdcorefc=FFFFFF&sh=1&hfb=1&hbc=5db47f&hfc=FFFFFF"
          ></iframe>
        </div>
        <div className="championship">
          <iframe
            className="iframeContainer"
            frameborder="0"
            scrolling="no"
            src="https://www.fctables.com/england/championship/iframe/?type=league-scores&lang_id=2&country=67&template=11&team=180231&timezone=Europe/Berlin&time=24&font=Arial&fs=13&bg=FFFFFF&fc=333333&logo=1&tlink=0&scoreb=f4454f&scorefc=FFFFFF&sgdcoreb=8f8d8d&sgdcorefc=FFFFFF&sh=1&hfb=1&hbc=5db47f&hfc=FFFFFF"
          ></iframe>
        </div>
        {/* <iframe frameborder="0"  scrolling="no" width="700" height="700" src="https://www.fctables.com/england/championship/iframe/?type=league-scores&lang_id=2&country=67&template=11&team=&timezone=Europe/Berlin&time=24&po=1&ma=1&wi=1&dr=1&los=1&gf=0&ga=0&gd=1&pts=1&ng=0&form=0&width=700&height=700&font=Arial&fs=13&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=0&ths=1&thb=1&thba=FFFFFF&thc=000000&bc=dddddd&hob=f5f5f5&hobc=ebe7e7&lc=333333&sh=1&hfb=1&hbc=32b67a&hfc=FFFFFF"></iframe><div style="text-align:center;"></div><a href="https://www.fctables.com/england/championship/" rel="nofollow">FcTables.com</a> */}
      </div>
      <BottomNav />
    </>
  );
};

export default Fixtures;
