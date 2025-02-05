import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faHtml5, 
  faCss3, 
  faJs, 
  faFlutter,
  faFigma
} from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const [listSkills] = useState([
    {
      name: 'HTML',
      des: 'Linguagem de marcação fundamental para estruturar conteúdos na web, oferecendo a base sólida para qualquer projeto digital.',
      icon: faHtml5
    },
    {
      name: 'CSS',
      des: 'Ferramenta essencial para dar estilo e personalidade às páginas, criando layouts modernos e responsivos.',
      icon: faCss3
    },
    {
      name: 'JavaScript',
      des: 'Linguagem de programação que torna as páginas interativas, permitindo experiências dinâmicas e cativantes.',
      icon: faJs
    },
    {
      name: 'ReactJs',
      des: 'Biblioteca poderosa para construir interfaces de usuário de forma eficiente, com componentes reutilizáveis e alta performance.',
      icon: faReact
    },
    {
      name: 'Flutter',
      des: 'Framework inovador que possibilita o desenvolvimento de aplicativos móveis com design atraente e desempenho próximo ao nativo.',
      icon: faFlutter
    },
    {
      name: 'UI/UX',
      des: 'Abordagem que une design e experiência do usuário para criar interfaces intuitivas e visualmente impactantes.',
      icon: faFigma
    }
  ]);

  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
         Minhas Habilidades
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
         Confira um resumo das tecnologias e metodologias que utilizo para transformar ideias em soluções digitais inovadoras.
       </div>
       <div className="list">
         {listSkills.map((value, key) => (
           <div className="item" key={key} ref={(el) => el && divs.current.push(el)}>
             <FontAwesomeIcon icon={value.icon} />
             <h3>{value.name}</h3>
             <div className="des">{value.des}</div>
           </div>
         ))}
       </div>
    </section>
  );
}

export default Skills;
