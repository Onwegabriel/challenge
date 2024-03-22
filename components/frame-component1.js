import ErrorHandler from "./error-handler";
import FrameComponent2 from "./frame-component2";

const FrameComponent1 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[8.800000000001091px] box-border max-w-full mt-[-6.4px] text-center text-xs text-black font-nunito-sans">
      <div className="w-[1660px] flex flex-row flex-wrap items-start justify-center gap-[39.9499999999999px] max-w-full mq900:gap-[20px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[7px] min-w-[395px] max-w-full text-left mq900:min-w-full">
          <ErrorHandler divqodefEMediaImage="/divqodefemediaimage@2x.png" />
          <FrameComponent2 top10WinterEssentialsFor2="Top 10 Winter Essentials For 2022 You Should Try" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[7px] min-w-[395px] max-w-full mq900:min-w-full">
          <ErrorHandler
            divqodefEMediaImage="/divqodefemediaimage-1@2x.png"
            propHeight="674.2px"
          />
          <div className="self-stretch overflow-x-auto flex flex-row items-end justify-center pt-[3.100000000000364px] px-5 pb-[9.899999999999636px] gap-[7.900000000000034px] border-b-[1px] border-solid border-black">
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
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[7px] min-w-[395px] max-w-full font-noto-sans mq900:min-w-full">
          <ErrorHandler
            divqodefEMediaImage="/divqodefemediaimage-2@2x.png"
            propHeight="560.5px"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[36.19999999999982px] max-w-full mq900:gap-[18px_36.2px]">
            <FrameComponent2
              top10WinterEssentialsFor2="Premium Consultant Course For You"
              propPadding="unset"
            />
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="w-[80.3px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative tracking-[1.2px] leading-[17px] uppercase font-semibold inline-block min-w-[80.5px] whitespace-nowrap">
                  Read More
                </div>
                <div className="self-stretch h-px relative bg-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
