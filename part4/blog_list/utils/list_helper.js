const dummy = (blogs) => {
    return (1)
  }
  
  


const totalLikes =(array) => {
    const reducer = (sum, item) =>{
        return sum + item.likes
    }
    return array.length === 0
    ? 0
    : array.reduce(reducer, 0) 

}


const FavoriteBlog = (array) => {
    const reducer = (mostLikes, item) =>{
        if (item.likes >=mostLikes.likes) {
            return item
        }else{
            return mostLikes
        }
    }
    const dummyBlog =  {title: undefined,author : undefined, likes : 0}
    return array.length === 0
    ? dummyBlog
    : array.reduce(reducer,dummyBlog)

}


const mostBlogs = (array) => {

    if (array.length === 0) {
       return ({"author":undefined, "blogs":0})
    }

    let i = 0
    let j = 0
    const le = array.length
    let bestAuthor = undefined
    let bestAuthorBlogs = 0
    for (i=0; i < le; i++){
        let blogCount = 0
        const blogAuthor = array[i].author
        for (j=0; j < le; j++){
            if (array[j].author === blogAuthor){
                blogCount = blogCount+1
            }
        if (blogCount >=bestAuthorBlogs){
            bestAuthor = blogAuthor
            bestAuthorBlogs = blogCount
        }
        }
    }
    return {"author":bestAuthor, "blogs":bestAuthorBlogs}
    
}

const mostLikes = (array) => {

    if (array.length === 0) {
       return ({"author":undefined, "likes":0})
    }

    let i = 0
    let j = 0
    const le = array.length
    let bestAuthor = undefined
    let bestAuthorLikes = 0
    for (i=0; i < le; i++){
        let blogLikesCount = 0
        const blogAuthor = array[i].author
        for (j=0; j < le; j++){
            if (array[j].author === blogAuthor){
                blogLikesCount = blogLikesCount+ array[j].likes
            }
        if (blogLikesCount >=bestAuthorLikes){
            bestAuthor = blogAuthor
            bestAuthorLikes = blogLikesCount
        }
        }
    }
    return {"author":bestAuthor, "likes":bestAuthorLikes}
    
}




module.exports = {
    dummy,
    totalLikes,
    FavoriteBlog,
    mostBlogs,
    mostLikes
  }