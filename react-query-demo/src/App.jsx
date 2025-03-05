import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostComponent"; // Import the component

// Create a React Query client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query Example</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
