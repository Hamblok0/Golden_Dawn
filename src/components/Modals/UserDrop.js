import React from "react";
import { Link } from "react-router-dom";

const UserDrop = props => {
    return (
        <div className="userDrop">
            <div className="userDropBody">
                <Link to="/archive" onClick={() => props.toggleDrop(false)}>Reading History</Link>
                <Link onClick={() => props.toggleDrop(false)}>About Thoth Tarot</Link>
                <Link to="/" onClick={() => {
                    props.toggleDrop(false)
                    props.setUser(undefined)
                }}>Sign Out</Link>
            </div>
        </div>
    );
}

export default UserDrop;