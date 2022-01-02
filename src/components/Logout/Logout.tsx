import React from 'react';

// hooks
import { useHistory } from "react-router-dom";

// store
import { useDispatch } from 'react-redux';
import { removeToken } from 'store/slices/authSlice';

// assets
import { IconLogOut } from 'assets/icons/Icons';

// styles
import { Container } from './style';

const Logout: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = (): void => {
        dispatch(removeToken());
        history.push("/login");
    };

    return (
        <>
            <Container>
                <button type='button' onClick={handleLogout}>
                    <IconLogOut />
                </button>
            </Container>
        </>
    );
};

export default Logout;
