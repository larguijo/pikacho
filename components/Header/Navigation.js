import styled from "styled-components";
import Link from "next/link";
import { Restaurant, House, DirectionsBus, Pets } from "@styled-icons/material";

const NavBar = styled.nav`
  float: right;
  list-style: none;
  margin-top: 15px;
  margin-right: 20px;

  li {
    display: inline-block;
    margin-left: 40px;
  }

  li a:visited,
  li a:link {
    color: #ffffff;
  }

  li a:hover {
    font-size: 110%;
    color: #29b6f6;
  }
`;

function Navigation() {
  return (
    <NavBar>
      <ul>
        <li>
          <Link href="#" alt="Restaurant">
            <a>
              <Restaurant size="48" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#" alt="Cabins">
            <a>
              <House size="48" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#" alt="Transportation">
            <a>
              <DirectionsBus size="48" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#" alt="Pet Friendly">
            <a>
              <Pets size="48" />
            </a>
          </Link>
        </li>
      </ul>
    </NavBar>
  );
}

export default Navigation;
