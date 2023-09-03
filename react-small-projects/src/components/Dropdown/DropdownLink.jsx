import React from "react";

export default function DropdownLink({ name = "Dropdown Link", url = "#" }) {
  return (
    <a href={url}>
      {name} <i class="uil uil-arrow-right"></i>
    </a>
  );
}
