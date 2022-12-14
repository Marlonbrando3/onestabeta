import { useRouter } from 'next/router'
import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../pages/_app'


export default function MobileFilters() {

  const router = useRouter();

    const {searchShow,setSearchShow,showSearchComponentsOnMobile,setShowSearchComponentsOnMobile} = useContext(AppContext)

    const handleShowMobileFilters = () => {
        setShowSearchComponentsOnMobile(showSearchComponentsOnMobile => !showSearchComponentsOnMobile)
      }
      let filters;
      if(router.asPath.includes("page")){
        filters = 1
      } else {
          filters = 0;
      }

      console.log(router.asPath)

    
  return (
        <div className={filters===1 ? "bg-white rounded-md px-2 pt-1 ml-4 w-26 mr-4 z-0 md:hidden fixed top-14 right-0 visible": "hidden"} onClick={handleShowMobileFilters}>
              <p className="visible cursor-pointer">Filtry</p>
        </div>
  )
}
