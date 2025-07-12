import * as React from "react";
import { SVGProps } from "react";

const DiscordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-message-circle"
    {...props}
  >
    <title>Discord</title>
    <path d="M7.9,20.1c0,0-0.4-0.7-0.7-1.4C6.5,18.1,5.7,17.1,5,16.2c-1.5-1.9-2-4-1.5-6.1C3.8,8,4.6,6,6.1,4.7 c1.1-1,2.4-1.6,3.9-1.9C10.7,2.8,11.3,2.7,12,2.7s1.3,0.1,1.9,0.2c1.5,0.3,2.8,0.9,3.9,1.9c1.5,1.3,2.3,3.3,2.6,5.4 c0.3,2.1-0.1,4.2-1.5,6.1c-0.7,0.9-1.5,1.9-2.2,2.5c-0.3,0.7-0.7,1.4-0.7,1.4l-0.1,0.2H7.9z M10.2,14.7c0.8,0,1.5-0.7,1.5-1.5 s-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5S9.4,14.7,10.2,14.7z M15.3,14.7c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5c-0.8,0-1.5,0.7-1.5,1.5 S14.5,14.7,15.3,14.7z" />
  </svg>
);

export default DiscordIcon;
