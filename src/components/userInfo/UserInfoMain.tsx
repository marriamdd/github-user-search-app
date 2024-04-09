import { IUserInfo } from "../../App";
import Activities from "./Activities";
import AdditionalInfo from "./AdditionalInfo";
import UserHeaderInfo from "./UserHeaderInfo";
import styled from "styled-components";

export default function UserInfoMain({ userInfo, lightMode }) {
  return (
    <UserInfoMainContainer lightMode={lightMode}>
      <UserHeaderInfo userInfo={userInfo} />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <Activities userInfo={userInfo} lightMode={lightMode} />
      <AdditionalInfo userInfo={userInfo} />
    </UserInfoMainContainer>
  );
}

const UserInfoMainContainer = styled.div<{ lightMode: boolean }>`
  border-radius: 15px;
  background: ${(props) => (!props.lightMode ? " #1e2a47" : "#FEFEFE;")};
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    font-size: 13px;
    font-weight: 400;
    line-height: 25px;
  }
`;
