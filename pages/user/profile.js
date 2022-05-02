import React, { useEffect } from 'react';
import { Profile } from '@/components';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const {loginUser} = useSelector(state => state.login)
  useEffect(() => {
    console.log(' 모듈에 저장된 로그인값: '+JSON.stringify(loginUser))
  },[loginUser && loginUser.name])
  return (
    <Profile loginUser={loginUser} />
  );
};

export default ProfilePage