import ImgDsDark from 'assets/img/ds-dark.svg';

function DataTable() {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>01/11/2021</td>
                        <td>Jonh</td>
                        <td>15</td>
                        <td>12</td>
                        <td>5017.00</td>
                    </tr>
                    <tr>
                        <td>22/10/2021</td>
                        <td>Alex</td>
                        <td>28</td>
                        <td>26</td>
                        <td>12000.00</td>
                    </tr>
                    <tr>
                        <td>25/09/2021</td>
                        <td>Katy</td>
                        <td>18</td>
                        <td>18</td>
                        <td>900.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;