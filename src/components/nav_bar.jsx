import React from "react";

export default function nav_bar() {
  return (
    <div>
      <nav class="bg-gray-900 text-white py-4">
        <div class="container flex justify-between items-center">
          <a href="#" class="text-xl font-bold">
            My Website
          </a>
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400">
                Product
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400">
                Sign In
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
