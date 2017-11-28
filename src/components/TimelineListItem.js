import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.svg";
import ReactPlayer from "react-player";

const AvatarAndContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 800px;
  margin: auto;
  & > * {
    /* min-height: 165px; */
  }
`;

const ItemBubble = styled.div`
  background-color: #eee;
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

const Image = styled.div`
  width: 100%;
  height: 350px;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
`;

const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
  border: medium hidden;
  border-radius: 50%;
`;

export default function TimelineListItem({
  timestamp,
  content: { type = "", data = "" },
  org: { name: orgName = "", logoUrl: orgLogoURL = "" },
  user: { name: userName = "", avatar = "" },
  showUser
}) {
  const date = new Date(timestamp);

  return (
    <div>
      {timestamp && <h4>{date.toLocaleString()}</h4>}
      <AvatarAndContent>
        <Avatar>
          {showUser && (
            <div>
              <AvatarImage src={avatar ? avatar : profile} />
              <h4>{userName}</h4>
            </div>
          )}
        </Avatar>
        <ItemBubble>
          <BubbleBody>
            {type === "text" && <p>{data}</p>}
            {type === "audio" && (
              <ReactPlayer url={data} height="32px" controls={true} />
            )}
            {type === "video" && <ReactPlayer url={data} controls={true} />}
            {type === "image" && <Image url={data} />}
          </BubbleBody>
        </ItemBubble>
      </AvatarAndContent>
    </div>
  );
}
