import { FunctionComponent } from "react";
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';


const HomeBr: FunctionComponent = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };
  return (
    <div className="relative bg-white-200 w-full overflow-hidden flex flex-col items-start justify-start text-left text-lg text-gray-200 font-montserrat">
      <div className="bg-white-200 w-[1920px] h-[1257px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative">
        <img
          className="relative w-[1923px] h-[1258px] object-cover z-[0]"
          alt=""
          src="/group-1@2x.png"
        />
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
        <div className="my-0 mx-[!important] absolute top-[86px] left-[164px] bg-white-200 overflow-hidden flex flex-row items-start justify-start gap-[48px] z-[4]">
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <img
              className="relative w-[178.6px] h-[163.7px]"
              alt=""
              src="/group37.svg"
            />
          </div>
          <div className="bg-white-200 overflow-hidden flex flex-col items-start justify-start">
            <img
              className="relative w-[169.1px] h-[192.7px]"
              alt=""
              src="/group38.svg"
            />
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[460px] left-[164px] overflow-hidden flex flex-col items-start justify-start gap-[16px] z-[5] text-[16.52px]">
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
         </div>
        <div className="my-0 mx-[!important] absolute top-[62px] left-[700px] overflow-hidden flex flex-row items-start justify-start gap-[16px] z-[6]">
        
          <div className="overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-8 gap-[16px]">
            <div className="overflow-hidden flex flex-col items-center justify-center">
              <button onClick={toggleLanguage} className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[56.5px] h-[56.5px]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src={currentLanguage === 'en' ? '/pt.svg' : '/en.svg'}
                />
              </button>
            </div>
            {/* <div className="overflow-hidden flex flex-col items-center justify-center">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[56.5px] h-[56.5px]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/ch.svg"
                />
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="[background:linear-gradient(0deg,_#005693,_#0072b2_27%,_#008acc_55%,_#0098dc_80%,_#009ee2)] w-[1920px] flex flex-col items-center justify-center text-16xl text-white-200">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-center pt-16 px-0 pb-40 gap-[160px]">
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <div className="flex flex-row items-center justify-center w-[500px]">
              <b className="relative">
                <p className="m-0"> {t(`texts.text7`)}</p>
              </b>
            </div>
            <div className="flex flex-row items-center justify-center text-lg w-[500px]">
              <div className="relative">
                <p className="m-0 font-medium">
                {t(`texts.text8`)}</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[16px] text-xl">
            <div className="flex flex-row items-center justify-center">
              <b className="relative">
              {t(`texts.text9`)}
              </b>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[32px] text-[14.11px]">
              <div className="flex flex-col items-center justify-start gap-[4px]">
                <img
                  className="relative w-[89.7px] h-[89.7px]"
                  alt=""
                  src="/group25.svg"
                />
                <div className="relative font-medium text-center">{t(`texts.icone1`)}</div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[4px]">
                <img
                  className="relative w-[89.7px] h-[89.7px]"
                  alt=""
                  src="/group26.svg"
                />
                <div className="relative w-[118px] h-[31.8px]">
                <div className="relative font-medium text-center">{t(`texts.icone2`)}</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[4px]">
                <img
                  className="relative w-[89.7px] h-[89.7px]"
                  alt=""
                  src="/group27.svg"
                />
                <div className="relative w-[78px] h-[31.8px]">
                <div className="relative font-medium text-center">{t(`texts.icone3`)}</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <img
                  className="relative w-[89.7px] h-[89.7px]"
                  alt=""
                  src="/group28.svg"
                />
                <div className="relative w-[78px] h-[31.8px]">
                <div className="relative font-medium text-center">{t(`texts.icone4`)}</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[4px]">
                <img
                  className="relative w-[89.7px] h-[89.7px]"
                  alt=""
                  src="/group30.svg"
                />
                <div className="relative w-[125px] h-[31.8px]">
              
                <div className="relative font-medium text-center">{t(`texts.icone5`)}</div>
              
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[4px]">
                <img
                  className="relative w-[89.7px] h-[89.7px]"
                  alt=""
                  src="/group31.svg"
                />
                <div className="relative w-[132px] h-[31.8px]">
                <div className="relative font-medium text-center">{t(`texts.icone6`)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-14 gap-[48px] text-23xl">
          <b className="relative">
          {t(`texts.text10`)}
          </b>
          <div className="relative w-[896px] h-[53px] text-3xl items-center justify-center ">
            <div className="absolute top-[0%] left-[0%] font-medium items-center justify-center text-center w-[1000px]">
            {t(`texts.text11`)}
            </div>
            </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center text-[42.14px] text-gold font-cabin">
          <div className="relative w-[1303.4px] h-[353.8px]">
            <div className="absolute h-[91.58%] w-full top-[8.39%] right-[0%] bottom-[0.03%] left-[0%]">
              <img
                className="absolute h-[43.02%] w-[20.92%] top-[8.55%] right-[74.44%] bottom-[48.43%] left-[4.64%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group14.svg"
              />
              <img
                className="absolute h-[43.02%] w-[20.92%] top-[8.55%] right-[41.22%] bottom-[48.43%] left-[37.86%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group15.svg"
              />
              <img
                className="absolute h-[43.12%] w-[20.95%] top-[49.57%] right-[24.6%] bottom-[7.31%] left-[54.46%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group16.svg"
              />
              <img
                className="absolute h-[43.12%] w-[20.95%] top-[8.52%] right-[7.99%] bottom-[48.36%] left-[71.06%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group17.svg"
              />
              <img
                className="absolute h-[84.1%] w-[20.93%] top-[8.52%] right-[57.8%] bottom-[7.38%] left-[21.27%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group18.svg"
              />
              <img
                className="absolute h-[43.18%] w-[20.95%] top-[49.54%] right-[7.99%] bottom-[7.28%] left-[71.06%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector5.svg"
              />
              <img
                className="absolute h-[43.18%] w-[20.95%] top-[8.46%] right-[24.59%] bottom-[48.36%] left-[54.46%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector6.svg"
              />
              <img
                className="absolute h-[43.09%] w-[20.93%] top-[49.6%] right-[41.21%] bottom-[7.31%] left-[37.86%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector7.svg"
              />
              <img
                className="absolute h-full w-[11.98%] top-[0%] right-[-0.01%] bottom-[0%] left-[88.03%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group19.svg"
              />
              <img
                className="absolute h-full w-[7.86%] top-[0%] right-[92.14%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group20.svg"
              />
              <img
                className="absolute h-[19.1%] w-[5.22%] top-[36.82%] right-[66.27%] bottom-[44.07%] left-[28.51%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group21.svg"
              />
              <img
                className="absolute h-[15.99%] w-[3.97%] top-[40.25%] right-[16.59%] bottom-[43.77%] left-[79.44%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group22.svg"
              />
              <img
                className="absolute h-[22.31%] w-[4.19%] top-[35.25%] right-[49.69%] bottom-[42.44%] left-[46.13%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group23.svg"
              />
              <img
                className="absolute h-[43.09%] w-[20.93%] top-[49.6%] right-[74.43%] bottom-[7.31%] left-[4.64%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector8.svg"
              />
              <b className="absolute top-[44.85%] left-[60.02%] text-[20.79px] font-montserrat">
                RMCA0Z99
              </b>
              <img
                className="absolute h-[15.8%] w-[5.69%] top-[40.56%] right-[82.16%] bottom-[43.64%] left-[12.15%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector9.svg"
              />
              <div className="absolute top-[57.07%] left-[31.08%] text-darkslateblue">
                2
              </div>
              <div className="absolute top-[57.07%] left-[47.42%] text-white-200">
                3
              </div>
              <div className="absolute top-[57.07%] left-[63.83%]">4</div>
              <div className="absolute top-[57.07%] left-[80.13%] text-orangered">
                5
              </div>
              <div className="absolute top-[57.07%] left-[14.16%] text-yellowgreen">
                1
              </div>
            </div>
            <img
              className="absolute h-[26.48%] w-[6.69%] top-[0%] right-[47.63%] bottom-[73.52%] left-[45.68%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group24.svg"
            />
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-center pt-14 px-[264px] pb-0 gap-[96px] text-8xl">
          <div className="w-[640px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-center text-yellowgreen">
              <b className="relative leading-[29px]">
              {t(`texts.text12`)}
              </b>
            </div>
            <div className="w-[635.7px] flex flex-col items-center justify-center text-lg">
              <div className="relative leading-[29px] font-medium inline-block w-[635.7px]">
              {t(`texts.text13`)}
              </div>
            </div>
            <div className="flex flex-row items-center justify-center pt-12 px-0 pb-0 text-darkslateblue">
              <b className="relative leading-[29px]">
              {t(`texts.text14`)}
              </b>
            </div>
            <div className=" flex flex-col items-center justify-center text-lg">
              <div className="relative leading-[29px] font-medium whitespace-pre-wrap inline-block ">
                <p className="m-0">{`O frigorífico fornecedor também realiza as análises socioambientais das fazendas diretas e indiretas certificadas, e adquire animais somente de fazendas em compliance com os critérios definidos.  Entrega à Durlicouros o couro verde com uma etiqueta `}</p>
                <p className="m-0">
                {t(`texts.text15`)}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[632px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-center">
              <b className="relative leading-[29px]">
              {t(`texts.text16`)}
              </b>
            </div>
            <div className="w-[627.9px] flex flex-col items-center justify-center text-lg">
              <div className="relative leading-[29px] font-medium inline-block w-[627.9px]">
                {t(`texts.text17`)}
              </div>
            </div>
            <div className="w-[627.9px] flex flex-row items-center justify-center pt-12 px-0 pb-0 box-border text-gold">
              <b className="relative leading-[29px] inline-block w-[627.9px] shrink-0">
              {t(`texts.text18`)}
              </b>
            </div>
            <div className="w-[627.9px] flex flex-col items-center justify-center text-lg">
              <div className="relative leading-[29px] font-medium inline-block w-[627.9px]">
                {t(`texts.text19`)}
              </div>
            </div>
            <div className="flex flex-row items-center justify-center pt-12 px-0 pb-0 text-orangered">
              <b className="relative leading-[29px]">
              {t(`texts.text20`)}
              </b>
            </div>
            <div className="w-[665px] flex flex-col items-start justify-start text-lg">
              <div className="relative leading-[29px] font-medium inline-block w-[632px]">
              {t(`texts.text21`)}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-32 px-0 text-[26.27px] font-cabin">
          <div className="relative w-[1507.8px] h-[460.5px]">
            <img
              className="absolute h-[59.85%] w-[82.48%] top-[3.54%] right-[0.26%] bottom-[36.61%] left-[17.26%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group.svg"
            />
            <img
              className="absolute h-[26.36%] w-[88.6%] top-[57.29%] right-[2.25%] bottom-[16.35%] left-[9.15%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group1.svg"
            />
            <img
              className="absolute h-[8.47%] w-[70.03%] top-[44.15%] right-[5.24%] bottom-[47.38%] left-[24.73%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group2.svg"
            />
            <div className="absolute top-[93.05%] left-[52%] text-center w-[200px]">
            {t(`texts.chart6`)}
            </div>
            <img
              className="absolute h-[22.76%] w-[6.19%] top-[32.44%] right-[76.54%] bottom-[44.8%] left-[17.28%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group3.svg"
            />
            <img
              className="absolute h-[27.43%] w-[8.26%] top-[32.44%] right-[86.88%] bottom-[40.13%] left-[4.86%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group4.svg"
            />
            <img
              className="absolute h-[15.05%] w-[5.38%] top-[39.61%] right-[61.36%] bottom-[45.34%] left-[33.26%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group5.svg"
            />
            <img
              className="absolute h-[14.88%] w-[4.81%] top-[39.8%] right-[38.62%] bottom-[45.32%] left-[56.57%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group6.svg"
            />
            <img
              className="absolute h-[11.05%] w-[3.5%] top-[3.6%] right-[69.99%] bottom-[85.34%] left-[26.51%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group7.svg"
            />
            <img
              className="absolute h-[11.05%] w-[3.5%] top-[3.6%] right-[50.9%] bottom-[85.34%] left-[45.6%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group8.svg"
            />
            <img
              className="absolute h-[18.02%] w-[53.36%] top-[15.29%] right-[45.25%] bottom-[66.69%] left-[1.39%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group9.svg"
            />
            <div className="absolute h-[69.49%] w-full top-[0%] right-[0%] bottom-[30.51%] left-[0%]">
              <div className="absolute h-[17.06%] w-[11.54%] top-[0%] right-[57.02%] bottom-[82.94%] left-[31.44%]">
                <div className="absolute top-[0%] left-[0%] text-center">
                {t(`texts.chart1`)}
                </div>
              </div>
              <div className="absolute top-[81.84%] left-[26%] w-[300px] text-center">
              {t(`texts.chart4`)}
              </div>
              <div className="absolute h-[26.09%] w-[6.09%] top-[83.91%] right-[93.91%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full">
              {t(`texts.chart2`)}
              </div>
              <div className="absolute h-[26.09%] w-[6.09%] top-[83.91%] right-[79.82%] bottom-[0%] left-[14.09%] max-w-full overflow-hidden max-h-full">
              {t(`texts.chart3`)}
              </div>
            
            
              <div className="absolute top-[80.53%] left-[55.82%]">{t(`texts.chart5`)}</div>
              <div className="absolute top-[83.53%] left-[93.7%] text-center w-[110px]">{t(`texts.chart7`)}</div>
              <div className="absolute h-[17.06%] w-[11.54%] top-[0%] right-[75.91%] bottom-[82.94%] left-[12.55%]">
                <div className="absolute top-[0%] left-[0%] text-center"> {t(`texts.chart1`)}</div>
              
              </div>
            </div>
            <img
              className="absolute h-[11.05%] w-[3.5%] top-[3.6%] right-[89.3%] bottom-[85.34%] left-[7.2%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group12.svg"
            />
            <img
              className="absolute h-[10.36%] w-[5.57%] top-[34.09%] right-[12.73%] bottom-[55.55%] left-[81.7%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
            <img
              className="absolute h-[14.9%] w-[6.6%] top-[48.45%] right-[11.97%] bottom-[36.66%] left-[81.43%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
            <img
              className="absolute h-[14.77%] w-[4.43%] top-[41.41%] right-[0.28%] bottom-[43.82%] left-[95.29%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector2.svg"
            />
            <img
              className="absolute h-[15.77%] w-[4.12%] top-[29.38%] right-[50.81%] bottom-[54.85%] left-[45.07%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector3.svg"
            />
            <img
              className="absolute h-[19.13%] w-[5%] top-[40.3%] right-[25.54%] bottom-[40.56%] left-[69.46%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector4.svg"
            />
            <b className="absolute top-[88.08%] left-[54.87%] text-[18.53px] font-montserrat text-gold">
              RMCA0Z99
            </b>
            <img
              className="absolute h-[11.81%] w-[2.73%] top-[75.87%] right-[39.51%] bottom-[12.31%] left-[57.76%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group13.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white-200 overflow-hidden flex flex-row items-center justify-center pt-28 px-24 pb-16 gap-[128px] text-xl">
        <img
          className="relative w-[173.2px] h-[224.8px] object-cover"
          alt=""
          src="/rectangle1@2x.png"
        />
        <div className="relative leading-[32px] w-[980px]">
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
      <div className="self-stretch bg-white-200 overflow-hidden flex flex-col items-center justify-center py-6 px-2.5 gap-[48px] text-[16px] text-gray-100">
        <img
          className="relative w-[315.6px] h-[99.8px]"
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
