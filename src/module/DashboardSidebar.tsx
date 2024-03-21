import React from "react";
// import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
const sidebarLinks = [
  {
    img: true,
    title: "Monkey Blogging",
    url: "",
  },
  {
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    title: "Post",
    url: "/manage/posts",
  },
  {
    title: "Category",
    url: "/manage/category",
  },
  {
    title: "User",
    url: "/manage/user",
  },
  {
    title: "Logout",
    url: "/logout",
  },
];
const DashboardSidebar = () => {
  const navlinkClass =
    "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8  last:mt-auto last:bg-white last:shadow-sdprimary";
  //   const dispatch = useDispatch();
  return (
    <>
      <div className="w-full md:w-[200px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col flex-shrink-0">
        {sidebarLinks.map((link) => {
          if (link.url === "/logout") {
            return (
              <button
                //   onClick={() => dispatch(authLogOut())}
                className={navlinkClass}
                key={link.title}
              >
                {/* <span>{link}</span> */}
                <span className="">{link.title}</span>
              </button>
            );
          }
          return (
            <>
              <NavLink
                to={link.url}
                key={link.title}
                className={({ isActive }) =>
                  isActive
                    ? `${navlinkClass} text-primary bg-primary bg-opacity-20`
                    : `${navlinkClass} text-icon-color`
                }
              >
                {link.img ? <img srcSet="/logo.png 4x" alt="" /> : null}
                <span
                  className={link.img ? "text-slate-950" : ""}
                  style={{ fontWeight: link.img ? "bold" : "" }}
                >
                  {link.title}
                </span>
              </NavLink>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DashboardSidebar;
