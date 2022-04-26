import React from "react";
import { Nav, NavWrapper } from "./style";
import Logo from "../logo/index";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  return (
    <Nav>
      <NavWrapper>
        <Logo />
        <AiOutlineMenu size="25" />
      </NavWrapper>
    </Nav>
  );
}
