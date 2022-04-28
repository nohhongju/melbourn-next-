import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { login } from '@/modules/auth/user';
import { Login } from '@/components/auth/Login';

const LoginPage = () => {
  const [user, setUser] =useState({
    userid:'', password:''
})
const dispatch = useDispatch()
const onChange = e =>{
    e.preventDefault()
    const{name, value} = e.target;
    setUser({...user,[name]: value})
}
const onSubmit = e =>{
    e.preventDefault()
    alert('로그인정보:'+JSON.stringify(user))
    //window.location.href = "/"
}
  return (
    <Login onChange={onChange} onSubmit={onSubmit}/>
  );
};

export default connect(
  state => ({
    loginUser: state.login
  }),
  {
    login
  }
)(LoginPage);