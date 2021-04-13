import React from 'react';
import Batiment from './Batiment';


const Batiments=(  { batimentData} ) =>{
     
    const batimentComponent = batimentData.map((nomBatiment,i) =>{
        return (
        <Batiment
             key={i} 
             nomBatiment={batimentData[i].nomBatiment}
             type={batimentData[i].type}
             Etages={batimentData[i].Etages}
          />
        ); 
    })
    
    return (
        <div className='CompBatS'>
             <div className='BatimentS'>
                 {batimentComponent}
             </div>
        </div>
    );
}
export default Batiments;