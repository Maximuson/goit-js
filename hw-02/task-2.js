items = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

function logItems(items) {
    let i = 1;
    for (const item of items) {
        console.log(`${i} - ${item}`);
        i++;
    }
    /*
    items.forEach((item)=>{
        console.log(`${items.indexOf(item) + 1} - ${item}`)
    })
    */
   
}

