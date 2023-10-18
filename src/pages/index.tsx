import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import ModelCanvas3D from "@/components/Model3D/Samurai1";
import { listaBushido } from "@/data/listaBushido";

const inter = Inter({ subsets: ["latin"] });
const classTd =
  "border-b dark:text-white cursor-pointer dark:border-slate-600 font-medium p-6 text-slate-900 dark:text-slate-200 max-[600px]:text-slate-950 text-left";
const classTr = "hover:bg-gray-50 border-b dark:border-neutral-500";
const classTh =
  "border-b dark:border-slate-100 font-bold p-6 text-black dark:text-slate-200 text-left";

const classSection =
  "flex flex-col gap-2 justify-center items-start h-fit min-h-[800px] w-full";
const classSectionMenor =
  "flex flex-col gap-2 justify-start items-start h-fit mt-16 w-full";



const BackCard = ({ description }: { description: string }) => {
  return (
    <div className="back p-3 will-change-transform  h-full">
      <p className="max-[600px]:text-black max-[600px]:text-sm write dark:text-white text-black">{description}</p>
    </div>
  );
};

const FrontCard = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="front will-change-transform">
      <Image
        className="w-full h-full object-cover rounded-xl"
        src={image}
        alt="Exemplo 1"
      />
    </div>
  );
};

const CardExemplo = ({
  image,
  description,
}: {
  image: StaticImageData;
  description: string;
}) => {
  return (
    <div className="card-exemplo w-[300px] will-change-transform">
      <FrontCard image={image}></FrontCard>
      <BackCard description={description}></BackCard>
    </div>
  );
}

