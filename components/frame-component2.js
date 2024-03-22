import { useMemo } from "react";

const FrameComponent2 = ({ top10WinterEssentialsFor2, propPadding }) => {
  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="self-stretch flex flex-col items-end justify-start py-0 px-0 box-border gap-[14px] max-w-full text-center text-xs text-black font-nunito-sans"
      style={frameDiv2Style}
    >
      <div className="self-stretch overflow-x-auto flex flex-row items-end justify-center pt-[3.100000000000364px] px-5 pb-[9.899999999999636px] gap-[7.899999999999999px] border-b-[1px] border-solid border-black">
        <div className="w-[56.6px] relative tracking-[0.6px] leading-[16px] uppercase flex items-center justify-center shrink-0 min-w-[56.6px]">
          Fashion
        </div>
        <div className="w-[3.8px] shrink-0 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
          <div className="self-stretch bg-black flex flex-row items-start justify-start py-0 px-0">
            <div className="flex-1 relative tracking-[0.6px] leading-[16px] uppercase inline-block min-w-[4px] shrink-0 [debug_commit:f6aba90]">
              |
            </div>
          </div>
        </div>
        <div className="w-[80.9px] relative tracking-[0.6px] leading-[16px] uppercase flex items-center justify-center shrink-0 min-w-[80.9px]">
          Inspiration
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[8.100000000000023px] pl-2 box-border max-w-full text-5xl font-noto-sans">
        <h2 className="m-0 flex-1 relative text-inherit leading-[33px] font-normal font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
          {top10WinterEssentialsFor2}
        </h2>
      </div>
    </div>
  );
};

export default FrameComponent2;
