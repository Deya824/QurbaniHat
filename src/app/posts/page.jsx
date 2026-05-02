
const getPost=async ()=>{
    try{
        const res=await fetch('https://jsonplaceholder.typicode.com/posts');
        return res.json();
    }
    catch(err){
       throw new Error("Failed to load");
    }
}
const PostPage = async () => {
    const posts=await getPost();
    return (
        <div>
           Post coming .... {posts.length}
        </div>
    );
};

export default PostPage;