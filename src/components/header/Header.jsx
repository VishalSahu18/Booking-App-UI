import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format, set } from "date-fns";
import { useNavigate } from "react-router-dom";
const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [destination ,setDestination] = useState("");
  const [openOptions, setOpenOpentions] = useState(false);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate()

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = ()=>{
      navigate("/hotels",{state: {destination,date,options}});
  };

  return (
    <div className="header bg-[#003580] text-white flex justify-center">
      <div className={` ${type === "list" ? "headerContainer listMode" : "headerContainer w-full mt-5 mb-[100px]"}`}>
        <div className="headerList flex gap-[40px] mb-[50px]">
          <div className="headerListItem flex items-center gap-[10px] cursor-pointer">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem flex items-center gap-[10px] cursor-pointer">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem flex items-center gap-[10px] cursor-pointer">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem flex items-center gap-[10px] cursor-pointer">
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
          </div>
          <div className="headerListItem flex items-center gap-[10px] cursor-pointer">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" &&
          <> 
        <h1 className="headerTitle text-4xl font-bold">
          A lifetime of discounts? It's Genius.
        </h1>
        <p className="headerDesc">
          Get rewarded for your travels unlock instant saving of 10% or more
          with a free Lamabooking account
        </p>
        <button
          className="headerBtn bg-[#0071c2] text-white font-medium cursor-pointer p-[10px] border-none"
          type="button"
        >
          Sign in / Register
        </button>
        <div className="headerSearch h-8 bg-white border-solid border-[3px] text-gray-400 border-[#febb02] flex items-center justify-around pr-3 border-r-[5px] relative bottom-[-25px] w-full max-w-full">
          <div className="headerSearchItem flex items-center gap-[10px]">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput border-none outline-none"
              onChange={e=>setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem flex items-center gap-[10px]">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText text-gray-400 cursor-pointer"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date absolute top-[50px] z-[2]"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem flex items-center gap-[10px]">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={()=>setOpenOpentions(!openOptions)} className="headerSearchText cursor-pointer">{`${options.adult} adult . ${options.children} children ${options.room} room`}</span>
           {openOptions && <div className="options absolute top-[50px] bg-white round z-[2]">
                <div className="optionItem w-[200px] flex justify-between m-[10px]">
                  <span className="optionText ">Adult</span>
                  <div className="optionCounter flex center gap-3 text-[12px] text-black">
                    <button
                      disabled={options.adult < 2}
                      className={`optionCounterButton w-8 h-8 border-[1px] border-solid border-[#0071c2] text-[#0071c2] cursor-pointer ${
      options.adult < 2 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterButton w-8 h-8 border-[1px] border-solid border-[#0071c2] text-[#0071c2] cursor-pointer"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem w-[200px] flex justify-between m-[10px]">
                  <span className="optionText ">Children</span>
                  <div className="optionCounter flex center gap-3 text-[12px] text-black">
                    <button
                      disabled={options.children < 1}
                      className={`optionCounterButton w-8 h-8 border-[1px] border-solid border-[#0071c2] text-[#0071c2] cursor-pointer ${
                        options.children < 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton w-8 h-8 border-[1px] border-solid border-[#0071c2] text-[#0071c2] cursor-pointer"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem w-[200px] flex justify-between m-[10px]">
                  <span className="optionText ">Room</span>
                  <div className="optionCounter flex center gap-3 text-[12px] text-black">
                    <button
                      disabled={options.room < 2}
                      className={`optionCounterButton w-8 h-8 border-[1px] border-solid border-[#0071c2] text-[#0071c2] cursor-pointer ${
                        options.room < 2 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button
                      className="optionCounterButton w-8 h-8 border-[1px] border-solid border-[#0071c2] text-[#0071c2] cursor-pointer"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>}
          </div>
          <div className="headerSearchItem flex items-center gap-[10px]">
            <button className="headerBtn bg-[#0071c2] text-white w-20" onClick={handleSearch}>Search</button>
          </div>
        </div></>}
      </div>
    </div>
  );
};

export default Header;
