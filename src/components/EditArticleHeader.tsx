import React from 'react';
import BackHeader from './BackHeader';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface EditArticleHeader {
  title?: string;
  onPressSave: () => void;
}

const EditArticleHeader = ({title, onPressSave}: EditArticleHeader) => {
  return (
    <BackHeader
      title={title ? title : '글 작성하기'}
      right={
        <TouchableOpacity onPress={onPressSave}>
          <Icon name="save-outline" size={32} />
        </TouchableOpacity>
      }
    />
  );
};

export default EditArticleHeader;
