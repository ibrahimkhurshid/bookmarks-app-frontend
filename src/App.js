import { useState } from "react";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const [search, setSearch] = useState(() => {});
  const puller = (func) => {
    setSearch(() => func);
  };
  console.log("search:", search);
  return (
    <>
      <Header method={search} />
      <Bookmarks pull={puller} />
      <Footer />
    </>
  );
}

export default App;
