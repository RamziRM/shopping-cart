import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import '../styles.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-5">
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
    </header>
  );
}
