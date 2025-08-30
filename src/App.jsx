import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import PreLoader from "./components/PreLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
