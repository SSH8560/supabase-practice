import React, {useState} from 'react';
import {View} from 'react-native';
import Input from '../components/ui/Input';
import DefaultLayout from '../components/layout/DefaultLayout';
import TextArea from '../components/ui/TextArea';
import EditArticleHeader from '../components/header/EditArticleHeader';

const EditArticle = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handlePressSave = () => {
    console.log(title, content);
  };

  return (
    <DefaultLayout>
      <EditArticleHeader title={'글 작성하기'} onPressSave={handlePressSave} />
      <View style={{padding: 16, gap: 16, flex: 1}}>
        <Input label="제목" value={title} onChange={setTitle} />
        <TextArea label="내용" value={content} onChange={setContent} />
      </View>
    </DefaultLayout>
  );
};

export default EditArticle;
