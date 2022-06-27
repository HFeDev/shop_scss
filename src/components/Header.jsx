import { Link, useLocation } from "react-router-dom";
import { logo2 } from "../assets/images/imgOut";
import { BiMenuAltLeft } from "react-icons/bi";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useEffect, useRef } from "react";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/"
  },
  {
    display: "Sản phẩm",
    path: "/catalog"
  },
  {
    display: "Phụ kiện",
    path: "/accessories"
  },
  {
    display: "Liên hệ",
    path: "/contact"
  }
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const headerMenuLeftRef = useRef(null);

  const menuToggle = () =>
    headerMenuLeftRef.current?.classList.toggle("active");

  const activeNav = mainNav.findIndex((item, index) => item.path === pathname);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // documentElement sẽ trả về phần tử gốc của trang, đối với trang html thì html là gốc
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("shrink");
      } else {
        headerRef.current?.classList.remove("shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        {/* logo */}
        <div className="header__logo">
          <Link to="/">
            <img src={logo2} alt="" />
          </Link>
        </div>

        {/* menu */}
        <div className="header__menu">
          {/* menu mobile */}
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <BiMenuAltLeft fontSize={42} />
          </div>
          {/* menu left */}
          <div className="header__menu_left" ref={headerMenuLeftRef}>
            <div className="header__menu_left_close" onClick={menuToggle}>
              <IoMdClose />
            </div>
            {mainNav.map(({ display, path }, index) => (
              <div
                onClick={menuToggle}
                key={index}
                className={`header__menu_left-item header__menu_item ${
                  activeNav === index ? "active" : ""
                }`}
              >
                <Link to={path}>
                  <span>{display}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* menu right */}
          <div className="header__menu_right">
            <div className="header__menu_right_item header__menu_item">
              <BsSearch />
            </div>
            <div className="header__menu_right_item header__menu_item">
              <Link to="/cart">
                <BsHandbag />
              </Link>
            </div>
            <div className="header__menu_right_item header__menu_item">
              <AiOutlineUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
