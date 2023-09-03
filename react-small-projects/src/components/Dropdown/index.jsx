import React from "react";

import "../../sass/dropdown.scss";
import DropdownMenu from "./DropdownMenu";

export default function Dropdown() {
  const [changeLight, setChangeLight] = React.useState(true);
  const onChangeLight = () => {
    setChangeLight(!changeLight);
  };
  return (
    <>
      <div
        className={
          changeLight ? "dropdown-component dark" : "dropdown-component light"
        }
      >
        <div onClick={onChangeLight} class="dark-light"></div>

        <div class="sec-center">
          <DropdownMenu />
        </div>
      </div>
    </>
  );
}
