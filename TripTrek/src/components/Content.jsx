import { Input,Tabs  } from 'antd';
import { useState } from 'react';
import '../css/Content.css';
import Post from './Post';

function Content() {
  const datatab = ["Thailand","International"];
  const { Search } = Input;
  const [dataseach,setDataseach]=useState("")
  
  // const onChange = (key) => {
  //     console.log(key);
  //   };
  
  const onSearch = (value) => setDataseach(value);
  // console.log(dataseach);
  
  const items = datatab.map((country) => ({
    key: country, // ใช้ country เป็น key
    label: <div className='content-post-tab'>{country}</div>,
    children: (
        <div>
            <Post 
            country={country}
            dataseach={dataseach}
            />
        </div>
      ),
  }));
  
  return (
    <div className='content-box'>
        <Search className='seach'
            placeholder="Seach"
            onSearch={onSearch}
            style={{
                width: 200,
            }}
        />
        <div className='content-box-tab'>
            {/* <Tabs defaultActiveKey="Thailand" items={items} onChange={onChange} /> */}
            <Tabs defaultActiveKey="Thailand" items={items}/>
        </div>
    </div>
  )
}

export default Content