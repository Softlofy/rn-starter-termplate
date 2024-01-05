import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  NonScrollableScreenContainer,
  Typography,
  Wrapper,
} from 'softlofy-rn-components';

const App = () => {
  return (
    <Wrapper>
      <NonScrollableScreenContainer>
        <View style={styles.container}>
          <Typography>Welcome back to React Native World</Typography>
        </View>
      </NonScrollableScreenContainer>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
