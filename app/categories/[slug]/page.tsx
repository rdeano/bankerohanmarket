"use client";

import { use, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";

import { Typography, Paper, TextField, Box, Fab } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function CategoryPage({ params }: Props) {
  const { slug } = use(params);

  const category = categories.find((c) => c.slug === slug);
  if (!category) return notFound();

  const [search, setSearch] = useState("");

  const filteredItems = category.items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ position: "relative" }}>
      {/* Title */}
      <Typography variant="h5" gutterBottom>
        {category.name} Prices
      </Typography>

      {/* Search */}
      <TextField
        label="Search items"
        variant="outlined"
        size="small"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3 }}
      />

      {/* Items */}
      {filteredItems.map((item) => (
        <Paper key={item.name} sx={{ p: 2, mb: 2 }}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              style={{ borderRadius: 8, objectFit: "cover" }}
            />

            <Box sx={{ flex: 1 }}>
              <Typography fontWeight="bold">{item.name}</Typography>
              <Typography color="text.secondary">
                ₱{item.price} / {item.unit}
              </Typography>
            </Box>
          </Box>
        </Paper>
      ))}

      {/* Floating Messenger Button */}
      <Fab
        color="primary"
        aria-label="Order via Messenger"
        href="https://m.me/61587143643112"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        <FacebookIcon />
      </Fab>
    </Box>
  );
}
