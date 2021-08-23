import type { NextPage } from "next";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import { SearchBar, Logo } from "./widgets/Header";

const Header: NextPage = () => {
  return (
    <header className="sticky md:px-10 z-50 shadow-md grid grid-cols-3 bg-white py-5 px-5">
      <Logo
        className="relative flex items-center h-10 cursor-pointer my-auto"
        logosrc="https://links.papareact.com/qd3"
      />

      <SearchBar className="flex border-2 items-center rounded-full">
        <input
          className="pl-5 placeholder-gray-400 text-sm text-gray-600 bg-transparent outline-none flex-grow"
          placeholder="Search for a place"
          type="text"
          name="search"
          id="search"
        />
        <SearchIcon className="h-8 p-2 md:mx-2 bg-red-500 rounded-full text-white hidden md:inline-flex" />
      </SearchBar>

      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer"/>

        <div className="flex items-center space-x-2 p-2 rounded-full border-2">
          <MenuIcon className="h-6 cursor-pointer"/>
          <UserCircleIcon className="h-6 cursor-pointer"/>
        </div>

      </div>


    </header>
  );
};

export default Header;
