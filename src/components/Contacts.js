import React, { useState, useRef } from 'react'
import CustomHook from './CustomHook';

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'GitHub',
      value: 'github.com/Harlei-Melo'
    },
    {
      title: 'Email',
      value: 'harleimelo0@gmail.com'
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/harlei-melo'
    }
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Meus Contatos
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Entre em contato para conversarmos sobre novas ideias, projetos e oportunidades de colaboração.
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className='item' key={key}>
            <h3>{value.title}</h3>
            <div>{value.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contacts;
