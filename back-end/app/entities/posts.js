/* posts Entity */
var posts = function (postId, postauthor,postheading,postbody) {

    this.postId = postId;
    this.postauthor = postauthor;
    this.postheading = postheading;
    this.postbody = postbody;
}

module.exports = posts;
