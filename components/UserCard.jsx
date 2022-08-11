import React from "react";
import UserCardDetail from "./UserCardDetail";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";
import { useState } from "react";

export default function UserCard(props) {
  const [isClick, SetIsClick] = useState(true);
  return (
    <div className="border-bottom" onClick={() => SetIsClick(!isClick)}>
      <div className="d-flex align-items-center p-3">
        <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name} </span>
        {isClick ? <IconChevronDown /> : <IconChevronUp />}
      </div>
      {isClick ? null : (
        <UserCardDetail email={props.email} address={props.address} />
      )}
    </div>
  );
}
