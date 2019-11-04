import React from "react";
import "./test3.css";
import example1 from "./images/1.png";
import example2 from "./images/2.png";
import example3 from "./images/3.png";

class Test3 extends React.PureComponent{

  constructor(props){
    super(props);
    this.state = {
        username:"",
        age:"",
        responseText: "",
    };
}

handleChange = (e) =>{
  this.setState({
      [e.target.name]: e.target.value,
  });
}

handleSubmit = (e) =>{
  e.preventDefault();
  fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
          "Content-Type": "application/json"
      },
  })
  .then( (res) => {
    this.setState({responseText: res.statusText});
  })
  .catch(err =>{
      console.log("err", err);
  });
}


  render(){
    return (
      <div>
        <div className={"description"}>
          <h3>
            Ülesanne 3:
          </h3>
          <p>
            <code>server.js</code> failis on defineeritud otspunkt
            <code>POST /api/register</code>.
            Kui kasutaja vajutab "Send", siis peab frontend kasutama seda REST teenust
            ning saatma "username" ja "age" väärtused backendi.
            Server annab vastuseks teksti, mis tuleb kuvada ekraanil.
          </p>
          <h3>
            Näited:
          </h3>
          <div className="images">
            <img src={example1}/>
            <img src={example2}/>
            <img src={example3}/>
          </div>
        </div>
        <h3>
          Lahendus:
        </h3>
        <form onSubmit={this.handleSubmit}>
          <div className={"row"}>
            <label htmlFor="username">Username</label>
            <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
          </div>
          <div className={"row"}>
            <label htmlFor="age">Age</label>
            <input name="age"  type="number" value={this.state.age} onChange={this.handleChange}/>
          </div>
          <div className={"row"} style={{justifyContent: "flex-end"}}>
            <button>Send</button>
          </div>
        </form>

        {
          this.state.responseText &&
          <div className={"response"}>
            {this.state.responseText}
          </div>
        }

      </div>
    );
  }
}

export default Test3;

