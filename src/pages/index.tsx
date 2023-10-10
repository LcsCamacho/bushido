import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "@/components/Header";
import ModelCanvas3D from "@/components/Model3D/Samurai1";

const inter = Inter({ subsets: ["latin"] });

export const listaBushido = [
  {
    simbolo: "义",
    href: "#Gi",
    name: "Gi - Retidão",
    description:
      "Representa a integridade moral e ética, fazendo a coisa certa, mesmo quando é difícil.",
  },
  {
    simbolo: "勇",
    href: "#Yu",
    name: "Yu - Coragem",
    description: "Representa a coragem, bravura e heroísmo.",
  },
  {
    simbolo: "仁",
    href: "#Jin",
    name: "Jin - Benevolência",
    description: "Representa a compaixão e a benevolência.",
  },
  {
    simbolo: "礼",
    href: "#Rei",
    name: "Rei - Respeito",
    description: "Representa o respeito, cortesia e educação.",
  },
  {
    simbolo: "誠",
    href: "#Makoto",
    name: "Makoto - Honestidade",
    description: "Representa a honestidade e a sinceridade.",
  },
  {
    simbolo: "名誉",
    href: "#Meiyo",
    name: "Meiyo - Honra",
    description: "Representa a honra e a glória.",
  },
  {
    simbolo: "忠义",
    href: "#Chugi",
    name: "Chūgi - Lealdade",
    description: "Representa a lealdade.",
  },
];

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Head>
        <title>HASHIDO</title>
      </Head>
      <Header></Header>
      <main
        className={`flex min-h-screen flex-col items-center justify-between min-[768px]:p-24 max-[768px]:p-6 max-[600px]:bg-slate-950 transition-all duration-1000  ${inter.className}`}
      >
        <div className="content flex flex-col gap-3">
          <div
            id="Criador"
            className="first-section h-[100vh] flex flex-col gap-2 justify-center items-start"
          >
            <h2 className="font-bold text-lg">Bushidô e seu Criador:</h2>
            <p className="leading-8">
              O Bushidô é um código de conduta que foi desenvolvido no Japão
              feudal e é associado aos samurais, a classe guerreira japonesa.
              Não há um criador específico do Bushidô, mas sim uma evolução ao
              longo do tempo com contribuições de diversos samurais, filósofos e
              escritores. Algumas das figuras notáveis associadas ao
              desenvolvimento do Bushidô incluem Miyamoto Musashi, Yamamoto
              Tsunetomo e Nitobe Inazō.
            </p>
            <div className="cards flex gap-3 w-full">
            <div className="card w-full">
                <ModelCanvas3D />
            </div>
            </div>
            
          </div>
          <div
            data-aos="fade-in"
            id="oqueé"
            className="second-section h-[100vh] flex flex-col gap-2 justify-center items-start"
          >
            <h2 className="font-bold text-lg">O que é:</h2>
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
          </div>
          <div
            id="principios"
            data-aos="fade-in"
            className="second-section h-[100vh] flex flex-col gap-2 justify-center items-start"
          >
            <h2 className="font-bold text-lg">Princípios do Bushidô:</h2>
            <p>
              Os princípios do Bushidô variam ligeiramente ao longo do tempo e
              dependendo das fontes, mas geralmente incluem os seguintes sete
              princípios:
            </p>
            <ul className="mt-8 list-none flex flex-col gap-6">
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
          </div>
          <div
            id="comparacao"
            data-aos="fade-in"
            className="third-section min-h-[100vh] flex flex-col gap-2 justify-center items-start"
          >
            <h2 className="font-bold text-lg">
              Comparação com gerenciamento de projetos:
            </h2>
            <div className="tableContainer">
              <table className="min-w-full text-left font-light border-collapse table-fixed w-full text-sm bg-white rounded-xl">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr className="">
                    <th className="border-b dark:border-slate-100 font-bold p-6 text-black dark:text-slate-200 text-left">
                      Princípio do bushido
                    </th>
                    <th className="border-b dark:border-slate-100 font-bold p-6 text-black dark:text-slate-200  text-left">
                      Gerenciamento de projetos
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="border-b dark:border-slate-600 font-medium p-6 text-slate-900 dark:text-slate-200 max-[600px]:text-slate-200 text-left">
                      <strong>Gi - Retidão</strong>
                    </td>
                    <td className="border-b dark:border-slate-600 font-medium p-6 text-slate-900 dark:text-slate-200 max-[600px]:text-slate-200 text-left">
                      No gerenciamento de projetos, a retidão está relacionada à
                      ética profissional, garantindo que todas as ações estejam
                      alinhadas com os valores da empresa e que o projeto seja
                      conduzido de forma ética.
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="border-b dark:border-slate-600 font-medium p-6 text-slate-900 dark:text-slate-200 max-[600px]:text-slate-200  text-left">
                      <strong>Yu - Coragem</strong>
                    </td>
                    <td className="border-b dark:border-slate-600 font-medium p-6 text-slate-900 dark:text-slate-200 max-[600px]:text-slate-200 text-left">
                      No gerenciamento de projetos, a retidão está relacionada à
                      ética profissional, garantindo que todas as ações estejam
                      alinhadas com os valores da empresa e que o projeto seja
                      conduzido de forma ética.
                    </td>
                  </tr>

                  <tr className="border-b dark:border-neutral-500">
                    <td className="border-b dark:border-slate-600 font-medium p-6 text-slate-900 dark:text-slate-200 max-[600px]:text-slate-200 text-left">
                      <strong>Jin - Benevolência</strong>
                    </td>
                    <td className="border-b dark:border-slate-600 font-medium p-6 text-slate-900 dark:text-slate-200 max-[600px]:text-slate-200 text-left">
                      Mostrar compaixão e respeito pela equipe e pelos
                      stakeholders é fundamental para construir relacionamentos
                      e garantir um ambiente de trabalho saudável
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="border-b dark:border-slate-600 font-medium p-6 text-slate-900 dark:text-slate-200 max-[600px]:text-slate-200 text-left">
                      <strong>Rei - Respeito</strong>
                    </td>
                    <td className="border-b dark:border-slate-600 font-medium p-6 text-slate-900 dark:text-slate-200 max-[600px]:text-slate-200 text-left">
                      O respeito pela autoridade e pelas normas do projeto é
                      essencial para manter a ordem e a coesão da equipe.
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="border-b dark:border-slate-600 font-medium p-6 text-slate-900 dark:text-slate-200 max-[600px]:text-slate-200 text-left">
                      <strong>Makoto - Honestidade</strong>
                    </td>
                    <td className="border-b dark:border-slate-600 font-medium p-6 text-slate-900 dark:text-slate-200 max-[600px]:text-slate-200 text-left">
                      A honestidade é crucial na comunicação dentro do projeto.
                      A transparência e a sinceridade ajudam a evitar
                      mal-entendidos e conflitos.
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="border-b dark:border-slate-600 font-medium p-6 text-slate-900 dark:text-slate-200 max-[600px]:text-slate-200 text-left">
                      <strong>Meiyo - Honra</strong>
                    </td>
                    <td className="border-b dark:border-slate-600 font-medium p-6 text-slate-900 dark:text-slate-200 max-[600px]:text-slate-200 text-left">
                      Manter a integridade do projeto e cumprir compromissos
                      contribui para a reputação e a credibilidade da equipe de
                      projeto.
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="border-b dark:border-slate-600 font-medium p-6 text-slate-900 dark:text-slate-200 max-[600px]:text-slate-200 text-left">
                      <strong>Chugi - Lealdade</strong>
                    </td>
                    <td className="border-b dark:border-slate-600 font-medium p-6 text-slate-900 dark:text-slate-200 max-[600px]:text-slate-200 text-left">
                      A lealdade à equipe e aos objetivos do projeto é
                      fundamental para manter a coesão e a colaboração.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
