import { SocialNetworks } from '../social-networks/social-networks';

export const Profile = () => {
    return <div className="profile">
    <div className="profile-top">
      <div className="profile-photo">
        <img src="./profile-photo.jpeg" alt="rwparrish profile">
        </img>
      </div>
      <div className="follow-me">
        <button>Follow</button>
      </div>
    </div>
    <div className="profile-middle">
      <div className="my-name">rwparrish</div>
      <div className="comment">
        To code or not to code, that is the ternary.
      </div>
      <div className="social-networks">
        <SocialNetworks></SocialNetworks>
      </div>
    </div>
    <div className="profile-bottom"></div>
  </div>
};