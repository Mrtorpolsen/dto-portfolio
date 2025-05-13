import React from "react";

type TechnologyItemProps = {
  children: React.ReactElement;
};

export default function TechnologyItem({ children }: TechnologyItemProps) {
  return (
    <div className="border-4 rounded-sm relative z-1 size-fit flex flex-col items-center h-18 w-23">
      {children}
    </div>
  );
}
