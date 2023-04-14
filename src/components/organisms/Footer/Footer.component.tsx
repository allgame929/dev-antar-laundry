import { FCard } from "./Footer.types"
import { FC } from "react"
import f from "./Footer.module.scss"
import Icon from "@/components/atoms/Icon/";
import Link from "next/link"

const Footer: FC<FCard> = (props) => {
  return (
    <div className={f._Container}>
        <div className={f.__Row}>
            
            <Link href="/">
                <div className={f._Col__Home}>
                    <Icon
                        iconName="Dashboard"
                        width={30}
                        height={30}
                    />
                    <p>Home</p>
                </div>
            </Link>
            
            <Link href="#OrderSection">
                <div className={f._Col__Order}>
                    <Icon
                        iconName="Order"
                        width={30}
                        height={30}
                    />
                    <p>Orders</p>
                </div>
            </Link>

            <Link href="/">
                <div className={f._Col__Account}>
                    <Icon
                        iconName="Account"
                        width={30}
                        height={30}
                    />
                    <p>Profile</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Footer