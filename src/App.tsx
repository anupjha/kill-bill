import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvoicePage from "./pages/InvoicePage";
import T2InvoicePage from "./pages/T2InvoicePage";
import NoMatch from "./pages/NoMatch";
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
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<InvoicePage data={data} onChange={onInvoiceUpdated} />} />
          <Route path="/t2" element={<T2InvoicePage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
