import Modal from "react-modal";
import { Container,TransactionTypeContainer } from './styles'

import CloseImg from '../../assets/Close.svg';
import inImg from '../../assets/Entradas.svg'
import outImg from '../../assets/Saídas.svg'


type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay" //retirar o css imbuído
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={CloseImg} alt="" />
            </button>

            <Container>
                <h2>Cadastrar Transação </h2>

                <input placeholder="Titulo" />
                <input placeholder="Valor" type="number" />

                <TransactionTypeContainer>
                    <button>
                        <img src={inImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    <button>
                        <img src={outImg} alt="Saida" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>



            </Container>
        </Modal>);
}