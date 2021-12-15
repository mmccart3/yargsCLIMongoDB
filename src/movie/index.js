exports.addMovie =  async (movieObj, collection) => {
    try{
        await collection.insertOne(movieObj);
        console.log(`Successfully added ${movieObj.title} `)
    } catch(error) {
        console.log(error)
    }
}

exports.deleteMovie =  async (movieObj, collection) => {
    try{
        const returnValue = await collection.deleteOne({title:movieObj.title});
        if (returnValue.deletedCount == 1) {
            console.log(`Successfully deleted ${movieObj.title} `);
        } else {
            console.log(`${movieObj.title} not found in db`)
        }
    } catch(error) {
        console.log(error)
    }
}

exports.listAllMovies =  async (movieObj, collection) => {
    try{
        const returnValue = await collection.find({},{});
        let items = [];
        await returnValue.forEach(function(doc){
          items.push(doc);
        });
        console.log('This is the list of your favourite films');
        for (let index = 0; index < items.length; index++) {
            console.log(`Title= ${items[index].title}  Actor= ${items[index].actor}`)            
        }
    } catch(error) {
        console.log(error)
    }
}

exports.updateActor =  async (movieObj, collection) => {
    try{
        // console.log(movieObj.title, movieObj.actor);
        await collection.updateOne({title: movieObj.title }, {$set:{actor: movieObj.actor}})
        console.log(`Successfully updated ${movieObj.title}  with actor ${movieObj.actor}`)
    } catch(error) {
        console.log(error)
    }
}