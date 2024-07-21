import React from 'react';
import Badge from './ui/Badge';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
const AddArticleBadge = () => {
  const {navigate} = useNavigation();

  return (
    <Badge onPress={() => navigate('EditArticle')} size={60}>
      <Icon name="add-outline" size={32} />
    </Badge>
  );
};

export default AddArticleBadge;
