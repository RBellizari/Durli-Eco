import { FunctionComponent } from "react";
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';


const HomeBr: FunctionComponent = () => {
  const [shouldShowBackground, setShouldShowBackground] = useState(true);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleResize = () => {
      setShouldShowBackground(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleLanguage = (language: string) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <div className="mx-auto max-w-[1920px] relative bg-white-200 w-full overflow-hidden flex flex-col items-start justify-start text-left text-lg text-gray-200 font-montserrat">
  


    
      <div className="bg-white-200 overflow-hidden shrink-0 flex flex-col items-start justify-start relative  md:w-[1923px] md:h-[1256px] w-[100%] h-[250px] inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: shouldShowBackground
          ? 'url("/back-header.png")'
          : 'none', }}>
       
        <img
          className="absolute my-0 mx-[!important] top-[173.6px] left-[990.7px] w-[552.3px] h-[438.9px] object-cover z-[1]"
          alt=""
          src="/group35@2x.png"
        />
        <div className="my-0 mx-[!important] absolute top-[941px] left-[465px] overflow-hidden flex flex-row items-end justify-start gap-[100px] z-[2]">
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[32px]">
            <img
              className="relative w-[95.3px] h-[123.6px] object-cover"
              alt=""
              src="/rectangle@2x.png"
            />
            <img
              className="relative w-[125.6px] h-[119px]"
              alt=""
              src="/group36.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium inline-block w-[940px] shrink-0">
              <p className="m-0">
              {t(`texts.text1`)}
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
              {t(`texts.text2`)}
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
              {t(`texts.text3`)}
              </p>
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[680.9px] left-[1174.2px] flex flex-row items-start justify-start z-[3] text-[45px] text-steelblue-200 w-[450px]">
          <b className="relative leading-[48px]">
            <p className="m-0">{t(`texts.text4`)}</p>
          </b>
        </div>
        <div className="my-0 mx-[!important] absolute top-[86px] left-[50px] md:top-[86px] md:left-[164px] bg-white-200 overflow-hidden flex flex-row items-center justify-start gap-[48px] z-[4]">
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <img
              className="relative md:w-[178.6px] md:h-[163.7px]  w-[111px] h-[102px]"
              alt=""
              src="/logo.svg"
            />
          </div>
          <div className="bg-white-200 overflow-hidden flex flex-col items-start justify-start">
            <img
              className="relative md:w-[169.1px] md:h-[192.7px] w-[105px] h-[120px]"
              alt=""
              src="/cert-tracking.svg"
            />
          </div>
        </div>
        <div className="hidden md:inline-flex my-0 mx-[!important] absolute top-[360px] left-[164px] overflow-hidden flex flex-col items-start justify-start gap-[16px] z-[5] text-[16.52px]">
          <div className="flex flex-row items-center justify-center text-[50px] text-steelblue-100">
            <b className="relative">UniCode</b>
          </div>
          <div className="flex flex-row items-center justify-center text-[27.54px] text-deepskyblue  w-[550px]">
            <b className="relative">
              <p className="m-0">{t(`texts.text5`)}</p>
            </b>
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[16px]">
            <input
              className="font-medium font-montserrat text-[22.95px] bg-[transparent] rounded-smi box-border w-[236px] h-[58px] flex flex-row items-start justify-start p-4 border-[1px] border-solid border-darkslateblue"
              placeholder="UniCode"
              type="text"
            />
            <button className="cursor-pointer [border:none] py-[22px] px-3 bg-[transparent] rounded-smi [background:linear-gradient(90deg,_#005693,_#28348a_49%,_#005493)] h-[58px] flex flex-row items-center justify-center box-border">
              <div className="relative text-3xl-4 font-medium font-montserrat text-white-200 text-left">
                OK
              </div>
            </button>
          </div>
          <div className="w-[568px] flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[25px] font-medium">
            {t(`texts.text6`)}
            </div>
          </div>
          <div className="w-[568px] flex flex-col items-start justify-center">
            <div className="flex-1 relative leading-[25px] font-medium md:pb-6">
            {t(`texts.text31`)}
            </div>
            <div className="font-medium font-montserrat text-[22.95px] bg-[transparent] rounded-[13px] box-border w-[236px] h-[58px] flex flex-col items-center justify-start p-4 border-[1px] border-solid border-darkslateblue">
  726071
</div>


          </div>
         </div>
        <div className="my-0 mx-[!important] absolute top-[16px] left-[270px] md:top-[62px] md:left-[700px] overflow-hidden flex flex-row items-start justify-start gap-[16px] z-[6]">
        
          <div className="overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-0 gap-[16px]">
            <div className="overflow-hidden flex flex-col items-center justify-center">
            <button
        onClick={() => toggleLanguage('pt')}
        className="cursor-pointer [border:none] p-0 bg-[transparent] relative md:w-[64.03px] md:h-[64.03px] w-[32.01px] h-[32.01px]"
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={currentLanguage === 'en' ? '/pt.svg' : '/pt-selected.svg'}
        />
      </button>

      
            </div>
       <div className="overflow-hidden flex flex-col items-center justify-center">
       <button
        onClick={() => toggleLanguage('en')}
        className="cursor-pointer [border:none] p-0 bg-[transparent] relative md:w-[64.03px] md:h-[64.03px] w-[32.01px] h-[32.01px]"
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={currentLanguage === 'en' ? '/en-selected.svg' : '/en.svg'}
        />
      </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white-200 md:hidden overflow-hidden shrink-0 flex flex-col items-start justify-start relative  w-[100%] h-[416px] inset-0 bg-no-repeat bg-cover" style={{ backgroundPosition: '110% 50%',backgroundSize: '100% auto', backgroundImage:'url("/boi-couro.png")'}}>
       
        <img
          className="absolute my-0 mx-[!important] top-[173.6px] left-[990.7px] w-[239px] h-[188px] object-cover z-[1]"
          alt=""
          src="/group35@2x.png"
        />
       
        <div className="my-0 mx-[!important] absolute top-[330px] left-[150px] flex flex-row items-start justify-start z-[3] md:text-[45px] text-[19px] text-steelblue-200 md:w-[450px] w-[210px]">
          <b className="relative md:leading-[48px] leading-[20px]">
            <p className="m-0">{t(`texts.text4`)}</p>
          </b>
        </div>
       
       
       
      </div>

      <div className="md:hidden my-0 mx-[!important] flex flex-col items-center justify-center gap-[32px] w-[100%] pt-8 pb-8">
  <div className="overflow-hidden flex flex-row items-start justify-start gap-[32px]">
    <img
      className="relative w-[58.8px] h-[76.3px] object-cover"
      alt=""
      src="/rectangle@2x.png"
    />
    <img
      className="relative w-[78.5px] h-[74.4px]"
      alt=""
      src="/group36.svg"
    />
  </div>
  <div className="flex flex-row items-center justify-center  pl-8 pr-8">
    <div className="relative font-medium inline-block w-[100%] shrink-0 text-[13px] leading-[21px]">
      <p className="m-0">
        {t(`texts.text1`)}
      </p>
      <p className="m-0">&nbsp;</p>
      <p className="m-0">
        {t(`texts.text2`)}
      </p>
      <p className="m-0">&nbsp;</p>
      <p className="m-0">
        {t(`texts.text3`)}
      </p>
    </div>
  </div>
</div>

      
      <div className="[background:linear-gradient(0deg,_#005693,_#0072b2_27%,_#008acc_55%,_#0098dc_80%,_#009ee2)] w-[100%] flex flex-col items-center justify-center text-16xl text-white-200">
        <div className="self-stretch md:self-center overflow-hidden flex md:flex-row flex-col items-center justify-center pt-16 px-0 md:pb-40 pb-12 xl:gap-[160px] gap-[32px]">
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <div className="flex flex-row items-center justify-center md:w-[500px] w-[100%] pl-8 pr-8 md:pl-0 md:pr-0">
              <b className="relative text-[22px] leading-[27px] md:text-[35px] md:leading-[43px]">
                <p className="m-0"> {t(`texts.text7`)}</p>
              </b>
            </div>
            <div className="flex flex-row items-center justify-center text-lg md:w-[500px] w-[100%]">
              <div className="relative text-[13px] leading-[17px] md:text-[18px] md:leading-[26px] pl-8 pr-8 md:pl-0 md:pr-0">
                <p className="m-0 font-medium">
                {t(`texts.text8`)}</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[16px] text-xl  w-[100%]">
            <div className="flex flex-row items-center justify-center">
              <b className="relative text-[14px] leading-[16px] md:text-[20px] md:leading-[26px] pl-8 pr-8 md:pl-0 md:pr-0">
              {t(`texts.text9`)}
              </b>
            </div>
            
          <div className="flex flex-wrap items-start justify-center gap-4 text-sm md:text-base pl-8 pr-8 xl:pl-0 xl:pr-8">
  {/* Item 1 */}
  <div className="flex flex-col items-center justify-start w-24 md:w-48 lg:w-56 xl:w-32 gap-2">
    <img
      className="w-16 md:w-20 lg:w-20 xl:w-20 h-16 md:h-20 lg:h-20 xl:h-20"
      alt=""
      src="/group25.svg"
    />
    <div className="font-medium text-center text-[10px] xl:text-[13px]">{t(`texts.icone1`)}</div>
  </div>

  {/* Item 2 */}
  <div className="flex flex-col items-center justify-start w-24 md:w-48 lg:w-56 xl:w-32 gap-2">
    <img
      className="w-16 md:w-20 lg:w-20 xl:w-20 h-16 md:h-20 lg:h-20 xl:h-20"
      alt=""
      src="/group26.svg"
    />
    <div className="font-medium text-center text-[10px] xl:text-[13px]">{t(`texts.icone2`)}</div>
  </div>

  {/* Item 3 */}
  <div className="flex flex-col items-center justify-start w-20 md:w-48 lg:w-56 xl:w-24 gap-2">
    <img
      className="w-16 md:w-20 lg:w-20 xl:w-20 h-16 md:h-20 lg:h-20 xl:h-20"
      alt=""
      src="/group27.svg"
    />
    <div className="font-medium text-center text-[10px] xl:text-[13px]">{t(`texts.icone3`)}</div>
  </div>

  {/* Item 4 */}
  <div className="flex flex-col items-center justify-start w-20 md:w-48 lg:w-56 xl:w-24 gap-2">
    <img
      className="w-16 md:w-20 lg:w-20 xl:w-20 h-16 md:h-20 lg:h-20 xl:h-20"
      alt=""
      src="/group28.svg"
    />
    <div className="font-medium text-center text-[10px] xl:text-[13px]">{t(`texts.icone4`)}</div>
  </div>

  {/* Item 5 */}
  <div className="flex flex-col items-center justify-start w-24 md:w-48 lg:w-56 xl:w-32 gap-2">
    <img
      className="w-16 md:w-20 lg:w-20 xl:w-20 h-16 md:h-20 lg:h-20 xl:h-20"
      alt=""
      src="/group30.svg"
    />
    <div className="font-medium text-center text-[10px] xl:text-[13px]">{t(`texts.icone5`)}</div>
  </div>

  {/* Item 6 */}
  <div className="flex flex-col items-center justify-start w-24 md:w-48 lg:w-56 xl:w-32 gap-2">
    <img
      className="w-16 md:w-20 lg:w-20 xl:w-20 h-16 md:h-20 lg:h-20 xl:h-20"
      alt=""
      src="/group31.svg"
    />
    <div className="font-medium text-center text-[10px] xl:text-[13px]">{t(`texts.icone6`)}</div>
  </div>
</div>


          </div>
        </div>
        <div className="self-stretch overflow-hidden  w-[100%] flex flex-col items-center justify-center pt-0 px-0 pb-14">
  <b className="relative pl-8 md:pl-0 pr-8 md:pr-0 flex items-center justify-center md:gap-[48px] md:text-[42px] text-[20px] text-center md:pb-0 pb-24px">
    {t(`texts.text10`)}
          </b>
         <div className="h-[16px] md:h-[32px]"></div>
  <div className="relative w-[100%]  text-3xl flex items-center justify-center ">
    <div className="relative font-medium text-center md:w-[1000px] w-[100%] md:text-[22px] md:leading-[26px] text-[13px] leading-[14px] pl-8 md:pl-0 pr-8 md:pr-0">
      {t(`texts.text11`)}
    </div>
  </div>
</div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center text-[42.14px] text-gold font-cabin">
          <div className="relative  w-[338.03px] h-[91.74px] md:w-[1303.4px] md:h-[353.8px]">
            
            <img
              className="absolute max-w-full overflow-hidden max-h-full"
              alt=""
              src="/grafico-01.png"
            />
          </div>
        </div>
        <div className="md:self-stretch self-auto overflow-hidden flex md:flex-row flex-col items-start justify-center pt-14 md:px-[264px] pb-0 xl:gap-[96px] gap-[48px] md:text-8xl text-lg">
          <div className="md:w-[640px] overflow-hidden shrink-0 flex flex-col items-start justify-start pl-8 pr-8">
            <div className="flex flex-row items-center justify-center text-yellowgreen">
              <b className="relative leading-[29px]">
              {t(`texts.text12`)}
              </b>
            </div>
            <div className="md:w-[640px]  flex flex-col items-center justify-center md:text-lg text-sm">
              <div className="relative md:leading-[29px] leading-[17px] font-medium inline-block md:w-[635.7px]">
              {t(`texts.text13`)}
              </div>
            </div>
            <div className="flex flex-row items-center justify-center pt-12 px-0 pb-0 text-darkslateblue">
              <b className="relative leading-[29px]">
              {t(`texts.text14`)}
              </b>
            </div>
            <div className=" flex flex-col items-center justify-center md:text-lg text-sm">
              <div className="relative md:leading-[29px] leading-[17px] font-medium whitespace-pre-wrap inline-block ">
                
                <p className="m-0">
                {t(`texts.text15`)}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[640px]  overflow-hidden shrink-0 flex flex-col items-start justify-start pl-8 pr-8">
            <div className="flex flex-row items-center justify-center">
              <b className="relative leading-[29px]">
              {t(`texts.text16`)}
              </b>
            </div>
            <div className="md:w-[640px]  flex flex-col items-center justify-center md:text-lg text-sm">
              <div className="relative md:leading-[29px] leading-[17px] font-medium inline-block md:w-[627.9px]">
                {t(`texts.text17`)}
              </div>
            </div>
            <div className="md:w-[640px] flex flex-row items-center justify-center pt-12 px-0 pb-0 box-border text-gold">
              <b className="relative leading-[29px] md:inline-block md:w-[627.9px] md:shrink-0">
              {t(`texts.text18`)}
              </b>
            </div>
            <div className="md:w-[640px] flex flex-col items-center justify-center md:text-lg text-sm">
              <div className="relative md:leading-[29px] leading-[17px] font-medium inline-block md:w-[627.9px]">
                {t(`texts.text19`)}
              </div>
            </div>
            <div className="flex flex-row items-center justify-center pt-12 px-0 pb-0 text-orangered">
              <b className="relative leading-[29px]">
              {t(`texts.text20`)}
              </b>
            </div>
            <div className="md:w-[640px] flex flex-col items-start justify-start md:text-lg text-sm">
              <div className="relative md:leading-[29px] leading-[17px] font-medium inline-block md:w-[632px]">
              {t(`texts.text21`)}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center md:py-32 py-16 px-0 text-[26.27px] font-cabin pl-8 pr-8 md:pl-8 md:pr-8">
  <div className="relative w-full h-full flex items-center justify-center">
    <img
      className="max-w-full max-h-full"
      alt=""
             
              src={currentLanguage === 'en' ? '/grafico-02-en.png' : '/grafico-02.png'}
    />
  </div>
</div>
      </div>
      <div className="md:self-stretch select-auto bg-white-200 overflow-hidden flex md:flex-row flex-col items-center justify-center md:pt-28 pt-16 md:px-24 md:pb-16 pb-8 pl-8 pr-8 md:pl-0 md:pr-0 md:gap-[128px] gap-[28px] md:text-xl text-sm">
        <img
          className="relative  w-[96.38px] h-[125.09px] md:w-[173.2px] md:h-[224.8px] object-cover"
          alt=""
          src="/rectangle1@2x.png"
        />
        <div className="relative md:leading-[32px] leading-[21px] md:w-[980px]">
          <p className="m-0 font-medium">{t(`texts.text22`)}<b className="font-montserrat">{t(`texts.text23`)}</b> <span className="font-medium">
            {t(`texts.text24`)}
            </span></p>
        
        
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0 font-medium">{t(`texts.text25`)}<b className="font-montserrat">
           {t(`texts.text26`)}
           
          </b>
          <span className="font-medium">{t(`texts.text27`)}</span>
          </p>
         
       
       
      
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0">
            <span className="font-medium">{t(`texts.text28`)}</span>
            <b> {t(`texts.text29`)}</b>
          </p>
        </div>
      </div>
      <div className="self-stretch bg-white-200 overflow-hidden flex flex-col items-center justify-center py-6 px-2.5 gap-[12px] md:gap-[48px] text-[9px] md:text-[16px] text-gray-100">
        <img
          className="relative w-[151.3px] h-[47.8px] md:w-[315.6px] md:h-[99.8px]"
          alt=""
          src="/group40.svg"
        />
        <div className="relative font-medium">
        {t(`texts.text30`)}
        </div>
      </div>
    </div>
  );
};

export default HomeBr;
