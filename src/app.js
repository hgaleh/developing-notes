import { Footer } from './component/footer/footer';
import { Home } from './page/home/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PostDetail } from './page/post-detail/post-detail';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:postId">
          <PostDetail></PostDetail>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
