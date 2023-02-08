import { css } from "@emotion/css";
import Button from "./elements/button";
import InfionLogo from "./public/InfionLogo";

export default function Navbar() {
  return (
    <section id="section-navbar" className={styled.root}>
      <div className="nav-item">
        <div className="infion-logo-wrapper">
          <InfionLogo />
        </div>

        <div className="nav-link-wrapper">
          <ul className="nav-link">
            <li className="nav-link-item">
              <a className="link">Home</a>
            </li>
            <li className="nav-link-item">
              <a className="link">Threads</a>
            </li>
            <li className="nav-link-item">
              <a className="link">About</a>
            </li>
          </ul>
        </div>

        <div className="nav-button-wrapper">
          <div className="nav-button">
            {" "}
            <Button color="#505050">Login</Button>
          </div>
          <div className="nav-button">
            {" "}
            <Button className="nav-button" color=" #38C570">
              Register
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const styled = {
  root: css`
    padding: 25px 126px 25px 126px;
    .nav-item {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;

      .infion-logo-wrapper {
        :hover {
          cursor: pointer;
        }
      }

      .nav-link {
        display: flex;
        list-style: none;

        .nav-link-item {
          text-decoration: none;
          font-size: var(--medium-font);
          padding: 0 35px;
          line-height: var(--medium-line-height);
          font-weight: var(--bold);
        }
        .link {
          :hover {
            cursor: pointer;
          }
        }
      }
      .nav-button-wrapper {
        display: flex;
        justify-content: space-between;
        .nav-button {
          padding: 0 15px;
        }
      }
    }
  `,
};
