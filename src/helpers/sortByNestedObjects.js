//  Usage example of this function
// _______________________________
//  sortNestedObjectsByPropertyName('nestedobj.property', [
//     {nestedobj:{property:'1'}},
//     {nestedobj:{property:'3'}},
//     {nestedobj:{property:'2'}},
//     {nestedobj:{property:'4'}}
// ]);


export function sortNestedObjectsByPropertyName(prop, arr) {
    prop = prop.split('.');
    let len = prop.length;
    
    arr.sort((a, b) => {
        let i = 0;
        while( i < len ) {
            a = a[prop[i]];
            b = b[prop[i]];
            i++;
        }
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });
    return arr.reverse();
};

export default {
    sortNestedObjectsByPropertyName
}