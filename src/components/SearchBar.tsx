import styled from "styled-components";
import { ChangeEvent } from "react";
import { IUserInfo } from "../App";

export default function SearchBar({
  setInputValue,
  inputValue,
  GetUserInfo,
  lightMode,
}: {
  setInputValue: IUserInfo;
  inputValue: string;
  GetUserInfo: string;
  lightMode: boolean;
}) {
  const handleVAlueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleSearchButton = () => {
    GetUserInfo();
  };

  const handleInputClick = () => {
    setInputValue("");
  };
  return (
    <SearchBarContainer lightMode={lightMode}>
      <div>
        <label htmlFor="SearchBarInput"></label>
        <input
          id="SearchBarInput"
          name="SearchBarInput"
          type="text"
          value={inputValue}
          onChange={handleVAlueChange}
          onClick={handleInputClick}
          placeholder="Search GitHub username…"
        />
      </div>

      <button onClick={handleSearchButton}>Search</button>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div<{ lightMode: boolean }>`
  min-width: 32.7rem;
  border-radius: 1.5rem;
  background: ${(props) => (!props.lightMode ? "#1e2a47" : "white")};
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-block: 2rem 1rem;
  @media screen and (min-width: 768px) {
    padding: 1rem 1rem;
  }
  & > div {
    display: flex;
    align-items: center;
  }
  & > div label {
    background-image: url(/assets/icon-search.svg);
    padding: 1rem 1rem;
    background-repeat: no-repeat;
    background-size: 2rem;
  }
  & > div input {
    background-color: transparent;
    border: none;
    margin-left: 1rem;
    padding-left: 0.5rem;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2.5rem;
    width: 18.2rem;
    @media screen and (min-width: 768px) {
      width: 45.2rem;
      font-size: 1.8rem;
    }
  }
  & > button {
    border-radius: 1rem;
    background: #0079ff;
    width: 8.4rem;
    height: 4.6rem;
    font-size: 1.4rem;
    font-weight: 700;

    border: none;
    @media screen and (min-width: 768px) {
      width: 10.6rem;
      height: 5rem;
    }
  }
`;
