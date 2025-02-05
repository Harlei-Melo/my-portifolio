import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPersonCircleQuestion, 
  faEarthAmericas, 
  faExternalLinkAlt 
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
  const [listProjects] = useState([
    {
      name: 'Projeto Leh',
      des: 'Projeto desenvolvido em React.js e CSS para evidenciar minhas habilidades na criação de interfaces modernas e responsivas.',
      mission: 'Desenvolvimento Front-end',
      language: 'React.js, CSS',
      images: '/project-leh.png',
      deploy: 'https://leticiacs.com.br',
      github: 'https://github.com/Harlei-Melo/Leticia_Portifolio'
    },
    {
      name: 'Projeto Nubank',
      des: 'Projeto realizado em HTML, SASS e JavaScript, com o objetivo de reinventar o design original e testar minhas técnicas de desenvolvimento web.',
      mission: 'Redesign e Desenvolvimento Front-end',
      language: 'HTML, SASS, JavaScript',
      images: '/project-nubank.png',
      deploy: 'https://projeto-nubank.netlify.app',
      github: 'https://github.com/Harlei-Melo/Projeto-Nubank'
    },
    {
      name: 'Projeto Card Glass',
      des: 'Projeto inovador desenvolvido em HTML e CSS, utilizando o efeito glass para criar um design moderno e sofisticado que ressalta minha criatividade.',
      mission: 'Design e Desenvolvimento Front-end',
      language: 'HTML, CSS',
      images: '/project-glass.png',
      deploy: 'https://projeto-card-js.netlify.app',
      github: 'https://github.com/Harlei-Melo/Card-JS'
    }
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
         Meus Projetos
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
         Confira alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diversas tecnologias e abordagens de design.
       </div>
       <div className="list">
         {listProjects.map((value, key) => (
           <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
             <div className="images">
               <img src={value.images} alt={value.name} />
             </div>
             <div className="content">
               <h3>{value.name}</h3>
               <div className="des">{value.des}</div>
               <div className="mission">
                 <div>
                   <FontAwesomeIcon icon={faPersonCircleQuestion} />
                 </div>
                 <div>
                   <h4>Missão</h4>
                   <div className="des">{value.mission}</div>
                 </div>
               </div>
               <div className="mission">
                 <div>
                   <FontAwesomeIcon icon={faEarthAmericas} />
                 </div>
                 <div>
                   <h4>Tecnologias</h4>
                   <div className="des">{value.language}</div>
                 </div>
               </div>
               <div className="project-links">
                 <a 
                   href={value.deploy} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="btn"
                 >
                   <FontAwesomeIcon icon={faExternalLinkAlt} className="icon" />
                   <span>Deploy</span>
                 </a>
                 <a 
                   href={value.github} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="btn"
                 >
                   <FontAwesomeIcon icon={faGithub} className="icon" />
                   <span>GitHub</span>
                 </a>
               </div>
             </div>
           </div>
         ))}
       </div>
    </section>
  );
}

export default Projects;
