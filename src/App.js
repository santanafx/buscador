import { Form } from "./components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Header } from "./components/Header";
import { Sobre } from "./components/Sobre";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
