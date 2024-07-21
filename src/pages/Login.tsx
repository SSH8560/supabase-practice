import React, {useState} from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import {View} from 'react-native';
import BackHeader from '../components/header/BackHeader';

interface LoginProps {}

const Login = ({navigation}: LoginProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handlePressLogin = () => {};
  const handlePressJoin = () => {
    navigation.navigate('Join');
  };

  return (
    <DefaultLayout>
      <BackHeader title="로그인" />
      <View style={{flex: 1, padding: 16, justifyContent: 'center', gap: 16}}>
        <Input label="이메일" value={email} onChange={setEmail} />
        <Input
          label="비밀번호"
          value={password}
          onChange={setPassword}
          secret
        />
        <Button text="로그인" onPress={handlePressLogin} />
        <Button text="회원가입" onPress={handlePressJoin} />
      </View>
    </DefaultLayout>
  );
};

export default Login;
