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
  min-width: 27.9rem;
  min-height: 8.5rem;
  border-radius: 1rem;
  background: ${(props) => (!props.lightMode ? "#141d2f" : " #F6F8FF;")};
  display: flex;
  justify-content: space-around;

  margin-block: 2rem;
  @media screen and (min-width: 768px) {
    width: 49.3rem;
  }
  & > div {
    display: flex;
    flex-direction: column;

    & > p {
      text-align: center;
      cursor: pointer;
      font-size: 1.1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      @media screen and (min-width: 768px) {
        font-size: 1.3rem;
      }
    }
    & > span {
      color: ${(props) => (!props.lightMode ? "#FFF" : "#2B3442")};
      text-align: center;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
      @media screen and (min-width: 768px) {
        font-size: 2.2rem;
      }
    }
  }
`;
