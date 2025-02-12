import React, {useState} from 'react';
import {View} from 'react-native';
import DefaultLayout from '../components/layout/DefaultLayout';
import BackHeader from '../components/header/BackHeader';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

interface JoinProps {}

const Join = ({}: JoinProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handlePressJoin = () => {};

  return (
    <DefaultLayout>
      <BackHeader title="회원가입" />
      <View style={{padding: 16, gap: 16}}>
        <Input label="이메일" value={email} onChange={setEmail} />
        <Input
          label="비밀번호"
          value={password}
          onChange={setPassword}
          secret
        />
        <Button text="가입하기" onPress={handlePressJoin} />
      </View>
    </DefaultLayout>
  );
};

export default Join;
