/*
Data Defintion
OBJ = {
  description: string,
  featured: boolean,
  github: string | null,
  key: number,
  tags: Array<string>,
  title: string,
  graphicUrl: string,
  url: string,
}
*/

const projects = [
  {
    description: 'A simple & responsive Korean & English dictionary web application',
    featured: true,
    github: null,
    key: 1,
    tags: ['React', 'JavaScript', 'Node', 'MongoDB', 'GraphQL', 'Express', 'i18next'],
    title: 'Sajeon',
    graphicUrl: '../assets/pictograms/sajeon.png',
    url: 'https://labs.midknightelectric.com',
  },
  {
    description: 'Get cute & silly cats photos & gifs integrated with the cataas API.',
    featured: false,
    github: 'https://github.com/BryanAM/neko-punch',
    key: 2,
    tags: ['React', 'TypeScript', 'Scss'],
    title: 'Neko Punch',
    graphicUrl: 'https://images.unsplash.com/photo-1603349136288-95d87bd0a268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    url: 'https://bryanam.github.io/neko-punch/',
  },
  {
    description: '',
    featured: false,
    github: null,
    key: 3,
    tags: [''],
    title: '',
    graphicUrl: '',
    url: '',
  },
  {
    description: '',
    featured: false,
    github: null,
    key: 4,
    tags: [''],
    title: '',
    graphicUrl: '',
    url: '',
  },
  {
    description: '',
    featured: false,
    github: null,
    key: 5,
    tags: [''],
    title: '',
    graphicUrl: '',
    url: '',
  },
  {
    description: '',
    featured: false,
    github: null,
    key: 6,
    tags: [''],
    title: '',
    graphicUrl: '',
    url: '',
  },
  {
    description: '',
    featured: false,
    github: null,
    key: 7,
    tags: [''],
    title: '',
    graphicUrl: '',
    url: '',
  },
];

export default projects;
