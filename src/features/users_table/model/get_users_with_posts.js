export const getUsersWithPosts = (posts, userMap) =>
    posts.reduce((acc, post) => {
        if (!acc[post.userId]) {
            acc[post.userId] = {
                posts: [post],
                author: userMap[post.userId]
            }
        } else {
            acc[post.userId].posts.push(post)
        }

        return acc
    }, [])
