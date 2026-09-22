import React from "react";

type TextContent = {
    children: React.ReactElement;
}

export default function TextWrapper({ children } : TextContent) {
    return (
        <div className="border-8 border-white/80 relative md:self-center">
            <div className="bg-white">
                {children}
            </div>
        </div>
    );
}