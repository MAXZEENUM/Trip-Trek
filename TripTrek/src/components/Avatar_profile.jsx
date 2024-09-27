import { Link } from 'react-router-dom';
import { Avatar,  } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Avatar_profile = ()=> (
    <Link to="/Profile">
      <Avatar className='image-avatar' src= '/src/assets/images/cartoon.jpg'  size={60} icon={<UserOutlined />} />
  </Link> 
)


export default Avatar_profile