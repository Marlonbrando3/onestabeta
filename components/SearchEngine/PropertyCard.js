import Image from "next/image";
import Link from 'next/link';
import {useRouter} from 'next/router';
import { useState, useContext } from "react";
import Localization from '@mui/icons-material/Room';
import AirlineSeatIndividualSuiteOutlinedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined';
import ShowerOutlinedIcon  from '@mui/icons-material/ShowerOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import img from "../images/2_max.jpeg";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ResultsSlider from "./ResultsSlider";
import ShareIcon from '@mui/icons-material/Share';


export default function PropertyCard({
  actualSite,
  property, 
  choosedCountry,
  images, 
  country, 
  city,
  beds,
  baths,
  region, 
  price,
}) {

    const router = useRouter();
    // const propertyNew = useContext(PropertyContext)

    const PriceOneE = price.toString();
    const PriceOne = PriceOneE.slice(0,3)
    const PriceTwoE = price.toString();
    const PriceTwo = PriceTwoE.slice(3,6);

  return (
    <div className="flex relative flex-col md:flex-row bg-gray-300 w-12/12 md:h-56 lg:h-72 mb-4 md:mx-auto mx-2 rounded-md overflow-hidden">
      <div className="md:w-6/12 w-full h-full flex items-center justify-center text-4xl">
        <ResultsSlider 
          property={property}
          country={property.country}
          choosedCountry={choosedCountry}
          actualSite={actualSite}
          images={images}
          />
      </div>
      {/* <span className="flex justify-center absolute m-1 p-1 rounded-3xl right-0 top-0 cursor-pointer"><ShareIcon /></span> */}
      <Link href={`/${property.country}/${property.id}&${property.title.replaceAll(' ','-')}`}>
      <div className='flex flex-col md:w-1/2 w-full bg-white cursor-pointer'>
          <div className='flex p-2 w-full h-10 items-center'>
            <Localization className='mr-2 w-3 md:block md:w-6 md:h-5 lg:mt-6 lg:w-5 h-22'/>
            <p className="lg:text-md pl-1 lg:pt-6 text-xs lg:leading-5 md:text-lg p-0 md:leading-3 leading-3">{country} <span className="text-xs font-bold">{region}</span><br></br> {city}</p>
          </div>
          <div className='w-full md:h-80 lg:leading-6 lg:pl-8 lg:pt-6 pr-12 md:leading-5 leading-auto md:text-xl text-xl pl-8 pt-2 font-bold'>
            <p>{property.title}</p>
          </div>
          <div className='flex items-center w-full h-14 lg:h-14'>
            <div className='flex flex-col items-center justify-center w-3/12 border-2 bg-white md:p-1'>
                <p className='w-full text-center hidden lg:block text-sm'>Sypilanie</p>
              <div className='flex md:flex-col h-14 lg:flex-row items-center justify-center'>
                <AirlineSeatIndividualSuiteOutlinedIcon className="w-2/5 md:w-3 pr-1 lg:w-8 md:h-6 h-14 md:py-0"/>
                <div className='flex items-center font-semibold h-14 text-base lg:text:xl pl-0 lg:pl-2'>{beds}</div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center w-3/12 border-2 bg-white md:p-1'>
                <p className='w-full text-center hidden lg:block text-sm'>Łazienki</p>
                <div className='flex md:flex-col h-14 items-center lg:flex-row justify-center'>
                  <ShowerOutlinedIcon className="w-2/5 md:w-3 lg:w-8 md:h-6 h-14 md:py-0"/>
                  <div className='flex items-center font-semibold h-14 text-base lg:text:xl pl-0 lg:pl-2'>{baths}</div>
               </div>
            </div>
            {/* <div className='flex flex-col items-center justify-center lg:block md:hidden w-2/6 h-16 border-2 bg-white p-1'>
                <p className='w-full text-center text-sm'>Do plazy</p>
              <div className='flex items-center justify-center'>
                <WavesOutlinedIcon
               />
               <p className='font-semibold pl-2'>450 m</p>
               </div>
            </div> */}
            <div className='flex flex-col items-center justify-center w-3/12 border-2 bg-white md:p-1'>
                <p className='w-full text-center hidden lg:block text-sm'>Basen</p>
                <div className='flex md:flex-col h-14 items-center lg:flex-row justify-center'>
                  <PoolOutlinedIcon className="w-2/5 md:w-3 lg:w-8 md:h-6 h-14 md:py-0"/>
                  <div className='flex items-center font-semibold h-14 text-base lg:text:xl pl-0 lg:pl-2'>tak</div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-3/12 border-2 bg-white md:p-1'>
                <p className='w-full text-center hidden lg:block text-sm'>Pow. uzyt.</p>
              <div className='flex items-center h-14 md:flex-col lg:flex-row justify-center relative'>
                <OtherHousesIcon className="w-2/5 md:w-3 lg:w-8 md:h-6 h-14 md:py-0"  />
                <div className='flex items-center font-semibold h-14 text-base lg:text:xl pl-0 lg:pl-2'>20m<span className='text-xs absolute -mt-5 ml-8'>2</span></div>
               </div>
            </div>
          </div>
          <div className='bg-red-500 lg:h-52 md:h-32 h-12 flex items-center justify-between text-darkblue text-2xl px-3 font-semibold'>
            <span className="ml-1 text-white md:text-2xl sm:text-xl text-2xl lg:text-3xl ">od {PriceOne} {PriceTwo} €</span>
          </div>
        </div>
      </Link>
    </div>
    
  )
}
