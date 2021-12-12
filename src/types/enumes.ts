export enum Url {
    API_URL = 'https://api.github.com/graphql',
}

export enum ConfigFiles {
    COLLECTIONS = 'sneepe.collections.json',
}

export enum AppRoutes {
    APP_ROOT = '/',
    APP_LOGIN = '/login',

    ALL_GISTS = '/gists/allgists',
    STARRED = '/gists/starred',
    TRASH = '/gists/trash',
    COLLECTIONS = '/gists/:id',

    GIST_ROOT = '/gists',
    GIST = '/gists/:collection/:id',
    ADD_GIST = '/gists/:collection/addgist',
    COLLECTION = '/gists/:collection/:id',
    ADD_FILE = '/gists/:collection/:id/addfile',
    ADD_NOTE = '/gists/:collection/:id/addnote',
    EDIT_NOTE = '/gists/:collection/:id/editnote',
    EDIT_DESC = '/gists/:collection/:id/editdescription',
}
