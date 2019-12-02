import React from "react";

class Test9 extends React.PureComponent {

    constructor() {
        super();
        this.state ={
            fullName: "",
            personalCode: "",
            phoneNumber: "",
            address: "",
        };
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        fetch("/api/v1/users/signup", {
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

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

  render() {
    return (
      <div>
        <Task />
          <form className="ds-item style-2" onSubmit={this.handleSubmit}>
              <div className={"row"}>
                  <label htmlFor="fullName">Nimi</label>
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
              <div className={"row"}>
                  <label htmlFor="drink">personal code</label>
                  <input name="personalCode" type="text" onChange={this.handleChange} value={this.state.personalCode}/>
              </div>
              <button style={{width: "100%"}}>
                  Signup
              </button>
          </form>
      </div>
    );
  }
}

export default Test9;

const Task = () => (
  <div>
    <h3>
      Ülesanne 9:
    </h3>
    <ol>
      <li>Tuleb luua vorm</li>
      <li>Kasutaja saab sisestada nime, elukoha, telefoni numbri ja isikukoodi</li>
      <li>Kui kasutaja vajutab "esita", siis tehakse päring serveri kasutaja uuendamiseks/loomiseks</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja on olemas, siis peab uuendama kasutajat</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja ei olnud olemas, siis tuleb luua uus kasutaja</li>
      <li>Väga sarnane <code>Task7</code></li>
      <li>Tuleb muuta ainult faile <code>user.router.js</code> ja <code>Test9.jsx</code></li>
      <li>Kasutaja andmebaasi mudeliga saad tutvuda failis <code>user.model.js</code></li>
      <li><a href={LINK}>{LINK}</a></li>
    </ol>
  </div>
);

const LINK = 'https://mongoosejs.com/docs/api.html';
