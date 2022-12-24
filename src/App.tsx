import './App.css'

/*
This task involves carrying out a simple UI 
	1. Make a responsive sidebar using Tailwind:
			- Sidebar should contain 4 buttons: Home, About, Products, Services
				- Provide a button to open and close the sidebar
			- Here is a visual example, try to make the sidebar as close to this as possible: https://codesandbox.io/s/v699cm
			- Do not use any libraries apart from tailwind CSS

This test assumes that the candidate is NOT familiar with Tailwind CSS and it is intended to test if candidates are able to deal effectively and productively with new libraries. The work in this team will involve a lot of learning and new libraries. Learning quickly is essential to performing well on this test.

Note: Ignore the warnings about className vs class.
*/


import { useState } from "react";
const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "User" },
    { title: "About", src: "User" },
    { title: "Products", src: "Search", gap: false },
    { title: "Services", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-red-500 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Technoculture Research
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};
export default App;