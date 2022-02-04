import logoImg from '../../assets/Logo.svg';
import { Container, Content } from '../header/styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="mr money" />
                <button> Enviar </button>
            </Content>
        </Container>
    )
}