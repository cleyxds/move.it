import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      stroke="#666"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      opacity={0.5}
    >
      <path d="M16 20a9.333 9.333 0 1 0 0-18.667A9.333 9.333 0 0 0 16 20Z" />
      <path d="M10.947 18.52 9.334 30.667l6.666-4 6.667 4-1.614-12.16" />
    </g>
  </svg>
)

export default SvgComponent
