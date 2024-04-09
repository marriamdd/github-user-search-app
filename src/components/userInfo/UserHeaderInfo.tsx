import styled from "styled-components";

export default function UserHeaderInfo({ userInfo }) {
  return (
    <UserInfoHeaderContainer>
      <img src={userInfo.avatar_url} alt="" />
      <div>
        <h2>{userInfo.name}</h2>
        <span>@{userInfo.login}</span>
        <p>Joined {userInfo.created_at} </p>
      </div>
    </UserInfoHeaderContainer>
  );
}

const UserInfoHeaderContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  & > img {
    width: 7rem;
    height: 7rem;
    flex-shrink: 0;
    border-radius: 7rem;
  }
  & > div {
    & > h2 {
      font-size: 16px;
      font-weight: 700;
    }

    & > span {
      color: #0079ff;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    & > p {
      font-size: 13px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }
`;
