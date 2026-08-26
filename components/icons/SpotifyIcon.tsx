import React from "react";

interface SpotifyIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function SpotifyIcon({
  size = 20,
  className = "",
  color = "#ffffff",
}: SpotifyIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      style={{
        fill: color,
        stroke: "none",
        strokeWidth: 0,
        display: "inline-block",
        flexShrink: 0,
        verticalAlign: "middle",
      }}
      aria-hidden="true"
    >
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.306c-.216.353-.678.468-1.03.252-2.824-1.725-6.378-2.115-10.563-1.159-.404.093-.807-.163-.9-.567-.093-.404.163-.807.567-.9 4.582-1.047 8.513-.604 11.674 1.344.352.216.468.678.252 1.03zm1.464-3.254c-.272.443-.852.585-1.295.313-3.233-1.987-8.161-2.563-11.986-1.402-.497.151-1.024-.134-1.175-.631-.151-.497.134-1.024.631-1.175 4.372-1.327 9.805-.683 13.512 1.599.443.272.585.852.313 1.296zm.126-3.39c-3.876-2.302-10.274-2.514-13.987-1.387-.595.181-1.226-.157-1.407-.752-.181-.595.157-1.226.752-1.407 4.267-1.296 11.332-1.046 15.795 1.603.535.318.709 1.012.391 1.547-.318.535-1.012.709-1.544.396z"
        fill={color}
        style={{ fill: color, stroke: "none", strokeWidth: 0 }}
      />
    </svg>
  );
}
