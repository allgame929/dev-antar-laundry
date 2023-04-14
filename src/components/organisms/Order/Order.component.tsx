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
            <div className={o._Col__Done}>
                <Icon
                    iconName="Machine"
                    width={60}
                    className="Order Icon"
                />
                <div className={o._Desc}>
                    <h3>Order No.0002142</h3>
                    <p>Done</p>
                </div>
            </div>
            <div className={o._Col__Process}>
                <Icon
                    iconName="Machine"
                    width={60}
                    className="Order Icon"
                />
                <div className={o._Desc}>
                    <h3>Order No.0002142</h3>
                    <p>Progres</p>
                </div>
            </div>
            <div className={o._Col__Active}>
                <Icon
                    iconName="Machine"
                    width={60}
                    className="Order Icon"
                />
                <div className={o._Desc}>
                    <h3>Order No.0002142</h3>
                    <p>Active</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order