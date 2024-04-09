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
`;
