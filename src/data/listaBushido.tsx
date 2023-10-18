import giImage from "../../public/images/gi.png";
import yuImage from "../../public/images/yu.png";
import jinImage from "../../public/images/jin.png";
import reiImage from "../../public/images/rei.png";
import makotoImage from "../../public/images/makoto.png";
import meiyoImage from "../../public/images/meiyo.png";
import chugiImage from "../../public/images/chugi.png";
import giDarkImage from "../../public/images/gi-dark.png";
import yuDarkImage from "../../public/images/yu-dark.png";
import jinDarkImage from "../../public/images/jin-dark.png";
import reiDarkImage from "../../public/images/rei-dark.png";
import makotoDarkImage from "../../public/images/makoto-dark.png";
import meiyoDarkImage from "../../public/images/meiyo-dark.png";
import chugiDarkImage from "../../public/images/chugi-dark.png";

const exemplosHonra = [
  "Um gerente de projeto que é honesto e transparente em suas ações.",
  "Um funcionário que renuncia a um emprego que não está alinhado com seus valores.",
  "Uma pessoa que diz a verdade, mesmo que seja difícil.",
];

const exemplosCoragem = [
  "Um gerente de projeto que toma uma decisão difícil, mesmo que seja impopular.",
  "Um gerente de projeto que toma uma decisão difícil, mesmo que seja impopular.",
  "Uma pessoa que defende o que acredita, mesmo que seja contra a corrente.",
];

const exemplosCompaixao = [
  "Um gerente de projeto que apoia um membro da equipe que está passando por um momento difícil.",
  "Um funcionário que ajuda um colega de trabalho a aprender uma nova habilidade.",
  "Uma pessoa que doa seu tempo ou recursos para ajudar os outros.",
];

const exemplosRespeito = [
  "Um gerente de projeto que trata todos os colegas de trabalho com respeito, independentemente de sua posição social.",
  "Um funcionário que é educado e atencioso com seus colegas de trabalho e clientes.",
  "Uma pessoa que trata os outros com dignidade e consideração.",
];

export const listaBushido = [
  {
    key: "gi",
    image: giImage,
    imageDark: giDarkImage,
    simbolo: "义",
    href: "#Gi",
    name: "Gi - Retidão",
    exemplos: exemplosHonra,
    description:
      "Representa a integridade moral e ética, fazendo a coisa certa, mesmo quando é difícil.",
  },
  {
    key: "yu",
    image: yuImage,
    imageDark: yuDarkImage,
    simbolo: "勇",
    href: "#Yu",
    name: "Yu - Coragem",
    exemplos: exemplosCoragem,
    description: "Representa a coragem, bravura e heroísmo.",
  },
  {
    key: "jin",
    image: jinImage,
    imageDark: jinDarkImage,
    simbolo: "仁",
    href: "#Jin",
    name: "Jin - Benevolência",
    exemplos: exemplosCoragem,
    description: "Representa a compaixão e a benevolência.",
  },
  {
    key: "rei",
    image: reiImage,
    imageDark: reiDarkImage,
    simbolo: "礼",
    href: "#Rei",
    name: "Rei - Respeito",
    exemplos: exemplosRespeito,
    description: "Representa o respeito, cortesia e educação.",
  },
  {
    key: "makoto",
    image: makotoImage,
    imageDark: makotoDarkImage,
    simbolo: "誠",
    href: "#Makoto",
    name: "Makoto - Honestidade",
    exemplos: exemplosCompaixao,
    description: "Representa a honestidade e a sinceridade.",
  },
  {
    key: "meiyo",
    image: meiyoImage,
    imageDark: meiyoDarkImage,
    simbolo: "名誉",
    href: "#Meiyo",
    name: "Meiyo - Honra",
    exemplos: exemplosCompaixao,
    description: "Representa a honra e a glória.",
  },
  {
    key: "chugi",
    image: chugiImage,
    imageDark: chugiDarkImage,
    simbolo: "忠义",
    href: "#Chugi",
    name: "Chūgi - Lealdade",
    exemplos: exemplosCompaixao,
    description: "Representa a lealdade.",
  },
];