import * as React from "react";
import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <title>NEXOGEN LABS Logo</title>
    <path d="M12 2l7.79 4.5V17.5L12 22l-7.79-4.5V6.5L12 2z" />
    <path d="M12 2v10l-4 2" />
    <path d="M12 12l4 2" />
    <path d="M12 22v-8" />
    <path d="M6 17.5l-4-2.5" />
    <path d="M18 17.5l4-2.5" />
  </svg>
);

export default Logo;
