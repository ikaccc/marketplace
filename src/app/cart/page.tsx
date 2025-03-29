"use client";

import { useCart } from "@/context/CartContext";
import { CartItem } from "@/types/Product";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Link,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc: number, item: CartItem) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ShoppingCartIcon /> Your Cart
        </Typography>

      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {cart.map((item: CartItem) => (
              <Grid item xs={12} md={6} key={item.id}>
                <Card sx={{ display: "flex", gap: 2 }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{ width: 100, objectFit: "contain", padding: 1 }}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography fontWeight={600}>{item.title}</Typography>
                    <Typography>${item.price.toFixed(2)}</Typography>
                    <Typography>Qty: {item.quantity}</Typography>

                    <IconButton
                      onClick={() =>
                        item.quantity > 1
                          ? updateQuantity(item.id, item.quantity - 1)
                          : removeFromCart(item.id)
                      }
                    >
                      <RemoveIcon />
                    </IconButton>

                    <IconButton
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <AddIcon />
                    </IconButton>

                    <IconButton onClick={() => removeFromCart(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6" sx={{ mt: 4 }}>
            Total: ${total.toFixed(2)}
          </Typography>

          <Button
            variant="outlined"
            color="error"
            onClick={clearCart}
            sx={{ mt: 2 }}
          >
            Clear Cart
          </Button>

          <Button
            variant="contained"
            color="primary"
            component={Link}
            href="/checkout"
            sx={{ mt: 2, ml: 2 }}
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
}
