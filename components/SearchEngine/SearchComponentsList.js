import { useState, useRef, createContext } from "react";
// import CitySearch from "./CitySearch/CitySearch";
import RegionSearch from "./RegionSearch/RegionSearch";
import RegionChoosed from "./RegionSearch/RegionChoosed";
import TypeSearch from "./TypeSearch/TypeSearch";
import TypeChoosed from "./TypeSearch/TypeChoosed";
import CountrySearchInSearchEngine  from "../CountrySearchInSearchEngine";
import Offersparameters from "./SearchparametrsCheckbox/Offersparameters";
import Pool from '@mui/icons-material/Pool';
import Parking from '@mui/icons-material/DirectionsCar';
import Garden from '@mui/icons-material/LocalFlorist';
import PriceSearch from './PriceSearch/PriceSearch';
import Solarium from '@mui/icons-material/SolarPower';
import Balcony from '@mui/icons-material/Balcony';
import Range from './Searange/Searange'
import Beds from './Bedrooms/BedSearch'
import Baths from './Bathrooms/BathSearch';
import Applychanges from "./Applychanges";
import Seaview from '@mui/icons-material/Houseboat';
import { AppContext } from "../../pages/_app";
import { useContext } from "react";
import { useEffect } from "react";

export const SearchComponentsContext = createContext();

