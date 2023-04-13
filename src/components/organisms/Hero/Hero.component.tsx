import { FC } from "react"
import { HCard } from "./Hero.types"
import h from "./Hero.module.scss"
import Image from "next/image"

const Hero: FC<HCard> = (props) => {
    const {custName} = props
    return (
        <div className={h._Container}>
            <div className={h.__Row}>
                <div className={h._Col__Text}>
                    <h1>Welcome!</h1>
                    <h2>{custName}</h2>
                </div>
                <div className={h._Col__Image}>
                    <Image
                        src="/Delivery.png"
                        alt="ImageHero"
                        width={250}
                        height={250}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero