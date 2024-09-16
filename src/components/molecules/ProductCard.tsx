import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../atoms/Button';

interface ProductCardProps {
  name: string;
  price: number;
  onDelete: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({name, price, onDelete}) => {
  return (
    <View style={styles.card}>
      <Text>{name}</Text>
      <Text>{price} USD</Text>
      <Button title="Delete" onPress={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default ProductCard;
