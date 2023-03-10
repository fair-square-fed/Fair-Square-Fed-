import Image from "next/image";

export default function SideBar() {
  return (
    <>
      {" "}
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <Image
            src="/fslogo.svg"
            className="bi me-2"
            width="150"
            height="100"
          />
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <strong>mdo</strong>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
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
            background-color: #d2f4ea;
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
        `}
      </style>
    </>
  );
}