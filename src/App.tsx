
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import PopularPage from "./pages/PopularPage";
import MoviesDetailPage from "./pages/MoviesDetailPage";

const queryClient = new QueryClient()
function App() {
 
  return (
    
    <QueryClientProvider client={queryClient} >
     <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<DefaultLayout/>}>
          <Route index element={<HomePage/>}/> 
          <Route path='/popular' element={<PopularPage/>}/>
          <Route path=":id" element={<MoviesDetailPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App
