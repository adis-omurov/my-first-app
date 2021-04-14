import PostList from "./PostList/PostList"
import PostList from "./PostFull/PostFull"
import PostFull from "./reacct-router";

const Posts = ({ match }) => {
    return (
        <div>
            <PostList></PostList>
            <Route path="/posts/:id" compnent={PostFull} />
        </div>
    );
}
export default Posts;