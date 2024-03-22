const FrameComponent3 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[31.400000000000546px] pr-5 pl-[21px] box-border max-w-full mt-[-6.4px] text-left text-2xs text-black font-noto-sans">
      <div className="w-[1639px] flex flex-row flex-wrap items-end justify-between max-w-full gap-[20px] mq900:justify-center">
        <div className="flex flex-row items-start justify-start gap-[50.99999999999999px] max-w-full mq450:gap-[51px_25px] mq900:flex-wrap">
          <div className="w-[104.8px] flex flex-row items-start justify-start py-0.5 px-[3px] box-border relative">
            <div className="relative tracking-[1.1px] leading-[15px] uppercase font-semibold inline-block min-w-[94px]">
              All Products
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-300 z-[1]" />
          </div>
          <div className="h-[19px] w-[74.2px] relative">
            <div className="absolute top-[2px] left-[6px] tracking-[1.1px] leading-[15px] uppercase font-semibold inline-block min-w-[64px]">
              Lifestyle
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[74.2px] h-[19px] z-[1]"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="w-[55.1px] flex flex-row items-start justify-start py-0.5 px-1 box-border relative">
            <div className="relative tracking-[1.1px] leading-[15px] uppercase font-semibold inline-block min-w-[45px]">
              Brand
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-300 z-[1]" />
          </div>
          <div className="h-[19px] w-[73px] relative">
            <div className="absolute top-[2px] left-[6px] tracking-[1.1px] leading-[15px] uppercase font-semibold inline-block min-w-[62px]">
              Outwear
            </div>
            <div className="absolute top-[0px] left-[0px] bg-gray-400 w-full h-full z-[1]" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
          <div className="flex flex-row items-start justify-start gap-[10.9px]">
            <div className="relative tracking-[1.1px] leading-[16px] uppercase font-semibold inline-block min-w-[42px] shrink-0 [debug_commit:f6aba90]">
              Filter
            </div>
            <div className="h-[10.5px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
              <img
                className="w-[8.6px] h-[5px] relative overflow-hidden shrink-0 [debug_commit:f6aba90]"
                alt=""
                src="/svg-5.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
