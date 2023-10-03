import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalSuccess from "./ModalSuccess";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [stateProvince, setStateProvince] = useState("");
  const [country, setCountry] = useState("");
  const [profession, setProfession] = useState("");
  const [discoverySource, setDiscoverySource] = useState("");
  const [showModal, setShowModal] = useState(false);

  // to be called after signup is successful
  const resetFields = () => {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setConfirmPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.", {
        position: "top-left",
        autoClose: 1000,
      });
      return;
    }
    setLoading(true);
    try {
      await axios({
        method: "POST",
        // url: "/api/signup",
        url: "https://kalles-backend.onrender.com/api/signup",
        data: {
          email,
          password,
          firstName,
          lastName,
        },
        withCredentials: true,
      });
      toast.success("Signup successful!", {
        autoClose: 1000,
        position: "top-right",
      });
      // After successful registration
      setShowModal(true);
      // Clear input fields after successful signup
      resetFields();
    } catch (error) {
      console.error(error);
      toast.error("Signup failed. Please try again.", {
        position: "top-left",
        autoClose: 1000,
      });
    }

    setLoading(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const getPasswordStrength = (password) => {
    const strength = {
      0: { label: "Weak", color: "text-red" },
      1: { label: "Medium", color: "text-yellow-500" },
      2: { label: "Strong", color: "text-green" },
    };

    let score = 0;

    // checks if password contains Lowercase, Uppercase letter, symbol, number
    if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])/.test(password)) {
      score++;
    }

    if (password.length >= 8) {
      score++;
    }

    return strength[score];
  };

  const passwordStrength = getPasswordStrength(password);

  // Get all number input fields
  const numberInputs = document.querySelectorAll('input[type="number"]');
  // Add event listeners to number input fields
  numberInputs.forEach((input) => {
    input.addEventListener("keydown", (e) => {
      // Allow only numbers, backspace, and delete key
      if (
        !(
          (e.key >= "0" && e.key <= "9") ||
          e.key === "Backspace" ||
          e.key === "Delete"
        )
      ) {
        e.preventDefault();
      }
    });
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-xl p-4 bg-white rounded-md shadow-xl">
        <div className="md:text-left text-center mb-7">
          <h2 className="text-xl font-bold text-slate-500">Sign Up</h2>
          <p className="text-sm text-blue-900">Sign up on Kalles Shopify</p>
        </div>
        <form onSubmit={handleSubmit}>
          <>
            <div className="md:flex ">
              <div className="mb-4 md:w-1/2 md:pr-2">
                <label htmlFor="firstName" className="block font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 capitalize"
                  required
                />
              </div>
              <div className="mb-4 md:w-1/2 md:pl-2">
                <label htmlFor="lastName" className="block font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 capitalize"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3"
                required
              />
            </div>
          </>

          <>
            <div className="md:flex">
              <div className="mb-4 md:w-1/2 md:pr-2">
                <label htmlFor="password" className="block font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-md py-2 px-3"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-500"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {password && (
                  <p className="text-sm mt-2 font-bold">
                    Password Strength:{" "}
                    <span className={passwordStrength.color}>
                      {passwordStrength.label}
                    </span>
                  </p>
                )}
              </div>
              <div className="mb-4 md:w-1/2 md:pl-2">
                <label htmlFor="confirmPassword" className="block font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    placeholder="Confirm your password"
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-md py-2 px-3"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-500"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>
          </>

          <div className="flex items-center justify-between mt-8">
            <div>
              <button
                type="submit"
                className={`px-4 py-2 bg-primary hover:bg-blue text-white  rounded-md font-medium ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <div className="relative">
                    <div
                      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                      style={{ zIndex: 9999 }}
                    >
                      <FaSpinner className="animate-spin text-4xl text-primary" />
                    </div>
                  </div>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </div>
        </form>
        
        <div className="text-center mt-4">
          <span>
            Already have an account?{" "}
            <Link to="/login" className="text-primary">
              Log In
            </Link>
          </span>
        </div>
      </div>
      <ModalSuccess showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Signup;
