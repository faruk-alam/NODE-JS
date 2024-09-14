let posts = [
    {id : 1, title : "post one"},
    {id : 2, title : "post two"},
    {id : 3, title : "post three"}
]
 
let getposts = () => posts;
//console.log(getposts());
//export {getposts}
// For default export 
export default getposts;
export let getPostlenth = () => posts.length ;
//export let getposts = () => posts;