import {Navigate, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"
import Footer from '../../components/Footer/footer'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Navigate to="/login" />
  }
  const navigate = useNavigate();
  
  const goToMockInt = () => {
    navigate('/MockInterviews');
  };

  const goToMockTest = () => {
    navigate('/MockTests');
  };

  return (
    <div className="home">
        <Navbar/>
        <div className='home-cont'>
            <div>
            <img src="./mock4[1].jpg" alt="" />
            </div>
            <div className="hom-main">
                <h3>notifications</h3>
                <article>

                </article>
            </div>
            <div>
                <img src="./mock7.jpg" alt="" />
            </div>
        </div>
        <div className="home-mock">
            <div className="mock-int">
                <input type="button" value="Mock Interview" onClick={goToMockInt} />
            </div>
            <div className="mock-int">
                <input type="button" value="Mock Tests" onClick={goToMockTest} />
            </div>
        </div>
        <Footer />
    </div>
  )
}
export default Home