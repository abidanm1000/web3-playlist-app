import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { ProfileSongList } from '../components/ProfileSongList'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'

export const Profile = () => {

  let defaultProfile = "https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300&vertical=top"


  // logout function passed to sidebar
  const logout = async () => {
    await signOut(auth)
    window.location = '/'
  }

  // new Account function passed to side bar
  const newAccount = async () => {
    await signOut(auth)
    window.location = '/signup'
  }


  return (
    <div className="profile-content">

      <div className='profile-sidebar'>
        <Sidebar logout={logout} newAccount={newAccount} />
      </div>

      <div className="profile-info">

        <img id="profile-img" src={defaultProfile} alt="profile" />

        <h1 className="profile-name">Welcome back, <span>username!</span></h1>

        <div className="profile-songs">
          <ProfileSongList />
        </div>

      </div>

    </div>
  )
}

{/* <div className="profile-stats">
  <div className="stats">
    <h4><span>20</span> Tracks</h4>
  </div>

  <div className="stats">
    <h4><span>2</span> Playlists</h4>
  </div>
</div> */}

// code for user uploading their own profile pic and storing in firebase

// const [profileImg, setProfileImg] = useState(null)

// const imgSelectHandler = (e) => {
//   setProfileImg(e.target.files[0])
// }

// const imgUploadHandler = () => {
//   const fd = new FormData();
//   fd.append('image', profileImg, profileImg.name)
//   axios.post('gs://music-marketplace-a0438.appspot.com', fd)
//   .then(res => {
//     console.log(res)
//   })
// }

/* <input type="file" onChange={imgSelectHandler} /> */
/* <button onClick={imgUploadHandler}>Upload</button> */

