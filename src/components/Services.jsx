import React from 'react'
import assets from '../assets/assets'
import Title from './Title'

const Services = () => {


    const servicesData = [
        {
            title:'Advertising',
            description: 'We trun bold ideas into powerful digital solutins that connect,engage...',
            icon: assets.ads_icon
        },
          {
            title:'Content Marketing',
            description: 'We help you execute your plan and deliverr results.',
            icon: assets.marketing_icon
        },
          {
            title:'Contnet writing',
            description: 'We help you to create a marketing strategy that drives results.',
            icon: assets.content_icon
        },
          {
            title:'Social media',
            description: 'We help you build a strong social media presence and engage with your audience.',
            icon: assets.social_icon
        },
    ]

  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

        <Title title='How can we help?' desc='From strategy to execution we craft digital solutions that move your buissness forward.'/>

        <div className='flex flex-col md:grid grid-cols-2'>
           {servicesData.map((service, index) => (
    <div key={index}>
        <img src={service.icon} alt={service.title} />
        <h2>{service.title}</h2>
        <p>{service.description}</p>
    </div>
))}
        </div>


    </div>
  )
}

export default Services
