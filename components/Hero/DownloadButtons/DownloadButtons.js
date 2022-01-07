import React from "react";
import { Icon } from "@iconify/react";

const DownloadButtons = () => {
  return (
    <div className="downloads">
      <div>
        <Icon icon="bi:windows" />
      </div>
      <div>
        <Icon icon="ant-design:apple-filled" />
      </div>
      <div>
        <Icon icon="bx:bxl-play-store" />
      </div>
      <div>
        <Icon icon="bi:playstation" />
      </div>
    </div>
  );
};

export default DownloadButtons;
