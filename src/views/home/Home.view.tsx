import React from 'react'
import s from "./Home.module.scss"
import Navbar from '@/components/atoms/Navbar/Navbar.component'

const HomeView = () => {
    return (
        <div className={s._Container}>
            <div className={s.__Row}>
                <Navbar
                    navbarTitle='Navbar Component'
                />
            </div>
        </div>
    )
}

export default HomeView