export default function Home() {
  const [aleatorioHonra, setAleatorioHonra] = useState(0);
  const [aleatorioCoragem, setAleatorioCoragem] = useState(0);
  const [aleatorioCompaixao, setAleatorioCompaixao] = useState(0);
  const [aleatorioRespeito, setAleatorioRespeito] = useState(0);
  const [aleatorioHonestidade, setAleatorioHonestidade] = useState(0);
  const [aleatorioJustica, setAleatorioJustica] = useState(0);
  const [aleatorioLealdade, setAleatorioLealdade] = useState(0);
  
  const [tamanhoTela, setTamanhoTela] = useState(0);

  useEffect(() => {
    setTamanhoTela(window.innerWidth);
    console.log(window.innerWidth);
  }, []);

  type PrinciplesEnum = "gi" | "yu" | "jin" | "rei" | "makoto" | "meiyo" | "chugi";

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const alteraAleatorio = (aleatorioType: PrinciplesEnum) => {
    const aleatorio = Math.floor(Math.random() * 3);
    const type = {
      gi: () => setAleatorioHonra(aleatorio),
      yu: () =>  setAleatorioCoragem(aleatorio),
      jin: () =>  setAleatorioCompaixao(aleatorio),
      rei: () =>  setAleatorioRespeito(aleatorio),
      makoto: () =>  setAleatorioHonestidade(aleatorio),
      meiyo: () =>  setAleatorioJustica(aleatorio),
      chugi: () =>  setAleatorioLealdade(aleatorio),
    }
    setTimeout(type[aleatorioType],1000) ;
  };

  const getAleatorioType = (aleatorioType: PrinciplesEnum) => {
    const aleatorios = {
      gi: aleatorioHonra,
      yu: aleatorioCoragem,
      jin: aleatorioCompaixao,
      rei: aleatorioRespeito,
      makoto: aleatorioHonestidade,
      meiyo: aleatorioJustica,
      chugi: aleatorioLealdade,
    }
    return aleatorios[aleatorioType];
  }

  return (
    <>
      <Head>
        <title>HASHIDO</title>
      </Head>
      <Header></Header>
      <main
        className={`flex min-h-screen gap-3 flex-col items-center justify-between min-[768px]:p-24 max-[768px]:p-6 max-[600px]:bg-slate-950 transition-all duration-1000  ${inter.className}`}
      >
        <div className="content flex flex-col gap-3 w-full">
          <section id="Criador" className={classSectionMenor}>
            <h2 className="font-bold text-lg">Bushidô e sua criação:</h2>
            <p className="leading-8 w-full flex flex-wrap max-w-[90vw]">
              O Bushidô é um código de conduta que foi desenvolvido no Japão
              feudal e é associado aos samurais, a classe guerreira japonesa.
              Não há um criador específico do Bushidô, mas sim uma evolução ao
              longo do tempo com contribuições de diversos samurais, filósofos e
              escritores. Algumas das figuras notáveis associadas ao
              desenvolvimento do Bushidô incluem Miyamoto Musashi, Yamamoto
              Tsunetomo e Nitobe Inazō.
            </p>
          </section>
          <section data-aos="fade-in" id="oqueé" className={classSectionMenor}>
            <h2 className="font-bold text-lg">O que é o Bushidô:</h2>
            <p className="lg:columns-2 max-[600px]:columns-1 leading-8">
              O Bushido (武士道) ou “Caminho do Guerreiro” é uma espécie de
              código de conduta que era levada muito a sério pelos samurais. Se
              trata de regras baseadas em princípios morais na qual o guerreiro
              samurai tinha o dever de segui-las a todo custo, não só no campo
              de batalha como também em sua vida diária.Embora a maioria dos
              samurais seguissem o Código de Conduta Bushido, havia aqueles que
              não respeitavam os princípios básicos e com isso traziam desonra e
              má reputação sobre ele e sua família. Um samurai sem honra era uma
              coisa imperdoável e a única forma de lavar a sua honra era através
              do Harakiri (Ritual de Suicídio).
            </p>
            <div className="cards flex gap-3 w-full mt-32">
              <div className="card animate-bounce-slow  w-full max-h-[400px]">
                <ModelCanvas3D />
              </div>
            </div>
          </section>
          <section id="principios" data-aos="fade-in" className={classSection}>
            <h2 className="font-bold text-lg">Princípios do Bushidô:</h2>
            <p>
              Os princípios do Bushidô variam ligeiramente ao longo do tempo e
              dependendo das fontes, mas geralmente incluem os seguintes sete
              princípios:
            </p>
            <ul className="mt-4 list-none flex flex-col gap-6">
              {listaBushido.map((item) => {
                return (
                  <li
                    key={item.name}
                    id={item.href}
                    className="flex flex-col gap-2 hover:scale-105 transition-all cursor-default"
                  >
                    <h3 className="font-bold text-lg ">
                      <span className="font-bold text-2xl text-red-500 me-2">
                        {item.simbolo}
                      </span>
                      {item.name}
                    </h3>
                    <p>{item.description}</p>
                  </li>
                );
              })}
            </ul>
          </section>
          <section id="comparacao" data-aos="fade-in" className={classSection}>
            <h2 className="font-bold text-lg">
              Comparação com gerenciamento de projetos:
            </h2>
            <div className="tableContainer">
              <table className="min-w-full text-left font-light border-collapse table-fixed w-full text-sm bg-white rounded-xl">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className={classTh}>Princípios</th>
                    <th className={classTh}>Gerenciamento de projetos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={classTr}>
                    <td className={classTd}>
                      <strong>Gi - Retidão</strong>
                    </td>
                    <td className={classTd}>
                      No gerenciamento de projetos, a retidão está relacionada à
                      ética profissional, garantindo que todas as ações estejam
                      alinhadas com os valores da empresa e que o projeto seja
                      conduzido de forma ética.
                    </td>
                  </tr>
                  <tr className={classTr}>
                    <td className={classTd}>
                      <strong>Yu - Coragem</strong>
                    </td>
                    <td className={classTd}>
                      No gerenciamento de projetos, a retidão está relacionada à
                      ética profissional, garantindo que todas as ações estejam
                      alinhadas com os valores da empresa e que o projeto seja
                      conduzido de forma ética.
                    </td>
                  </tr>

                  <tr className={classTr}>
                    <td className={classTd}>
                      <strong>Jin - Benevolência</strong>
                    </td>
                    <td className={classTd}>
                      Mostrar compaixão e respeito pela equipe e pelos
                      stakeholders é fundamental para construir relacionamentos
                      e garantir um ambiente de trabalho saudável
                    </td>
                  </tr>
                  <tr className={classTr}>
                    <td className={classTd}>
                      <strong>Rei - Respeito</strong>
                    </td>
                    <td className={classTd}>
                      O respeito pela autoridade e pelas normas do projeto é
                      essencial para manter a ordem e a coesão da equipe.
                    </td>
                  </tr>
                  <tr className={classTr}>
                    <td className={classTd}>
                      <strong>Makoto - Honestidade</strong>
                    </td>
                    <td className={classTd}>
                      A honestidade é crucial na comunicação dentro do projeto.
                      A transparência e a sinceridade ajudam a evitar
                      mal-entendidos e conflitos.
                    </td>
                  </tr>
                  <tr className={classTr}>
                    <td className={classTd}>
                      <strong>Meiyo - Honra</strong>
                    </td>
                    <td className={classTd}>
                      Manter a integridade do projeto e cumprir compromissos
                      contribui para a reputação e a credibilidade da equipe de
                      projeto.
                    </td>
                  </tr>
                  <tr className={classTr}>
                    <td className={classTd}>
                      <strong>Chugi - Lealdade</strong>
                    </td>
                    <td className={classTd}>
                      A lealdade à equipe e aos objetivos do projeto é
                      fundamental para manter a coesão e a colaboração.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section data-aos="fade-in" id="exemplos" className={classSection}>
            <h2 className="font-bold text-lg">
              Aqui estão alguns exemplos adicionais de onde os princípios do
              Bushidô podem ser aplicados, em casos reais:
            </h2>
            <div className="cards-exemplo flex gap-6 items-center w-full flex-wrap  max-[600px]:gap-3">
              {listaBushido.map((item) => {
                const itemNameType = item.key.toLowerCase() as PrinciplesEnum;
                const description = item.exemplos[getAleatorioType(itemNameType)]; 
                console.log(description)
                console.log(getAleatorioType(itemNameType))
                console.log(itemNameType)
                return (
                  <div
                    key={item.name}
                    className="flex flex-col w-full max-w-[300px] max-[600px]:max-w-[150px]"
                  >
                    <p className="py-2">{item.name}</p>
                    <div
                      onPointerLeave={() => alteraAleatorio(itemNameType)}
                      onMouseLeave={() => alteraAleatorio(itemNameType)}
                      className="containerCard"
                    >
                      <CardExemplo  image={tamanhoTela > 600 ? item.image : item.imageDark} description={description}></CardExemplo>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
