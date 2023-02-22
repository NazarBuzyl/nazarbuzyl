import React from "react";

export default function InvitationSuccess({ count, onClickSendInvites }) {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>An invitation has been sent to all {count} users.</p>
      <button onClick={()=>onClickSendInvites(false)} className="send-invite-btn">Back</button>
    </div>
  );
}
