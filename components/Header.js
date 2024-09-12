"use client";

import { useState, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation"; // Use usePathname to detect the active route
import Link from "next/link";
import Image from "next/image";
import ButtonSignin from "./ButtonSignin";
import logo from "@/app/icon.png";
import config from "@/config";

const links = [
  { href: "/#product", label: "Product" },
  { href: "/#pricing", label: "Pricing" },
];

const cta = <ButtonSignin extraStyle="btn-primary" />;

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Detect current route

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-white border-b shadow-md">
      <nav className="container flex items-center justify-between px-8 py-4 mx-auto">
        {/* Logo and App Name */}
        <div className="flex items-center space-x-2"> {/* Added space-x-2 for spacing */}
          <Link href="/" title={`${config.appName} homepage`}>
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              className="w-12"
              placeholder="blur"
              priority={true}
              width={32}
              height={32}
            />
          </Link>
          <Link href="/" title={`${config.appName} homepage`}>
            <span className="font-extrabold text-2xl">{config.appName}</span>
          </Link>
        </div>

        {/* Navigation links */}
        <div className="hidden lg:flex space-x-8 text-3xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "bg-gray-400 text-black rounded-full px-4 py-2"
                  : "text-gray-900 hover:text-blac"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link href="/#cta" className="btn bg-red-500 hover:bg-blue-900 text-white text-2xl">
            Start for free
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-4 py-2 shadow-md">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "bg-gray-200 text-black rounded-full px-4 py-2"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* <Link href="/#cta" className="btn bg-blue-500 text-white">
              Start fssor free
            </Link> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
