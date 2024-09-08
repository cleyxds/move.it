import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#5965E0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m4 12 12-9.333L28 12v14.667a2.667 2.667 0 0 1-2.667 2.666H6.667A2.667 2.667 0 0 1 4 26.667V12Z"
    />
    <path
      stroke="#5965E0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M12 29.333V16h8v13.333"
    />
  </svg>
)

export default SvgComponent
