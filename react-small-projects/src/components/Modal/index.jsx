import React, { useState } from "react";
import Modal from "./Modal";
import "../../sass/modal.scss";

export default function ModalWindow() {
  const [modal, setModal] = useState(false);

  return (
    <div className="project-section">
      <button className="open-modal-btn" onClick={() => setModal(true)}>
        ✨ Open modal window
      </button>
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}
