import styled from "styled-components";
import { IUserInfo } from "../../App";
export default function AdditionalInfo({ userInfo }: { userInfo: IUserInfo }) {
  return (
    <AdditionalInfoDiv>
      <div>
        <img src="/assets/icon-location.svg" alt="icon-location" />
        <p>{userInfo.location ? userInfo.location : "Not Available"}</p>
      </div>
      <div>
        <img src="/assets/icon-website.svg" alt="icon-website" />
        {userInfo.html_url ? (
          <a href={userInfo.html_url}>{userInfo.html_url}</a>
        ) : (
          <p>Not Available</p>
        )}
      </div>

      <div>
        <img src="/assets/icon-twitter.svg" alt="icon-twitter" />
        <p>
          {userInfo.twitter_username
            ? userInfo.twitter_username
            : "Not Available"}
        </p>
      </div>
      <div>
        <img src="/assets/icon-company.svg" alt="icon-company" />
        <p>{userInfo.company ? userInfo.company : "Not Available"}</p>
      </div>
    </AdditionalInfoDiv>
  );
}
const AdditionalInfoDiv = styled.div`
  display: grid;

  min-width: 28rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    width: 49.3rem;
  }

  & > div {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    a {
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    & > p,
    a {
      font-size: 1.3rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      cursor: pointer;
      margin: 0.5rem;

      @media screen and (min-width: 768px) {
        font-size: 15px;
      }
    }
    & > img {
      width: 1.3rem;
      height: 2rem;
    }
  }
`;
