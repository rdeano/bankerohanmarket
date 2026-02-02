"use client";

import { ReactNode } from "react";
import { CssBaseline, ThemeProvider, createTheme, Container, AppBar, Toolbar, Typography, Box } from "@mui/material";
import Link from "next/link";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "Geist, Arial, sans-serif",
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {/* Page wrapper as flex container */}
          <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            
            {/* Header */}
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6">
                  <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
                    BPM - Meats
                  </Link>
                </Typography>
              </Toolbar>
            </AppBar>

            {/* Main content */}
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
              {children}
            </Container>

            {/* Footer */}
            <Box
              component="footer"
              sx={{
                textAlign: "center",
                py: 2,
                color: "text.secondary",
                borderTop: "1px solid #eee",
              }}
            >
              © {new Date().getFullYear()} Bankerohan Public Market
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
