import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      <svg
        width="200"
        height="50"
        viewBox="0 0 200 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-auto"
      >
        {/* Green background shape */}
        <path
          d="M10 5C10 2.23858 12.2386 0 15 0H35C37.7614 0 40 2.23858 40 5V40C40 42.7614 37.7614 45 35 45H15C12.2386 45 10 42.7614 10 40V5Z"
          fill="#84CC16"
        />
        {/* White tie-like shape */}
        <path
          d="M25 5L32 20V35L25 40L18 35V20L25 5Z"
          fill="white"
          stroke="#E5E7EB"
          strokeWidth="1"
        />
        {/* Top leaves */}
        <path d="M25 5C23 3 21 4 20 6Z" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
        <path d="M25 5C27 3 29 4 30 6Z" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
        <path d="M25 5C25 3 25 4 25 6Z" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />

        {/* Small flower inside */}
        <path d="M24 32 L26 32 L25 31 Z" fill="#4B5563"/>
        <path d="M24 33 L26 33 L25 34 Z" fill="#4B5563"/>
        <path d="M24.5 31.5 L24.5 33.5 L25.5 32.5 Z" fill="#4B5563"/>
        <path d="M25.5 31.5 L25.5 33.5 L24.5 32.5 Z" fill="#4B5563"/>
        
        {/* Fields at the bottom */}
        <path d="M15 45C18 42, 22 42, 25 45" stroke="#84CC16" strokeWidth="1.5" fill="none" />
        <path d="M20 45C23 42, 27 42, 30 45" stroke="#84CC16" strokeWidth="1.5" fill="none" />
        <path d="M25 45C28 42, 32 42, 35 45" stroke="#84CC16" strokeWidth="1.5" fill="none" />

        {/* Text */}
        <text
          x="50"
          y="20"
          fontFamily="serif"
          fontSize="20"
          fill="black"
        >
          Serat
        </text>
        <text
          x="50"
          y="40"
          fontFamily="serif"
          fontSize="22"
          fontWeight="bold"
          fill="black"
        >
          Nusantara
        </text>
         {/* Leaf on top of 't' */}
        <path d="M102 4 C104 2, 105 3, 106 5Z" fill="#84CC16" />
        <path d="M102 4 C100 2, 99 3, 98 5Z" fill="#84CC16" />

        {/* Green line */}
        <line x1="40" y1="38" x2="180" y2="38" stroke="#84CC16" strokeWidth="2" />
      </svg>
    </div>
  );
}
