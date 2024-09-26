import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsIcon from '@mui/icons-material/Settings';
import AutorenewIcon from '@mui/icons-material/Autorenew';
const Navbar = () => {
  return (
    <div className="w-full bg-white px-4 flex justify-between items-centerpy-3 h-30 border-b-2 border-gray-200">
      {/* search */}
      <div className="flex items-center gap-8 m-4">
        <div className='relative flex h-min w-[200px]'>
          <SearchIcon  className='absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer'/>
          <input  type='search' className='w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none ' placeholder='Search...'/>
        </div>
      </div>
      {/* right items */}
      <div className='flex items-center'>
            <button className='rounded p-2 hover:bg-gray-100'>
                <LightModeIcon className='h-6 w-6 cursor-pointer' /> 
            </button>
            <Link 
                to="/settings" 
                className='h-min w-min rounded p-2 hover:bg-gray-100' // Removed dark mode conditions
            >
                <SettingsIcon className='h-6 w-6 cursor-pointer' />
            </Link>
            <div className='ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block'></div>
        </div>
    </div>
  );
};

export default Navbar;
