import React from "react";

type TechnologyItemProps = {
  children: React.ReactElement;
};

export default function TechnologyItem({ children }: TechnologyItemProps) {
  return (
    <div className="border-4 relative z-1 size-fit m-4 flex flex-col items-center h-20 w-30">
      {children}
    </div>
  );
}
