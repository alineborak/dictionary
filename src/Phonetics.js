import React from 'react';

function Phonetics(props) {
    console.log(props.phonetic);
    return (
        <div className='Phonetics'>
            {props.phonetic.text}
            <br />
            <a href={props.phonetic.audio} target="_blank">
                Check pronunciation 🎵👂
            </a>
        </div>
    )
}

export default Phonetics;