import "./App.css";
import MyButtonPkg from "../components/index";

function App() {
  return (
    <>
      <MyButtonPkg
        value="Click Here"
        variant="secondary"
        size="large"
        type="submit"
        role="submit"
      />
    </>
  );
}

export default App;
