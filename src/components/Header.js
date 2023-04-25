import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import '../styles.css';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-5">
      <NavigationMenu.Root className="flex justify-around items-center px-4 py-2">
        <NavigationMenu.List className="flex space-x-10">
          <NavigationMenu.Item>
            <NavigationMenu.Link
              href="/"
              className="font-bold text-4xl border-b-4 border-transparent hover:border-gray-400"
            >
              <button className="focus:outline-none">Home</button>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link
              href="/shop"
              className="font-bold text-4xl border-b-4 border-transparent hover:border-gray-400"
            >
              <button className="focus:outline-none">Shop</button>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link
              href="/about"
              className="font-bold text-4xl border-b-4 border-transparent hover:border-gray-400"
            >
              <button className="focus:outline-none">About</button>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    </header>
  );
}
