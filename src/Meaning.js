import React from 'react';
import './Meaning.css';
import Synonyms from './Synonyms.js';

function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className='Meaning'>
            <h4>{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        {definition.definition}
                        <br />
                        <em>{definition.example}</em>
                        <Synonyms synonyms={definition.synonyms} />
                    </div>
                )
            })}
        </div>
    )
}

export default Meaning;