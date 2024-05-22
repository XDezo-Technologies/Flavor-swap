import "./App.css";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Profile } from "./pages/Profile";
import { Recipes } from "./pages/Recipes";
import { CreatePost } from "./pages/CreatePost";
import { RecipeDescription } from "./pages/RecipeDescription";

function App() {
  const isUserSignedIn = !!localStorage.getItem('token')
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {isUserSignedIn && <Route path="/recipes" element={<Recipes />} />}
          {isUserSignedIn && <Route path="/profile" element={<Profile />} />}
          {isUserSignedIn && <Route path="/recipe/:recipeName" element={ <RecipeDescription /> } />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
