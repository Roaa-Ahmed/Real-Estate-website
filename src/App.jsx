import "./App.css";
import Booking from "./Components/Booking";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import WhyChooseUs from "./Components/WhyChooseUs";
import { RouterProvider } from "react-router";
import { router } from "./router";

// Start Browser Page
import React, { lazy, Suspense } from "react";
import "./index.css";
// LOCAL COMPONENTS
import { ParamsProvider } from "./context/ParamsProvider";
import Layout from "./layouts/Layout";
import { LoadingSection } from "./features/browser";
import RootLayout from "./pages/RootLayout";

// EXTERNAL COMPONENTS
import { ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider } from "@tanstack/react-query";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { theme } from "./styles/theme";
import { ReactQueryDevtools } from "./../node_modules/@tanstack/react-query-devtools/src/index";

// PAGES

const BrowserPage = lazy(() => import("./pages/BrowserPage"));

// FUNCTIONS
import { queryClient } from "./lib/queryClient";
import Home from "./pages/Home";
import ProductDetails from "./pages/productDetails";

function Fallback() {
  return <LoadingSection isAllPage={true} variant="!min-h-screen" />;
}
// End Browser Page

function App() {
  return (
    <>
      {/* <Navbar/>
    <Landing/>
    <Features/>
    <WhyChooseUs/>
    <Booking/>
    <Footer/> */}
    
      {/* <RouterProvider router={router}/> */}

      {/* Start Browser Page */}
      <ParamsProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              {/* <Route path="/" element={<RootLayout />}> */}
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />

                <Route
                  path="/buy"
                  element={
                    <Suspense fallback={<Fallback />}>
                      <BrowserPage mode="FOR_SALE" />
                    </Suspense>
                  }
                />
                <Route
                  path="/rent"
                  element={
                    <Suspense fallback={<Fallback />}>
                      <BrowserPage mode="FOR_RENT" />
                    </Suspense>
                  }
                />
                <Route path="/product-details" element={<ProductDetails />} />
              </Route>
            </Routes>
          </ThemeProvider>
          <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition="bottom-left"
          />
        </QueryClientProvider>
      </ParamsProvider>
      {/* Start Browser Page */}
    </>
  );
}

export default App;
