import "./styles.scss";

import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  BarIcon,
  CloseIcon,
} from "../../pages/Home/components/MenuIcons/index";

export default function Header() {
  const history = useHistory();
  const location = useLocation();

  const [stickyHeader, setStickyHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pathname, setPathname] = useState(location.pathname);

  history.listen((location) => {
    setPathname(location.pathname);
  });

  const handleScroll = () => {
    const offset = window.pageYOffset;
    if (offset && offset > 40) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleClick = (str) => {
    history.push(str);
  };

  const goToSite = (str) => {
    window.open(str, "_blank");
  };

  return (
    <div
      id="Header"
      className={`animated fadeInDownTiny d300 ${stickyHeader ? "sticky" : ""}`}
    >
      <div className="container">
        <div className="header-container">
          <div className="logo" onClick={() => handleClick("/")}>
            <svg
              width="45"
              height="46"
              viewBox="0 0 45 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.93545 41.2241C1.40821 38.6901 0 35.3115 0 31.7312C0 28.1509 1.38307 24.7849 3.91031 22.2509L22.1794 3.93328C24.7066 1.39932 28.0637 0.0125732 31.6345 0.0125732C35.2054 0.0125732 38.5624 1.39932 41.0897 3.93328L35.1425 9.89628C33.2691 8.01787 30.0126 8.01787 28.1517 9.89628L9.8575 28.2139C8.92708 29.1468 8.41157 30.3949 8.41157 31.7186C8.41157 33.0423 8.92708 34.2904 9.8575 35.2233L3.93545 41.2241Z"
                fill="#B368FC"
              />
              <path
                d="M13.3655 45.1195C9.79466 45.1195 6.46273 43.7453 3.93549 41.2114L9.8701 35.2232C11.7435 37.1016 15 37.1016 16.8609 35.2232L35.1425 16.9055C36.0729 15.9726 36.5885 14.7246 36.5885 13.4009C36.5885 12.0771 36.0729 10.8291 35.1425 9.89617L41.0897 3.92056C43.6169 6.45452 45 9.82053 45 13.4009C45 16.9812 43.6169 20.3472 41.0897 22.8811L22.8081 41.1988C20.2934 43.7327 16.9363 45.1195 13.3655 45.1195Z"
                fill="#1CB0F9"
              />
              <path
                d="M35.1543 9.90892C34.2239 8.98862 32.9917 8.48435 31.6841 8.48435H0.225586V0.0378188L31.6967 0C35.2298 0 38.5617 1.43717 41.0889 3.9207L35.1543 9.90892Z"
                fill="#1EF7E7"
              />
              <path
                d="M44.7863 45.1322H13.3278C9.79466 45.1322 6.45015 43.7076 3.93549 41.2241L9.8701 35.2359C10.8005 36.1562 12.0327 36.6479 13.3404 36.6479L44.7863 36.6983V45.1322Z"
                fill="#6752F7"
              />
            </svg>
          </div>

          <ul className="link-list">
            <li
              onClick={() => goToSite("/launch_token")}
              className="is-hidden-touch"
            >
              Launch your token
            </li>
            <li
              onClick={() => goToSite("https://app.0.exchange")}
              className="is-hidden-touch"
            >
              Use App
            </li>
            <li
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <CloseIcon /> : <BarIcon />}
            </li>
          </ul>
        </div>

        {mobileMenuOpen && (
          <ul className="mobile-menu animated fadeInUpTiny d250">
            <li onClick={() => goToSite("/blog")}>Blog</li>
            <li
              onClick={() => goToSite("/Zero_Whitepaper_Final.pdf")}
              className={`${pathname === "/learn-more" ? "active" : ""}`}
            >
              Whitepaper
            </li>
            <li
              onClick={() => goToSite("/Zero_Liquidity_Mining.pdf")}
              className={`${pathname === "/learn-more" ? "active" : ""}`}
            >
              Liquidity Mining
            </li>
            <li
              onClick={() => goToSite("/launch_token")}
              className="is-hidden-desktop"
            >
              Launch your token
            </li>
            <li
              onClick={() => goToSite("https://app.0.exchange")}
              className="is-hidden-desktop"
            >
              Use App
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
