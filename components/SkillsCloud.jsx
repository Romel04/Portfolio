"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const slugs = [
  "nextdotjs",
  "react",
  "angular",
  "nodedotjs",
  "express",
  "nestjs",
  "html5",
  "css3",
  "tailwindcss",
  "bootstrap",
  "javascript",
  "typescript",
  "cplusplus",
  "mongodb",
  "mysql",
  "postgresql",
  "git",
  "github",
  "figma",
  "npm",
];

export default function SkillsCloud() {
  const [data, setData] = useState(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchSimpleIcons({ slugs }).then(setData);
  }, []);

  if (!mounted || !data) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const icons = Object.values(data.simpleIcons).map((icon) =>
    renderSimpleIcon({
      icon,
      minContrastRatio: theme === "dark" ? 1.2 : 2,
      bgHex: theme === "dark" ? "#0f172a" : "#ffffff",
      fallbackHex: theme === "dark" ? "#ffffff" : "#000000",
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e) => e.preventDefault(),
      },
    })
  );

  return (
    <div className="flex justify-center items-center w-full max-w-lg mx-auto aspect-square">
      <Cloud {...cloudProps}>
        {icons}
      </Cloud>
    </div>
  );
}
