import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const PostsComponent = () => {
  // Fetch posts with React Query
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000, // Keeps data fresh for 5 seconds before considering refetch
    cacheTime: 1000 * 60 * 5, // Keeps data in cache for 5 minutes
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error: isError {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Data</button>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
