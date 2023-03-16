// Importation des fichiers nécessaires
import './collapse.scss';
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

// Définition du composant Collapse
export default function Collapse({ title, content }) {

    // Déclaration de l'état initial pour le collapse
    const [toggle, setToggle] = useState(false);

    // Rendu du composant Collapse
    return (
        <>
            <div className="collapse" >
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
                        src={arrow}
                        alt="show content"
                    />
                </h3>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div>
            </div>
        </>
    )
}
