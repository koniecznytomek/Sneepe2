import React, { ChangeEvent } from 'react';

// assets
import { IconSearch } from 'assets/icons/Icons';

// styles
import { Container } from './style';

type Props = {
    readonly onSearch: (e: ChangeEvent) => void;
}

const Search: React.FC<Props> = ({ onSearch }: Props) => {
    return (
        <Container>
            <form>
                <span className='icon'>
                    <IconSearch />
                </span>
                <input name='search' autoComplete='off' onChange={onSearch} />
            </form>
        </Container>
    );
};

export default Search;
