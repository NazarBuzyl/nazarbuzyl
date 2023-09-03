import React from "react";
import DropdownLink from "./DropdownLink";
import DropduwnSub from "./DropdownSub";

export default function DropdownMenu() {
  return (
    <>
      <input class="dropdown" type="checkbox" id="dropdown" name="dropdown" />
      <label class="for-dropdown" for="dropdown">
        Dropdown Menu <i class="uil uil-arrow-down"></i>
      </label>
      <div class="section-dropdown">
        <DropdownLink />

        <DropduwnSub />

        <DropdownLink />
        <DropdownLink />
        <DropduwnSub />
      </div>
    </>
  );
}
