"use client";
import { Image } from "@chakra-ui/react";
import { css } from "@emotion/css";
import React, { ReactNode } from "react";

const navbarStyles = css`
  background-color: #405654;
  border-bottom: 1px solid #e1e4e8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Navbar: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className={navbarStyles}>
      <Image src="img/dagobah.png" alt="dagobah" w={200} />
      {children}
    </div>
  );
};

export default Navbar;
