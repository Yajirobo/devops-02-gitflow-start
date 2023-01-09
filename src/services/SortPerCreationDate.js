module.exports = function(items, sortType  ){
    const sortedItem = items.sort((item1 , item2) => item1.creationDate - item2.creationDate);
    return sortType === asc ? sortedItem : sortedItem.reverse();
}