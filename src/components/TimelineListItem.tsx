import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.svg";
import ReactPlayer from "react-player";
import type { TimelinePost } from "../types";

const AvatarAndContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 800px;
  margin: auto;
`;

const ItemBubble = styled.div`
  background-color: #efefef;
  margin: auto;
  border: medium solid #ddd;
  border-radius: 20px;
`;

const BubbleBody = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 500px;
  & > img {
    width: 500px;
    height: auto;
  }
`;

const Avatar = styled.div`
  height: 120px;
  width: 120px;
`;

const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
  border: medium hidden;
  border-radius: 50%;
`;

interface TimelineListItemProps extends TimelinePost {
  showUser: boolean;
}

export default function TimelineListItem({
  Timestamp,
  ContentData,
  ContentType,
  UserId,
  showUser
}: TimelineListItemProps) {
  const date = new Date(Timestamp);

  return (
    <div>
      {Timestamp && <h4>{date.toLocaleString()}</h4>}
      <AvatarAndContent>
        <Avatar>
          {showUser && (
            <div>
              <AvatarImage src={profile} alt={UserId} />
              <h4>{UserId}</h4>
            </div>
          )}
        </Avatar>
        <ItemBubble>
          <BubbleBody>
            {ContentType === "text" && (
              <p>{String(ContentData).replace(/\+/gi, " ")}</p>
            )}
            {ContentType === "url" && (
              <ReactPlayer src={ContentData} height="32px" controls={true} />
            )}
          </BubbleBody>
        </ItemBubble>
      </AvatarAndContent>
    </div>
  );
}
