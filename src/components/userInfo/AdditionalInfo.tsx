export default function AdditionalInfo({ userInfo }) {
  return (
    <div>
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
    </div>
  );
}
