import React  from "react"
import App from "../App";

class  Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="Місто"/>
                <button>Дізнатися погоду</button>
            </form>
        );
    }
}

export default Form;
