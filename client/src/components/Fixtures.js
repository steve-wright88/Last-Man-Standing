import React from "react";
import BottomNav from "./BottomNav";

import "../css/Fixtures.scss";

const Fixtures = () => {
  return (
    <>
      <div className="fixtures">
        <iframe
          frameborder="0"
          scrolling="no"
          // width="100%"
          // height="100vh"
          src="https://www.fctables.com/england/premier-league/iframe/?type=league-scores&lang_id=2&country=67&template=10&team=180231&timezone=Europe/Berlin&time=24&width=300&height=440&font=Verdana&fs=12&lh=22&bg=FFFFFF&fc=333333&logo=1&tlink=1&scoreb=f4454f&scorefc=FFFFFF&sgdcoreb=8f8d8d&sgdcorefc=FFFFFF&sh=1&hfb=1&hbc=3bafda&hfc=FFFFFF"
        ></iframe>
      </div>
      <BottomNav />
    </>
  );
};

export default Fixtures;
