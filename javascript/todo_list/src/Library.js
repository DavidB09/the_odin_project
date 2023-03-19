
function Library() {
    const FOLDERS = {};

    const addFolder = (name) => {
        FOLDERS[name] = [];
    }

    const getFolder = (name) => {
        if (name == 'All Tasks') {
            return Object.values(FOLDERS).flat();
        }

        return FOLDERS[name];
    }

    const folderExists = (name) => {
        return Object.keys(FOLDERS).includes(name);
    }

    return { addFolder, getFolder, folderExists };
}

export default Library;