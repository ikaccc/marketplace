'use client';

import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Product } from '@/types/Product';
import { useCart } from '@/context/CartContext';
import { useSnackbar } from 'notistack';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { cart, addToCart } = useCart();
  const { enqueueSnackbar } = useSnackbar();

  const isInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    enqueueSnackbar(`${product.title} added to cart!`, { variant: 'success' });
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', height: 200, padding: 2 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" gutterBottom noWrap>
          {product.title}
        </Typography>
        <Typography variant="h6">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant={isInCart ? 'outlined' : 'contained'}
          color="primary"
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? 'Added' : 'Add to Cart'}
        </Button>
      </CardActions>
    </Card>
  );
}
