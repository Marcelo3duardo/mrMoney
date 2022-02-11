import { createContext, useEffect, useState,ReactNode, useContext} from 'react';
import { api } from '../services/api';

interface TransactionsProps {
    id: string;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsInput{
    title: string;
    amount: number;
    type: string;
    category: string;
   
}

interface TransactionsProviderProps{
    children: ReactNode
}

interface TransactionsContextData{
    transactions: TransactionsProps[];
    creatTransactions:(transactions:TransactionsInput) => Promise<void>;

}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function creatTransactions(transactionsInput:TransactionsInput){
       const response =  await api.post('/transactions',{
           ...transactionsInput,
           createdAt:new Date(),
        })
      // const  transaction = response.data;

       setTransactions([
           ...transactions,
           response.data.transaction
       ]);
    }

    

    return (
        <TransactionsContext.Provider value={{transactions,creatTransactions}}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext);
    return context
}