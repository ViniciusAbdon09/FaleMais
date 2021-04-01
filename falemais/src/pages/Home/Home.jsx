import React, {useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Alert
  } from 'reactstrap';

import img120 from '../../assets/120.png'
import img60 from '../../assets/60.png'
import img30 from '../../assets/30.png'

const Home = () => {

    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);
  
    return(
        <div className="container">
            <div>
                <br/>
                <h2>Planos FaleMais 2021!</h2>
                <Alert color="warning" isOpen={visible} toggle={onDismiss}>
                    Em tempos de pandemia, nada melhor do que manter o papo em dia... Assine já um de nossos planos e divirta-se conversando.
                </Alert>
            </div>
           
            <div className="row">

                <div className="col-4">
                    <Card>
                        <CardImg top width="50" height="300" src={img30} alt="plano30" />
                        <CardBody>
                        <CardTitle tag="h5">30 Minutos</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Fale por 30 minutos sem custo adicionais</CardSubtitle>
                        <CardText>Com o plano FaleMais-30 você pode falar durante 30 minutos sem ser cobrado por isso, após exceder o seu limite, será cobrada uma taxa de 10% sobre a tarifa normal do minuto.</CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-4">
                    <Card>
                        <CardImg top width="50" height="300" src={img60} alt="plano60" />
                        <CardBody>
                        <CardTitle tag="h5">60 Minutos</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Fale por 60 minutos sem custo adicionais</CardSubtitle>
                        <CardText>Com o plano FaleMais-60 você pode falar durante 60 minutos sem ser cobrado por isso, após exceder o seu limite, será cobrada uma taxa de 10% sobre a tarifa normal do minuto.</CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-4">
                    <Card>
                        <CardImg top width="50" height="300" src={img120} alt="plano120" />
                        <CardBody>
                        <CardTitle tag="h5">120 Minutos</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Fale por 120 minutos sem custo adicionais</CardSubtitle>
                        <CardText>Com o plano FaleMais-120 você pode falar durante 120 minutos sem ser cobrado por isso, após exceder o seu limite, será cobrada uma taxa de 10% sobre a tarifa normal do minuto.</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Home