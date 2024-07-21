import React from 'react';
import {SafeAreaView, View} from 'react-native';
import AddArticleBadge from '../components/AddArticleBadge';
import ArticlesHeader from '../components/ArticlesHeader';

const Articles = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ArticlesHeader />
      <View style={{position: 'relative', flex: 1}}>
        <AddArticleBadge />
      </View>
    </SafeAreaView>
  );
};

export default Articles;
