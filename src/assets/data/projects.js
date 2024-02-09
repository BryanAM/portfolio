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
    url: 'https://stage.midknightelectric.com',
  },
  {
    description: 'A simple NextJS application integrating OpenAI Completion API',
    featured: false,
    github: 'https://github.com/BryanAM/chat',
    key: 4,
    tags: ['NextJS', 'OpenAI', 'ChatGPT'],
    title: 'Chat Completion',
    url: 'https://github.com/BryanAM/chat',
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
];

export default projects;
