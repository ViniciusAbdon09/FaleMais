import React, { Component } from "react";
import { noPlan, calcPlan } from "./calcPlan";
import { Alert } from 'reactstrap';
import DisplayCalc from './DisplayCalc'

export default class Tariff extends Component {
  state = {
    optionsDDD: [],
    paramsModel: [],
    visible: true
  };

  onDismiss = () => this.setState({visible: false});

  selectDDD = () => {
    if (Number(this.origin.value) !== 11 && this.origin.value !== "") {
      this.setState({ optionsDDD: ["011"] });
    } else if (this.origin.value === "") {
      this.setState({ optionsDDD: [] });
    } else {
      this.setState({ optionsDDD: ["016", "017", "018"] });
    }
  };

  submitForm = (e) => {
    e.preventDefault();

      let originDDD = Number(this.origin.value);
      let distinyDDD = Number(this.distiny.value);
      let planSelect = Number(this.plan.value);
      let minutes = Number(this.minutes.value);

      let valueOfPlan = calcPlan(originDDD, distinyDDD, planSelect, minutes).toFixed(2)
      let valueNoPlan = noPlan(originDDD, distinyDDD, minutes).toFixed(2)
      
      let objectParams = {
        originDDD,
        distinyDDD,
        minutes,
        planSelect,
        valueOfPlan,
        valueNoPlan
      };
      this.setState({ paramsModel: objectParams });
  };

  render() {
    return [
      <div className="container">
        <br/>
        <div style={{textAlign: 'center'}}>
          <h2>Calcule a Tarifa</h2>
          <Alert color="secondary" isOpen={this.state.visible} toggle={this.onDismiss}>
            A tarifa gerada é de acordo com o tempo em minutos para respectivos DDD's, veja as vantagens dos nossos planos!
          </Alert>
        </div>
        <form onSubmit={this.submitForm}>
          <div className="row">
            <div className="container">
              <label>DDD de Origem: </label>
              <select className="form-control" onChange={this.selectDDD} ref={(input) => (this.origin = input)} required>
                <option value="">Selecione o DDD da origem desejado</option>
                <option value="011">(011)</option>
                <option value="016">(016)</option>
                <option value="017">(017)</option>
                <option value="018">(018)</option>
              </select>
              <br/>
              <label>DDD de Destino: </label>
              <select className="form-control" ref={(input) => (this.distiny = input)} required>
                <option value="">Selecione o DDD do destino desejado</option>
                {this.state.optionsDDD.map((optionValue) => {
                  return (
                    <option key={optionValue} value={optionValue}>
                      ({optionValue})
                    </option>
                  );
                })}
              </select>
               <br/>
                <label>Plano FaleMais: </label>
              <select className="form-control" ref={(input) => (this.plan = input)} required>
                <option value="">Selecione um plano FaleMais</option>
                <option value="30">FaleMais 30 min</option>
                <option value="60">FaleMais 60 min</option>
                <option value="120">FaleMais 120 min</option>
              </select>
                <br/>
              <label>Minutos: </label>
              <input type="number" min="0" ref={(input) => {this.minutes = input}} className="form-control"
                placeholder="Digite quandtidade de minutos desejado"
                required/>
            </div>
            </div>
          <div className="row">
            <div className="col-12 text-center pt-3">
                <DisplayCalc btnName="Calcular" valuesCalc={this.state.paramsModel} />
                <br/>
                <br/>
            </div>
          </div>
        </form>
      </div>
    ];
  }
}
