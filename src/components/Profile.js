import React from 'react'

export const Profile = () => {
  return (
    <div className="profile">

      <Sidebar />

      <img className="profile-img"></img>
      <h6 className="profile-name">Metamask address</h6>

      <div className="Songlist">
      <div className='song-header'>
        <div>Songlist</div>
        <div>
          <FilterControl />
        </div>
      </div>
    
      <Song />
    
    </div>
    </div>
  )
}
