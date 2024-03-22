const Property1Variant = ({ mainProductList2jpg }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-px text-center text-smi text-black font-noto-sans border-r-[1px] border-solid border-black border-b-[1px]">
      <div className="self-stretch h-[554.3px] relative">
        <img
          className="absolute top-[0px] left-[0px] w-[408.8px] h-[554.3px] object-cover"
          alt=""
          src={mainProductList2jpg}
        />
        <div className="absolute top-[0px] left-[0px] h-full flex flex-col items-start justify-start py-[21px] pr-[25.100000000000023px] pl-[367.7px] box-border gap-[13px] w-full z-[1]">
          <div className="h-[15px] flex flex-row items-start justify-start py-0 pr-0.5 pl-px box-border">
            <img
              className="h-[15px] w-[13px] relative"
              alt=""
              src="/pseudo-1.svg"
            />
          </div>
          <img
            className="w-4 h-[9px] relative overflow-hidden shrink-0"
            alt=""
            src="/pseudo-wrapper.svg"
          />
        </div>
      </div>
      <div className="self-stretch h-[68px] box-border flex flex-row items-start justify-between pt-0 px-[30.000000000000018px] pb-3.5 gap-[20px] border-t-[1px] border-solid border-black">
        <div className="w-[110px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
            <div className="self-stretch relative tracking-[0.65px] leading-[18px] uppercase font-medium inline-block min-w-[110px]">
              Leather Jacket
            </div>
            <div className="flex flex-row items-start justify-start text-left text-sm text-gray-100 font-nunito-sans">
              <div className="relative leading-[19px] inline-block min-w-[54px] whitespace-nowrap">
                $300.00
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[69px] w-[69px] relative"
          alt=""
          src="/add-black-jacket-to-your-cart.svg"
        />
      </div>
    </div>
  );
};

export default Property1Variant;
