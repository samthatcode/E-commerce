import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import {
  AdminDashboard,
  UserDashboard,
  ProductPage,
  ProductDetails,
  CartListPage,
  CheckoutPage,
  ConfirmationPage,
  PaystackCheckout,
} from "./pages";
import {
  Navbar,
  Login,
  Signup,
  Home,
  UserEmailVerification,
  ForgotPassword,
  ResetPassword,
  SavedProductItems,
} from "./components";
import { UserProvider } from "./contexts/UserContext";
import { CartProvider } from "./contexts/CartContext";
import ProtectedRoute from "./ProtectedRoute";
import { SearchProvider } from "./contexts/SearchContext";
import { SavedPropertiesProvider } from "./contexts/SavedPropertiesContext";

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <SearchProvider>
          <SavedPropertiesProvider>
            <div>
              <ToastContainer />
              {/* <Navbar /> */}
              <div className="content font-poppins">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/cart" element={<CartListPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route
                    path="/paystackcheckout"
                    element={<PaystackCheckout />}
                  />
                  <Route path="/confirm" element={<ConfirmationPage />} />
                  <Route path="/products" element={<ProductPage />} />

                  <Route path="/products/:id" element={<ProductDetails />} />
                  <Route path="/products/saved" element={<SavedProductItems />} />

                  <Route path="/user/dashboard" element={<UserDashboard />} />

                  <Route
                    path="/admin/dashboard"
                    element={
                      <ProtectedRoute roles={["admin"]}>
                        <AdminDashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/verify-user-email/:token"
                    element={<UserEmailVerification />}
                  />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route
                    path="/reset/:resetToken"
                    element={<ResetPassword />}
                  />

                  {/* <Route path="/verify-code" element={CodeVerification} /> */}
                </Routes>
              </div>
            </div>
          </SavedPropertiesProvider>
        </SearchProvider>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
