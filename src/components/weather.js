import React  from "react"
import App from "../App";

class  Weather extends React.Component{
    render(){
        return(
            <div>
                {this.props.city &&
                <div>
                    <p>Місцезнаходження:{this.props.city},{this.props.country}</p>
                    <p>Температура:{this.props.temp}</p>
                    <p>Тиск:{this.props.pressure}</p>
                    <p>Захід сонця:{this.props.sunset}</p>
                </div>
                }
               <p> {this.props.error}</p>
            </div>

        );
    }
}

export default Weather;
