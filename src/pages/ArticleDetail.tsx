import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import BackHeader from '../components/header/BackHeader';
import DefaultLayout from '../components/layout/DefaultLayout';
import Button from '../components/ui/Button';
import Separator from '../components/ui/Separator';
import ArticleDetailHeader from '../components/header/ArticleDetailHeader';

const ArticleDetail = ({
  route: {
    params: {id},
  },
}) => {
  console.log(id);

  return (
    <DefaultLayout>
      <ArticleDetailHeader title="제목" />
      <ScrollView style={{flex: 1}}>
        <View style={{paddingVertical: 8, paddingHorizontal: 16, gap: 8}}>
          <Text style={{fontSize: 18, fontWeight: '700'}}>제목</Text>
          <Text style={{fontWeight: '600'}}>글쓴이</Text>
          <Text style={{color: 'gray'}}>작성일</Text>
        </View>
        <Separator />
        <View style={{paddingVertical: 8, paddingHorizontal: 16}}>
          <Text style={{fontSize: 16}}>내용</Text>
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          borderTopColor: 'gray',
          borderTopWidth: 0.5,
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <TextInput
          style={{
            fontSize: 16,
            flex: 1,
          }}
          multiline
        />
        <View style={{width: 60, paddingVertical: 8}}>
          <Button text="등록" onPress={() => {}} />
        </View>
      </View>
    </DefaultLayout>
  );
};

export default ArticleDetail;
