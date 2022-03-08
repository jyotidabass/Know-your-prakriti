import React from 'react';
import './_header.scss'

const header = () => (
    <div className='header'>
        <h2 className="header__title"> Ayurveda | Dosha Prakriti Quiz </h2>
        <p className="header__paragraph">Please answer the questions as objectively as you can. Try
        to answer with the idea in mind that you are assessing yourself based on general tendencies
        that you have held since around the age of 17 years until now. Also, base your answers on
        people with your genetic/cultural background. If you have trouble with some questions, ask
        someone who has known you for a while for an objective answer.
        </p>
        <p className="header__link"> <a href="https://drive.google.com/file/d/168m-yX2vdUoj6_DaDp1j3aSHdsA-wIhU/view"> Source </a> </p>
    </div>
);

export default header;
