import styled from "styled-components";
import { IUserInfo } from "../../App";
import dateFormat from "dateformat";
export default function UserHeaderInfo({ userInfo }: { userInfo: IUserInfo }) {
  return (
    <UserInfoHeaderContainer>
      <img src={userInfo.avatar_url} alt="" />
      <div>
        <h2>{userInfo.name}</h2>
        <span>@{userInfo.login}</span>
        <p>Joined {dateFormat(userInfo.created_at, "mediumDate")}</p>
      </div>
    </UserInfoHeaderContainer>
  );
}

const UserInfoHeaderContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 7rem;
  }

  & > img {
    width: 7rem;
    height: 7rem;
    flex-shrink: 0;
    border-radius: 7rem;
    @media screen and (min-width: 768px) {
      width: 117px;
      height: 117px;
    }
  }
  & > div {
    & > h2 {
      font-size: 16px;
      font-weight: 700;
      @media screen and (min-width: 768px) {
        font-size: 26px;
      }
    }

    & > span {
      color: #0079ff;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      @media screen and (min-width: 768px) {
        font-size: 16px;
      }
    }
    & > p {
      font-size: 13px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      @media screen and (min-width: 768px) {
        font-size: 15px;
      }
    }
  }
`;
