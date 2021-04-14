const PostList = () => {
    const result =[];
    for (let i = 1; id <= 5; id++) {
        result.push(<li><Link to={"/posts" + id}>Post number #{id}</Link></li>)
    }

    return (
        <ul>{result}</ul>
    );
}

export default PostList