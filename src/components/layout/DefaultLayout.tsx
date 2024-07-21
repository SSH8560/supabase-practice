import React from 'react';
import {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';

interface DefaultLayoutProps extends PropsWithChildren {}

const DefaultLayout = ({children}: DefaultLayoutProps) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {children}
    </SafeAreaView>
  );
};

export default DefaultLayout;
