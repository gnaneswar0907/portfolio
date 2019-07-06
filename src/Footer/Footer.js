import React from "react";

import "./Footer.css";
import { Icon } from "semantic-ui-react";

export const IconList = () => {
  return (
    <div className="IconList">
      <Icon
        link
        size="big"
        onClick={() =>
          window.open("https://www.linkedin.com/in/gnaneswarg/", "_blank")
        }
        name="linkedin"
      />
      <Icon
        link
        size="big"
        onClick={() =>
          window.open("https://github.com/gnaneswar0907", "_blank")
        }
        name="github"
      />
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="ExternalLinks">
        <IconList />
      </div>
      <p className="Copyright"> {"\u00A9"}2019 Gnaneswar Gandu</p>
    </div>
  );
};
