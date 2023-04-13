import { OCard } from "./Order.types"
import { FC } from "react"
import o from "./Order.module.scss"
import Image from "next/image"
import Icon from "@/components/atoms/Icon/";

const Order: FC<OCard> = (props) => {
    const {} = props
  return (
    <div className={o._Container}>
        <div className={o.__Row}>
            <h2>Order Active</h2>
            <div className={o._Col}>
                <p>content</p>
            </div>
        </div>
    </div>
  )
}

export default Order