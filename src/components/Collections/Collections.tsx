import React, { useEffect } from 'react';

// router
import { NavLink } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';
import { getGists, getCollections } from 'store/selectors';

// assets
import { IconFolder } from 'assets/icons/Icons';

// style
import { Container } from './style';

const Collections: React.FC = () => {
    const gists = useSelector(getGists);
    const collections = useSelector(getCollections);

    const counter = (name: string) => {
        const collection = collections.find(item => item.name === name);
        return gists?.filter(col => collection && collection.gists.includes(col.name)).length;
    };

    return (
        <Container>
            <ul>
                {collections?.map(item => (
                    <li
                        key={item.name}
                    >
                        <NavLink to={`/gists/${item.name}`} activeClassName='active'>
                            <IconFolder />
                            <span className='name'>{item.name}</span>
                            <span className='counter'>{counter(item.name)}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default Collections;
