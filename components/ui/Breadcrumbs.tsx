"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.replaceAll("/", " ").trim().split(" ");
  const upperCasePaths = paths.map((path, index) => {
    if (index === paths.length - 1) {
      return (
        <strong key={index}>
          {path.charAt(0).toUpperCase() + path.slice(1)}
        </strong>
      );
    } else {
      return (
        <span key={index}>
          {path.charAt(0).toUpperCase() + path.slice(1) + " >> "}
        </span>
      );
    }
  });

  return (
    <div className="bg-primary-background px-4 pt-4 lg:px-14">
      {upperCasePaths}
    </div>
  );
}
