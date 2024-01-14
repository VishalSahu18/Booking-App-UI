import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/propertyList'
import FeatureProperties from '../../components/featuredProperties/FeatureProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer mt-[50px] flex items-center gap-7 flex-col">
        <Featured/>
        <h1 className="homeTitle text-4xl font-bold w-full">Browse by property type</h1>
        <PropertyList/>
        <h1 className='homeTitle text-4xl font-bold w-full'>Home guest love</h1>
        <FeatureProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
