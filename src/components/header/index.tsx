import { useState } from 'react';
import logoImg from '../../assets/Logo.svg';
import Modal from 'react-modal';
import { Container, Content } from '../header/styles';

type headerProps = {
    onOpenNewTransactionModal:() => void;
}

export function Header({onOpenNewTransactionModal}: headerProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="mr money" />
                <button
                    type="button"
                    onClick={onOpenNewTransactionModal}
                > Enviar </button>

               
            </Content>
        </Container>
    )
}