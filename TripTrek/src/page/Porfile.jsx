import { Link } from 'react-router-dom';
import { Avatar,Button,Tabs  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import GetdataProfileService from '/src/service/GetdataProfile.jsx';
// import Avatar_profile from '../components/Avatar_profile';
import '../css/Profile.css'
// import {Button} from 'antd';

function Profile(){
    const { userId } = useParams(); // เข้าถึง userId จาก URL
    const [dataprofile,setDataprofile]= useState([])
    // console.log(userId);
    // console.log(dataprofile);
    
    useEffect(() => {
        // GetdataProfileService.getData().then((data) => setDataprofile(data));
        GetdataProfileService.getData()
        .then(data => {
            // ค้นหาข้อมูลที่มี name ตรงกับ key ที่กำหนด
            const item = data.find(item => item.name === userId);
            setDataprofile(item); // ตั้งค่าข้อมูลที่พบให้กับ state
        })
        
    }, [userId]);

    const items = [{
                    key: "1",
                    label: null,
                    children: <div className='show'>
                                <div className='show-image'>
                                    <div className="image-container">
                                        <img src='/src/pictures/gellery/NAN.jpg' alt='NAN' width="250" height="300"/>
                                        <div className="overlay">NAN</div>
                                    </div>
                                    <div className="image-container">
                                        <img src='/src/pictures/gellery/PHUKET.png' alt='PHUKET' width="250" height="300"/>
                                        <div className="overlay">PHUKET</div>
                                    </div>
                                    <div className="image-container">
                                        <img src='/src/pictures/gellery/Ching_mei.png' alt='CHING MEI' width="250" height="300"/>
                                        <div className="overlay">CHING MAI</div>
                                    </div>
                                    <div className="image-container">
                                        <img src='/src/pictures/gellery/japan.jpg' alt='JAPAN' width="250" height="300"/>
                                        <div className="overlay">JAPAN</div>
                                    </div>
                                    <div className="image-container">
                                        <img src='/src/pictures/gellery/switz.jpg' alt='SWITZERLAND' width="250" height="300"/>
                                        <div className="overlay">SWITZERLAND</div>
                                    </div>
                                    <div className="image-container">
                                        <img src='/src/pictures/gellery/taiwan.jpg' alt='TAIWAN' width="250" height="300"/>
                                        <div className="overlay">TAIWAN</div>
                                    </div>
                                </div>
                            </div>,
                    icon: <img src='/src/assets/images/table-cells-solid.svg' alt='NAN' width="24" height="24"/>,
                },
                {
                    key: "2",
                    label: null,
                    children: <div className='show'>
                                <div className='show-image'>
                                    <div className="image-container">
                                        <img src='/src/pictures/gellery/NAN.jpg' alt='NAN' width="250" height="300"/>
                                        <div className="overlay">NAN</div>
                                    </div>
                                    <div className="image-container">
                                        <img src='/src/pictures/gellery/PHUKET.png' alt='PHUKET' width="250" height="300"/>
                                        <div className="overlay">PHUKET</div>
                                    </div>
                                </div>
                            </div>,
                    icon: <img src='/src/assets/images/photo-film-solid.svg' alt='NAN' width="24" height="24"/>,
                },
                {
                    key: "3",
                    label: null,
                    children: <div className='show'>
                                <div className='show-image'>
                                    <div className="image-container">
                                        <img src='/src/assets/images/cartoon.jpg' alt='PROFILE' width="250" height="300"/>
                                        <div className="overlay">PROFILE</div>
                                    </div>
                                </div>
                            </div>,
                    icon: <img src='/src/assets/images/user-lock-solid.svg' alt='NAN' width="24" height="24"/>,
                }
            ]
    return(
        <div>
        <div className='header-contrainer-profile'>
            <div className='header-image-profile'>
                <Link to="/Homepage">
                <img className='image-logo-profile' src='/src/pictures/Topbar/LogoG.png' alt="TripTrek" width="152" height="37"/>
                </Link> 
                <Avatar className='image-avatar-profile' src= '/src/assets/images/cartoon.jpg'  size={60} icon={<UserOutlined />} />
            </div>
        </div>
        <div className='content-profile'>
            <div className='profile'>
                <img className='image-backgroud-content-profile' src='/src/pictures/Topbar/TTT-Head1-01.png' alt="TripTrek"/>
                <img className='image-profile' src={dataprofile.image} alt="Profile" width="250" height="250" />
                <div className='name-profile'>
                {dataprofile.name}
                </div>
            </div>
            <div className='Gallery'>
                <div className='Gallery-picture'>
                    <Button className='button-galary' type='primary' size='large' block>+ Add Picture</Button>
                </div>
            </div>
            <div className='Gallery-all'>
                <div className='Gallery-tab'>
                    <Tabs
                        defaultActiveKey="1"
                        items={items}
                        tabBarStyle={{ position: 'relative' }}
                    />
                </div>
            </div>
        </div>
        <div className='footer-profile'>
        <div>Contact Us</div>
            <div className='footer-image-profile'>
            <img src='/src/assets/images/envelope-solid.svg' width="24" height="24"/>
            <img src='/src/assets/images/instagram-brands-solid.svg' width="24" height="24"/>
            <img src='/src/assets/images/x-twitter-brands-solid.svg' width="24" height="24"/>
            <img src='/src/assets/images/facebook-brands-solid.svg' width="24" height="24"/>
            </div>
        </div>
    </div>
    )
};
export default Profile;