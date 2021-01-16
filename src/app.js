import styles from './app.module.scss';
import { Footer } from './component/footer/footer';
import { Home } from './page/home/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { PostDetail } from './page/post-detail/post-detail';


function App() {
  return (
    <div className={styles['app-container']}>
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
    </div>
  );
}

export default App;
