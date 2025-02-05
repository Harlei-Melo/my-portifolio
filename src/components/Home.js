import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                Olá, eu me chamo <span>Harlei Melo</span>
            </div>
            <div className="des">
                {/* 30 */}
                Designer e desenvolvedor Flutter que alia design e eficiência mobile. Uso o Figma para criar interfaces interativas com constante inovação e colaboração. Sempre apaixonado por jogos nostálgicos, como Grand Chase.
            </div>
            
            <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Baixar CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="Laboratory 研究室.gif" alt="" />
            </div>
        </div>
    </section>
    )
}

export default Home
