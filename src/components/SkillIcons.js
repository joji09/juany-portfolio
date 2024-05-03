export const SkillIcons = ({name}) => {

    switch (name) {
    case 'node':
      return <img title="NodeJS" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
    case 'js':
      return <img title="JavaScript" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
    case 'html':
      return <img title="HTML5" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
    case 'css':
      return <img title="CSS3" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
    case 'tailwind':
      return <img title="TailwindCSS" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
    case 'python':
      return <img title="Python" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
    case 'react':
      return <img title="React.js" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
    case 'git':
      return <img title="Git" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
    case 'postgresql':
      return <img title="Postgresql" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
    }
}