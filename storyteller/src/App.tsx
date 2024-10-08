import React from "react";
// RRD
import { Routes, Route } from "react-router-dom";
// LAYOUT
import MainLayout from "./layout/MainLayout";
// PAGE
import BlogPage from "./pages/Blog/BlogPage";
import PostPage from "./pages/Post/PostPage";

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <MainLayout>
        <Routes>
          <Route path="/" element={<BlogPage />} />
          <Route path="/:id" element={<PostPage />} />
        </Routes>
      </MainLayout>
    </main>
  )
}

export default App;