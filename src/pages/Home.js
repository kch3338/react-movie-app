import "../styles/Home.css";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="home_main">
            <Link to="/movie/list" >
                <button className="home_start_btn">시작하기</button>
            </Link>
        </div>
    )
}

export default Home;