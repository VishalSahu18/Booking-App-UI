

const SearchItem = () => {
  return (
    <div className="searchItem border-solid border-[lightgray] border-[1px] p-[10px] rounded-[5px] flex justify-between gap-5 mb-5">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg w-[200px] h-[200px] object-cover"
      />
      <div className="siDesc flex flex-col gap-[10px] flex-[2]">
        <h1 className="siTitle text-4xl text-[#0071c2]">Tower Street Apartments</h1>
        <span className="siDistance text-[12px]">500m from center</span>
        <span className="siTaxiOp text-[12px] bg-[#008009] text-white w-max p-[3px] rounded-[5px]">Free airport taxi</span>
        <span className="siSubtitle text-[12px] font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures text-[12px]">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp text-[12px] text-[#008009] font-bold">Free cancellation </span>
        <span className="siCancelOpSubtitle text-[12px] text-[#008009]">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails flex-1 flex flex-col justify-between">
        <div className="siRating flex justify-between">
          <span className="font-medium">Excellent</span>
          <button className="bg-[#003580] text-white p-[5px] font-bold border-none">8.9</button>
        </div>
        <div className="siDetailTexts text-right flex flex-col gap-[5px]">
          <span className="siPrice text-[24px]">$112</span>
          <span className="siTaxOp text-[12px] text-[gray]">Includes taxes and fees</span>
          <button className="siCheckButton bg-[#0071c2] text-white font-bold pl-[5px] pr-[5px] pb-[10px] pt-[12px] border-none cursor-pointer rounded-[5px]">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;