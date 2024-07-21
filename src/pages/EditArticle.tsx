import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '../components/ui/Header';
import BackHeader from '../components/BackHeader';

const EditArticle = () => {
  return (
    <SafeAreaView>
      <BackHeader title={'글 작성하기'} />
    </SafeAreaView>
  );
};

export default EditArticle;
