import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Header from './ui/Header';

interface BackHeaderProps {
  title: string;
}

const BackHeader = ({title}: BackHeaderProps) => {
  const navigation = useNavigation();

  return (
    <Header
      left={
        <TouchableOpacity
          style={{width: 40, height: 40}}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={32} />
        </TouchableOpacity>
      }
      center={
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>{title}</Text>
        </View>
      }
    />
  );
};

export default BackHeader;
