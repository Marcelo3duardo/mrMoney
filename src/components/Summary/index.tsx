import {Container} from './styles';
import EntradasImg from '../../assets/Entradas.svg';
import SaidaImg from '../../assets/Saídas.svg'
import TotalImg from '../../assets/Total.svg'

export function Summary(){

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={EntradasImg} alt="entradas" />
                </header>
                <strong>R$ 2000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={SaidaImg} alt="saida" />
                </header>
                <strong> -R$ 700,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="total" />
                </header>
                <strong>R$ 1300,00</strong>
            </div>
        </Container>
    )
}