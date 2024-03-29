import styled from "styled-components";

const primaryColor = "#02040F";
const secondaryColor = "#E5DADA";
const whiteColor = "#FFF9FB";
const tertiaryColor = "#002642";
const quartenaryColor = "#2C3D55";

const containerPadding = "1rem";
const headerHeight = "5rem";

export const Container = styled.div`
  background-color: ${primaryColor};
`;

export const NavBar = styled.nav`
  height: ${headerHeight};
  background-color: ${primaryColor};
  position: fixed;
  width: 100%;
  top: 0;
  border-bottom: 1px solid ${tertiaryColor};
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: ${containerPadding};

  @media (max-width: 768px) {
    background-color: ${quartenaryColor};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: large;
  font-weight: bold;
  color: ${secondaryColor};
`;

export const MenuContainer = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const ButtonText = styled.p`
  color: ${primaryColor};
  font-size: 16px;
  font-weight: bold;
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

  @media (max-width: 768px) {
    ${ButtonText} {
      display: none;
    }

    gap: 0;
    justify-content: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 0;

    :hover {
      background-color: ${primaryColor};
      border-radius: 50%;
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
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    color: ${secondaryColor};
  }

  @media (max-width: 768px) {
    ${ButtonMenu} {
      display: none;
    }
    top: ${headerHeight};
    max-width: unset;
    width: 100vw;
    left: 0;
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

  @media (max-width: 768px) {
    &:nth-child(even) {
      display: none;
    }
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const MenuItem = styled.div`
  width: 100%;
  background-color: ${quartenaryColor};
  border-radius: 0 0 20px 20px;
  padding: 5px 10px 10px;
  gap: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
  grid-template-rows: 3fr;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 10px;
  }
`;

export const ItemGrid = styled.div`
  gap: 5px;
`;

export const Item = styled.div`
  width: 100%;
  background-color: ${secondaryColor};
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;

  color: ${primaryColor};

  :hover {
    filter: brightness(0.9);
  }
`;
