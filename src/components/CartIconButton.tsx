'use client';

import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';

export default function CartIconButton() {
  const { cart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <IconButton color="inherit" component={Link} href="/cart">
      <Badge badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
