import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/index';
import ProductCard from '../molecules/ProductCard';

interface ProductListProps {
  onDelete: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({onDelete}) => {
  const products = useSelector((state: RootState) => state.product.products);

  const renderItem = ({
    item,
  }: {
    item: {id: number; name: string; price: number};
  }) => (
    <ProductCard
      name={item.name}
      price={item.price}
      onDelete={() => onDelete(item.id)}
    />
  );

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
});

export default ProductList;
