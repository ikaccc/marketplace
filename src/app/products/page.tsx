'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  CircularProgress,
  Grid,
  TextField,
  MenuItem,
  Box,
  Pagination,
} from '@mui/material';
import ProductCard from '../../components/ProductCard';
import { Product } from '@/types/Product';


export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((res) => {
        const data = res.data as Product[];
      
        setProducts(data);
        setFiltered(data);
        const uniqueCategories: string[] = [
          'all',
          ...Array.from(new Set(data.map((p) => p.category)))
        ];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error('Error fetching products:', err))
      .finally(() => setLoading(false));
  }, []);
  

  useEffect(() => {
    const filteredProducts = products.filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === 'all' || p.category === category;
      return matchSearch && matchCategory;
    });
    setFiltered(filteredProducts);
    setPage(1); 
  }, [search, category, products]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedProducts = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        🛍️ All Products
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Search"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TextField
          select
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ minWidth: 200 }}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="body1">
          Showing {paginatedProducts.length} of {filtered.length} products
        </Typography>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
        />
      </Box>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {paginatedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
