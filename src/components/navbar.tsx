"use client";
import { useState, useRef, useEffect } from "react";
export default function NavBar() {
  return (
    <nav
      id="nav"
      className="flex flex-row sticky top-0 justify-center w-full h-fit bg-gray-100/90 border-b border-gray-300 py-3 z-5 leading-none"
    >
      <button
        className={`${
          useIsActive("home") ? "text-red-400" : "text-black"
        } h-4 mx-3 font-semibold cursor-pointer`}
        onClick={() => {
          const element = document.getElementById("home");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Home
      </button>
      <button
        className={`${
          useIsActive("about") ? "text-red-400" : "text-black"
        } h-4 mx-3 font-semibold cursor-pointer`}
        onClick={() => {
          const element = document.getElementById("about");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        About
      </button>
      <button
        className={`${
          useIsActive("projects") ? "text-red-400" : "text-black"
        } h-4 mx-3 font-semibold cursor-pointer`}
        onClick={() => {
          const element = document.getElementById("projects");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Project
      </button>
      <button
        className={`${
          useIsActive("contact") ? "text-red-400" : "text-black"
        } h-4 mx-3 font-semibold cursor-pointer`}
        onClick={() => {
          const element = document.getElementById("contact");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact
      </button>
    </nav>
  );
}
function useIsActive(id: string) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.51 }
    );
  }, []);

  useEffect(() => {
    const ref = document.getElementById(id);
    if (ref === null) return;
    observerRef.current?.observe(ref);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [id]);

  return isActive;
}
