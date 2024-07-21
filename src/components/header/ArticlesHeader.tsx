import React from 'react';
import {Text, View} from 'react-native';
import Header from '../ui/Header';

interface ArticlesHeaderProps {}

const ArticlesHeader = ({}: ArticlesHeaderProps) => {
  return (
    <Header
      center={
        <View>
          <Text style={{fontWeight: '700', fontSize: 20}}>게시판</Text>
        </View>
      }
    />
  );
};

export default ArticlesHeader;
