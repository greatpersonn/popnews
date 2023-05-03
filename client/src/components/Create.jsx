import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import ModalComponent from "./Modal";

const Create = () => {
    const navigate = useNavigate();

    const [isModal, setModal] = useState(false);
    const [errorTitle, setErrorTitle] = useState(null);
    const [errorHeader, setErrorHeader] = useState(null);

    const [file, setFile] = useState(undefined);
    const [header, setHeader] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!header || !content || !author) {
            setModal(true);
            setErrorHeader('Поля не заповненні');
            setErrorTitle('Заповніть всі необхідні поля для створення посту!');
            return;
        }

        if (!file) {
            setModal(true);
            setErrorHeader('Файл не завантажений');
            setErrorTitle('Заповніть всі необхідні поля для створення посту!');
            return;
        }

        if (file.type == 'application/json' || file.type == 'text/xml') {
            axios.post('http://localhost:80/api/create_post.php', { header: header, content: content, author: author, filename: file.name, filetype: file.type }).then(response => {
                if (response.status == 200) {
                    navigate('/', { replace: true })
                }
            }).catch(error => console.error(error));
        } else {
            setModal(true);
            setErrorHeader('Формат файлу не підтримується');
            setErrorTitle('Необхідно завантажити файл формату JSON або XML!');
            return;
        }


    }

    return (
        <>
            <div className="container-form">
                <form onSubmit={handleSubmit}>
                    <input type='text' id='header' placeholder='Заголовок *' value={header} onChange={(e) => { setHeader(e.target.value); }} />
                    <input type='text' id='content' placeholder='Контент посту *' value={content} onChange={(e) => { setContent(e.target.value); }} />
                    <input type='text' id='author' placeholder='Автор посту *' value={author} onChange={(e) => { setAuthor(e.target.value); }} />
                    <div className="file-wrapper">
                        <label className="custom-file-upload">
                            <input name="fileUploader" id="fileUploader" type="file" onChange={(e) => { setFile(e.target.files[0]) }} />
                            {file == undefined ? <span>Upload File</span> : <span>{file.name}</span>}
                        </label>
                    </div>
                    <button>Загрузить</button>
                </form>
            </div>
            {isModal ? <ModalComponent header={errorHeader} title={errorTitle} show={isModal} onHide={() => setModal(false)} /> : null}
        </>
    )
}

export default Create;