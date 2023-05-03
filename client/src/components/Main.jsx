import { Route, Routes } from "react-router-dom";

import Posts from "./Posts";
import Navigation from "./Navigation";
import Create from "./Create";
import Files from "./Files";

const Main = () => {
    return (
        <main>
            <div className="container-main">
                <Navigation />
                <Routes>
                    <Route path='/' element={<Posts />} />
                    <Route path='/get-files' element={<Files />} />
                    <Route path='/create-post' element={<Create />} />
                </Routes>
            </div>
        </main>
    )
}

export default Main;