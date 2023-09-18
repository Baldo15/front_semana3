import { useState } from "react";
import Header from "./components/header";
import Barra from "./components/search";
import PostList from "./components/postsList";
import Perfil from "./components/perfil";
import Login from "./components/login";

function App() {
  const [modulo, setModulo] = useState(1);
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  function filtroModulo(modulo) {
    setModulo(modulo);
  }

  function doSearch(text) {
    setSearch(text);
  }
  return (
    <div>
      <Header filtroModulo={filtroModulo} />
      {token ? (
        <>
          {modulo === 1 ? (
            <>
              <Barra search={search} doSearch={doSearch} />
              <PostList search={search} />
            </>
          ) : modulo === 0 ? (
            <Perfil
              imagen="src/images/perfil.jpeg"
              usuario="Hugo"
              texto="desarrollador de software de la clinica uros en la ciudad de neiva"
            />
          ) : null}
        </>
      ) : (
        <>
          <Login setToken={setToken} />
        </>
      )}
    </div>
  );
}

export default App;
