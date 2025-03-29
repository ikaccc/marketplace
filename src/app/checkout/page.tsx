'use client';

import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function CheckoutPage() {
  const { cart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = () => {
    const order = {
      name,
      email,
      cart,
      total,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem('order', JSON.stringify(order));

    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5">🎉 Thank you for your order!</Typography>
        <Typography>We’ve saved your order locally.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        🧾 Checkout
      </Typography>

      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {cart.map((item) => (
              <Grid item xs={12} md={6} key={item.id}>
                <Card>
                  <CardContent>
                    <Typography>{item.title}</Typography>
                    <Typography>Qty: {item.quantity}</Typography>
                    <Typography>${(item.price * item.quantity).toFixed(2)}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: ${total.toFixed(2)}
          </Typography>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <TextField
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              sx={{ mt: 3 }}
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              sx={{ mt: 2 }}
              type="email"
            />

            <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
              Place Order
            </Button>
          </form>
        </>
      )}
    </Container>
  );
}
