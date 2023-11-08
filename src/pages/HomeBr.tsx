import { FunctionComponent } from "react";

const HomeBr: FunctionComponent = () => {
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
                Com mais de 60 anos de atuação, operamos na Durlicouros com 9
                unidades industriais certificadas LWG Gold. Utilizamos um
                sistema pioneiro de rastreabilidade individual, monitorando cada
                peça de couro desde sua origem.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Desde 2010, implantamos um sistema de geomonitoramento, que
                supervisiona e verifica diariamente com imagens de satélite o
                cumprimento de critérios socioambientais pelos frigoríficos
                fornecedores e fazendas diretas e indiretas, garantindo uma
                originação responsável de matéria-prima.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Aliando o sistema de geomonitoramento à rastreabilidade
                individual de produto através de um código alfanumérico único
                marcado couro a couro, garantimos que o cliente final somente
                compre couros de áreas social e ambientalmente legais.
              </p>
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[680.9px] left-[1174.2px] flex flex-row items-start justify-start z-[3] text-[45px] text-steelblue-200">
          <b className="relative leading-[48px]">
            <p className="m-0">Rastreabilidade e</p>
            <p className="m-0">Conformidade Total</p>
            <p className="m-0">Durlicouros</p>
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
          <div className="flex flex-row items-center justify-center text-[27.54px] text-deepskyblue">
            <b className="relative">
              <p className="m-0">{`Descubra a origem exata de cada `}</p>
              <p className="m-0">couro e siga toda a sua jornada.</p>
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
              Ao consultar o UniCode Durli estampado em seu couro, você terá
              acesso a todas as informações relacionadas à rastreabilidade,
              conformidade socioambiental e origem deste couro específico.
            </div>
          </div>
         </div>
        <div className="my-0 mx-[!important] absolute top-[62px] left-[957px] overflow-hidden flex flex-row items-start justify-start gap-[16px] z-[6]">
          <button className="cursor-pointer [border:none] p-4 bg-[transparent] rounded-smi w-36 h-[52px] flex flex-row items-center justify-center box-border">
            <div className="relative text-[23.59px] font-medium font-montserrat text-white-200 text-left">
              Menu
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-4 bg-[transparent] rounded-smi w-36 h-[52px] flex flex-row items-center justify-center box-border">
            <div className="relative text-[23.59px] font-medium font-montserrat text-white-200 text-left">
              Menu
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-4 bg-[transparent] rounded-smi w-36 h-[52px] flex flex-row items-center justify-center box-border">
            <div className="relative text-[23.59px] font-medium font-montserrat text-white-200 text-left">
              Menu
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-4 bg-[transparent] rounded-smi w-36 h-[52px] flex flex-row items-center justify-center box-border">
            <div className="relative text-[23.59px] font-medium font-montserrat text-white-200 text-left">
              Menu
            </div>
          </button>
          <div className="overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-8 gap-[16px]">
            <div className="overflow-hidden flex flex-col items-center justify-center">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[56.5px] h-[56.5px]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector11.svg"
                />
                <img
                  className="absolute h-[99.29%] w-[98.58%] top-[0.53%] right-[0%] bottom-[0.18%] left-[1.42%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector12.svg"
                />
                <img
                  className="absolute h-[53.98%] w-[57.52%] top-[0.18%] right-[42.48%] bottom-[45.84%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector13.svg"
                />
              </button>
            </div>
            <div className="overflow-hidden flex flex-col items-center justify-center">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[56.5px] h-[56.5px]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector14.svg"
                />
                <img
                  className="absolute h-[35.22%] w-[42.12%] top-[14.34%] right-[43.01%] bottom-[50.44%] left-[14.87%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group39.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="[background:linear-gradient(0deg,_#005693,_#0072b2_27%,_#008acc_55%,_#0098dc_80%,_#009ee2)] w-[1920px] flex flex-col items-center justify-center text-16xl text-white-200">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-center pt-16 px-0 pb-40 gap-[160px]">
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <div className="flex flex-row items-center justify-center">
              <b className="relative">
                <p className="m-0">Originação Responsável de</p>
                <p className="m-0">Matéria-Prima</p>
              </b>
            </div>
            <div className="flex flex-row items-center justify-center text-lg">
              <div className="relative">
                <p className="m-0 font-medium">
                  Ao seguir a nossa Política de Compra Responsável de
                </p>
                <p className="m-0">
                  <b>{`Matéria-Prima, adquirimos couros somente de áreas em `}</b>
                </p>
                <p className="m-0 font-medium">{`conformidade socioambiental. `}</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[16px] text-xl">
            <div className="flex flex-row items-center justify-center">
              <b className="relative">
                NÃO compramos matéria-prima de fornecedores envolvidos em:
              </b>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[32px] text-[14.11px]">
              <div className="flex flex-col items-center justify-start gap-[4px]">
                <img
                  className="relative w-[89.7px] h-[89.7px]"
                  alt=""
                  src="/group25.svg"
                />
                <div className="relative font-medium">Desmatamento</div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[4px]">
                <img
                  className="relative w-[89.7px] h-[89.7px]"
                  alt=""
                  src="/group26.svg"
                />
                <div className="relative w-[118px] h-[31.8px]">
                  <div className="absolute top-[0%] left-[17.54%] font-medium">
                    Invasão de
                  </div>
                  <div className="absolute top-[46.54%] left-[0%] font-medium">
                    Terras Indígenas
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[4px]">
                <img
                  className="relative w-[89.7px] h-[89.7px]"
                  alt=""
                  src="/group27.svg"
                />
                <div className="relative w-[78px] h-[31.8px]">
                  <div className="absolute top-[0%] left-[22.18%] font-medium">
                    Terras
                  </div>
                  <div className="absolute top-[46.54%] left-[0%] font-medium">
                    Protegidas
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <img
                  className="relative w-[89.7px] h-[89.7px]"
                  alt=""
                  src="/group28.svg"
                />
                <img
                  className="relative w-[89.5px] h-[30.1px]"
                  alt=""
                  src="/group29.svg"
                />
              </div>
              <div className="flex flex-col items-center justify-start gap-[4px]">
                <img
                  className="relative w-[89.7px] h-[89.7px]"
                  alt=""
                  src="/group30.svg"
                />
                <div className="relative w-[125px] h-[31.8px]">
                  <div className="absolute top-[0%] left-[0%] font-medium">
                    Trabalho Forçado
                  </div>
                  <div className="absolute top-[46.54%] left-[20.8%] font-medium">
                    ou Infantil
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[4px]">
                <img
                  className="relative w-[89.7px] h-[89.7px]"
                  alt=""
                  src="/group31.svg"
                />
                <div className="relative w-[132px] h-[31.8px]">
                  <div className="absolute top-[0%] left-[9.24%] font-medium">
                    Desrespeito ao
                  </div>
                  <div className="absolute top-[46.54%] left-[0%] font-medium">
                    Bem-Estar Animal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-14 gap-[48px] text-23xl">
          <b className="relative">
            ENTENDA O CICLO DA NOSSA RASTREABILIDADE COMPLETA
          </b>
          <div className="relative w-[896px] h-[53px] text-3xl">
            <div className="absolute top-[0%] left-[0%] font-medium">{`Nosso sistema de rastreio permite acompanhar a matéria-prima desde a origem `}</div>
            <div className="absolute top-[49.06%] left-[4.25%] font-medium">
              até a entrega do produto final ao cliente e funciona nas seguintes
              etapas:
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
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-center pt-14 px-[264px] pb-0 gap-[96px] text-8xl">
          <div className="w-[640px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-center text-yellowgreen">
              <b className="relative leading-[29px]">
                1. ORIGINAÇÃO RESPONSÁVEL INDIVIDUAL
              </b>
            </div>
            <div className="w-[635.7px] flex flex-col items-center justify-center text-lg">
              <div className="relative leading-[29px] font-medium inline-block w-[635.7px]">
                Os animais recebem, desde a fazenda de nascimento, uma
                identificação única através de brinco e bottom eletrônico e são
                certificados com o protocolo do Programa de Rastreabilidade
                Individual e Monitoramento de Indiretos – PRIMI, criado pela
                NicePlanet e SBCert, garantindo as informações das fazendas com
                o registro individual único de cada animal, monitoramento de
                todas as movimentações de animais certificados entre as
                fazendas, além da conformidade socioambiental das fazendas
                envolvidas até a chegada dos animais certificados ao
                frigorífico.
              </div>
            </div>
            <div className="flex flex-row items-center justify-center pt-12 px-0 pb-0 text-darkslateblue">
              <b className="relative leading-[29px]">
                2. COMPLIANCE SOCIOAMBIENTAL
              </b>
            </div>
            <div className="w-[653px] flex flex-col items-center justify-center text-lg">
              <div className="relative leading-[29px] font-medium whitespace-pre-wrap inline-block w-[653px]">
                <p className="m-0">{`O frigorífico fornecedor também realiza as análises socioambientais das fazendas diretas e indiretas certificadas, e adquire animais somente de fazendas em compliance com os critérios definidos.  Entrega à Durlicouros o couro verde com uma etiqueta `}</p>
                <p className="m-0">
                  identificadora, que via sistema computacional traz todos os
                  documentos que atestam a origem em conformidade socioambiental
                  da matéria-prima (Fazenda) e as características de cada
                  animal, tudo em ambiente virtual que utiliza a tecnologia
                  blockchain, garantindo a credibilidade e integridade de todas
                  as informações.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[632px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-center">
              <b className="relative leading-[29px]">
                3. IDENTIFICAÇÃO COURO A COURO
              </b>
            </div>
            <div className="w-[627.9px] flex flex-col items-center justify-center text-lg">
              <div className="relative leading-[29px] font-medium inline-block w-[627.9px]">{`Na Durlicouros, cada couro acompanhado de suas informações recebe um código alfanumérico único formado por 8 caracteres marcados a laser nas bordas da parte dianteira do couro para identificação até o final do processo de produção. `}</div>
            </div>
            <div className="w-[627.9px] flex flex-row items-center justify-center pt-12 px-0 pb-0 box-border text-gold">
              <b className="relative leading-[29px] inline-block w-[627.9px] shrink-0">
                4. DADOS DE ORIGEM, PRODUÇÃO E COMPOSIÇÃO DE CADA PALLET
              </b>
            </div>
            <div className="w-[627.9px] flex flex-col items-center justify-center text-lg">
              <div className="relative leading-[29px] font-medium inline-block w-[627.9px]">{`Leitores inteligentes leem os códigos marcados em cada couro que formam os pallets, gerando um QR Code para cada um deles, reunindo todas as informações de sua composição, couro a couro, com dados dos respectivos animais, origem da fazenda, frigorífico, processos no curtume, com rastreabilidade do início ao fim e dados de conformidade socioambiental. `}</div>
            </div>
            <div className="flex flex-row items-center justify-center pt-12 px-0 pb-0 text-orangered">
              <b className="relative leading-[29px]">
                5. TRANSPARÊNCIA DE PONTA A PONTA
              </b>
            </div>
            <div className="w-[665px] flex flex-col items-start justify-start text-lg">
              <div className="relative leading-[29px] font-medium inline-block w-[632px]">
                O cliente final tem acesso ao UniCode de cada couro e ao número
                da Invoice e pode acessar todas as informações. Dessa forma
                consegue identificar a origem do couro que comprou e a
                transparência de todos os nossos processos.
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
            <div className="absolute top-[93.05%] left-[53.3%]">
              Rastreabilidade
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
                <div className="absolute top-[0%] left-[37.13%]">Geo</div>
                <div className="absolute top-[41.39%] left-[0%]">
                  Monitoramento
                </div>
              </div>
              <div className="absolute top-[81.84%] left-[32.17%]">
                Frigorífico
              </div>
              <img
                className="absolute h-[16.09%] w-[6.09%] top-[83.91%] right-[93.91%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group10.svg"
              />
              <img
                className="absolute h-[16.09%] w-[6.09%] top-[83.91%] right-[79.82%] bottom-[0%] left-[14.09%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group11.svg"
              />
              <div className="absolute top-[80.53%] left-[55.82%]">Curtume</div>
              <div className="absolute top-[80.53%] left-[94.76%]">Cliente</div>
              <div className="absolute h-[17.06%] w-[11.54%] top-[0%] right-[75.91%] bottom-[82.94%] left-[12.55%]">
                <div className="absolute top-[0%] left-[37.13%]">Geo</div>
                <div className="absolute top-[41.39%] left-[0%]">
                  Monitoramento
                </div>
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
        <div className="relative leading-[32px]">
          <p className="m-0 font-medium">{`Com esse processo, garantimos que todos os produtos Durlicouros estejam em conformidade `}</p>
          <p className="m-0">
            <span className="font-medium">{`com a `}</span>
            <b className="font-montserrat">{`nossa Política de Compra Responsável de Matéria Prima, às exigências da certificação `}</b>
          </p>
          <p className="m-0">
            <b className="font-montserrat">LWG</b>
            <span className="font-medium">
              , e atendendo às demandas crescentes dos mercados mais exigentes.
            </span>
          </p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0 font-medium">{`Todo este cuidado e responsabilidade com as questões sociais e ambientais em nossas `}</p>
          <p className="m-0">
            <span className="font-medium">{`operações, além de todas as garantias de uma originação responsável de matéria prima, `}</span>
            <b className="font-montserrat">{`agrega `}</b>
          </p>
          <p className="m-0">
            <b className="font-montserrat">
              valor para nossos clientes dos setores automobilístico, de
              mobiliário, calçados e artefatos
            </b>
            <span className="font-medium">{`, `}</span>
          </p>
          <p className="m-0 font-medium">{`que terão a garantia de comercializar couros de qualidade produzidos com responsabilidade e `}</p>
          <p className="m-0 font-medium">
            conformidade socioambiental em mercados como a Ásia, Europa e
            Estados Unidos.
          </p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0">
            <span className="font-medium">{`São empresas que poderão `}</span>
            <b>{`estampar em suas marcas o mérito de serem `}</b>
          </p>
          <p className="m-0">
            <b>socioambientalmente corretas.</b>
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
          Copyright ©2023 Durlicouros. Todos os Direitos Reservados.
        </div>
      </div>
    </div>
  );
};

export default HomeBr;
