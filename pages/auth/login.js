import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { loginRequest, logoutRequest } from '@/modules/auth/login';
import { Login } from '@/components/auth/Login';
import { useRouter } from 'next/router';
import { Profile } from '@/components';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const [user, setUser] =useState({
    username:'', password:''
})
const dispatch = useDispatch()
const onChange = e =>{
    e.preventDefault()
    const{name, value} = e.target;
    setUser({...user,[name]: value})
}
const {isLoggined, loginUser} = useSelector(state => state.login)
const onSubmit = e =>{
    e.preventDefault()
    alert('로그인정보:'+JSON.stringify(user))
    dispatch(loginRequest(user))
}
  return (
    isLoggined ? 
        <Profile loginUser={loginUser}/>
      : <Login onChange={onChange} onSubmit={onSubmit}/>
  );
};

const mapStateToProps = state => ({isLoggined: state.login.isLoggined})
const loginActions = {loginRequest, logoutRequest}
export default connect(mapStateToProps, loginActions)(LoginPage)