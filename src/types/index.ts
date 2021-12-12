export interface IGistsState {
    readonly gists: IGists[];
}

export interface IGists {
    readonly name: string;
    readonly description: string;
    readonly url: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly pushedAt: string;
    readonly isPublic: boolean;
    readonly isFork: boolean;
    readonly viewerHasStarred: boolean;
    readonly stargazerCount: number;
    readonly files: IFiles[];
}

export interface IFiles {
    readonly name: string;
    readonly text: string;
    readonly extension?: string;
    readonly size?: number;
    readonly language?: {
        readonly name: string;
        readonly color: string;
    };
}

export interface IFile {
    readonly name: string;
    readonly filename: string;
    readonly text: string;
}

export interface ICollectionsState {
    readonly collections: ICollections[];
}

export interface ICollections {
    readonly name: string;
    readonly gists: string[];
}

export interface ICollection {
    readonly name: string;
    readonly gist: string;
}
