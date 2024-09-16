import React, {useState, useCallback} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import ProductList from '../components/organisms/ProductList';
import {addProduct, deleteProduct} from '../redux/slices/productSlice';
import {Errors} from '../types/enums';
import ErrorMessage from '../components/molecules/ErrorMessage';

const ProductScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState<Errors | null>(null);

  const dispatch = useDispatch();

  const handleValidaton = useCallback(() => {
    const isNumber = Number(price);
    const isEmptyName = name === '';
    if (isNaN(isNumber) && isEmptyName) {
      setError(Errors.ALL);
      return false;
    }
    if (isNaN(isNumber)) {
      setError(Errors.PRICE);
      return false;
    }
    if (isEmptyName) {
      setError(Errors.NAME);
      return false;
    }
    setError(null);

    return true;
  }, [price, name]);

  const handleAddProduct = useCallback(() => {
    const isValid = handleValidaton();
    if (isValid) {
      dispatch(addProduct({id: Date.now(), name, price: parseFloat(price)}));
      setName('');
      setPrice('');
    }
  }, [name, price, dispatch, handleValidaton]);

  const handleDeleteProduct = useCallback(
    (id: number) => {
      dispatch(deleteProduct(id));
    },
    [dispatch],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Input value={name} onChangeText={setName} placeholder="Product Name" />
      <Input
        value={price}
        onChangeText={setPrice}
        placeholder="Product Price USD"
        keyboardType="numeric"
      />
      <ErrorMessage typeOfError={error} />

      <Button title="Add Product" onPress={handleAddProduct} />
      <ProductList onDelete={handleDeleteProduct} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ProductScreen;
