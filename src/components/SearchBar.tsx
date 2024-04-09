import styled from "styled-components";
import { ChangeEvent, useRef } from "react";

export default function SearchBar({
  setInputValue,
  inputValue,
  GetUserInfo,
  lightMode,
  inappropriateUser,
  setInappropriateUser,
}: {
  setInputValue: (value: string) => void;
  inputValue: string;
  GetUserInfo: () => void;
  lightMode: boolean;
  inappropriateUser: boolean;
  setInappropriateUser: (value: boolean) => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleVAlueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (buttonRef.current) {
      buttonRef.current.style.background = "#60ABFF";
    }
  };
  const handleSearchButton = () => {
    GetUserInfo();
    if (buttonRef.current) {
      buttonRef.current.style.background = "#0079FF";
    }
  };

  const handleInputClick = () => {
    setInputValue("");
    setInappropriateUser(false);
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
      {inappropriateUser && <h3>No results</h3>}

      <button ref={buttonRef} onClick={handleSearchButton}>
        Search
      </button>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div<{ lightMode: boolean }>`
  min-width: 32.7rem;
  border-radius: 1.5rem;
  padding-inline: 1rem;
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
    cursor: pointer;
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
      /* width: 45.2rem; */
      font-size: 1.8rem;
    }
  }
  & > h3 {
    color: #f74646;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: normal;
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  & > button {
    border-radius: 1rem;
    background: #0079ff;
    width: 8.4rem;
    height: 4.6rem;
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
    border: none;
    @media screen and (min-width: 768px) {
      width: 10.6rem;
      height: 5rem;
    }
  }
`;
