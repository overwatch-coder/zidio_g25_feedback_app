import React from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

class Navbar extends React.Component {
  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidMount() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <nav className="bg-primary border-b-light md:px-10 fixed top-0 w-full px-4 py-4 border-b-2">
          <div className="container flex items-center justify-between mx-auto">
            <div
              style={{ fontSize: "24px" }}
              className="text-3x1 text-light font-bold"
            >
              <Link to={"/"}>FBF</Link>
            </div>

            {/* Hamburger menu */}
            <div className="md:hidden">
              <MdMenu
                className="text-light"
                size={30}
                onClick={this.toggleMenu}
              />
            </div>

            {/* Desktop Links */}
            <ul className="md:flex items-center hidden gap-5 uppercase">
              <li>
                <Link to={"/forms"} className="hover:text-gray-300 text-white">
                  Forms
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="hover:text-gray-300 text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <button className="bg-secondaryLight hover:bg-secondary hover:scale-105 px-5 py-2 text-center text-white uppercase transition rounded">
                  <Link to={"/login"}>Account</Link>
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Links */}
          <ul
            className={`flex-col md:hidden w-full gap-5 pt-5 pb-5 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <li className="hover:bg-secondary hover:scale-105 px-2 py-3 transition rounded-md">
              <Link
                to={"/forms"}
                className="hover:text-gray-300 w-full text-white"
              >
                Forms
              </Link>
            </li>
            <li className="hover:bg-secondary hover:scale-105 w-full px-2 py-3 transition rounded-md">
              <Link
                to={"/contact"}
                className="hover:text-gray-300 w-full text-white"
              >
                Contact
              </Link>
            </li>

            <button className="bg-secondaryLight hover:bg-secondary hover:scale-105 px-5 py-3 text-center text-white uppercase transition rounded">
              <Link to={"/login"}>Account</Link>
            </button>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
