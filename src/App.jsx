import Route from "./Route"
import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Route />
      </QueryClientProvider>
    </>
  )
}

export default App
