import React from "react";
import DropdownLink from "./DropdownLink";

export default function DropduwnSub() {
  const [dropdownSub, setDropdownSub] = React.useState(false);

  const onChangeDropdown = () => {
    setDropdownSub(!dropdownSub);
  };
  return (
    <>
      <div
        onClick={onChangeDropdown}
        class={dropdownSub ? "for-dropdown-sub active" : "for-dropdown-sub"}
      >
        Dropdown Sub <i class="uil uil-plus"></i>
      </div>
      <div
        class={
          dropdownSub ? "section-dropdown-sub active" : "section-dropdown-sub"
        }
      >
        <DropdownLink />
        <DropdownLink />
      </div>
    </>
  );
}
