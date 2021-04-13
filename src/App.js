import {Component} from 'react';
import SearchBox from './SearchBox';
import batimentData from './batimentData';
import Batiments from './Batiments';



class App extends Component{
  constructor(){
    super();
    this.state={
      serachfield:'',
      batimentData:batimentData
    }
  }
  
  
  onSearchChange=(event)=>{
    this.setState({serachfield :event.target.value})
    console.log(event.target.value)
  }
  componentDidMount(){
    console.log("set state")
  }
  
  render(){
    
      const  filteredBatiment = this.state.batimentData.filter(batiment =>{
        console.log(batiment.nomBatiment)
        return  batiment.nomBatiment.toUpperCase().includes(this.state.serachfield.toUpperCase())
      })  
      console.log(filteredBatiment.nomBatiment)
      return(
          <div>
               <h1>Hey From houssam</h1>
               <SearchBox searchChange={this.onSearchChange}/>
               <Batiments batimentData={filteredBatiment}/>  
               
          </div>
        );
  }
  
}

export default App;

/**
 *                 <Etage chambres={this.chambres} idEtage={this.idEtage}/>
                <Etage chambres={this.chambres} idEtage={this.idEtage}/>
                <Etage chambres={this.chambres} idEtage={this.idEtage}/>

                <Chambre idChmbre={500} dispo={0}/>
 */
/**
 *   const filteredBatiment = batimentData.filter(batiment =>{
      return  batiment.nomBatiment.toLowerCase().includes(this.searchField.toLowerCase())
    });


               <Batiments batimentData={filteredBatiment}/>   

 */