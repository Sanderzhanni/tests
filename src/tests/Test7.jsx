import React from "react";

class Test7 extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            fullName:"",
            address:"",
            phoneNumber:"",
        };
    }

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
                  <input name="fullName" type="text" onChange={this.handleChange} value={this.state.fullName}/>
              </div>
              <div className={"row"}>
                  <label htmlFor="burger">Aadress</label>
                  <input name="address" type="text" onChange={this.handleChange} value={this.state.address}/>
              </div>
              <div className={"row"}>
                  <label htmlFor="drink">Phone</label>
                  <input name="phoneNumber" type="text" onChange={this.handleChange} value={this.state.phone}/>
              </div>
              <button style={{width: "100%"}}>
                  Otsi
              </button>
          </form>
      </div>


    );
  }
}

export default Test7;

const Task = () => (
  <div>
    <h3>
      Ülesanne 7:
    </h3>
    <ol>
      <li>Eelmistes ülesannetes on teile antud juba valmis ehitatud vorm</li>
      <li>Selles ülesandes on teil vaja luua vormi element iseseisvalt</li>
      <li>Kasutaja peab saama sisestada oma nime, elukoha ja kontaktnumbri.</li>
      <li>Kui kasutaja vajutab "esitan" nuppu, siis saadetakse andmed serveri ning salvestatakse andmebaasi.</li>
      <li>Te peate muutma ainult 2 faili <code>server/user.router.js</code> ja <code>src/Test7.jsx</code></li>
      <li>Testimaks, kas andmed salvestusid andmebaasi, kasutage Postmani. <code>GET localhost:3000/api/v1/users </code> </li>
      <li>User Schema'ga saate tutvuda failis <code>server/user.model.js</code></li>
      <li>Pange tähele, et server tuleb uuesti käivitada, kui te teete <code>/server</code> kaustas muudatusi
        (npm run start:backend)
      </li>
      <li>Oleme praktiliselt sama asja teinud eelmistes ülesannetes. Ehk vajadusel saate sealt võtta ideid.</li>
      <li>ReactJS ametlik dokumentatsioon peaks olema juba ammu läbiloetud, tuletage meelde.
        <a href={'https://reactjs.org/docs/forms.html'}>https://reactjs.org/docs/forms.html</a></li>

    </ol>
  </div>
);
