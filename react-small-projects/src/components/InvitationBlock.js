import React, { useEffect, useState } from "react";
import "../sass/invitation-list.scss";
import InvitationList from "./InvitationList";
import InvitationSuccess from "./InvitationSuccess";

export default function InvitationBlock() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Wrong with users");
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };
  const onClickSendInvites = (e) => {
    setSuccess(e);
  };

  return (
    <div className="invitation-block">
      {success ? (
        <InvitationSuccess
          count={invites.length}
          onClickSendInvites={onClickSendInvites}
        />
      ) : (
        <InvitationList
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          users={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
}
