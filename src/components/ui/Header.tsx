import React from 'react';
import {View, StyleSheet} from 'react-native';

interface HeaderProps {
  left?: React.ReactElement;
  center?: React.ReactElement;
  right?: React.ReactElement;
}

const Header = ({left, center, right}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.sideContainer}>{left}</View>
      <View style={styles.centerContainer}>{center}</View>
      <View style={styles.sideContainer}>{right}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 52,
    borderBottomWidth: 0.5,
    borderBlockColor: 'gray',
    alignItems: 'center',
  },
  sideContainer: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
