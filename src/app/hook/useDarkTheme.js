// import { useEffect, useState } from "react"

// export default function useDarkTheme() {
//     const [theme, setTheme] = useState("light")
//     const themeToggle = () => {
//         const newTheme = theme === "light" ? "dark" : "light"
//         setTheme(newTheme)
//         document.documentElement.classList.toggle("dark", newTheme === "dark")
//         localStorage.setItem("theme", newTheme)
//     }
//     useEffect(() => {
//         const storedTheme = localStorage.getItem("theme");
//         const defaultTheme = storedTheme || "light"; // ✅ Default is light
//         // setTheme(defaultTheme);
//         document.documentElement.classList.toggle("dark", defaultTheme === "dark");
//     }, [])

//     return { theme, themeToggle }
// }

'use client';
import { useEffect, useState } from "react";

export default function useDarkTheme() {

    const [theme, setTheme] = useState(() => {
        // ✅ Runs only on client
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "light";
        }
        return "light";
    });

    const themeToggle = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);

    }, [theme]);

    return { theme, themeToggle };
}