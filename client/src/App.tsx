import { useState } from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  const [postSend, setPostSend] = useState("");

  return (
    <>
      <div className="">
        <Navbar setPostSend={setPostSend} />
        <Main postSend={postSend} setPostSend={setPostSend} />
        <Footer />
      </div>
    </>
  );
}

export default App;
