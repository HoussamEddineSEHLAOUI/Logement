import { Component } from 'react';
import React from 'react';
import './Chambre.css';



class Chambre extends Component{
    onInputChange=(dispo)=>{
        if (dispo===1)return "red";
        if (dispo===0)return "aqua";
        if (dispo===2)return "lightblue";
    }
        
    render(){
        const bgColor =this.onInputChange(this.props.dispo);
        return (
        
            <div className='Chambre'
            style={{backgroundColor: bgColor}}
             >
                <h2 className='NumChambre'>{this.props.idChmbre}</h2>
            </div>
        );
    }
}
export default Chambre;   