import React from 'react';
import Etage from './Etage'
import './batiment.css';


const Batiment=(props) =>{
     
    const etageComponent =props.Etages.map((idEtage,i) =>{
        return (
        <Etage 
             key={i} 
             idEtage={props.Etages[i].idEtage}
             chambres={props.Etages[i].chambres}
          />
        ); 
    })
    
    return (
        <div className='CompBat'>
            <h3 className='nomBat'>Nom Batiment : {props.nomBatiment}</h3>
            <h3 className='typrBat'>Type : {props.type}</h3>
             <div className='Batiment'>
                 {etageComponent}
             </div>
             <div className='espace'></div>
        </div>
    );
}
export default Batiment;