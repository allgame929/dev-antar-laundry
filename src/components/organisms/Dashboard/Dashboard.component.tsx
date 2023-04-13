import { DCard } from "./Dashboard.types"
import { FC } from "react"
import d from "./Dashboard.module.scss"
import Icon from "@/components/atoms/Icon/";

const Dashboard: FC<DCard> = (props) => {
    const { custPoint, custSaldo } = props
  return (
    <div className={d._Container}>
        <div className={d.__Row}>
            <div className={d._Col__Info}>
                <h2>Saldo : {custSaldo}</h2>
                <h2>Point : {custPoint}</h2>
            </div>
            <div className={d._Col__Service}>
                <div className={d._Income}>
                    <Icon
                        iconName="Income"
                        width={60}
                        className="Dashboard_Icon"
                    />
                    <p>Points</p>
                </div>
                <div className={d._Wallet}>
                    <Icon
                        iconName="Wallet"
                        width={60}
                        className="Dashboard_Icon"
                    />
                    <p>Top-up</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Dashboard