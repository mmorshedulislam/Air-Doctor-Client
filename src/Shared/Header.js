import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2>Header {user.name}</h2>
        </div>
    );
};

export default Header;