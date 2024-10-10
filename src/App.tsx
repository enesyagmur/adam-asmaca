import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Game from "./Pages/Game/Game";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Game />} path="/game" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//DURUM:
//bar ın ucunu halka gibi yapıp boyna takabilirim

//YAPILACAKLAR:
// kelime oluşturmayı yapay zeka ile birden fazla dilde yapmayı düşünüyorum
// notfound ekranı
