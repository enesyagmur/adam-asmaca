import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Game from "./Pages/Game/Game";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Game />} path="/game" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//YAPILACAKLAR:
//result görüntülenmesinde ve restart işleminde hata var
//body yi daha gerçekçi yapabilirim ve bar a çapraz tahta ekleyebilirim
// proje live alma video çekme ve linkedin post
