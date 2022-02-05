import { useEffect } from "react";
import { Container } from "./styles";
import {api} from '../../services/api'
export function TransitionsTable() {
    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
    },[] );

    return (
        <Container>

            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>


                </thead>

                <tbody>
                    <tr>
                        <td>Carro</td>
                        <td className="retirada">R$ 50.000,00</td>
                        <td>Compra</td>
                        <td>04/02/2022</td>
                    </tr>

                    <tr>
                        <td>Celular</td>
                        <td className="deposit">R$ 1.000,00</td>
                        <td>Revenda</td>
                        <td>01/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}