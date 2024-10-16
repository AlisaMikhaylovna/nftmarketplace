import "./index.css"

const Profile = () => {
    return (
        <div className="profile-page">
            <span className="profile-title">Profile Details</span>
            <div className="profile-container">
                <span className="profile-sub-title">Username</span>
                <input type="text" placeholder="Enter username" className="profile-input" />
                <span className="profile-sub-title">Bio</span>
                <textarea placeholder="Tell the word your story" className="profile-input profile-description" />
                <span className="profile-sub-title">Wallet Address</span>
                <span className="address">0x3173...755d</span>
                <button className="profile-button" type="button">Save</button>
            </div>
        </div>
    );
}

export default Profile;