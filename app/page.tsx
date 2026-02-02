"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import { Grid, Card, CardContent, Typography, CardActionArea } from "@mui/material";

export default function Home() {
  return (
    <Grid container spacing={3}>
      {categories.map((cat) => (
        //@ts-ignore
        <Grid item xs={12} sm={6} md={4} key={cat.slug}>
         <Card>
          <CardActionArea>
            <Link href={`/categories/${cat.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              <CardContent>
                <Typography variant="h6">{cat.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  View current prices →
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
        </Grid>
      ))}
    </Grid>
  );
}
