import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#D1D5DB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8 16.92 1.48 10.4c-.77-.77-.77-2.03 0-2.8L8 1.08"
    />
  </svg>
)
export { SvgComponent as IPrevPageDisable }
