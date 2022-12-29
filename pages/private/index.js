import Link from 'next/link';
import React, { useContext } from 'react';
import { AuthContext } from '../../components/Contexts/AuthProvider';

const index = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div>Loading ..</div>
    }
    if (user && user?.uid) {
        return children;
    }
    return <Link href='/' ></Link >
};

export default index;