import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <g clipPath="url(#close-icon)">
      <path
        fill="#fff"
        d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z"
      />
    </g>

    <defs>
      <clipPath id="close-icon">
        <rect width={24} height={24} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
