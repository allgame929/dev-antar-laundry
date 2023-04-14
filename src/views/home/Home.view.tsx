import React from 'react'
import s from "./Home.module.scss"
import Navbar from '@/components/atoms/Navbar/Navbar.component'
import Hero from '@/components/organisms/Hero/Hero.component'
import Dashboard from '@/components/organisms/Dashboard/Dashboard.component'
import Service from '@/components/organisms/Service/Service.component'
import Order from '@/components/organisms/Order/Order.component'
import Footer from '@/components/organisms/Footer/Footer.component'


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
                <Order/>
                <Footer/>
            </div>
        </div>
    )
}

export default HomeView