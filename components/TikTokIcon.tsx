import React from 'react';

interface TikTokIconProps {
  className?: string;
}

export function TikTokIcon({ className = "w-5 h-5" }: TikTokIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.269-1.94-1.269-3.338h-2.972v14.924c0 1.507-1.223 2.73-2.73 2.73s-2.73-1.223-2.73-2.73 1.223-2.73 2.73-2.73c.284 0 .557.044.815.126V10.35a5.731 5.731 0 0 0-.815-.059c-3.167 0-5.73 2.563-5.73 5.73s2.563 5.73 5.73 5.73 5.73-2.563 5.73-5.73V8.797a9.208 9.208 0 0 0 5.362 1.696v-2.972a6.194 6.194 0 0 1-2.541-1.959z"/>
    </svg>
  );
}