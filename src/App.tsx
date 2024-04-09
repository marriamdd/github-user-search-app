import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { GlobalStyles } from "./globalStyles/GlobalStyles";
import SearchBar from "./components/SearchBar";
import UserInfoMain from "./components/userInfo/UserInfoMain";

function App() {
  interface IUserInfo {
    name: string;
    login: string;
    avatar_url: string;
    created_at: "";
  }
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    name: "",
    login: "",
    avatar_url: "",
    created_at: "",
  });

  console.log(userInfo);
  useEffect(() => {
    GetUserInfo();
  }, []);
  async function GetUserInfo() {
    try {
      const response = await fetch("https://api.github.com/users/marriamdd");
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setUserInfo({
          name: responseData.name,
          login: responseData.login,
          avatar_url: responseData.avatar_url,
          created_at: responseData.created_at,
        });
      } else {
        throw new Error("response not ok");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <GlobalStyles />
      <Header />
      <SearchBar />
      <UserInfoMain userInfo={userInfo} />
    </>
  );
}

export default App;
