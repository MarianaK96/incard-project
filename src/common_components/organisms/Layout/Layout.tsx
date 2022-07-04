import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto h-full">{children}</div>
    </>
  );
};

export default Layout;
