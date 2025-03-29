'use client';

import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <Container sx={{ mt: 10, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to the Marketplace 🛍️
      </Typography>

      <Typography variant="h5" color="text.secondary" paragraph>
        Discover the best products from the Fake Store API. Stylish, simple, and fast.
      </Typography>

      <Box mt={4}>
        <Link href="/products" passHref>
          <Button variant="contained" size="large">
            Browse Products
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
