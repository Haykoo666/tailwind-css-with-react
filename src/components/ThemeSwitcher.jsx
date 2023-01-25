import React, { useState } from 'react'
import { useEffect } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const elemHTML = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const options = [
    {
      icon: "sunny",
      text: "light"
    },
    {
      icon: "moon",
      text: "dark"
    },
    {
      icon: "desktop-outline",
      text: "system"
    }
  ];

  const onWindowMatch = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
      elemHTML.classList.add('dark')
    } else {
      elemHTML.classList.remove('dark')
    }
  }

  onWindowMatch();

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        elemHTML.classList.add("dark")
      } else {
        elemHTML.classList.remove("dark")
      }
    }
  })

  useEffect(() => {
    switch (theme) {
      case "dark":
          elemHTML.classList.add("dark");
          localStorage.setItem("theme", "dark");
        break;
      
      case "light":
          elemHTML.classList.remove("dark");
          localStorage.setItem("theme", "light");
        break;

      default:
          localStorage.removeItem("theme");
          onWindowMatch()
        break;
    }
  
  }, [theme])
  return (
    <section className="fixed bottom-3 right-3 duration-100 dark:bg-slate-800 bg-gray-100 rounded">
        {
          options.map(opt => (
            <button 
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`w-8 h-8 leading-9 text-2xl rounded-full m-1 ${theme === opt.text && "text-sky-600"}`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))
        }
    </section>
  )
}

export default ThemeSwitcher