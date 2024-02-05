import NavListA from "./NavListA";
import logo from "../Header/images/logo.png";
import { Logo } from "./Header.style";

function Header() {
  return (
    <header style={header}>
      <nav style={styles}>
        <ul style={styles}>
          <li style={litagMargin}>
            <NavListA url="http://google.com" title="Services" />
          </li>
          <li style={litagMargin}>
            <NavListA url="http://google.com" title="Projects" />
          </li>
          <li>
            <NavListA url="http://google.com" title="about" />
          </li>
        </ul>
        <Logo src={logo} alt="logo" />

        <div style={ulListConainter}>
          <div style={loginLogo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 13.8438L9.13609 13.8439L9.43769 13.8447C11.9993 13.858 18 14.0845 18 17.935C18 21.5049 13.0716 21.982 9.23812 22L8.56231 21.9997C6.00075 21.9864 0 21.76 0 17.9105C0 14.2651 5.13584 13.8438 9 13.8438ZM9 15.511C4.1658 15.511 1.71385 16.319 1.71385 17.9105C1.71385 19.5176 4.1658 20.3334 9 20.3334C13.8342 20.3334 16.2861 19.5254 16.2861 17.935C16.2861 16.3256 13.8342 15.511 9 15.511ZM9 0C12.3511 0 15.0762 2.65185 15.0762 5.91053C15.0762 9.16921 12.3511 11.8211 9 11.8211H8.96458C7.34328 11.8155 5.82366 11.1964 4.68452 10.0806C3.54424 8.9636 2.91926 7.48097 2.92493 5.9072C2.92493 2.65185 5.64999 0 9 0ZM9 1.66713C6.59604 1.66713 4.63879 3.57099 4.63879 5.91053C4.63425 7.04307 5.08214 8.10447 5.89907 8.9058C6.71715 9.70603 7.80716 10.1495 8.96801 10.1539L9 10.9775V10.1539C11.4051 10.1539 13.3623 8.25007 13.3623 5.91053C13.3623 3.57099 11.4051 1.66713 9 1.66713Z"
                fill="white"
                fill-opacity="0.9"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="29"
              viewBox="0 0 50 29"
              fill="none"
            >
              <path
                d="M2 2H48H2ZM2 14.5H48H2ZM27.875 27H48H27.875Z"
                fill="white"
              />
              <path
                d="M27.875 27H48M2 2H48H2ZM2 14.5H48H2Z"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

const styles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const loginLogo = {
  display: "flex",
  width: 50,
  height: 50,
  padding: 10,
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  flexShrink: 0,
  borderRadius: 50,
  background: "gray",
  marginRight: 32,
};

const ulListConainter = {
  display: "flex",
  alignItems: "center",
};

const litagMargin = {
  marginRight: 50,
};

const header = {
  marginLeft: "10%",
  marginRight: "10%",
};
