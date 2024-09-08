import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={42}
    fill="none"
    {...props}
  >
    <path
      fill="#5965E0"
      d="M22.241 0h10.44l-8.685 42h-10.44l8.685-42ZM37.56 0H48l-6.767 32.908H30.791L37.56 0ZM6.77 0h10.44l-6.768 32.908H0L6.77 0Z"
    />
  </svg>
)

export default SvgComponent
