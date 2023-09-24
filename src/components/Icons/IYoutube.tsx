import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#111827"
      d="M22.902 3.218a2.86 2.86 0 0 0-2.012-2.025C19.116.714 12 .714 12 .714s-7.116 0-8.89.479a2.86 2.86 0 0 0-2.012 2.025C.622 5.004.622 8.73.622 8.73s0 3.726.476 5.512a2.817 2.817 0 0 0 2.012 1.993c1.774.478 8.89.478 8.89.478s7.116 0 8.89-.478a2.817 2.817 0 0 0 2.012-1.993c.476-1.786.476-5.512.476-5.512s0-3.727-.476-5.513Zm-13.23 8.896V5.347l5.948 3.384-5.947 3.383Z"
    />
  </svg>
)
export { SvgComponent as IYoutube }
