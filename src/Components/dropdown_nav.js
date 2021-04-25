import React from 'react';

// will toggle dropdown menu
let dropdownOpen = false;

// dropdown menu will show for smaller screen sizes
function DropdownNav(props) {
    return(
        <div>
            <div id="dropdown-container">
                {/* dropdown menu toggle button */}
                <button onClick={toggleMenu} type="button" id="dropdown-btn">
                ☰
                </button>    

                {/* dropdown menu display */}
                <div style={{display:'none'}} id="dropdown">
                    <ul>
                        <li><span onClick={()=>props.addHistory(props.history,"/home")} className="nav-item-small" href="/home">Home</span></li>
                        <li><span onClick={()=>props.addHistory(props.history,"/interests")} className="nav-item-small" href="/interests">Interests</span></li>
                        <li><span onClick={()=>props.addHistory(props.history,"/skills")} className="nav-item-small" href="/skills">Skills</span></li>
                        <li><a className="nav-item-small" href="/">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

// toggle the dropdown
function toggleMenu() {
    dropdownOpen = !dropdownOpen;
    let dropdownMenu = document.getElementById('dropdown');
    if (dropdownOpen) {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
}
export default DropdownNav;