import React from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'store/slices/themeSlice';
import { getTheme } from 'store/selectors';

// assets
import { IconDark, IconLight } from 'assets/icons/Icons';

// styles
import { Container } from './style';

interface IThemes {
    light: string
    dark: string
    dusk: string
}

const ThemeToggler: React.FC = () => {
    const dispatch = useDispatch();
    const theme = useSelector(getTheme);

    const icons = {
        dark: IconDark,
        dusk: IconDark,
        light: IconLight,
    };


    const Icon = icons[theme as keyof IThemes];

    const handleToggler = (): void => {
        if(theme === "dark") dispatch(setTheme('light'));
        if(theme === "light") dispatch(setTheme('dark'));
    };

    return (
        <>
            <Container>
                <button type='button' onClick={handleToggler}>
                    <Icon />
                </button>
            </Container>
        </>
    );
};

export default ThemeToggler;
