import styled from "styled-components";
export default function Header() {
  return (
    <HeaderContainer>
      <h1>devfinder</h1>
      <div>
        <span>LIGHT</span>
        <button></button>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 32.7rem;
  color: #fff;
  font-weight: 700;
  & > h1 {
    font-size: 2.6rem;
  }
  & > div {
    display: flex;
    gap: 1.6rem;
    align-items: center;
    & > span {
      text-align: right;
      font-size: 1.5rem;
      letter-spacing: 2.5px;
    }
    & > button {
      background-image: url(/assets/icon-sun.svg);
      padding: 10px 10px;
      background-color: transparent;
      background-repeat: no-repeat;
      border: none;
      position: 10px;
    }
  }
`;
