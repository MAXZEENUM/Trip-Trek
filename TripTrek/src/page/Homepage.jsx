import { Link } from 'react-router-dom';
import { Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import Avatar_profile from '../components/Avatar_profile';
import '../css/Homepage.css'
import Content from '/src/components/content';

function Homepage (){
  return(

    <div>
      <div className='header-contrainer'>
        <div className='header-image'>  
          <img className='image-logo' src='/src/pictures/Topbar/LogoG.png' alt="TripTrek" width="152" height="37"/>
          {/* <Avatar_profile/> */}
          <Link to={`/Profile/MAXZEEMUM`} >
                <Avatar className='image-avatar' src= '/src/assets/images/cartoon.jpg'  size={60} icon={<UserOutlined />} />
          </Link> 
        </div>
    </div>
    <div className='content'>
      <img className='image-backgroud-content' src='/src/pictures/Topbar/TTT-Head1-01.png' alt="TripTrek"/>
      <Content/>
    </div>
    <div className='footer'>
      <div>Contact Us</div>
        <div className='footer-image'>
          <img src='/src/assets/images/envelope-solid.svg' width="24" height="24"/>
          <img src='/src/assets/images/instagram-brands-solid.svg' width="24" height="24"/>
          <img src='/src/assets/images/x-twitter-brands-solid.svg' width="24" height="24"/>
          <img src='/src/assets/images/facebook-brands-solid.svg' width="24" height="24"/>
        </div>
    </div>
  </div>
  )
};
export default Homepage;