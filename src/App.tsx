import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { GlobalStyles } from "./globalStyles/GlobalStyles";
import SearchBar from "./components/SearchBar";
import UserInfoMain from "./components/userInfo/UserInfoMain";

export interface IUserInfo {
  name: string;
  login: string;
  avatar_url: string;
  created_at: "";
  public_repos: "";
  followers: "";
  html_url: "";
  location: "";
  following: "";
  company: "";
  twitter_username: "";
}
function App() {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    name: "",
    login: "",
    avatar_url: "",
    created_at: "",
    followers: "",
    public_repos: "",
    html_url: "",
    location: "",
    following: "",
    company: "",
    twitter_username: "",
  });
  const [lightMode, setLightMode] = useState(false);
  const [inappropriateUser, setInappropriateUser] = useState(false);
  const [inputValue, setInputValue] = useState<string>("marriamdd");
  console.log(inappropriateUser);
  useEffect(() => {
    GetUserInfo();
  }, []);
  async function GetUserInfo() {
    try {
      const response = await fetch(
        `https://api.github.com/users/${inputValue}`
      );
      if (response.ok) {
        const responseData = await response.json();
        setInappropriateUser(false);
        setUserInfo({
          name: responseData.name,
          login: responseData.login,
          avatar_url: responseData.avatar_url,
          created_at: responseData.created_at,
          public_repos: responseData.public_repos,
          followers: responseData.followers,
          html_url: responseData.html_url,
          location: responseData.location,
          following: responseData.following,
          company: responseData.company,
          twitter_username: responseData.twitter_username,
        });
      } else {
        setInappropriateUser(true);
        throw new Error("No results");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <GlobalStyles lightMode={lightMode} />
      <Header setLightMode={setLightMode} lightMode={lightMode} />
      <SearchBar
        setInappropriateUser={setInappropriateUser}
        setInputValue={setInputValue}
        inputValue={inputValue}
        GetUserInfo={GetUserInfo}
        lightMode={lightMode}
        inappropriateUser={inappropriateUser}
      />
      <UserInfoMain userInfo={userInfo} lightMode={lightMode} />
    </>
  );
}

export default App;
