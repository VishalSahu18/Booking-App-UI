import React from "react";

const Featured = () => {
  return (
    <div className="featured w-full max-w-full flex content-center gap-5">
      <div className="featuredItem relative text-white rounded-[10px] overflow-hidden h-[250px]">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg w-full object-cover"
        />
        <div className="featuredTitles absolute bottom-5">
          <h1 className="text-4xl font-bold text-white">Dublin</h1>
          <h2 className="text-3xl font-bold text-white">123 properties</h2>
        </div>
      </div>

      <div className="featuredItem relative text-white rounded-[10px] overflow-hidden h-[250px]">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg w-full object-cover"
        />
        <div className="featuredTitles absolute bottom-5">
          <h1  className="text-4xl font-bold">Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem relative text-white rounded-[10px] overflow-hidden h-[250px]">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg w-full object-cover"
        />
        <div className="featuredTitles absolute bottom-5">
          <h1  className="text-4xl font-bold">Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
