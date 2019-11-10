import React from "react";

const UserDrop = props => {
    return (
        <div className="userDrop">
            <div className="userDropBody">
                <a href="#" onClick={() => props.toggleDrop(false)}>Reading History</a>
                <a href="#" onClick={() => props.toggleDrop(false)}>About Thoth Tarot</a>
                <a href="#" onClick={() => props.toggleDrop(false)}>Sign Out</a>
            </div>
        </div>
    );
}

export default UserDrop;