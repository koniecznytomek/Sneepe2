import React from 'react';

// components
import Collections from 'components/Collections';
import ThemeToggler from 'components/ThemeToggler';

// styles
import { Container } from './style';

const Folders: React.FC = () => {
    return (
        <Container>
            <Collections />
            <ThemeToggler />
        </Container>
    );
};

export default Folders;
