import Activities from "./Activities";
import AdditionalInfo from "./AdditionalInfo";
import UserHeaderInfo from "./UserHeaderInfo";
import styled from "styled-components";
import { IUserInfo } from "../../App";
export default function UserInfoMain({
  userInfo,
  lightMode,
}: {
  userInfo: IUserInfo;
  lightMode: boolean;
}) {
  return (
    <UserInfoMainContainer lightMode={lightMode}>
      <UserHeaderInfo userInfo={userInfo} />
      <div>
        <p>
          Lorem ipsum dolor sit amen, consectetuer advising edit. Donee odiv.
          Queue valuta matts eros.
        </p>
      </div>

      <Activities userInfo={userInfo} lightMode={lightMode} />
      <AdditionalInfo userInfo={userInfo} />
    </UserInfoMainContainer>
  );
}

const UserInfoMainContainer = styled.div<{ lightMode: boolean }>`
  border-radius: 1.5rem;
  background: ${(props) => (!props.lightMode ? " #1e2a47" : "#FEFEFE;")};
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 57.3rem;
  }
  & > div {
    padding-inline: 2rem;
  }
  & > div p {
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2.5rem;
    @media screen and (min-width: 768pc) {
      font-size: 1.5rem;
    }
  }
`;
