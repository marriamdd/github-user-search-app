import { IUserInfo } from "../../App";
import Activities from "./Activities";
import AdditionalInfo from "./AdditionalInfo";
import UserHeaderInfo from "./UserHeaderInfo";
import styled from "styled-components";

export default function UserInfoMain({ userInfo }) {
  return (
    <UserInfoMainContainer>
      <UserHeaderInfo userInfo={userInfo} />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <Activities userInfo={userInfo} />
      <AdditionalInfo userInfo={userInfo} />
    </UserInfoMainContainer>
  );
}

const UserInfoMainContainer = styled.div`
  height: 517px;
  border-radius: 15px;
  background: #1e2a47;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    line-height: 25px;
  }
`;
