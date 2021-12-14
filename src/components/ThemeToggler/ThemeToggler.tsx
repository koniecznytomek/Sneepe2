import React from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'store/slices/themeSlice';
import { getTheme } from 'store/selectors';

// assets
// import { IconDark, IconLight } from 'assets/icons/Icons';

// styles
import { Container } from './style';

const ThemeToggler: React.FC = () => {
    const dispatch = useDispatch();
    const theme = useSelector(getTheme);


    const handleToggler = (): void => {
        dispatch(setTheme('dark'));
    };

    return (
        <Container>
            <button type='button' onClick={handleToggler}>toggle</button>
        </Container>
    );
};

export default ThemeToggler;
