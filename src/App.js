import { useEffect, useState } from "react";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Password from "./components/password/password";
import { StyledContainer } from "./styled-components/StyledContainer";

function App() {
  const [search, setSearch] = useState(() => {});
  const [password, setPassword] = useState(null);
  const passwordSetter = (val) => {
    setPassword(val);
  };
  const [allow, setAllow] = useState(true);
  const allowSetter = (val) => {
    setAllow(val);
  };
  const puller = (func) => {
    setSearch(() => func);
  };

  useEffect(() => {
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.backgroundColor = "#fcb500";
  }, []);
  console.log({ password: password, allow: allow });
  return !allow ? (
    <>
      {password}
      <Password call={passwordSetter} authSetter={allowSetter} />
    </>
  ) : (
    <StyledContainer>
      <Header method={search} />
      <Bookmarks pull={puller} secret={password} authSetter={allowSetter} />
      <Footer />
    </StyledContainer>
  );
}

export default App;
