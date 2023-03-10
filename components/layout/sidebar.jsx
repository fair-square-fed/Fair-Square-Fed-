import Image from "next/image";
import {
  RiInformationFill,
  RiLogoutBoxRLine,
  RiCloseCircleFill,
} from "react-icons/ri";

export default function SideBar() {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{
          width: "280px",
          borderBottomRightRadius: "24px",
          borderTopRightRadius: "24px",
        }}
      >
        <a
          href="/"
          className=" align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <Image
            alt="Fair&Aquare"
            src="/fslogo.svg"
            className="bi me-2"
            width="150"
            height="100"
          />

          <Image
            alt="Fair&Aquare"
            src="/employee.svg"
            className="bi me-2"
            width="111"
            height="25"
          />
        </a>
        {/* <hr /> */}
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <span className="menu-icon information">
                <RiInformationFill />
              </span>
              Learn More
              {/* This title encourages users to explore the content on the page to gain a better understanding of the platform or service. */}
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <span className="menu-icon delete-data">
                <RiCloseCircleFill />
              </span>
              Delete Data
            </a>
          </li>
        </ul>
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none"
            aria-expanded="false"
          >
            <span className="menu-icon logout">
              <RiLogoutBoxRLine />
            </span>
            <strong>Logout</strong>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .b-example-divider {
            flex-shrink: 0;
            width: 1.5rem;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.1);
            border: solid rgba(0, 0, 0, 0.15);
            border-width: 1px 0;
            box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
              inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
          }

          .bi {
            vertical-align: -0.125em;
            pointer-events: none;
            fill: currentColor;
          }

          .dropdown-toggle {
            outline: 0;
          }

          .nav-flush .nav-link {
            border-radius: 0;
          }

          .btn-toggle {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.5rem;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.65);
            background-color: transparent;
            border: 0;
          }
          .btn-toggle:hover,
          .btn-toggle:focus {
            color: rgba(0, 0, 0, 0.85);
            background-color: #d2f4ea;
          }

          .btn-toggle::before {
            width: 1.25em;
            line-height: 0;
            content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
            transition: transform 0.35s ease;
            transform-origin: 0.5em 50%;
          }

          .btn-toggle[aria-expanded="true"] {
            color: rgba(0, 0, 0, 0.85);
          }
          .btn-toggle[aria-expanded="true"]::before {
            transform: rotate(90deg);
          }

          .btn-toggle-nav a {
            display: inline-flex;
            padding: 0.1875rem 0.5rem;
            margin-top: 0.125rem;
            margin-left: 1.25rem;
            text-decoration: none;
          }
          .btn-toggle-nav a:hover,
          .btn-toggle-nav a:focus {
            background-color: #4e31aa;
          }

          .scrollarea {
            overflow-y: auto;
          }

          .fw-semibold {
            font-weight: 600;
          }
          .lh-tight {
            line-height: 1.25;
          }
          .menu-icon {
            font-size: 1.5rem;
            margin: 0 0.2rem 0 0;
            line-height: 0;
          }

          .menu-icon.information {
            color: #64d61b;
          }

          .menu-icon.delete-data {
            color: #a51212;
          }

          .nav-link.active {
            background: none;
            color: #000;
          }
          .nav-link:hover {
            background-color: #4e31aa;
            color: #fff;
          }
          .nav-link:hover .menu-icon {
            color: #fff;
          }

          .nav-pills {
            margin-top: 2rem;
          }
        `}
      </style>
    </>
  );
}
