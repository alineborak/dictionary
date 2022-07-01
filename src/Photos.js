import React from 'react';

function Photos(props) {
    if (props.photos) {
        return (
            <section className='Photos'>
                {props.photos.map(function (photo) {
                    return <img src={photo.src.medium} alt="" />;
                })}
            </section>
        );
    } else {
        return null;
    }
}

export default Photos;