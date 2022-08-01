import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactInfo from "./Components/ContactsPage/Contact/ContactInfo/ContactInfo";
import ContactsPage from "./Components/ContactsPage/ContactsPage";
import GalleryPage from "./Components/GalleryPage/GalleryPage";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import PostsPage from "./Components/PostsPage/PostPage";


function App() {
  return (
    <Router >
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path='/posts' component={PostsPage} />
      <Route path='/gallery' component={GalleryPage}></Route>
      <Route path='/contacts' exact component={ContactsPage}></Route>
      <Route path='/contacts/:id' component={ContactInfo}></Route>
    </Router>
  );
}

export default App;