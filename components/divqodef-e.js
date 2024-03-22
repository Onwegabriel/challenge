const DivqodefE = ({ divqodefEInner, man }) => {
  return (
    <div className="flex-1 box-border flex flex-col items-center justify-start pt-[385.7000000000003px] pb-[426.7999999999997px] pr-[21px] pl-5 relative gap-[34px] min-w-[624px] shrink-0 [debug_commit:f6aba90] text-center text-31xl text-black font-noto-sans border-t-[1px] border-solid border-black border-r-[1px] border-b-[1px] mq450:gap-[17px_34px] mq900:pb-[180px] mq900:box-border mq900:min-w-full mq1300:pt-[26.400000000000546px] mq1300:pb-[277px] mq1300:box-border">
      <img
        className="w-[959.5px] h-[953.5px] absolute !m-[0] top-[calc(50%_-_476.75px)] left-[0px] overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={divqodefEInner}
      />
      <div className="w-[228.4px] flex flex-row items-start justify-end py-0 pr-[56.400000000000006px] pl-14 box-border">
        <h1 className="m-0 h-[68px] flex-1 relative text-inherit leading-[61px] uppercase font-normal font-inherit flex items-center justify-center z-[1] mq450:text-11xl mq450:leading-[37px] mq900:text-21xl mq900:leading-[49px]">
          {man}
        </h1>
      </div>
      <button className="cursor-pointer py-3 pr-[51px] pl-[53px] bg-[transparent] flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
        <div className="relative text-xs tracking-[1.2px] leading-[17px] uppercase font-semibold font-noto-sans text-black text-center inline-block min-w-[122px] whitespace-nowrap">
          shop collection
        </div>
      </button>
    </div>
  );
};

export default DivqodefE;
