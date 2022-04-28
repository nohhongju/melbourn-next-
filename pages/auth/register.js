import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { register } from '@/modules/auth/user';
import { Register } from '@/components/auth/Register';


const RegisterPage = () => {
    const [user, setUser] =useState({
        userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
    })
    const dispatch = useDispatch()
    const onChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user,[name]: value})
    }
    const onSubmit = e =>{
        e.preventDefault()
        alert('회원가입정보:'+JSON.stringify(user))
        dispatch(Register())
        //window.location.href = "./login"
    }
  return (
    <Register onChange={onChange} onSubmit={onSubmit}/>
  );
};

export default connect(
  state => ({
    registerUser: state.register
  }),
  {
    register
  }
)(RegisterPage);