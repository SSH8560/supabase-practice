import React from 'react';
import {View} from 'react-native';
import Input from '../components/ui/Input';
import DefaultLayout from '../components/layout/DefaultLayout';
import TextArea from '../components/ui/TextArea';
import EditArticleHeader from '../components/EditArticleHeader';

const EditArticle = () => {
  const handlePressSave = () => {};

  return (
    <DefaultLayout>
      <EditArticleHeader title={'글 작성하기'} onPressSave={handlePressSave} />
      <View style={{padding: 16, gap: 16, flex: 1}}>
        <Input label="제목" />
        <TextArea label="내용" />
      </View>
    </DefaultLayout>
  );
};

export default EditArticle;
