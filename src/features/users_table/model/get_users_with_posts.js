export const getUsersWithPosts = (posts, users) =>
    posts.reduce((acc, post) => {
        if (!acc[post.userId]) {
            acc[post.userId] = {
                posts: [post],
                author: users.find((user) => user.id === post.userId)
            }
        } else {
            acc[post.userId].posts.push(post)
        }
        return acc
    }, [])
