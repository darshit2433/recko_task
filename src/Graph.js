
import React, { Component } from 'react';
import './App.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
class Graph extends Component {
    state = {
        dataSate: [],
        pos : this.props.pos
    }
    update = () => {

        this.setState({
            dataSate: JSON.parse(document.getElementById('data-update' + this.props.pos).value)
        });
    }

    del = () => {
       this.state.dataSate = [];
        document.getElementById(this.state.pos).style.display = "none";

    }

    render() {
        
        console.log(this.state.dataSate);
        document.getElementById(this.state.pos).style.display = "block";
        if (this.state.dataSate.length == 0) {
            this.state.dataSate=  this.props.data;
        }
       const options = {
            chart: {
                type: this.props.type
            },
            title: {
                text: this.props.name
            },
            series: [{
                data: this.state.dataSate
            }]
        }
        return (
            <div id="graph-div" >
                <div id={this.state.pos}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                    <div className={"update-div"} >

                        <input type="text" id={"data-update" + this.props.pos} placeholder="Enter Data for Update" ></input>
                        <button onClick={this.update}  >Update</button>
                        <button onClick={this.del} className={"delete-btn"}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }



}

export default Graph;