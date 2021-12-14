import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

// redux
import { useDispatch } from 'react-redux';
import { addGists } from 'store/slices/gistsSlice';
import { addCollections } from 'store/slices/collectionsSlice';

// types
import { IGists } from 'types';
import { ConfigFiles } from 'types/enumes';

interface IViewer {
    viewer: {
        gists: {
            pageInfo: {
                hasNextPage: boolean
                endCursor: string;
            }
            totalCount: number
        }
    }
}

const useFetchAllGists = (): [(setFetch: boolean) => void] => {
    const [fetch, setFetch] = useState<boolean>(false);
    const [all, setAll] = useState<IViewer>();
    const [gists, setGists] = useState<IGists[]>([]);

    const { data, fetchMore } = useQuery(ALL_GISTS);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetch) {
            if (!all && data) {
                setAll(data);
                setGists(data.viewer.gists.nodes);
            }

            if (all && all.viewer.gists.pageInfo.hasNextPage) {
                fetchMore({
                    variables: { cursor: all.viewer.gists.pageInfo.endCursor },
                }).then(res => {
                    setGists([...gists, ...res.data.viewer.gists.nodes]);
                    setAll({ ...res.data });
                });
            }
        }
    }, [setAll, data, fetchMore, all, gists]);

    useEffect(() => {
        if (fetch) {
            const counter = all && all.viewer.gists.totalCount;

            if (gists.length === counter) {
                dispatch(addGists(gists));

                // Setup collections
                const config = gists.find((gist) =>
                    gist.files.some((file) => file.name === ConfigFiles.COLLECTIONS),
                );

                if (config) {
                    const collectionsConfigFile = config.files.find((file) => file.name === ConfigFiles.COLLECTIONS);

                    const json = JSON.parse(collectionsConfigFile ? collectionsConfigFile.text : '');
                    dispatch(addCollections(json));
                } else {
                    // todo - create new collections config file
                    dispatch(addCollections([]));
                }

                // setFetch(false);
            }
        }
    }, [gists, all, dispatch]);

    return [setFetch];
};

export default useFetchAllGists;

const ALL_GISTS = gql`
    query allGists($cursor: String) {
        viewer {
            gists(orderBy: { field: CREATED_AT, direction: DESC }, first: 100, privacy: ALL, after: $cursor) {
                totalCount
                pageInfo {
                    endCursor
                    hasNextPage
                }
                nodes {
                    name
                    description
                    url
                    createdAt
                    updatedAt
                    pushedAt
                    isPublic
                    isFork
                    viewerHasStarred
                    stargazerCount
                    owner {
                        id
                        login
                        avatarUrl
                        url
                    }
                    files {
                        name
                        text
                        extension
                        size
                        language {
                            name
                            color
                        }
                    }
                }
            }
        }
    }
`;
