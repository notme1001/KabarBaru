import React from 'react';
import Title from '../components/title'
import P from '../components/paragraph'
import ErrIMg from '../assets/images/notfound.png'

export const NotFound: React.FC = () => {
    return (
        <div className="boxLoading">
            <img src={ErrIMg} width="35%" style={{marginBottom: 38}}/>
            <Title>Notfound.</Title>
            <P style={{marginTop: 20, textAlign: 'center'}}>
                The page you were looking for was not found.
            </P>
        </div>
    )
}