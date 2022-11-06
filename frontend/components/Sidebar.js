import React, { useState } from "react";
import {
  HomeIcon,
  ChartBarIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
  PlusIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import SidebarIcon from "./SidebarIcon";
import logo from "../assets/img/octo_logo.png";

const Sidebar = ({ signOut }) => {
  const [active, setActive] = useState(false);
  const router = useRouter();
  return (
    <div className="w-64 bg-[#0f0f0f] h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center space-x-4">
        <img
          src={logo.src}
          alt="Octo_Logo"
          className="h-10 bg-transparent w-10"
        />
        <h3 className="pb-4 text-[#e3ffa8] text-4xl font-bold text-center m-5">
          Octo
        </h3>
      </div>
      {/* Icons */}
      <SidebarIcon
        active={true}
        label="Home"
        onClickHandler={() => router.replace("/")}
        Icon={<HomeIcon className="h-8 w-8" />}
      />
      <SidebarIcon
        active={false}
        label="Statistics"
        Icon={<ChartBarIcon className="h-8 w-8" />}
      />
      <SidebarIcon
        active={false}
        onClickHandler={() => router.push("/profile")}
        Icon={<UserIcon className="h-8 w-8" />}
        label="Profile"
      />
      {/* <SidebarIcon
        active={false}
        onClickHandler={() => router.push("/exercise/selection")}
        cta={true}
        Icon={<PlusIcon className="h-8 w-8" />}
      /> */}
      <button
        type="button"
        className={
          "flex items-center hover:rounded-md rounded-xl space-x-4 hover:bg-[#0a0a0b] text-orange-500 justify-start hover:cursor-pointer transition-all duration-200 px-3 py-2 m-4 mt-auto"
        }
      >
        <FireIcon className="h-8 w-8 text-orange-500" />
        <span className={`text-lg`}>0</span>
        <span className="ml-auto">Day Streak</span>
      </button>
      <SidebarIcon
        onClickHandler={signOut}
        active={false}
        label="Logout"
        Icon={<ArrowLeftOnRectangleIcon className="h-8 w-8" />}
      />
      {/* <button onClick={signOut}>Sign out</button> */}
    </div>
  );
};

export default Sidebar;
