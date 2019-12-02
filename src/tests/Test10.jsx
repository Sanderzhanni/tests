import React from "react";

class Test10 extends React.PureComponent {
    constructor() {
        super();
        this.fullName = React.createRef();
        this.personalCode = React.createRef();
        this.phoneNumber = React.createRef();
        this.address = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log(this.fullName.value);
        event.preventDefault();
        fetch("/api/v1/users/signup", {
            method: "POST",
            body: JSON.stringify({
                fullName: this.fullName.value,
                personalCode: this.personalCode.value,
                phoneNumber: this.phoneNumber.value,
                address: this.address.value,
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res =>  res.json())
            .catch(err =>{
                console.log("err", err);
            });
    }


  render() {
    return (
      <div>
        <Task />
          <form className="ds-item style-2" onSubmit={this.handleSubmit}>
              <div className={"row"}>
                  <label htmlFor="fullName">Nimi</label>
                  <input name="fullName" type="text" ref={input => this.fullName = input}/>
              </div>
              <div className={"row"}>
                  <label htmlFor="burger">Aadress</label>
                  <input name="address" type="text"  ref={input => this.address = input}/>
              </div>
              <div className={"row"}>
                  <label htmlFor="drink">Phone</label>
                  <input name="phoneNumber" type="text"  ref={input => this.phoneNumber = input}/>
              </div>
              <div className={"row"}>
                  <label htmlFor="drink">personal code</label>
                  <input name="personalCode" type="text"  ref={input => this.personalCode = input}/>
              </div>
              <button style={{width: "100%"}}>
                  Signup
              </button>
          </form>
      </div>
    );
  }
}

export default Test10;

const Task = () => (
  <div>
    <h3>
      Ülesanne 10:
    </h3>
    <ol>
      <li>Tuleb teha sama vorm nagu <code>Ülesanne 9</code>, aga siin tuleb kasutada "uncontrolled" form </li>
      <li>Meeldetuletuse link <a href={LINK}>{LINK}</a> (sest te olete Reacti ametliku lehe juba ammu läbi lugenud)</li>
      <li>Tuleb muuta ainult faili <code>Test10.jsx</code></li>
    </ol>
  </div>
);

const LINK = 'https://reactjs.org/docs/uncontrolled-components.html';
