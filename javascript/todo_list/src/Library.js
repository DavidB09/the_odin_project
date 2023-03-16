
function Library() {
    const BOOKMARKS = {};
    const FOLDERS = [
        [
            {'name': 'Run tasks', 'date': '01-01-2023'},
        ]
    ];

    const addFolder = (name) => {
        const curFolders = Object.keys(BOOKMARKS);
        BOOKMARKS[name] = (BOOKMARKS[curFolders[curFolders.length - 1]] ?? -1)  + 1;
        FOLDERS.push([]);
    }

    const getFolder = (name) => {
        return FOLDERS[BOOKMARKS[name]];
    }

    return { addFolder, getFolder };
}

export default Library;