import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import {View} from 'react-native';
import BackHeader from '../components/BackHeader';

interface LoginProps {}

const Login = ({navigation}: LoginProps) => {
  const handlePressLogin = () => {};
  const handlePressJoin = () => {
    navigation.navigate('Join');
  };

  return (
    <DefaultLayout>
      <BackHeader title="로그인" />
      <View style={{flex: 1, padding: 16, justifyContent: 'center', gap: 16}}>
        <Input label="이메일" />
        <Input label="비밀번호" />
        <Button text="로그인" onPress={handlePressLogin} />
        <Button text="회원가입" onPress={handlePressJoin} />
      </View>
    </DefaultLayout>
  );
};

export default Login;
