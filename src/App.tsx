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
//gues i sıfırlama yapıcam restart dediğinde
//yeniden oyna butonunun işlevini ayarlamalıyım

//YAPILACAKLAR:
// kelime oluşturmayı yapay zeka ile birden fazla dilde yapmayı düşünüyorum
/* her hatalı tuşlamada kafanın üstünde 2-3 saniyelik mesaj kutusu ile yardım isteyebilir ve 
yine her hatada yüz ikonu değişip düzelebilir
*/
//bar ın ucunu halka gibi yapıp boyna takabilirim
