import styled from "styled-components";
export default function Header({ setLightMode, lightMode }) {
  const handleModeToggle = () => {
    setLightMode(!lightMode);
  };

  return (
    <HeaderContainer lightMode={lightMode}>
      <h1>devfinder</h1>
      <div>
        {!lightMode ? (
          <label htmlFor="modeButton">LIGHT</label>
        ) : (
          <label htmlFor="modeButton">DARK</label>
        )}
        <button id="modeButton" onClick={handleModeToggle}></button>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div<{ lightMode: boolean }>`
  display: flex;
  justify-content: space-between;
  min-width: 32.7rem;

  font-weight: 700;
  & > h1 {
    font-size: 2.6rem;
    color: ${(props) => (!props.lightMode ? "#FFF" : "#222731")};
  }
  & > div {
    display: flex;
    gap: 1.6rem;
    align-items: center;
    & > label {
      text-align: right;
      font-size: 1.5rem;
      letter-spacing: 2.5px;
      cursor: pointer;
    }
    & > button {
      background-image: ${(props) =>
        !props.lightMode
          ? "url(/assets/icon-sun.svg)"
          : "url(/assets/icon-moon.svg)"};
      padding: 1rem 1rem;
      background-color: transparent;
      background-repeat: no-repeat;
      border: none;
      position: 1rem;
      cursor: pointer;
    }
  }
`;
