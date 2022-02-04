import {Container} from "./styles";

export function TransitionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>

                    <tbody>
                        <tr>
                            <td>Carro</td>
                            <td>R$ 50000,00</td>
                            <td>Compra</td>
                            <td>04/02/2022</td>
                        </tr>
                    </tbody>
                </thead>
            </table>
        </Container>
    )
}