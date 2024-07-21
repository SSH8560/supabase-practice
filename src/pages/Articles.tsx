import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import AddArticleBadge from '../components/AddArticleBadge';
import ArticlesHeader from '../components/ArticlesHeader';
import Separator from '../components/ui/Separator';
import ArticleItem from '../components/ArticleItem';
import {sub} from 'date-fns';

const dummyData = [
  {
    id: 1,
    title: '1번글',
    content: 'zㅋㅋㅋㅋㅋ',
    nickname: 'ㅇㅇ',
    createdAt: new Date(),
  },
  {
    id: 2,
    title: '1번글',
    content: 'zㅋㅋㅋㅋㅋ',
    nickname: 'ㅇㅇ',
    createdAt: new Date(),
  },
  {
    id: 3,
    title: '1번글',
    content: 'zㅋㅋㅋㅋㅋ',
    nickname: 'ㅇㅇ',
    createdAt: new Date(),
  },
  {
    id: 4,
    title: '1번글',
    content: 'zㅋㅋㅋㅋㅋ',
    nickname: 'ㅇㅇ',
    createdAt: sub(new Date(), {months: 1}),
  },
];

const Articles = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ArticlesHeader />
      <View style={{position: 'relative', flex: 1}}>
        <AddArticleBadge />
        <FlatList
          refreshing={false}
          onRefresh={() => {}}
          data={dummyData}
          ItemSeparatorComponent={Separator}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => {
            return <ArticleItem {...item} />;
          }}
          ListFooterComponent={Separator}
        />
      </View>
    </SafeAreaView>
  );
};

export default Articles;
