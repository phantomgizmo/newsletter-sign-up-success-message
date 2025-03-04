import AppRouter from "./routes";
import AppProvider from "./providers";

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
