// utils.js

export function filterObjectsByName(objects, searchName) {
    return objects.filter((obj) => {
        const objectName = String(obj.nom).toLowerCase();
        return objectName.includes(searchName.toLowerCase());
    });
}

export function generatePageNumbers(totalPages) {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    return pageNumbers;
}
