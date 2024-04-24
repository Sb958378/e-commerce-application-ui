import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { BiUserCircle } from "react-icons/bi";
import { LuBoxes } from "react-icons/lu";
import More from "../public/More";
import { useAuth } from "../authContext/AuthProvider";

const Headers = () => {
  let [isOpen, setIsOpen] = useState(false);
  
   const{user} = useAuth();
   

  const { userName, role, authenticated } = user;

  return (
    <nav className="bg-white shadow-md text-slate-100 py-2 text-xl flex justify-center items-center">
      <div className="w-11/12 flex items-center justify-evenly">
        <div className="flex justify-center items-center w-full">
          <Link to={"/"} className="text-blue-700 text-xl font-bold italic">
            Flipkart
            <h5 className="text-gray-500 italic text-sm">
              Explore
              <span className="text-amber-400">
                Plus<sup>+</sup>
              </span>
            </h5>
          </Link>
          <div className="bg-blue-100 w-full rounded-xl mx-10 flex justify-center items-center">
            <div className="text-slate-500 flex justify-center items-center w-7 text-2xl mr-0">
              <SearchIcon />
            </div>
            <input
              type="text"
              className="p-2 bg-transparent w-full focus:outline-none text-slate-700 placeholder:text-slate-500"
              placeholder="Search for Products, Brands And More"
            />
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="text-slate-600 flex justify-end items-center w-4/5 mr-16">
              <Link
                to={authenticated ? "/account" : "/login"}
                className="text-slate-600 flex justify-center items-center mx-10"
              >
                <div className="mt-1 mr-2">
                  <BiUserCircle />
                </div>
                {authenticated ? userName : "Login"}
              </Link>
              {isOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white shadow-md p-4">
                  <ul>
                    <li className="mb-2">
                      <Link
                        className="flex items-center justify-between border-solid border-b-2 p-2"
                        title="Sign Up"
                      >
                        <div>New Customer?</div>
                        <div>
                          <Link
                            className="text-blue-500 font-bold"
                            title="Sign Up"
                          >
                            Sign Up
                          </Link>
                        </div>
                      </Link>
                    </li>
                    <li
                      className="mb-2 hover:bg-gray-100 p-1"
                      title="My Profile"
                    >
                      <Link>My Profile</Link>
                    </li>
                    <li
                      className="mb-2 hover:bg-gray-100 p-1"
                      title="Flipkart Plus Zone"
                    >
                      <Link>Flipkart Plus Zone</Link>
                    </li>
                    <li className="mb-2 hover:bg-gray-100 p-1" title="Orders">
                      <Link>Orders</Link>
                    </li>
                    <li className="mb-2 hover:bg-gray-100 p-1" title="WishList">
                      <Link>WishList</Link>
                    </li>
                    <li className="mb-2 hover:bg-gray-100 p-1" title="Rewards">
                      <Link>Rewards</Link>
                    </li>
                    <li className="mb-2 hover:bg-gray-100 p1" title="GiftCards">
                      <Link>GiftCards</Link>
                    </li>
                  </ul>
                </div>
              )}
              {authenticated && role === "customer" ? (
                <div className="flex justify-center items-center">
                  <HeaderLink
                    icon={<ShoppingCartIcon/>}
                    linkName={"Cart"}
                    to={"/cart"}
                  />
                  <HeaderLink
                    icon={<ShoppingCartIcon />}
                    linkName={"Wishlist"}  
                    to={"/wishlist"}
                  />

                </div>
              ) : authenticated && role === "seller" ? (
                

                <HeaderLink
                  icon={<LuBoxes />}
                  linkName={"Order"}
                  to={"/orders"}
                />
              ) : (
                !authenticated && (
                  <HeaderLink
                    icon={<StorefrontIcon />}
                    linkName={"Become a Seller"}
                    to={"/registerSeller"}
                  />

                )
              )}
            </div>
          </div>
        </div>
      </div>
      <HeaderLink icon={<More/>}/>
    </nav>
  );
};

export default Headers;

export const HeaderLink = ({ icon, linkName, to }) => {
  return (
    <Link
      to={to}
      className="text-slate-600 flex justify-center items-center mx-10"
    >
      <div className="mt-1 mr-2">{icon}</div>
      <div className="mt-1">{linkName}</div>
      <div className="list-image-none"> </div>
    </Link>
  );
};
