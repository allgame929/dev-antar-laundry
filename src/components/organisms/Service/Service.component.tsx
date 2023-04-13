import { SCard } from "./Service.types"
import { FC } from "react"
import s from "./Service.module.scss"
import Image from "next/image"
import Icon from "@/components/atoms/Icon/";

const Service: FC<SCard> = (props) => {
  return (
    <div className={s._Container}>
      <div className={s.__Row}>
        <h2>Our Services</h2>
        <div className={s._Col__First}>
          <div className={s._Kiloan}>
            <Icon
                iconName="WeightScale"
                width={60}
                className="Service Icon"
            />
            <p>Kiloan</p>
          </div>
          <div className={s._Satuan}>
            <Icon
                iconName="Clothing"
                width={60}
                className="Service Icon"
            />
            <p>Satuan</p>
          </div>
          <div className={s._Vip}>
            <Icon
                iconName="Dres"
                width={60}
                className="Service Icon"
            />
            <p>VIP</p>
          </div>
        </div>
        <div className={s._Col__Second}>
          <div className={s._Karpet}>
            <Icon
                iconName="Carpet"
                width={60}
                className="Service Icon"
            />
            <p>Karpet</p>
          </div>
          <div className={s._Setrika}>
            <Icon
                iconName="Iron"
                width={60}
                className="Service Icon"
            />
            <p>Setrika</p>
          </div>
          <div className={s._Ekspress}>
            <Icon
                iconName="Express"
                width={60}
                className="Service Icon"
            />
            <p>Express</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service