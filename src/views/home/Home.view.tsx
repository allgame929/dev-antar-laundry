import React from 'react'
import s from "./Home.module.scss"
import Navbar from '@/components/atoms/Navbar/Navbar.component'
import Hero from '@/components/organisms/Hero/Hero.component'
import Dashboard from '@/components/organisms/Dashboard/Dashboard.component'
import Service from '@/components/organisms/Service/Service.component'


const HomeView = () => {
    return (
        <div className={s._Container}>
            <div className={s.__Row}>
                <Navbar/>
                <Hero
                custName="Dave"
                />
                <Dashboard
                custPoint={2500}
                custSaldo={5000}
                />
                <Service/>
            </div>
        </div>
    )
}

export default HomeView