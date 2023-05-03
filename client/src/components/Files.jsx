import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import TableComponent from './Table';

const Files = () => {
    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPost = data.slice(firstPostIndex, lastPostIndex);
    const pageNumber = [1];

    for (let i = 1; i < Math.ceil(data.length / postsPerPage); i++) {
        pageNumber.push(i + 1);
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        axios.get('http://localhost:80/api/get_files.php').then(response => setData(response.data)).catch(err => console.error(err));
    }, [currentPage]);

    return (
        <Container>
            <TableComponent files={currentPost} />
            <div className="container-pagination">
                {
                    pageNumber.map((number) => (
                        <li className='page-item' key={number} onClick={() => { paginate(number) }}>
                            {number}
                        </li>
                    ))
                }
            </div>
        </Container>
    )
}

export default Files;