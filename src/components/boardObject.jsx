var BoardObjects = [{
    title: "Project title",
    description: "Project description",
    time: "00/00/0000  00:00 pm"
}, {
    title: "Project title",
    description: "Project description",
    time: "00/00/0000  00:00 pm"
}];


function addObject(array, title, description) {
    var newObject = {
        title: title,
        description: Description,
        time: "00/00/0000  00:00 pm"
    };
    array.push(newObject);
};

function removObject(array, id) {
    const index = array.findIndex(obj => obj.id === id);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

export { addObject, removObject, BoardObjects };