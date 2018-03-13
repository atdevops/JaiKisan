
export function FilterUniqueValues(Items, uniqueVal){
    let FilterArray = Items.reduce(function (item, e1) {  
        var matches = item.filter(function (e2)  
        { return e1[uniqueVal] == e2[uniqueVal]});  
        if (matches.length == 0) {  
            item.push(e1);  
        }  
        return item;  
    }, []);  

    return FilterArray;
}