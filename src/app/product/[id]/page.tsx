'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import {
  Container,
  Typography,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { Product } from '@/types/Product';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error('Error loading product:', err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!product) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6">Product not found.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Card sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' }, p: 2 }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ maxWidth: 300, objectFit: 'contain', mx: 'auto' }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h5" color="primary">
            ${product.price.toFixed(2)}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
