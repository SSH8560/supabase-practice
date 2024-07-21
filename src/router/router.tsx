import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Articles from '../pages/Articles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EditArticle from '../pages/EditArticle';
import Join from '../pages/Join';
import ArticleDetail from '../pages/ArticleDetail';
import Login from '../pages/Login';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainBottomTab = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="Articles" component={Articles} />
      <BottomTab.Screen name="Profile" component={Login} />
    </BottomTab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainTab" component={MainBottomTab} />
      <Stack.Screen name="EditArticle" component={EditArticle} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
      <Stack.Screen name="Join" component={Join} />
    </Stack.Navigator>
  );
};

export default Router;
