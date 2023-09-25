import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#111827"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V15l-4 4v-6.586a1 1 0 0 0-.293-.707L1.293 5.293A1 1 0 0 1 1 4.586V2Z"
    />
  </svg>
)
export { SvgComponent as ICategory }
