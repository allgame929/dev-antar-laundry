import { FC } from "react"
import { BCard } from "./Button.types"
import b from "./Button.module.scss"
import Link from 'next/link';

const Button: FC<BCard> = (props) => {
    const {buttonTitle, buttonUrl, className} = props
  return (
    <div className={[b._Container, className].join(" ")}>
        <Link href={buttonUrl}>
            {buttonTitle}
        </Link>
    </div>
  )
}

export default Button