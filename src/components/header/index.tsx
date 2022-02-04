import logoImg from '../../assets/Logo.svg';
import {Container} from './styles';

export function Header(){
    return (
        <Container>
            <img src={logoImg} alt="mr money" />
        </Container>
        )
}