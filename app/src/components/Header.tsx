import React from "react";

function Header() {
    return (
        <div className="flex space-x-4">
            <div className="w-1/3 p-4 border-2 border-white">1</div>
            <div className="w-1/3 p-4 border-white border-2 grid grid-cols-2">
            
            <header className="flex">
            <img className="w-30% animate-bounce scale-50" src="https://upload.wikimedia.org/wikipedia/commons/0/09/Zomato_company_logo.png" ></img>
            <nav className="w-70% ">
                <ul className="flex text-white">
                    <li className="p-4">Home</li>
                    <li className="p-4">Career</li>
                    <li className="p-4">About</li>
                    <li className="p-4">Support</li>
                </ul>
            </nav>

        </header>
            </div>

            <div className="w-1/3 p-4 border-2 border-white">3</div>

        </div>

    )
}

export default Header;