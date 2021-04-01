import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DisplayCalc = (props) => {
  const {
    btnName,
    valuesCalc
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button type="submit" color="secondary" onClick={toggle}>{btnName}</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Plano FaleMais {valuesCalc.planSelect} mins</ModalHeader>
        <ModalBody>
        <ul key={valuesCalc.originDDD} style={{listStyle: 'none'}}>
                    <li><b>DDD de Origem:</b> 0{valuesCalc.originDDD}</li>
                    <li><b>DDD de Destino: </b>0{valuesCalc.distinyDDD}</li>
                    <li><b>Plano FaleMais selecionado:</b> {valuesCalc.planSelect} minutos</li>
                    <li><b>Quantidade de minutos: </b> {valuesCalc.minutes} min</li>
                    <li><b>Preço com o plano FaleMais:</b> R$ {valuesCalc.valueOfPlan}</li>
                    <li><b>Preço sem o plano FaleMais:</b> R$ {valuesCalc.valueNoPlan}</li>
                </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Ok</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DisplayCalc;