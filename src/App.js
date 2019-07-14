import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './Graph.js';
import './App.css';



function del() {
 document.getElementById("graph1").innerHTML="";
}
function add() {
    var myObject = JSON.parse(document.getElementById('data-text').value);
   var name = document.getElementById('name-text').value;
   var type = document.getElementById('type-drop').value;
   var pos = document.getElementById('pos-drop').value;
   ReactDOM.render(<Graph data={myObject}  name = {name} type = {type} pos = {pos}/>, document.getElementById(pos));  

  }
function App() {
  return (  

        <div className = {"main-Div"}>
          
          <div className={"uper-Div"}>
              <div className={"left-Div"}>
              <div className={"form-Div"}>           
              
                  <div>
                  <label>  Enter data in Json (ex  [5,6,7,8] ) </label>   
                  <input type="text" id="data-text" placeholder= "Data" required></input>
                  
                 
                  </div>
                  <div>
                  
                 

                    
                    <input type="text" id="name-text" placeholder= "Graph Title"></input>
                    </div>
                    <div>
                    
                    <select id="type-drop">
                      <option value="bar"> Graph Type</option>
                    <option value="bar">Bar</option>
                    <option value="line">Line</option>
                    <option value="pie">Pie</option>

                    </select>
                    </div>
                    <div>
                                      <select id="pos-drop">
                    <option value="graph1">Position</option>
                    <option value="graph1">Graph Position 1</option>
                    <option value="graph2">Graph Position 2</option>
                    <option value="graph3">Graph Position 3</option>

                    </select>
                    </div>
                    <div>
                    < button onClick = {add}> Create Graph </ button> 
                    </div>
                    </div>
              </div>
              <div className={"right-Div"} >Graph Position 1
              <div  id="graph1"></div>
              </div>
          </div>
          
          <div className={"down-Div"}>
              <div className={"left-Div"} >Graph Position  2
              <div  id="graph2"></div>
              </div>
              <div className={"right-Div"} >Graph Position 3
              <div  id="graph3"></div>
              </div>
          </div>
  </div>
  
  

  );
}

export default App;
