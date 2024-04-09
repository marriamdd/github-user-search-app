import styled from "styled-components";

export default function SearchBar() {
  return (
    <SearchBarContainer>
      <label htmlFor="SearchBarInput"></label>
      <input
        id="SearchBarInput"
        name="SearchBarInput"
        type="text"
        placeholder="Search GitHub username…"
      />
      <button>Search</button>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  width: 32.7rem;
  border-radius: 15px;
  background: #1e2a47;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 2rem 1rem;
  gap: 0.5rem;
  & > label {
    background-image: url(/assets/icon-search.svg);
    padding: 10px 10px;
    background-repeat: no-repeat;
    background-size: 20px;
  }
  & > input {
    background-color: transparent;
    border: none;
    font-size: 13px;
    font-weight: 400;
    line-height: 25px;
    width: 18.2rem;
    color: #fff;
    &::placeholder {
      color: white;
    }
  }
  & > button {
    border-radius: 10px;
    background: #0079ff;
    width: 84px;
    height: 46px;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    border: none;
  }
`;
