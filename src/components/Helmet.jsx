import { useEffect } from "react";

const Helmet = ({ title, children }) => {
  document.title = `YO - ${title}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>{children}</div>;
};

export default Helmet;
