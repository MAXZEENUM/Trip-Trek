import { Link } from 'react-router-dom';
import { Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../css/Detail.css'
import { Carousel, Collapse } from 'antd';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import GetdataPostService from '/src/service/GetdataPost'
        

function Detail() {
    const { postId } = useParams();
    const [datadetail,setDataDetail]= useState([])
    // const [datalocation,setdatalocation]= useState([])
    const [datacity,setdataCity]= useState([])
    const [loadingStatus, setLoadingStatus] = useState("loading");
    // console.log(postId);
    
    useEffect(() => {
        setLoadingStatus("loading");
        GetdataPostService.getData()
        .then(data => {
            const item = data.find(item => item.id == postId);
            setDataDetail(item);
            // setdatalocation(item.location.join(","))
            setdataCity(item.city.join(","))
            setLoadingStatus("completed");
        })
    }, [postId]); 
    // console.log(loadingStatus);
    // console.log(datadetail);
    
    const items = [
        {
          key: '1',
          label: 'Day 1',
          children: <div>
                <p>- Suvarnabhumi Airport: Traveling with EVA Airline night flight</p>
                <p>- Taiwan Taoyuan International Airport: Taoyuan Airport MRT to Taoyuan HSR Station</p>
                <p>- Taiwan, Taoyuan City, Zhongli District, Section 1st, Yongyuan Road, R.B.C ROAST BY CHEN Coffee Roasters/COFFEE ARK POP-UP Coffee Roasters: While waiting for the Aquarium to open.</p>
                <p>- Xpark: Aquarium</p>
                <p>- Hotel PaPa Whale, Kunming Street, Wanhua District, Taipei City, Taiwan: Take the MRT to Taipei Main Station and transfer to the blue line to MRT Ximending Exit 6.</p>
                <p>- Mala Hotpot Xining (Ximending) Xining Road, Wanhua District, Taipei City, Taiwan</p>
                <p>- Ximending Night Market, Hanzhong Street, Wanhua District, Taipei City, Taiwan</p>,
            </div>
        },
        {
          key: '2',
          label: 'Day 2',
          children:
          <div>
              <p>- Hotel PaPa Whale</p>
              <p>- Tiaoshi (Zhongshan Road Branch), Dazhong Road, Siming District, Xiamen, Fujian, China The cutest bus stop at BG is the sea. It will be so cute if you do not come during the rainy season. How to get there: Take bus number 862 and get off at Tiaoshi Station.</p>
              <p>- Zhengbin Fishing Harbor, Zhongzheng District, Keelung City, Taiwan: It is an old harbor, a highly recommended, cute place with lots of cafes! How to get there: You can take the MRT to Zhongxiao Dunhua Station and then take Bus 1579 to Zhengbin stop.</p>
              <p>- Houtong Cat Village, Ruifang District, New Taipei City, Taiwan Cat Village: Take the train from Taipei Main Station and get off at Houtong Station.</p>
              <p>- Jiufen Old Street, Jishan Street, Ruifang District, New Taipei City, Taiwan: Mountain Village</p>
             <p>- Ximending Night Market, Hanzhong Street, Wanhua District, Taipei City, Taiwan. Shopping and food.</p>,
          </div> 
        },
        {
          key: '3',
          label: 'Day 3',
          children:
          <div>
              <p>- Fujin Street, Songshan District, Taipei City, Taiwan: Take the MRT Ximending and transfer to the Gold Line at Zhongxiao Fuxing Station BR10 and get off at Songshan Airport Station BR13, then walk a bit.</p>
              <p>- but. we love butter, Fujin Street, Songshan District, Taipei City, Taiwan: This is a cafe that people reviewed</p>
              <p>- Zhongshan District, Taipei City, Taiwan: Zhongshan District is a youth hotspot with cafes, restaurants, clothing stores, and hair salons.Take the MRT Songshan Airport BR13 and transfer to the green line at Nanjing Fuxing Station BR11/G16 and get off at Zhongshan G14.</p>
              <p>- (Flowers Taiwan) R9 Café: Let is stop by this landmark cafe for lunch. Its signature feature is the wall with street art.</p>
              <p>- Sisinan Village Museum, Songqin Street, Xinyi District, Taipei City, Taiwan: Take MRT Zhongshan G14/R11 and get off at Taipei 101 R03 Station</p>
              <p>- Shilin Night Market, Jihe Road, Shilin District, Taipei City, Taiwan: Take MRT Taipei 101 R03 and get off at Jiantan R15.</p>
              <p>- Ximending Night Market, Hanzhong Street, Wanhua District, Taipei City, Taiwan: Recommended Totto Ramen, very delicious.</p>
              <p>- Hotel PaPa Whale, Kunming Street, Wanhua District, Taipei City, Taiwan: Return to the hotel and sleep at your leisure.</p>,
          </div>
        },{
            key: '4',
            label: 'Day 4',
            children: 
            <div>
                <p>- 7-ELEVEN Kitty: Very close to my accommodation. All the branches are cute with Kitty.</p>
                <p>- Longshan Temple Street Underground, Section 1, Xiyuan Rd, Wanhua District, Taipei City, Taiwan: Longshan Temple praying, buying amulets, and Activate! Take the MRT Ximending BL11 and get off at Longshan Temple Station BL10.</p>
                <p>- Huang Long Zhuang, Guling Street, Zhongzheng District, Taipei City, Taiwan: Lunch at a famous Xiao Long Bao Restaurant. Take the Longshan Temple station BL10, transfer to the green line at Ximending, and get off at Chiang Kai check station G10.</p>
                <p>- Chiang Kai-shek Memorial Hall, Zhongzheng District, Taipei City, Taiwan: The last landmark of Taiwan that Chiang Kai-shek visited is a short walk from the Xiao Long Bao.</p>
                <p>- Taoyuan Airport, Hangzhou South Road, Dayuan District, Taoyuan City, Taiwan: For the return trip, take the Taoyuan Airport MRT from Taipei main station to Taoyuan Airport Terminal 2, which takes only about 1 hour.</p>
                <p>- Suvarnabhumi Airport (BKK), Nong Prue, Bang Phli District, Samut Prakan, Thailand: Return flight with EVA Airways as usual, arrived safely at Suvarnabhumi.</p>,

            </div>
          },
      ];

    return(
        <div>
          <div className='header-contrainer-detail'>
            <div className='header-image-detail'>  
                <Link to="/Homepage">
                    <img className='image-logo-detail' src='/src/pictures/Topbar/LogoG.png' alt="TripTrek" width="152" height="37"/>
                </Link> 
                <Link to={`/Profile/MAXZEEMUM`}>
                        <Avatar className='image-avatar-detail' src= '/src/assets/images/cartoon.jpg'  size={60} icon={<UserOutlined />} />
                </Link> 
            </div>
        </div>
        <div className='content-detail'>
            <div className='content-box-detail'>
                <Link to="/Homepage">
                    <img src='/src/assets/images/arrow-left-solid.svg' width="24" height="24"/>
                </Link> 
                    <div className='box-content-image'>
                        <Carousel autoplay>
                            {/* <div>
                                <img className='Carousel-image'src='/src/pictures/Taiwan/1024x768_attractions-image-gizb3o6lbkyulb2f44nhhg.jpg' width="640" height="640"/>
                            </div>
                            <div>
                                <img className='Carousel-image' src='/src/pictures/Taiwan/oEBnEAkwA32GVAAZDP4QnABkixZPgDYZDiTIb~tplv-tej9nj120t-origin.png' width="640" height="640"/>
                            </div>
                            <div>
                                <img className='Carousel-image' src='/src/pictures/Taiwan/Screenshot 2024-09-17 150544.jpg' width="640" height="640"/>
                            </div> */}
                            {loadingStatus === "loading"}
                            {loadingStatus === "completed" && (
                                datadetail.image.map((image, imageIndex) => (
                                    <div key={imageIndex}>
                                        <img className='Carousel-image' src={image} width="640" height="640"/>
                                    </div>
                                ))
                            )}
                        </Carousel>
                    </div>
                    <div className='detail'>
                        <h1 className='topic-detail'>{datadetail.topic}</h1>
                        <p>Country: {datadetail.location} </p>
                        <p>City: {datacity}</p>
                        <p>Detail:</p>
                        {/* <h1 className='topic-detail'>{datadetail.topic}</h1>
                        {datadetail.location.map((location, locationIndex) => (
                            <p key={locationIndex}>Country: {location} </p>
                        ))}
                         {datadetail.City.map((city, cityIndex) => (
                            <p key={cityIndex}>City: {city} </p>
                        ))} */}
                    </div>
                        <Collapse className='detail-detail' accordion items={items} />
            </div>
            
        </div>
        <div className='footer-detail'>
          <div>Contact Us</div>
            <div className='footer-image-detail'>
              <img src='/src/assets/images/envelope-solid.svg' width="24" height="24"/>
              <img src='/src/assets/images/instagram-brands-solid.svg' width="24" height="24"/>
              <img src='/src/assets/images/x-twitter-brands-solid.svg' width="24" height="24"/>
              <img src='/src/assets/images/facebook-brands-solid.svg' width="24" height="24"/>
            </div>
        </div>
      </div>
      )
    };

export default Detail