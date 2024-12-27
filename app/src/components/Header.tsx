import React from "react";

function Header() {
    return (
        <div className="flex space-x-4">
            <div className="w-1/3 p-4 border-2 border-black">1</div>
            <div className="w-1/3 p-4 border-black border-2 grid grid-cols-2">
            
            <header className="flex sticky">
            <img className="w-100% hover:animate-bounce scale-50" src="./sumitkp-web.png" ></img>
            <nav className="w-70% ">
                <ul className="flex text-black">
                    <li className="p-4">Home</li>
                    <li className="p-4">Career</li>
                    <li className="p-4">About</li>
                    <li className="p-4">Support</li>
                </ul>
            </nav>

        </header>
            </div>

            <div className="w-1/3 p-4 border-2 border-black">3</div>

        </div>

    )
}

export default Header;