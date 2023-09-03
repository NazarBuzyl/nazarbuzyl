import React from "react";
import InvitationUser from "./InvitationUser";
import UserSkeleton from "./UserSkeleton";

export default function InvitationList({
  users,
  isLoading,
  searchValue,
  onChangeSearchValue,
  invites,
  onClickInvite,
  onClickSendInvites,
}) {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          type="text"
          placeholder="Find user..."
          value={searchValue}
          onChange={onChangeSearchValue}
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <UserSkeleton />
          <UserSkeleton />
          <UserSkeleton />
        </div>
      ) : (
        <ul className="users-list">
          {users
            .filter((obj) => {
              return (
                searchValue
                  .toLowerCase()
                  .includes(obj.last_name.toLowerCase()) ||
                searchValue
                  .toLowerCase()
                  .includes(obj.first_name.toLowerCase()) ||
                obj.email.includes(searchValue.toLowerCase())
              );
            })
            .map((user) => (
              <InvitationUser
                key={user.id}
                user={user}
                onClickInvite={onClickInvite}
                isInvited={invites.includes(user.id)}
              />
            ))}
        </ul>
      )}
      {invites.length > 0 && (
        <button
          onClick={() => onClickSendInvites(true)}
          className="send-invite-btn"
        >
          Send an invitation
        </button>
      )}
    </>
  );
}
