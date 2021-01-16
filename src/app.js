import styles from './app.module.scss';
import { Footer } from './component/footer/footer';
// import { Switch } from 'react-router-dom';
import { Home } from './page/home/home';
// import { Route, Router } from 'react-router-dom';

function App() {
  return (
    <div className={styles['app-container']}>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
