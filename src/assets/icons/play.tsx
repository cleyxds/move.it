import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="#fff" d="M8 5v14l11-7L8 5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={24} height={24} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
