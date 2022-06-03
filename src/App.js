import React  from "react"

import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"
import { getWeatherByCity } from "./data";

const API_KEY = "d330a389213d343188b7f0c8bd6a9c44";

class App extends React.Component{
    
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined

    }

    gettingWeather = async (e) =>{
        e.preventDefault();
        var city=e.target.elements.city.value;
        

        if(city){
          var Weather = await getWeatherByCity(city)


            this.setState(Weather);
        } else{
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                sunset: undefined,
                error: "Навчись писати:)"
            });
        }
    }

  render(){
    return(
      <div className="wrapper">
          <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5"><Info/></div>
                    <div className="col-sm-7">
                    <Form weatherMethod={this.gettingWeather} />
                    <Weather
                        temp={this.state.temp}
                        city={this.state.city}
                        country={this.state.country}
                        pressure={this.state.pressure}
                        sunset={this.state.sunset}
                        error={this.state.error}
                        />
                    </div>
                </div>
            </div>
          </div>
        
        
      </div>
    );
  }
}
export default App;

