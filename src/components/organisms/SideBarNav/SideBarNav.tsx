import React from "react";
import { classNames } from "src/utils/functions";

interface SideBarNavProps {}

const SideBarNav: React.FC<SideBarNavProps> = ({}) => {
  const navigation = ["Home", "Transactions", "Cards", "Payments"];
  return (
    <>
      <div className="h-full w-40 bg-dark-blue-900">
        <nav
          className="mt-5 flex-1 px-2 bg-gray-800 space-y-1"
          aria-label="Sidebar"
        >
          {navigation.map((item) => (
            <a
              key={item}
              className={classNames(
                item
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
            >
              {/* <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-300"
                    : "text-gray-400 group-hover:text-gray-300",
                  "mr-3 flex-shrink-0 h-6 w-6"
                )}
                aria-hidden="true"
              /> */}
              <span className="flex-1">{item}</span>
              {/* {item.count ? (
                <span
                  className={classNames(
                    item.current
                      ? "bg-gray-800"
                      : "bg-gray-900 group-hover:bg-gray-800",
                    "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"
                  )}
                >
                  {item.count}
                </span>
              ) : null} */}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default SideBarNav;
