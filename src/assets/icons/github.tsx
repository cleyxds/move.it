import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#B3B9FF"
        d="M20 .833c11.05 0 20 8.8 20 19.654 0 8.685-5.73 16.05-13.675 18.646-1 .185-1.367-.423-1.367-.945 0-.466.017-1.703.025-3.341 5.564 1.185 6.737-2.637 6.737-2.637.91-2.268 2.225-2.875 2.225-2.875 1.812-1.218-.14-1.193-.14-1.193-2.008.136-3.063 2.025-3.063 2.025-1.784 3.005-4.682 2.136-5.825 1.635-.18-1.272-.695-2.137-1.267-2.629 4.442-.491 9.11-2.181 9.11-9.711 0-2.145-.775-3.899-2.058-5.274.225-.496.9-2.495-.175-5.201 0 0-1.675-.527-5.5 2.015-1.6-.437-3.3-.654-5-.664-1.7.01-3.4.227-5 .664-3.8-2.542-5.475-2.015-5.475-2.015-1.075 2.706-.4 4.705-.2 5.201-1.275 1.375-2.05 3.129-2.05 5.274 0 7.55 4.675 9.211 9.125 9.695-.7.59-1.35 1.795-1.35 3.636 0 2.63.025 4.744.025 5.382 0 .515-.35 1.13-1.375.933C5.725 36.528 0 29.158 0 20.487 0 9.633 8.955.833 20 .833Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M40 0H0v40h40z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
