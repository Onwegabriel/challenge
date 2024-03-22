const FrameComponent = () => {
  return (
    <footer className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[6.400000000001455px] box-border max-w-full mt-[-6.4px] text-left text-smi text-black font-noto-sans">
      <div className="flex-1 box-border flex flex-row items-end justify-between pt-[74.00000000000091px] pb-[81px] pr-[141px] pl-[140px] max-w-full gap-[20px] z-[1] border-t-[1px] border-solid border-black mq900:pl-[35px] mq900:pr-[35px] mq900:box-border mq1300:pl-[70px] mq1300:pr-[70px] mq1300:box-border mq1650:flex-wrap">
        <div className="h-[145px] w-[323.1px] flex flex-col items-start justify-start py-0 pr-[30.89999999999992px] pl-0 box-border max-w-full text-base font-nunito-sans">
          <div className="self-stretch h-[92px] flex flex-col items-start justify-start gap-[27px]">
            <img
              className="w-[103px] h-[21px] relative object-cover"
              loading="lazy"
              alt=""
              src="/logofooterimg1png@2x.png"
            />
            <div className="self-stretch relative leading-[22px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-[65.09999999999988px] pl-0 gap-[19px]">
          <div className="relative tracking-[0.65px] leading-[18px] uppercase inline-block min-w-[62.6px]">
            SUPPORT
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="relative leading-[18px] inline-block min-w-[110.9px]">{`Help & Contact Us`}</div>
            <div className="relative leading-[18px] inline-block min-w-[108.2px]">{`Return & Refunds`}</div>
            <div className="relative leading-[18px] inline-block min-w-[82.2px]">
              Online Stores
            </div>
            <div className="relative leading-[18px] inline-block min-w-[82.2px]">
              Privacy Policy
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-[102.69999999999987px] pl-0 gap-[19px]">
          <div className="relative tracking-[0.65px] leading-[18px] uppercase inline-block min-w-[67.4px]">
            COMPANY
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="bg-black flex flex-row items-start justify-start py-0 px-0 whitespace-nowrap">
              <div className="relative leading-[18px] inline-block min-w-[72.5px] shrink-0 [debug_commit:f6aba90]">
                What we do
              </div>
            </div>
            <div className="bg-black flex flex-row items-start justify-start py-0 px-0 whitespace-nowrap">
              <div className="relative leading-[18px] inline-block min-w-[63.6px] shrink-0 [debug_commit:f6aba90]">
                Gift Offers
              </div>
            </div>
            <div className="bg-black flex flex-row items-start justify-start py-0 px-0 whitespace-nowrap">
              <div className="relative leading-[18px] inline-block min-w-[73.5px] shrink-0 [debug_commit:f6aba90]">
                Latest Posts
              </div>
            </div>
            <div className="bg-black flex flex-row items-start justify-start py-0 px-0">
              <div className="relative leading-[18px] inline-block min-w-[31px] shrink-0 [debug_commit:f6aba90]">
                F.A.Q
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[30px]">
          <div className="flex flex-col items-start justify-start gap-[19px]">
            <div className="relative tracking-[0.65px] leading-[18px] uppercase inline-block min-w-[77.2px]">
              LOCATIONS
            </div>
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[18px]">
                Vienna, Hansalgasse, Austria
              </div>
              <div className="relative leading-[18px]">
                Berlin, Buschallee, Germany
              </div>
              <div className="relative leading-[18px]">
                The Piazza, London, UK
              </div>
            </div>
          </div>
        </div>
        <div className="w-[383.8px] flex flex-col items-start justify-start min-h-[152px] max-w-full text-xl">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h3 className="m-0 w-48 relative text-inherit leading-[27px] font-normal font-inherit flex items-center mq450:text-base mq450:leading-[22px]">
              Get The Latest News
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <input
                  className="w-[88px] [border:none] [outline:none] bg-[transparent] h-[21px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-nunito-sans text-smi text-black"
                  placeholder="E-mail address"
                  type="text"
                />
                <img
                  className="h-[17px] w-[35.9px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/svgqodefsvgbuttonarrow.svg"
                />
              </div>
              <div className="self-stretch h-px relative bg-black" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
