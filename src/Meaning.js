import React from 'react';
import './Meaning.css';
import Synonyms from './Synonyms.js';

function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <div className='Definition'>
                            {definition.definition}
                        </div>

                        <div className='Example'>
                            {definition.example}
                            <Synonyms synonyms={definition.synonyms} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Meaning;