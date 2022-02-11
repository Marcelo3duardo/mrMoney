import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from './styles'

import CloseImg from '../../assets/Close.svg';
import inImg from '../../assets/Entradas.svg'
import outImg from '../../assets/Saídas.svg'
import { useState, FormEvent, useContext } from "react";
import { TransactionsContext, useTransactions } from "../../hooks/useTransactions";


type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { creatTransactions } = useTransactions();
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');


    async function handleCreatNewTransaction(event: FormEvent) {
        event.preventDefault();

        await creatTransactions({
            title,
            amount,
            type,
            category,
        })
        setTitle('');
        setAmount(0);
        setType('deposit');
        setCategory('');

        onRequestClose();
    }


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

            <Container onSubmit={handleCreatNewTransaction}>
                <h2>Cadastrar Transação </h2>

                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    placeholder="amount" type="number"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        // className = {type == 'deposit' ? 'active' : ''}
                        isActive={type == 'deposit'}
                        activeColor="green"
                        onClick={() => { setType('deposit'); }}
                    >
                        <img src={inImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        isActive={type == 'withdraw'}
                        activeColor="red"
                        onClick={() => { setType('withdraw'); }}
                    >
                        <img src={outImg} alt="Saida" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">Cadastrar</button>



            </Container>
        </Modal>);
}