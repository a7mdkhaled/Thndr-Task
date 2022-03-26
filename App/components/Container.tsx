import React from 'react';
import { SafeAreaView, View as DefaultView } from 'react-native';
import Colors from '../../constants/Colors';

type ScreenContainerProps = {
  children: any;
};

export type ContainerProps = ScreenContainerProps & DefaultView['props'];

export function ScreenContainer(props: ContainerProps) {
  const { style, children } = props;
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.light.tint,
      }}
    >
      <DefaultView
        style={[
          {
            paddingHorizontal: 16,
            height: '100%',
            backgroundColor: Colors.light.tint,
          },
          style,
        ]}
      >
        {children}
      </DefaultView>
    </SafeAreaView>
  );
}
