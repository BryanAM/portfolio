/*
Data Defintion
{
  description: string,
  featured: boolean,
  github: string | null,
  key: number,
  tags: Array<string>,
  title: string,
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
    url: 'https://labs.midknightelectric.com',
  },
  {
    description: 'Get cute & silly cats photos & gifs integrated with the cataas API.',
    featured: false,
    github: 'https://github.com/BryanAM/neko-punch',
    key: 2,
    tags: ['React', 'TypeScript', 'Sass'],
    title: 'Neko Punch',
    url: 'https://bryanam.github.io/neko-punch/',
  },
  {
    description: 'My current projects, posts, and highlights neatly bundled into my personal website.',
    featured: true,
    github: null,
    key: 3,
    tags: ['React', 'JavaScript', 'motion', 'i18next'],
    title: 'Portfolio Website',
    url: 'https://github.com/BryanAM/portfolio',
  },
  {
    description: 'Get to code faster with a small setup and structure',
    featured: false,
    github: 'https://github.com/BryanAM/starter',
    key: 4,
    tags: ['React', 'i18next', 'Sass'],
    title: 'React Start App',
    url: 'https://github.com/BryanAM/starter',
  },
];

export default projects;
