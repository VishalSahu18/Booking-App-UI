import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  console.log(location);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer flex justify-center mt-[20px]">
        <div className="listWrapper w-full max-w-full flex gap-5 ">
          <div className="listSearch flex-1 bg-[#febb02] p-[10px] rounded-[10px] sticky top-3 h-max">
            <h1 className="lsTitle text-[20px] text-[#555] mb-[10px]">
              Search
            </h1>
            <div className="lsItem flex flex-col gap-1 mb-[10px]">
              <label className="text-[12px]">Destination</label>
              <input
                type="text"
                className="h-8 border-none p-1"
                placeholder={destination}
              />
            </div>
            <div className="lsItem flex column gap-1 mb-[10px]">
              <label className="text-[12px]">Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="h-8 p-1 bg-white flex items-center cursor-pointer"
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions p-[10px]">
                <div className="lsOptionItem flex justify-between mb-[10px] text-[#555] text-[12px]">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput w-[50px]"></input>
                </div>
                <div className="lsOptionItem flex justify-between mb-[10px] text-[#555] text-[12px]">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput w-[50px]"></input>
                </div>
                <div className="lsOptionItem flex justify-between mb-[10px] text-[#555] text-[12px]">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput w-[50px]"
                    placeholder={options.adult}
                  ></input>
                </div>
                <div className="lsOptionItem flex justify-between mb-[10px] text-[#555] text-[12px]">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput w-[50px]"
                    placeholder={options.children}
                  ></input>
                </div>
                <div className="lsOptionItem flex justify-between mb-[10px] text-[#555] text-[12px]">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput w-[50px]"
                    placeholder={options.room}
                  ></input>
                </div>
              </div>
            </div>
            <button className="p-[10px] bg-[#0071c2] text-white border-none w-full font-medium">
              Search
            </button>
          </div>
          <div className="listResult flex-3">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
