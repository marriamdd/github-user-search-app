import styled from "styled-components";
export default function AdditionalInfo({ userInfo }) {
  return (
    <AdditionalInfoDiv>
      <div>
        <img src="/assets/icon-location.svg" alt="icon-location" />
        <p>{userInfo.location ? userInfo.location : "Not Available"}</p>
      </div>
      <div>
        <img src="/assets/icon-website.svg" alt="icon-website" />
        <p>{userInfo.html_url ? userInfo.html_url : "Not Available"}</p>
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 28rem;

  & > div {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    & > p {
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    & > img {
      width: 13.753px;
      height: 2rem;
    }
  }
`;
