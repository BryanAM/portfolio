/*
Data Defintion
{
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
    tags: ['React', 'TypeScript', 'Sass'],
    title: 'Neko Punch',
    graphicUrl: 'https://images.unsplash.com/photo-1603349136288-95d87bd0a268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    url: 'https://bryanam.github.io/neko-punch/',
  },
  {
    description: 'Get to code faster with a small setup and structure',
    featured: false,
    github: 'https://github.com/BryanAM/starter',
    key: 3,
    tags: ['React', 'i18next', 'Sass'],
    title: 'React Start App',
    graphicUrl: 'https://images.unsplash.com/photo-1496167117681-944f702be1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    url: '',
  },
];

export default projects;
