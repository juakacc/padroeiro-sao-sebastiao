import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '27_12.png',
    title: '27/12/2020 | 17h',
    info: 'Missa de envio da Imagem de São Sebastião para as comunidades rurais',
    info2: '',
    url: 'https://www.facebook.com/santaanapascom/videos/1082334832208306/?__cft__[0]=AZVjjgunhyhqkr3xtYW5SdogJO5ugnXths8HOFCGLmiY5WZ9WBgfWFNrXh7UxLvXfQPbwX3gJ-V9-W1fxlmafQdPQaBcpsBTPFyd1sqyZKZMTy9lHDyuGqicm1ipxyHjBNiP_SNGgbkxhP7a-d15Bi-lbsKbV5ofpe6N8QcYEhIAww&__tn__=%2CO%2CP-R',
  },
  {
    id: nanoid(),
    img: '28_12.png',
    title: '28/12/2020 | 19h30',
    info: 'Abertura das festividades de São Sebastião. Com show de louvor ao vivo!',
    info2: '',
    url: 'https://youtu.be/vZRPFvxIoB0',
  },
  {
    id: nanoid(),
    img: '29_12.png',
    title: '29/12/2020 | 19h30',
    info: 'Celebração na comunidade de Malhada de Areia',
    info2: '',
    url: 'https://www.facebook.com/santaanapascom/posts/2764592593783594',
  }, {
    id: nanoid(),
    img: '30_12.png',
    title: '30/12/2020 | 19h30',
    info: 'Celebração na comunidade do Algodão',
    info2: '',
    url: 'https://www.facebook.com/santaanapascom/posts/2765246427051544',
  }, {
    id: nanoid(),
    img: 'default.png',
    title: '31/12/2020 | 17h',
    info: 'Celebração na comunidade do Juá',
    info2: '',
    url: '',
  },{
    id: nanoid(),
    img: 'default.png',
    title: '01/01/2021 | 19h30',
    info: 'Celebração na comunidade do Balanço',
    info2: '',
    url: '',
  },{
    id: nanoid(),
    img: 'default.png',
    title: '02/01/2021 | 19h30',
    info: 'Celebração na comunidade de Campos',
    info2: '',
    url: '',
  },{
    id: nanoid(),
    img: 'default.png',
    title: '03/01/2021 | 19h30',
    info: 'Celebração na comunidade das Barrocas',
    info2: '',
    url: '',
  },{
    id: nanoid(),
    img: 'default.png',
    title: '04/01/2021 | 19h30',
    info: 'Celebração na comunidade do Pintor',
    info2: '',
    url: '',
  },{
    id: nanoid(),
    img: 'default.png',
    title: '05/01/2021 | 19h30',
    info: 'Celebração na comunidade de Santana',
    info2: '',
    url: '',
  },{
    id: nanoid(),
    img: 'default.png',
    title: '06/01/2021 | 19h30',
    info: 'Celebração na comunidade de Aroeiras',
    info2: '',
    url: '',
  },{
    id: nanoid(),
    img: 'default.png',
    title: '07/01/2021 | 19h30',
    info: 'Celebração na comunidade do Curralinho',
    info2: '',
    url: '',
  },{
    id: nanoid(),
    img: 'default.png',
    title: '08/01/2021 | 19h30',
    info: 'Celebração na comunidade do Miramar',
    info2: '',
    url: '',
  },{
    id: nanoid(),
    img: 'default.png',
    title: '09/01/2021 | 19h30',
    info: 'Celebração na comunidade de Boa Vista',
    info2: '', 
    url: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};
// FOOTER DATA 
export const footerData = { 
  networks: [ 
    { 
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/santaanapascom',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/santaanapascom',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCovOTZxSOeDN_oOlfdXlumg',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
