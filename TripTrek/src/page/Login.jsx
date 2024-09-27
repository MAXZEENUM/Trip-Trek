import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Tabs,Button} from 'antd';
import TripTrek from "../pictures/Topbar/LogoG.png"
import "../css/Login.css"

function Login() {
  const navigate = useNavigate();

  const [user,setUser]= useState("");
  // const [email,setEmail]= useState("");
  const [password,setPassword] = useState("")
  const [regisuser,setRegisuser]= useState("");
  const [regisemail,setRegisemail]= useState("");
  const [regispass,setRegispass] = useState("")

  const getaccount = async () => {
    try {
      const result = await axios.get(`http://localhost:3000/account`);
      return result.data
      // console.log(result);
      
    } catch (error) {
      console.error(error);
    }

  };

  const handleSubmit = (type) => {
    
    // let data_account = ""
    getaccount().then(accountData => {
      // data_account = {
      //   user:accountData.user,
      //   password:accountData.pass
      // }
      if (type == 'Login') {
        if (user == accountData.user && password == accountData.pass) {
          accountData = {
            user: user,
            password:password
          }
          navigate('/Homepage');
          setUser("")
          setPassword("")

        } else {
          if (user != accountData.user) {
            console.error("Username is not correct, please check");
          } else if (password != accountData.pass) {
            console.error("Password is not correct, please check");
          }
        }
      };
  
      if(type == 'Register') {
        accountData = {
          user: regisuser,
          email:regisemail,
          password:regispass
        }
        setRegisuser("")
        setRegisemail("")
        setRegispass("")
      };
      // console.log(accountData); // ทำอะไรก็ได้กับ accountData

    }).catch(error => {
      console.error("Error fetching account data:", error);
    });
    
    // if (type == 'Login') {
    //   if (user == "admin" && password == "admin") {
    //     data_account = {
    //       user: user,
    //       password:password
    //     }
    //     navigate('/Homepage');
    //     setUser("")
    //     setPassword("")
    //   };
    // };

    // if(type == 'Register') {
    //   data_account = {
    //     user: regisuser,
    //     email:regisemail,
    //     password:regispass
    //   }
    //   setRegisuser("")
    //   setRegisemail("")
    //   setRegispass("")
    // };
    // console.log(data_account);
    // alert(type +' success')
    
  };

    // function clear_data() {
    //   console.log("clear");
    //   setUser("")
    //   setPassword("")
    //   setRegisemail("")
    //   setRegispass("")
    // }

  const items = [
    {
      key: '1',
      label: <div className='custom-tab-label' >Login</div>,
      children: 
        <div className="login-box">
            <input type="text" placeholder="Username" value={user} onChange={(event) => {setUser(event.target.value);}}/>
            <input type="password" placeholder="Password" value={password} onChange={(event) => {setPassword(event.target.value);}}/>
            <Button onClick={() => handleSubmit('Login')} type="primary" block>Login </Button>
        </div>,
    },
    {
      key: '2',
      label: <div className='custom-tab-label'>Registor</div>,
      children: 
        <div className="register-box">
            <input type="text" placeholder="Username" value={regisuser} onChange={(event) => {setRegisuser(event.target.value);setUser(event.target.value);}}/>
            <input type="text" placeholder="Email" value={regisemail} onChange={(event) => {setRegisemail(event.target.value);}}/>
            <input type="password" placeholder="Password" value={regispass} onChange={(event) => {setRegispass(event.target.value);}}/>
            <Button onClick={() => handleSubmit('Register')} type="primary" block>Register</Button>
            
        </div>,
    },
  ];
  
  return (
    <div className='Login-page'>
      <div className='box-user'>
        <img className='image' src={TripTrek} alt="TripTrek" width="500" height="500"/>
        <Tabs defaultActiveKey="1" centered items={items} />
      </div>
    </div>
    
  )
}

export default Login