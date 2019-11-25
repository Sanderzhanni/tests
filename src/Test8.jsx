import React from "react";

class Test8 extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            fullName:"",
            address:"",
            phoneNumber:"",
            disabled: false

        };
    }

    handleDisabled = () =>{
        this.setState( {disabled: !this.state.disabled} )  ;
    };

    handleChange = (e) =>{
        console.log("value", e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) =>{
        console.log(this.state);
        e.preventDefault();
        fetch("/api/v1/users/", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res =>  res.json())
            .catch(err =>{
                console.log("err", err);
            });
    };
  render() {
    return (
      <div>

        <Task />
          <form className="ds-item style-2" onSubmit={this.handleSubmit}>
              <div className={"row"}>
                  <label htmlFor="fullName">Kliendi nimi</label>
                  <input name="fullName" type="text" onChange={this.handleChange} value={this.state.fullName} disabled = {(this.state.disabled)? "disabled" : ""}/>
              </div>
              <div className={"row"}>
                  <label htmlFor="burger">Aadress</label>
                  <input name="address" type="text" onChange={this.handleChange} value={this.state.address} disabled = {(this.state.disabled)? "disabled" : ""}/>
              </div>
              <div className={"row"}>
                  <label htmlFor="drink">Phone</label>
                  <input name="phoneNumber" type="text" onChange={this.handleChange} value={this.state.phone} disabled = {(this.state.disabled)? "disabled" : ""}/>
              </div>
              <button style={{width: "100%"}}>
                  Otsi
              </button>

          </form>
          <button onClick = {this.handleDisabled.bind(this)}>Disable</button>
      </div>
    );
  }
}

export default Test8;

const Task = () => (
  <div>
    <h3>
      Ülesanne 8:
    </h3>
    <ol>
      <li>Seda ülesannet saab lahendada ainult siis kui ülesanne 7 on tehtud</li>
      <li>Kopeerige ülesandes 7 tehtud vorm <code>test8.jsx</code> faili.</li>
      <li>Lisage nupp "enable/disable"</li>
      <li>Kui kasutaja vajutab "disable" nupu peale, siis peab vorm muutuma readonly.
        Ehk vormi väljadesse ei ole võimalik sisestada uusi väärtuseid ja
        vormi ei ole võimalik esitada.
      </li>
      <li>
        Kui kasutaja vajutab "enable" nupu peale, siis muutub vorm selliseks, et
        väljadesse on võimalik sisestada väärtuseid ning vormi on võimalik esitada.
      </li>

    </ol>
  </div>
);
