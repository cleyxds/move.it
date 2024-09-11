import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#check-icon)">
      <path
        fill="#4CD62B"
        d="M10 1.667A8.336 8.336 0 0 0 1.667 10c0 4.6 3.733 8.333 8.333 8.333S18.333 14.6 18.333 10 14.6 1.667 10 1.667Zm-1.667 12.5L4.166 10l1.175-1.175 2.992 2.983 6.325-6.325 1.175 1.184-7.5 7.5Z"
      />
    </g>
    <defs>
      <clipPath id="check-icon">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
