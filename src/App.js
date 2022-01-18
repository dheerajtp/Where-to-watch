import { useState } from "react";
import { ToastProvider } from "react-toast-notifications";
import "./index.css";
import Logo from "./images/where-to-watch-1.png";
import SearchInput from "./components/SearchInput";
import Item from "./components/Item";

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [keyword, setKeyword] = useState("");
  const [gotresult, setGotResult] = useState(false);

  return (
    <ToastProvider autoDismiss autoDismissTimeout={6000}>
      <div className="h-vh w-vh">
        <img src={Logo} alt="logo" className="h-52 mx-auto" />
        <SearchInput
          setSearchItem={setSearchItem}
          searchItem={searchItem}
          setKeyword={setKeyword}
        />
        <Item
          keyword={keyword}
          gotresult={gotresult}
          setGotResult={setGotResult}
        />
      </div>
    </ToastProvider>
  );
}

export default App;
