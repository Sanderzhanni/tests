import React from "react";
// import {toast} from "react-toastify";

class Test6 extends React.PureComponent {

  constructor(props){
    super(props);
    this.state = {
        fullName:"",
        burger:"",
        drink:"",
        orders: "",
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
  fetch("/api/v1/orders/search", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
          "Content-Type": "application/json"
      },
  })
  .then(res =>  res.json())
  .then(docs => this.setState({
    orders: docs
  })
  )
  .catch(err =>{
      console.log("err", err);
  });
};

  render() {
    return (
      <>
        <div className={"ds" }>
          <h3>
            Ülesanne 6:
          </h3>
          <p>
            <ol>
              <li>Kasutaja sisestab väärtused vormi</li>
              <li>Kui kasutaja vajutab "Otsi", siis tehakse päring serveri. Päringuga antakse kaasa vormi andmed</li>
              <li>Serveris on REST teenus, mis otsib andmebaasist vastavad dokumendid ning tagastab need.</li>
              <li>Kasutajaliides saab andmed kätte ning kuvab esitatud tellimused ekraanil.</li>
              <li><b>Pane tähele!</b> Seda ülesannet saab lahendad ainult siis, kui ülesanne 5 on tehtud</li>
              <li>Tuleb muuta faili <code>Test6.jsx</code></li>
              <li>Tuleb muuta faili <code>orders.router.js</code></li>
            </ol>

            Näidise video <a href="/static/videos/video1.mp4">/static/videos/video1.mp4</a>

          </p>

        </div>
        <div className="ds">
          <form className="ds-item style-2" onSubmit={this.handleSubmit}>
            <h3 className="style-2">Andmebaasi päring</h3>
            <div className={"row"}>
              <label htmlFor="fullName">Kliendi nimi</label>
              <input name="fullName" type="text" onChange={this.handleChange} value={this.state.fullName}/>
            </div>
            <div className={"row"}>
              <label htmlFor="burger">Burger</label>
              <select name="burger" onChange={this.handleChange} value={this.state.burger}>
                <option value="">-</option>
                <option value="megaBurger">Megaburger</option>
                <option value="baconBurger">Peekoniburger</option>
                <option value="veganBurger">Veganburger</option>
              </select>
            </div>
            <div className={"row"}>
              <label htmlFor="drink">Jook</label>
              <select name="drink" onChange={this.handleChange} value={this.state.drink}>
                <option value="">-</option>
                <option value="coke">Coca-Cola</option>
                <option value="sprite">Sprite</option>
                <option value="water">Water</option>
              </select>
            </div>
            <button style={{width: "100%"}}>
              Otsi
            </button>
          </form>
    <div>response{console.log(this.state.orders)}</div>
    <div>{this.state.resfullName}</div>
    <div>{this.state.resburger}</div>
    <div>{this.state.resdrink}</div>

        </div>
      </>
    );
  }
}

export default Test6;
