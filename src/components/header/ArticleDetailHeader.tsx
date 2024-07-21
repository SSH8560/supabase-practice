import React from 'react';
import BackHeader from './BackHeader';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface ArticleDetailHeaderProps {
  title: string;
  isEditable?: boolean;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
}

const ArticleDetailHeader = ({
  title,
  isEditable,
  onPressDelete,
  onPressEdit,
}: ArticleDetailHeaderProps) => {
  return (
    <BackHeader
      title={title}
      right={
        isEditable && (
          <View style={{flexDirection: 'row', gap: 8}}>
            <TouchableOpacity onPress={onPressEdit}>
              <Icon name="pencil-outline" size={32} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressDelete}>
              <Icon name="trash-outline" size={32} />
            </TouchableOpacity>
          </View>
        )
      }
    />
  );
};

export default ArticleDetailHeader;
