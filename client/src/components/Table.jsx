import Table from 'react-bootstrap/Table';

function TableComponent({ files }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>File Name</th>
                    <th>File Type</th>
                </tr>
            </thead>
            <tbody>
                {
                    files.map((file, index) => (
                        <tr key={index}>
                            <td>{file.FileId}</td>
                            <td>{file.NameOfFile}</td>
                            <td>{file.TypeOfFile}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}

export default TableComponent;