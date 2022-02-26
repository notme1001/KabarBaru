import React from 'react';
import Title from '../components/title'
import P from '../components/paragraph'
import ErrIMg from '../assets/images/err.png'

export const ErrComp: React.FC = () => {
    return (
        <div className="boxLoading">
            <img src={ErrIMg} width="35%" style={{marginBottom: 38}}/>
            <Title>There is an error.</Title>
            <P style={{marginTop: 20, textAlign: 'center'}}>
                An error occurred in the application, please wait a while longer, or you can contact the developer.
            </P>
        </div>
    )
}