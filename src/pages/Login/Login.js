import './Login.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Input from './../../component/Input/Input';
import Footer from './../../component/Footer/Footer';
import MainLogo from './../../img/SmuNaviLogo2.png';
import Button from './../../component/Button/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(){
    const navigate = useNavigate();
    const [isId, setIsId] = useState('');
    const [isPw, setIsPw] = useState('');

    const onIdHandler = (event) => {
        setIsId(event.currentTarget.value);
    }

    const onPwHandler = (event) => {
        setIsPw(event.currentTarget.value);
    }

    function onSubmitLogin(){
        axios({
            method: 'post',
            url: "https://localhost:8080/api/user/login",
            headers: {
                "Content-Type": `application/json`,
            },
            data: {
                "email": isId,
                "password": isPw,
            },
            withCredentials: true,
        }) .then((res) => {
            alert('로그인 완료');
            navigate('/notice');
        })
            .catch((error) => {
                alert('로그인 실패');
            });

        // const jwtToken = await signIn(signInPayload)
        // if(jwtToken){
        //     setCookie('myToken', token, {
        //         path: "/",
        //         secure: true,
        //         sameSite: "none"
        //     })
        // }
    }

    return(
        <div className={"loginWrap"}>
            <img src={MainLogo} className={"loginWrapMainLogo"}/>
            <div className={"loginBox"}>
                <h3>LOGIN</h3>
                <div className={"inputBoxWrap"}>
                    <p>id</p>
                    <input type="text" onChange={onIdHandler} id="loginInput"/>
                </div>
                <div className={"inputBoxWrap"} style={{marginTop: '15px'}}>
                    <p>password</p>
                    <input type="password" onChange={onPwHandler} id="loginInput"/>
                </div>
                <button onClick={onSubmitLogin} id={"loginBt"}>로그인</button>
                <div className={"memberBoxWrap"}>
                    <Link to={'/signup'} style={{textDecoration: 'none', color: 'black'}}>
                        <p>회원가입</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;