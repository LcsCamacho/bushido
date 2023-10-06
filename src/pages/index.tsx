import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

const listaBushido = [
  {
    simbolo: "义",
    title: "Gi - Retidão",
    description:
      "Representa a integridade moral e ética, fazendo a coisa certa, mesmo quando é difícil.",
  },
  {
    simbolo: "勇",
    title: "Yu - Coragem",
    description: "Representa a coragem, bravura e heroísmo.",
  },
  {
    simbolo: "仁",
    title: "Jin - Benevolência",
    description: "Representa a compaixão e a benevolência.",
  },
  {
    simbolo: "礼",
    title: "Rei - Respeito",
    description: "Representa o respeito, cortesia e educação.",
  },
  {
    simbolo: "誠",
    title: "Makoto - Honestidade",
    description: "Representa a honestidade e a sinceridade.",
  },
  {
    simbolo: "名誉",
    title: "Meiyo - Honra",
    description: "Representa a honra e a glória.",
  },
  {
    simbolo: "忠义",
    title: "Chūgi - Lealdade",
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
        className={`flex min-h-screen flex-col items-center justify-between p-24 max-[600px]:bg-slate-950 transition-all duration-1000  ${inter.className}`}
      >
        <div className="content flex flex-col gap-3">
          <div className="first-section h-[100vh] flex flex-col gap-2 justify-center items-start">
            <h2 className="font-bold text-lg">Bushidô e seu Criador:</h2>
            <p className="">
              O Bushidô é um código de conduta que foi desenvolvido no Japão
              feudal e é associado aos samurais, a classe guerreira japonesa.
              Não há um criador específico do Bushidô, mas sim uma evolução ao
              longo do tempo com contribuições de diversos samurais, filósofos e
              escritores. Algumas das figuras notáveis associadas ao
              desenvolvimento do Bushidô incluem Miyamoto Musashi, Yamamoto
              Tsunetomo e Nitobe Inazō.
            </p>
          </div>
          <div
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
                  <li className="flex flex-col gap-2 hover:scale-105 transition-all cursor-default">
                    <h3 className="font-bold text-lg ">
                      <span className="font-bold text-2xl text-red-500 me-2">
                        {item.simbolo}
                      </span>
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            data-aos="fade-in"
            className="third-section h-[100vh] flex flex-col gap-2 justify-center items-start"
          >
            <h2 className="font-bold text-lg">Bushidô e seu Criador:</h2>
            <p>
              O Bushidô é um código de conduta que foi desenvolvido no Japão
              feudal e é associado aos samurais, a classe guerreira japonesa.
              Não há um criador específico do Bushidô, mas sim uma evolução ao
              longo do tempo com contribuições de diversos samurais, filósofos e
              escritores. Algumas das figuras notáveis associadas ao
              desenvolvimento do Bushidô incluem Miyamoto Musashi, Yamamoto
              Tsunetomo e Nitobe Inazō.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
