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

//DURUM:
//

//YAPILACAKLAR:
// projedeki tüm yazıları seçilen dile göre değiştirme
//öncelikle ingilizce türkçe seçiminin yapılabileceği bir component yapacağım
// mode butonlarını da ayrı bir componente ekleyeceğim
// tr için ayrı harf json dosyası
// tr için ayrı kelime dosyaları
// ilk harf için ipucu butonu
// proje için clean code ve performans düzenlemeleri
// proje live alma video çekme ve linkedin post
