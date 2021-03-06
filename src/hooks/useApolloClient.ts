import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';

// types
import { Url } from 'types/enumes';

// redux
import { useSelector } from 'react-redux';
import { getToken } from '../store/selectors';

const useApolloClient = (): ApolloClient<NormalizedCacheObject>[] => {
    const token = useSelector(getToken);

    const client = new ApolloClient({
        uri: Url.API_URL,
        headers: {
            Authorization: `bearer ${token}`,
        },
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        viewer: relayStylePagination(),
                    },
                },
            },
        }),
    });

    return [client];
};

export default useApolloClient;
