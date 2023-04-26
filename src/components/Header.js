import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import '../styles.css';
import { Link } from 'react-router-dom';
import {CgDarkMode} from 'react-icons/cg';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-5">
      <div className="flex justify-between ">
        <NavigationMenu.Root className="flex justify-around items-center px-4 py-2">
          <NavigationMenu.List className="flex space-x-10">
            <NavigationMenu.Item>
              <Link
                to="/"
                className="font-bold text-4xl border-b-4 border-transparent hover:border-gray-400"
              >
                <button className="focus:outline-none">Home</button>
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link
                to="/shop"
                className="font-bold text-4xl border-b-4 border-transparent hover:border-gray-400"
              >
                <button className="focus:outline-none">Shop</button>
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link
                to="/about"
                className="font-bold text-4xl border-b-4 border-transparent hover:border-gray-400"
              >
                <button className="focus:outline-none">About</button>
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
          <NavigationMenu.Viewport />
        </NavigationMenu.Root>
        <div className='flex items-center'>
          <CgDarkMode className="text-4xl" />
        </div>
      </div>
    </header>
  );
}
