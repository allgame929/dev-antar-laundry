import { FC, useState } from "react"
import { BCard } from "./Navbar.types"
import s from "./Navbar.module.scss"
import Image from "next/image"
import Link from 'next/link';
import Button from "@/components/atoms/Button/Button.component"


const Navbar: FC<BCard> = (props) => {
    const [login,setLogin] = useState(true)
    const toggleLogin = () => {
        setLogin(!open)
    }

    const {    }= props

    return (
        <div className={s._Container}>
            <div className={s.__Row}>
                <div className={s._Col__Logo}>
                    <Image
                        src="/imageAntarLaundry.svg"
                        alt="hamburger menu"
                        width={125}
                        height={85}
                    /> 
                </div>
                <div className={s._Col__Menu}>
                    <button className={s._toggleBtn} onClick={toggleLogin}>
                        {login ? (
                            <div className={s._registered}>
                                <Button
                                    buttonTitle="Login"
                                    buttonUrl="/auth/login"
                                    className="buttonLogin"
                                /> 
                                <Button
                                    buttonTitle="SignUp"
                                    buttonUrl="/auth/sign-up"
                                    className="buttonSignup"
                                /> 
                            </div>
                            
                        ) : (
                            <Button
                                buttonTitle="Logout"
                                buttonUrl="/"
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