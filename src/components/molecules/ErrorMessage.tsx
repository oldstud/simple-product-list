import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Errors} from '../../types/enums';

interface ProductCardProps {
  typeOfError: Errors | null;
}

const ErrorMessage: React.FC<ProductCardProps> = ({typeOfError}) => {
  if (typeOfError !== null) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>You have an error</Text>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  message: {
    color: 'red',
  },
});

export default memo(ErrorMessage);
