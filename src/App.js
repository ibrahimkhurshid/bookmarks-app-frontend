import { useEffect, useState } from "react";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Modal from "./components/modal/modal";
import { StyledContainer } from "./styled-components/StyledContainer";

function App() {
  const [search, setSearch] = useState(() => {});
  const puller = (func) => {
    setSearch(() => func);
  };

  useEffect(() => {
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.backgroundColor = "#fcb500";
  }, []);
  return (
    <StyledContainer>
      <Header method={search} />
      <Bookmarks pull={puller} />
      <Footer />
    </StyledContainer>
  );
}

export default App;
