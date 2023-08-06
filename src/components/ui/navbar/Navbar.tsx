"use client";
import React, { useEffect, useState } from "react";
import BrandName from "./BrandName";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import classNames from "classnames";
import Cart from "@/components/icons/Cart";
import User from "@/components/icons/User";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Moon from "@/components/icons/Moon";
import Bright from "@/components/icons/Bright";

type Theme = "dark" | "light" | undefined;

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  theme as Theme;
  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    if (theme === "light") setIsLight(true);
    const html = document.documentElement;
    html.setAttribute("data-theme", theme!);
    return () => {
      setIsLight(false);
    };
  }, [setTheme, theme]);

  const themeToggle = () => (isLight ? setTheme("dark") : setTheme("light"));

  return (
    <div className="navbar">
      <div className="flex-1">
        <BrandName isLight />
      </div>
      <div className="flex-none">
        <div className="flex mr-10">
          <div className="pt-1" onClick={themeToggle}>
            <Bright
              className={classNames(
                !isLight ? "hidden" : "relative left-5 z-10 scale-75 pb-1"
              )}
            />
            <Moon
              className={classNames(
                isLight ? "hidden" : "relative left-10 z-10 scale-75 pb-1"
              )}
            />
          </div>
          <Switch
            className="scale-125 mt-1"
            checked={!isLight}
            onCheckedChange={(checked) => {
              checked ? setTheme("dark") : setTheme("light");
            }}
            aria-label="Toggle italic"
          ></Switch>
        </div>
        <div className="dropdown dropdown-end mr-5">
          <label tabIndex={0} className={"btn btn-circle btn-ghost"}>
            <div className="indicator">
              <Cart className="w-8 h-8 stroke-2" />
              <span className="badge badge-sm indicator-item bg-lime-600 border-none">
                8
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Avatar>
                <AvatarImage src="https://github.com" />
                <AvatarFallback>
                  <User className="w-8 h-8 stroke-2" />
                </AvatarFallback>
              </Avatar>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
