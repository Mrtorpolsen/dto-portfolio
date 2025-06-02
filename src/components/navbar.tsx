"use client";
import { useState, useRef, useEffect } from "react";

const sectionIds = ["home", "about", "projects", "contact"];

export default function NavBar() {
  const activeId = useActiveSection(sectionIds);

  return (
    <nav
      id="nav"
      className="flex flex-row sticky top-0 justify-center w-full h-fit bg-gray-100/90 border-b border-gray-300 py-3 z-5 leading-none"
    >
      {sectionIds.map((id) => (
        <button
          key={id}
          className={`${
            activeId === id ? "text-red-400" : "text-black"
          } h-4 mx-3 font-semibold cursor-pointer`}
          onClick={() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </button>
      ))}
    </nav>
  );
}
function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const mostVisibleId = visibleSections[0].target.id;

          if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

          debounceTimeout.current = setTimeout(() => {
            setActiveId(mostVisibleId);
          }, 100);
        }
      },
      { threshold: 0.51 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [ids]);

  return activeId;
}
