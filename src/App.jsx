import AppRoutes from "./AppRoutes.jsx";
import { AppContextProvider } from "./Context/AppContextProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes/>
      </AppContextProvider>
    </QueryClientProvider>
  );
}
export default App;