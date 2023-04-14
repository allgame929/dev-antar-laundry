import { FC } from "react"
import { ICard } from "./Icon.types"
import i from "./Icon.module.scss"
import Icons from "./Icons"

const Icon: FC<ICard> = ({
        iconName,
        size = 60,
        color = "inherit",
        width = size,
        height = size,
        className = "",
 }) => {

     return (
     <div 
     className={[i._Container, className].join(" ")}
     style={{
         color,
                width: width,
                height: height,
            }}
        >
           {Icons[iconName]}
        </div>
      )
 }


export default Icon