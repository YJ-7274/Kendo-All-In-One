import React from 'react'

const Dropdown = ({ submenus, dropdown }) => {
    return (
      <ul className={`flex justify-center content-center dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <li key={index} className= {`${index === 0 ? "mt-2-0" : "mt-4"} ml-3 font-comfortaa font-normal cursor-pointer 
          text-[14px]`}>
            <a href={`${submenu.path}`}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;