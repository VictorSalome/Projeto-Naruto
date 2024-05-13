import { QueryClient, QueryClientProvider } from "react-query";

import "./assets/fonts/fonts.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/router";

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
