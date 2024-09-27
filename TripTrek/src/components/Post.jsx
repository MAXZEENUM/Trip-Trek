import { useState, useEffect } from 'react'
// import PropTypes from 'prop-types';
import { Fieldset } from 'primereact/fieldset';
// import Avatar_profile from './Avatar_profile';
import { Link } from 'react-router-dom';
import { Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import Detail from '../page/Detail';
import '../css/Post.css'
import GetdataPostService from '/src/service/GetdataPost'

function Post({
    country,
    dataseach
}) {
    const [datapost,setDatapost]= useState([])
    // console.log(dataseach);
    
    useEffect(() => {
        if (dataseach) {
            GetdataPostService.getData().then((data) => {
                const updatedData = data.map(item => {
                    const locationTag = item.location; // รับ location
                    const cityTags = item.city; // รับ city
                    const tags = [locationTag, ...cityTags]; // รวมเป็นอาร์เรย์ tags
                    return { ...item, tags };
                });
                console.log();
                
                // const datafillSeach = data.filter(item => item.tag.includes(dataseach));

                // const datafillSeach = data.filter(item => 
                //     item.tag.some(tag => 
                //         tag.toLowerCase() === dataseach.toLowerCase()
                //     )
                // );

                const datafillSeach = updatedData.filter(item => 
                    item.location.toLowerCase() === dataseach.toLowerCase()
                    ||
                    item.city.some(city => 
                        city.toLowerCase() === dataseach.toLowerCase()
                    )
                );

                // console.log(datafillSeach);
                setDatapost(datafillSeach)
            })
                
        } else{
            GetdataPostService.getData().then((data) => {
                const updatedData = data.map(item => {
                    const locationTag = item.location; // รับ location
                    const cityTags = item.city; // รับ city
                    const tags = [locationTag, ...cityTags]; // รวมเป็นอาร์เรย์ tags
                    return { ...item, tags };
                });
                // console.log(datafillSeach);
                setDatapost(updatedData)
            })
        }
    }, [dataseach]); 
    
    return (
        datapost.filter((item) => item.country === country).map((items) => {
            return (
                <Fieldset key={items.id} className="content-post" legend={items.topic} toggleable>
                    <Link to={`/Detail/${items.country}/${items.id}`}>
                    <div className='image-post'>
                        {items.image.map((imgSrc, imgIndex) => (
                            <img key={imgIndex} src={imgSrc} alt={`Post Image ${imgIndex}`} width="295" height="295"/>
                        ))}
                    </div>
                    </Link>
                    <div className='location-post'>
                        <div>
                            {
                            items.tags.map((tags, tagsIndex) => {
                                return <label className='location' key={tagsIndex}>{tags}</label>
                                }
                            )
                            }
                        </div>
                    </div>
                    <div className='avatar-post'>
                        <Link to={`/Profile/${items.user.name}`} >
                            <Avatar className='image-avatar-post' src= {items.user.image}  size={42} icon={<UserOutlined />} />
                        </Link>
                        <span className='profile-name'>{items.user.name}</span>
                    </div>
                </Fieldset>
            );
        })
    )
}

export default Post