import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import CardComponent from './Card';

const Posts = () => {
    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

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
        axios.get('http://localhost:80/api/get_posts.php').then(response => setData(response.data)).catch(err => console.error(err));
    }, [currentPage]);

    return (
        <Container>
            <Container>
                <Row style={{ gap: '10px', justifyContent: 'center' }}>
                    {currentPost.map((post, id) => (
                        <CardComponent key={id} title={post.PostHeader} content={post.PostContent} author={post.PostAuthor} />
                    ))}
                </Row>
            </Container>
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

export default Posts;