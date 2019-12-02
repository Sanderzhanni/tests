import React from "react";
import OnlineCount from "../OnlineCount";

class Test11 extends React.PureComponent {

  state = {
    onlineCount: 20,
      delay: 3000,
  };

    componentDidMount() {
        this.interval = setInterval(this.tick, this.state.delay);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.delay !== this.state.delay) {
            clearInterval(this.interval);
            this.interval = setInterval(this.tick, this.state.delay);
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    tick = () => {
        this.fetchRandom();
    };

    fetchRandom = () => {
        fetch("/api/v1/users/onlineCount")
            .then( res =>{
                return res.json();
            })
            .then(random =>{
                this.setState({
                    onlineCount: random,
                });
            })
            .catch( (err) =>{
                console.log(err);
            });
    };

  render() {
    return (
      <div>
        <Task />
          <button onClick={this.fetchRandom}></button>
        <OnlineCount>{this.state.onlineCount}</OnlineCount>
      </div>
    );
  }
}

export default Test11;

const Task = () => (
  <div>
    <h3>
      Ülesanne 11:
    </h3>
    <ol>
      <li>Loo uus REST teenus. Näiteks. <code>GET /api/v1/users/onlineCount</code></li>
      <li>See otspunkt peab tagastama numbri, kui palju kasutajad on hetkel online</li>
      <li>Kuna meil ei ole "tegelikult" live kasutajad,
        siis peab see otspunkt tagastama <code>random</code> numbri</li>
      <li>Frontend peab pärima serverist iga <code>3 sekundi</code> tagant, kui palju inimesi on hetkel online</li>
      <li>See number tuleb kuvada ekraanil</li>
      <li>Tuleb muuta ainult faile <code>Test11.jsx</code> ja <code>user.router.js</code></li>
      <li>Pane tähele, et kui kasutaja navigeerib end teisele lehele, siis peab tagataustal päringu saatmine lõppema.</li>
    </ol>
  </div>
);
