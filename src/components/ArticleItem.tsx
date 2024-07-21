import {useNavigation} from '@react-navigation/native';
import {format, isToday} from 'date-fns';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface ArticleItemProps {
  id: number;
  title: string;
  nickname: string;
  createdAt: Date;
}

const ArticleItem = ({id, nickname, title, createdAt}: ArticleItemProps) => {
  const {navigate} = useNavigation();

  const createTimeText = isToday(createdAt)
    ? format(createdAt, 'HH:mm')
    : format(createdAt, 'MM.dd');

  return (
    <TouchableOpacity
      style={{padding: 16, paddingVertical: 8, gap: 4}}
      onPress={() => {
        navigate('ArticleDetail', {id});
      }}>
      <View>
        <Text style={{fontSize: 16, fontWeight: '700'}}>{title}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>{nickname}</Text>
        <Text>{createTimeText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleItem;
