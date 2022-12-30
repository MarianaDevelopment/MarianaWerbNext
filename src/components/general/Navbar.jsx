import React, { useState, useContext } from "react";
import { close, marianare, menu } from "@/assets/index";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import UserContext from "@/components/context/userContext";
const Navbar = () => {
  const { user, setUser, hide, setHide, handleLogout } = useContext(UserContext);
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
 

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Image src={marianare} alt="mariana" className="w-[52px] h-[52px]" />
      <ul className="list-none sm:flex hidden justify-start items-center flex-1">
        <li className="font-poppins font-medium text-[16px] text-dimWhite mr-10 hover:text-white">
          <Link href="/">Mariana</Link>
        </li>
        <li className="font-poppins font-medium text-[16px] text-dimWhite mr-10 hover:text-white">
          <Link href="/mariana-commands">Commands</Link>
        </li>
        <li className="font-poppins font-medium text-[16px] text-dimWhite mr-10 hover:text-white">
          <a href="https://discord.gg/wM4Qk5dvru">Join our discord</a>
        </li>
        <li className="font-poppins font-medium text-[16px] text-dimWhite mr-10 hover:text-white">
          <Link href="/public-servers">Public Servers</Link>
        </li>
      </ul>

      <div className="flex justify-end items-center list-none sm:flex hidden justify-start items-center flex-1">
        {user ? (
          <div className="flex justify-end items-start flex-1">
            <button className="">
              <Image
                src={user.avatar}
                alt="avatar"
                width={52}
                height={52}
                className="w-[52] h-[52] object-contain rounded-full border-2 border-white"
                onClick={() => {
                  Router.push("/dashboard");
                }}
              />
            </button>
            <button
              className={`font-poppins font-medium cursor-pointer text-[10px] mr-10  rounded-[10px] py-2 px-10 hover:text-white`}
              onClick={handleLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-logout"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M7 12h14l-3 -3m0 6l3 -3" />
              </svg>
            </button>
          </div>
        ) : (
          <button
            className={`font-poppins font-medium cursor-pointer text-[16px] text-dimWhite mr-10 border-2 rounded-[10px] py-2 px-10 hover:text-white ${
              hide ? "hidden" : ""
            }`}
            onClick={() => {
              window.location.href = "https://api.mariana-re.com/api/login";
            }}
          >
            Login
          </button>
        )}
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li className="font-poppins font-medium text-[16px] text-dimWhite mr-10 hover:text-white">
              <Link href="/">Mariana</Link>
            </li>
            <li className="font-poppins font-medium text-[16px] text-dimWhite mr-10 hover:text-white">
              <Link href="/mariana-commands">Commands</Link>
            </li>
            <li className="font-poppins font-medium text-[16px] text-dimWhite mr-10 hover:text-white">
              <a href="https://discord.gg/wM4Qk5dvru">Join our discord</a>
            </li>
            <li className="font-poppins font-medium text-[16px] text-dimWhite mr-10 hover:text-white">
              <Link href="/public-servers">Public Servers</Link>
            </li>
          </ul>

          <div className="flex justify-end items-center list-none sm:flex  justify-start items-center flex-1">
            {user ? (
              <div>
                <button>
                  <Image
                    src={user.avatar}
                    alt="avatar"
                    width={52}
                    height={52}
                    className="w-[52] h-[52] object-contain rounded-full border-2 border-white"
                    onClick={() => {
                      Router.push("/dashboard");
                    }}
                  />
                </button>
                <button
                  className={`px-5 py-2 `}
                  onClick={handleLogout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-logout"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                className={`font-poppins font-medium cursor-pointer text-[16px] text-dimWhite mr-10 border-2 rounded-[10px] py-2 px-10 hover:text-white ${
                  hide ? "hidden" : ""
                }`}
                onClick={() => {
                  window.location.href = "https://api.mariana-re.com/api/login";
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
