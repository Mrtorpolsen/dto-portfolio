import React from "react";

type TechnologyItemProps = {
  children: React.ReactElement;
};

export default function TechnologyItem({ children }: TechnologyItemProps) {
  return (
    <div className="border-2 rounded-xl relative z-1 size-fit flex flex-col items-center h-18 w-23 gap-1 pt-1">
      {children}
    </div>
  );
}
