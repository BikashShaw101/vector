"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface FooterProps {
  isFavourite: boolean;
  title: string;
  authorLabel: string;
  createdAt: string;
  onClick: () => void;
  disabled: boolean;
}

const Footer = ({
  isFavourite,
  title,
  authorLabel,
  createdAt,
  onClick,
  disabled,
}: FooterProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    onClick();
  };
  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="opacity-0 truncate group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground ">
        {authorLabel} {createdAt}
      </p>
      <button
        title="favourite"
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute right-3 top-3 text-muted-foreground hover:text-blue-600 ",
          disabled && "cursor-pointer opacity-75"
        )}
      >
        <Star
          className={cn(
            "h-4 w-4",
            isFavourite && "fill-blue-600 text-blue-600"
          )}
        />
      </button>
    </div>
  );
};

export default Footer;
