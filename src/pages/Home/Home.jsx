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
        <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Master Your Future with AI Excellence</h1>
        {/* <img
        src="https://www.pngmart.com/files/21/Job-Interview-PNG-Picture.png"
        alt="clothes that get you noticed"
        className="home-mobile-img"
      /> */}
        <p className="home-description">
          Aimock brings AI-driven mock interviews and skill-boosting tests for
          every career path. Prepare for roles like software, GATE, and civil
          services with tailored simulations. Gain confidence with expert
          feedback and comprehensive mock tests. Upskill, stand out, and secure
          your dream job!"
        </p>
        <p className="home-description"> 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Eos veritatis cumque suscipit odio dolorum perspiciatis esse rem aliquid
           non aspernatur sequi exercitationem nostrum maiores accusantium, 
           officia maxime necessitatibus incidunt molestias illo modi aut commodi,
            dignissimos ex unde? Praesentium, eos? Ducimus quis maiores quidem laborum
             recusandae impedit perspiciatis molestias cum eum quae tempora sed, id sunt,
              dolore eaque architecto. Vitae cumque maxime voluptas, nisi nostrum dignissimos! 
              Facere quae, modi illum cumque ducimus corporis at eaque ullam possimus suscipit 
              quam quos doloremque nobis reprehenderit voluptate deleniti earum, dolor asperiores qui non!
               Consequatur vitae, consequuntur libero debitis impedit quo et eaque officiis alias.
           </p>
           </div>
           <div className='hom-img'>
           <img
        src="https://www.pngmart.com/files/21/Job-Interview-PNG-Picture.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
           </div>
           </div>
        <div className="buttonSet">
          <div >
            <img src="./mock4[1].jpg" alt="" />
            
            <input type="button" className="shop-now-button" value="Mock Interview" onClick={goToMockInt} />
          </div>
          <div>
                <img src="./mock7.jpg" alt="" />
            
            <input type="button" className="shop-now-button" value="Mock Tests" onClick={goToMockTest} />
            </div>
        </div>
    
        
        <Footer />
    </div>
  )
}
export default Home