export default function SearchInput({
  ActualCountry,
  setActualCountry,
  TypeList,
  choosedTypes,
  setChoosedTypes,
  setTypeList,
  activeTypeList,
  setActiveTypeList,
  choosedRegion,
  setChoosedRegion,
  countryPlaceHolder,
  setCountryPlaceHolder,
  choosedCountry,
  setChoosedCountry,
  countries,
  setCountries,
  countryInput,
  actualSite,
  setActualSite,
  activeRegionList,
  setActiveRegionList,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  bathMin,
  bathMax,
  setBathMin,
  setBathMax,
  bedMin,
  bedMax,
  setBedMin,
  setBedMax,
  seaMax,
  setSeaMax,
  query,
  setQuery,
  searchConditions,
  setSearchConditions, 
  apply,
  setApply,
}) {

  const {aprove, setAprove, showSearchComponentsOnMobile, setShowSearchComponentsOnMobile, searchShow, setSearchShow} = useContext(AppContext)

  const handleShowMobileFilters = () => {
    setShowSearchComponentsOnMobile(showSearchComponentsOnMobile => !showSearchComponentsOnMobile)
  }

  const ShowPopUpChangedApply = useRef();

  const ShowChangedAreApply = () => {
    console.log("dzia??a")
    ShowPopUpChangedApply.current.style.display = "block"
    setTimeout(() => {

    ShowPopUpChangedApply.current.style.display = "none"
    },1500)
  };

  return (
    <>
    <div ref={ShowPopUpChangedApply} className="bg-green-700 transition fixed z-40 bottom-10 right-2 text-white px-3 rounded-sm hidden">Zmiany wprowdzone!</div>
    <div className={showSearchComponentsOnMobile ?
        "transition-all absolute duration-700 top-0 w-screen pt-8 z-30 bg-white p-1 md:h-auto h-[1050px]":
        "transition-all duration-700 absolute disable hidden -top-screen flex-col items-center justify-center md:w-2/12 md:flex md:static"}>
      <div className="border-2 border-red-600 bg-white  px-2 pt-1 m-4 w-26 z-40 block md:hidden fixed top-0 right-0" onClick={handleShowMobileFilters}>
          <p className="visible cursor-pointer">X</p>
    </div>
        <form className="flex flex-col m-auto justify-start items-center bg-white rounded-md h-auto p-1 mb-60 lg:w-11/12 w-10/12">
        <SearchComponentsContext.Provider value={{ShowChangedAreApply}}>
          <div className="InputsStyleContainer w-11/12 lg:w-11/12 md:w-11/12">
            <p>Kraj</p>
            <div className="InputsStyle m-auto w-full">
            <CountrySearchInSearchEngine
              ActualCountry={ActualCountry}
              setActualCountry={setActualCountry}
              countries={countries}
              setCountries={setCountries}
              choosedCountry={choosedCountry}
              setChoosedCountry={setChoosedCountry}
              choosedTypes={choosedTypes}
              setChoosedTypes={setChoosedTypes}
              choosedRegion={choosedRegion}
              setChoosedRegion={setChoosedRegion}
              actualSite={actualSite}
              setActualSite={setActualSite}
            /> 
            </div>
          </div>
          <div className="InputsStyleContainer w-11/12 lg:w-11/12 md:w-11/12">
            <p className="font-lg">Region</p>
            <RegionChoosed
              apply={apply}
              setApply={setApply}
              choosedRegion={choosedRegion}
              setChoosedRegion={setChoosedRegion}
              countryPlaceHolder={countryPlaceHolder}
              setCountryPlaceHolder={setCountryPlaceHolder}
              choosedCountry={choosedCountry}
              setChoosedCountry={setChoosedCountry}
              countries={countries}
              setCountries={setCountries}
            />
          <div className="InputsStyle m-auto w-full my-1">
            <RegionSearch
              choosedRegion={choosedRegion}
              setChoosedRegion={setChoosedRegion}
              countryPlaceHolder={countryPlaceHolder}
              setCountryPlaceHolder={setCountryPlaceHolder}
              choosedCountry={choosedCountry}
              setChoosedCountry={setChoosedCountry}
              searchShow={searchShow}
              setSearchShow={setSearchShow}
              countries={countries}
              setCountries={setCountries}
              countryInput={countryInput}
              activeRegionList={activeRegionList}
              setActiveRegionList={setActiveRegionList}
              apply={apply}
              setApply={setApply}

            />
          </div></div>
          {/* <div className="InputsStyleContainer">
            <p>Wybierz miasto:</p>
            <div className="InputsStyle">
            <CitySearch
              countryPlaceHolder={countryPlaceHolder}
              setCountryPlaceHolder={setCountryPlaceHolder}
              choosedCountry={choosedCountry}
              setChoosedCountry={setChoosedCountry}
              searchShow={searchShow}
              setSearchShow={setSearchShow}
              countries={countries}
              setCountries={setCountries}
              countryInput={countryInput}
              activeCountryList={activeCountryList}
              setActiveCountryList={setActiveCountryList}
              choosedRegion={choosedRegion}
              setChoosedRegion={setChoosedRegion}
            />
            <ChoosedCity 
              countryPlaceHolder={countryPlaceHolder}
              setCountryPlaceHolder={setCountryPlaceHolder}
              choosedCountry={choosedCountry}
              setChoosedCountry={setChoosedCountry}
              countries={countries}
              setCountries={setCountries}
              choosedRegion={choosedRegion}
              setChoosedRegion={setChoosedRegion}
            />
          </div></div> */}
          <div className="InputsStyleContainer w-11/12 lg:w-11/12 md:w-11/12">
            <p className="h-6">Typ nieruchomo??ci</p>
            <TypeChoosed
                  apply={apply}
                  setApply={setApply}
                  TypeList={TypeList}
                  choosedTypes={choosedTypes}
                  setChoosedTypes={setChoosedTypes}
                  setTypeList={setTypeList}
                  activeTypeList={activeTypeList}
                  setActiveTypeList={setActiveTypeList}
                  query={query}
                  setQuery={setQuery} 
            />
          <div className="InputsStyle w-full m-auto md:w-full my-1">
               <TypeSearch
                  apply={apply}
                  setApply={setApply}
                  TypeList={TypeList}
                  choosedTypes={choosedTypes}
                  setChoosedTypes={setChoosedTypes}
                  setTypeList={setTypeList}
                  activeTypeList={activeTypeList}
                  setActiveTypeList={setActiveTypeList}
                  query={query}
                  setQuery={setQuery}
                />
          </div></div>
          <div className="InputsStyleContainer w-11/12 lg:w-11/12 md:w-11/12">
            <p>Cena (???)</p>
              {/* <div className="InputsStyle w-12 m-auto md:w-full"> */}
                <PriceSearch 
                 priceMin={priceMin}
                 setPriceMin={setPriceMin}
                 priceMax={priceMax}
                 setPriceMax={setPriceMax}
                 searchConditions={searchConditions}
                 setSearchConditions={setSearchConditions}
                 apply={apply}
                 setApply={setApply}
                />
              {/* </div> */}
            </div>
              <div className="InputsStyleContainer w-11/12 lg:w-11/12 md:w-11/12">
            <p>Liczba ??azienek</p>
                <Baths
                  bathMin={bathMin}
                  bathMax={bathMax}
                  setBathMax={setBathMax}
                  setBathMin={setBathMin}
                  apply={apply}
                  setApply={setApply}
                />
              </div>
            <div className="InputsStyleContainer w-11/12 lg:w-11/12 md:w-11/12">
            <p>Liczba ??????ek</p>
                <Beds
                  bedMin={bedMin}
                  bedMax={bedMax}
                  setBedMax={setBedMax}
                  setBedMin={setBedMin}
                  apply={apply}
                  setApply={setApply} />
              </div>
              <div className="InputsStyleContainer w-11/12 lg:w-11/12 md:w-11/12">
            <p>Dystans do morza</p>
                <Range
                  apply={apply}
                  setApply={setApply}
                  seaMax={seaMax}
                  setSeaMax={setSeaMax}
              />
              </div>
          <div className="InputsStyleContainer w-11/12 lg:w-11/12 md:w-11/12">
          <h1 className="font-bold mt-7">Rynek</h1>
              <Offersparameters 
                name="firstmarket"
                title={"Pierwotny"}
                />
              <Offersparameters 
                name="secondarymarket"
                title={"Wt??rny"}
                />
            <h1 className="font-bold mt-7">Parametry oferty</h1>
              <Offersparameters
                name="pool"
                IconName={<Pool className="IconsByChoosing"/>}
                title={"Basen"}
                 />
              <Offersparameters 
                name="seaview"
                IconName={<Seaview className="IconsByChoosing"/>}
                title={"Widok na morze"}
                />
              <Offersparameters 
                name="parking"
                IconName={<Parking className="IconsByChoosing"/>} 
                title={"Parking"}
                />
              <Offersparameters 
                name="garden"
                IconName={<Garden className="IconsByChoosing"/>}
                title={"Ogr??dek"}
                />
              <Offersparameters 
                name="solarium"
                IconName={<Solarium className="IconsByChoosing"/>}
                title={"Solarium"}
                />
              <Offersparameters 
                name="balcony"
                IconName={<Balcony className="IconsByChoosing"/>}
                title={"Balkon"}
              />
            </div>
            </SearchComponentsContext.Provider>
          </form>
    </div>
    </>
  )
}
