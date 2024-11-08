import React from 'react'
import { HiOutlineUser } from "react-icons/hi";
import { Link } from 'react-router-dom';

const UserPicture: React.FC = () => {
    

    return (
        <div >
            <Link to="/login"><HiOutlineUser className="size-6" /></Link>
        </div>
    );
}

export default UserPicture;