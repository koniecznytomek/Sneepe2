import React from 'react';

// components
import Collections from 'components/Collections';
import ThemeToggler from 'components/ThemeToggler';
import Logout from '../../components/Logout';

// styles
import { Container } from './style';

const Folders: React.FC = () => {
    return (
        <Container>
            <Collections />
            <ThemeToggler />
            <Logout />
        </Container>
    );
};

export default Folders;
