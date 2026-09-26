import React from 'react'
import { company_logos } from '../assets/assets'

const TrustedBy = () => {
  return (
    <div className='flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white/80'>
        <h3 className='font-semibold'>
            Trusted by Leading Companies
        </h3>

        <div className='flex flex-row space-x-10 flex-wrap gap-10 m-4 justify-center  '>
            {company_logos.map((logo, index) => (
                <img key={index} src={logo} alt="" className='max-h-5 sm:max-h-6 dark:drop-shadow-xl' />
            ))}
        </div>

    </div>
  )
}

export default TrustedBy
