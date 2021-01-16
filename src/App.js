import './app.scss';
import { Profile } from './profile/profile';
import { Post } from './post/post';

function App() {
  return (
    <div className="app-container">
      <div className="page-content">
        <Profile></Profile>
        <div className="post-list">
          <Post></Post>
        </div>
      </div>
    </div>
  );
}

export default App;
