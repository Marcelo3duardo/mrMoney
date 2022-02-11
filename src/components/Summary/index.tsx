import { Container } from './styles';
import EntradasImg from '../../assets/Entradas.svg';
import SaidaImg from '../../assets/Saídas.svg'
import TotalImg from '../../assets/Total.svg'
import { useContext } from 'react';
import {  useTransactions } from '../../hooks/useTransactions';

export function Summary() {
    const { transactions } = useTransactions();

    /* const totalDeposit = transactions.reduce((acc,transactions) => { 
         if(transactions.type == 'deposit'){
             return acc + transactions.amount;
         }
          return acc;
     },0)
 */

    const summary = transactions.reduce((acc, transactions) => {
        if (transactions.type == 'deposit') {
            acc.deposit += transactions.amount;
            acc.total += transactions.amount;
        } else {
            acc.withdraws += transactions.amount;
            acc.total -= transactions.amount

        }
        return acc;
    }, {
        deposit: 0,
        withdraws: 0,
        total: 0
    })


    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={EntradasImg} alt="entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposit)}

                </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={SaidaImg} alt="saida" />
                </header>
                <strong>

                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(- summary.withdraws)}

                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}

                </strong>
            </div>
        </Container>
    )
}