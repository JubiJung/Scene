import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import MainPage from "./components/mainpage/MainPage";
import MovieDetailedPage from "./components/detailedPage/MovieDetailedPage";
import DramaDetailedPage from "./components/detailedPage/DramaDetailedPage";
import BookDetailedPage from "./components/detailedPage/BookDetailedPage";
import NewPost from "./components/NewPost/NewPost";
import EditPage from "./components/EditPage/EditPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "movie/:movieId", element: <MovieDetailedPage /> },
        { path: "drama/:dramaId", element: <DramaDetailedPage /> },
        { path: "book/:bookId", element: <BookDetailedPage /> },
        { path: "postwrite", element: <NewPost /> },
        { path: "edit", element: <EditPage /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
