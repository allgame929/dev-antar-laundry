import { FC, useState } from "react"
import { BCard } from "./Navbar.types"
import s from "./Navbar.module.scss"
import Image from "next/image"

const Navbar: FC<BCard> = (props) => {
    const [open,setOpen] = useState(true)
    const toggleMenu = () => {
        setOpen(!open)
    }

    const {
        navbarTitle,
    }= props

    return (
        <div className={s._Container}>
            <div className={s.__Row}>
                <div className={s._Col__Logo}>
                    <h2>{navbarTitle}</h2>
                </div>
                <div className={s._Col__Menu}>
                    <button className={s._toggleBtn} onClick={toggleMenu}>
                        {open ? (
                            <Image
                                src={"/menuLogo.svg"}
                                alt="hamburger menu"
                                width={25}
                                height={25}
                            /> 
                        ) : (
                            <Image
                                src={"/closebtn.svg"}
                                alt="hamburger menu"
                                width={25}
                                height={25}
                            /> 
                        )
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar