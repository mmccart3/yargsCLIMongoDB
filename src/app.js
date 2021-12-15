const { Collection } = require("mongodb");
const yargs = require("yargs");
const connection = require("./db/connection");
const {addMovie, deleteMovie, listAllMovies,updateActor}=require("./movie");

// console.log(yargs.argv)
const app = async (args) => {
try {
    if (args.add) {
        const movieObj = {title: args.title, actor: args.actor};
        await connection(addMovie, movieObj);
    }
    if (args.delete) {
        const movieObj = {title: args.title};
        await connection(deleteMovie, movieObj);
    }
    if (args.list) {
        await connection(listAllMovies);
    }
    if (args.update) {
        const movieObj = {title: args.title, actor: args.actor};
        await connection(updateActor,movieObj);
    }

} catch (error) {
    console.log(error);
}
}

app(yargs.argv)