import React from 'react'
import '../styles/FilterControl.css'


export const FilterControl = ({setFilter}) => {

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

  return (
    <div className="filter-control">
      <h3>Filter Control</h3>

            <div className="dropdown">
                <button onClick= {myFunction} className="dropbtn">Filters</button>
                  <div id="myDropdown" className="dropdown-content">
                    <p onClick = {()=> setFilter('mostloved.php?format=track') }>All</p>
                    <p onClick = {()=> setFilter('mostloved.php?format=album')}>Albums</p>
                    
                  </div>
            </div>
    </div>
  )
}
