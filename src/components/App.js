import "../styles/App.css";
import Layout from "./Layout";
import Signup from "./pages/Signup";
// import Home from "./pages/Home";
function App() {
  return (
    <Layout>
      {
        /* <Home /> */
        <Signup />
      }
    </Layout>
  );
}

export default App;
