import React from "react";
import InvoicePage from "./pages/InvoicePage";
import Navbar from "./components/Navbar";
import { Invoice } from "./data/types";

function App() {
  const savedInvoice = window.localStorage.getItem("invoiceData");
  let data = null;

  try {
    if (savedInvoice) {
      data = JSON.parse(savedInvoice);
    }
  } catch (_e) {}

  const onInvoiceUpdated = (invoice: Invoice) => {
    window.localStorage.setItem("invoiceData", JSON.stringify(invoice));
  };

  return (
    <div className="app">
      <Navbar />
      <InvoicePage data={data} onChange={onInvoiceUpdated} />
    </div>
  );
}

export default App;

// import { HashRouter as Router,Routes, Route } from "react-router-dom";
// {
//   /* <Router>
// <Routes>
//   <Route path="/login" element={<LoginScreen />} />
//   <Route path="/" element={<HomeScreen />} />
//   <Route path="/invoice/:invoiceid" element={<InvoiceScreen />} />
// </Routes>
// </Router> */
// }
