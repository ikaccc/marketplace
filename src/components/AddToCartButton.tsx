'use client';

import { Button } from '@mui/material';
import { useCart } from '@/context/CartContext';
import { useSnackbar } from 'notistack';
import { Product } from '@/types/Product';

type Props = {
  product: Product
};

export default function AddToCartButton({ product }: Props) {
  const { cart, addToCart } = useCart();
  const { enqueueSnackbar } = useSnackbar();

  const isInCart = cart.some((item) => item.id === product.id);

  const handleAdd = () => {
    addToCart(product);
    enqueueSnackbar(`${product.title} added to cart!`, { variant: 'success' });
  };

  return (
    <Button
      variant={isInCart ? 'outlined' : 'contained'}
      color="primary"
      onClick={handleAdd}
      disabled={isInCart}
    >
      {isInCart ? 'Added to Cart' : 'Add to Cart'}
    </Button>
  );
}
