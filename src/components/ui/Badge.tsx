import React, {PropsWithChildren} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

interface BadgeProps extends PropsWithChildren {
  onPress: () => void;
  size: number;
}

const Badge = ({onPress, size, children}: BadgeProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.badge, {width: size, height: size}]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 100,
    right: 16,
    bottom: 16,
    zIndex: 1,
  },
});

export default Badge;
