import { SCard } from "./Service.types"
import { FC } from "react"
import s from "./Service.module.scss"

const Service: FC<SCard> = (props) => {
  return (
    <div className={s._Container}>
      <div className={s.__Row}>
        <div className={s._Col}></div>
      </div>
    </div>
  )
}

export default Service