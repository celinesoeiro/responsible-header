import styled from "styled-components";

const primaryColor = "#5e747f";
const secondaryColor = "#e5c1bd";
const whiteColor = "#FFF";
const tertiaryColor = "#d2d0ba";
const quartenaryColor = "#7B9E87";

const containerPadding = "10px";

export const Container = styled.div`
  background-color: ${primaryColor};
`;

export const NavBar = styled.nav`
  height: 5rem;
  background-color: ${primaryColor};
  position: fixed;
  width: 100%;
  top: 0;
  border-bottom: 1px solid ${tertiaryColor};
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: ${containerPadding};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: large;
  font-weight: bold;
  color: ${tertiaryColor};
`;

export const MenuContainer = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
`;

export const ButtonMenu = styled.button`
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: none;
  border-radius: 20px;
  background-color: ${secondaryColor};
  position: relative;

  cursor: pointer;

  color: ${primaryColor};
  font-size: 16px;
  font-weight: bold;

  gap: 5px;

  :hover {
    border-radius: 20px 20px 0 0;
    color: ${secondaryColor};
    background-color: ${quartenaryColor};
    width: 100%;

    > svg {
      color: ${secondaryColor};
    }
  }
`;

export const HiddenMenu = styled.div`
  display: none;
  top: ${containerPadding};
  z-index: 10;
  position: absolute;
  max-width: 400px;
  width: 100%;
  // We need to discount the padding top and bottom in order to keep the button height
  height: calc(100% - 2 * ${containerPadding});

  ${ButtonMenu} {
    background-color: ${quartenaryColor};
    border-radius: 20px 20px 0 0;
    color: ${secondaryColor};
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;

  :hover {
    ${HiddenMenu} {
      display: block;
    }
  }

  &:last-child {
    ${HiddenMenu} {
      right: ${containerPadding};
    }
  }
`;

export const MenuItem = styled.div`
  width: 100%;
  background-color: ${quartenaryColor};
  border-radius: 0 0 20px 20px;
  padding: 5px 10px 10px 10px;
  gap: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
  grid-template-rows: 3fr;
`;

export const ItemGrid = styled.div`
  gap: 5px;
`;

export const Item = styled.div`
  width: 100%;
  background-color: ${whiteColor};
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;

  color: ${primaryColor};

  :hover {
    filter: brightness(0.9);
  }
`;
