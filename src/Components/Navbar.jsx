import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="text-center">
                <Link to="/posts">
                    <button className="btn btn-info btn-lg m-4 shadow">
                        Go to Posts
                    </button>
                    </Link>
                    <Link to="/home">
                    <button className="btn btn-info btn-lg m-4 shadow">
                        Go Home
                    </button>
                    </Link>
        </div>
        </>
    )
}

export default Navbar;