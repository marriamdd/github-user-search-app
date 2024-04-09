import styled from "styled-components";
export default function Activities({ userInfo, lightMode }) {
  return (
    <ActivitiesContainer lightMode={lightMode}>
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

const ActivitiesContainer = styled.div<{ lightMode: boolean }>`
  width: 279px;
  height: 85px;
  border-radius: 10px;
  background: ${(props) => (!props.lightMode ? "#141d2f" : " #F6F8FF;")};
  display: flex;
  justify-content: space-around;

  margin-block: 2rem;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > p {
      text-align: center;

      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    & > span {
      color: ${(props) => (!props.lightMode ? "#FFF" : "#2B3442")};
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }
  }
`;
