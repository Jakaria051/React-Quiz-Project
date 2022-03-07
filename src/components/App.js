import "../styles/App.css";
import Layout from "./Layout";
import Result from "./pages/Result";
// import Home from "./pages/Home";
function App() {
  return (
    <Layout>
      {
        /* <Home /> */
        // <Signup />
        // <Login />
        // <Quiz />
        <Result />
      }
    </Layout>
  );
}

export default App;
