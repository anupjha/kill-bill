import InvoicePage from "./pages/InvoicePage";

function App() {
  const savedInvoice = window.localStorage.getItem("invoiceData");
  let data = null;

  try {
    if (savedInvoice) {
      data = JSON.parse(savedInvoice);
    }
  } catch (_e) {}

  const onInvoiceUpdated = (invoice) => {
    window.localStorage.setItem("invoiceData", JSON.stringify(invoice));
  };

  return <InvoicePage data={data} onChange={onInvoiceUpdated} />;
}

export default App;
