import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto h-screen">{children}</div>
    </>
  );
};

export default Layout;
