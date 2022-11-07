import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
