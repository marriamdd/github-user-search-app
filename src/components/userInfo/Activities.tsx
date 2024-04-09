import styled from "styled-components";
export default function Activities({ userInfo }) {
  return (
    <ActivitiesContainer>
      <div>
        <p>Repos</p>
        <span>{userInfo.public_repos}</span>
      </div>
      <div>
        <p>Followers</p>
        <span>{userInfo.followers}</span>
      </div>
      <div>
        <p>Following</p>
        <span>{userInfo.following}</span>
      </div>
    </ActivitiesContainer>
  );
}

const ActivitiesContainer = styled.div`
  width: 279px;
  height: 85px;
  border-radius: 10px;
  background: #141d2f;
  display: flex;
  justify-content: space-around;

  margin-block: 2rem;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > p {
      color: #fff;
      text-align: center;

      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    & > span {
      color: #fff;
      text-align: center;

      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }
  }
`;
