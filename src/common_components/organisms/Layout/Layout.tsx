import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto bg-dark-blue-900 h-screen">
        {/* <Header/> */}
        {children}
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default Layout;
