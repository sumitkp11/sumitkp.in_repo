import React from "react";

function Header() {
    return (
        <div className="grid grid-cols-2 md:flex bg-violet-50">
            <div className="p-4 ">
                <img src="./sumitkp-web-1.png" className="mx-auto md:h-auto md:max-w-xs md:mx-auto" />
            </div>
            <div className="w-1/4 md:w-1/3 grid grid-cols-2 hidden md:block">
                    <header className="md:flex md:absolute md:top-10">
                        <nav className="">
                            <ul className="flex text-black md:text-xl">
                                <li className="m-2 hover:text-sky-400"><a href="">Resume</a></li>
                                <li className="m-2 hover:text-sky-400"><a href="">Career</a></li>
                                <li className="m-2 hover:text-sky-400"><a href="">Projects</a></li>
                                <li className="m-2 hover:text-sky-400"><a href="">Contact</a></li>
                            </ul>
                        </nav>
                    </header>
            </div>

            <div className="hidden md:block w-1/3 p-4 ">
                <button type="button" className="absolute right-10 top-10 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                        <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                    </svg>
                    Sign in with Google
                </button>
            </div>
            <div className="block md:hidden relative">
                <svg className="absolute top-2 right-2" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>
            </div>
        </div>

    )
}

export default Header;