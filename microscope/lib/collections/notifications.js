/**
 * Created by fitark on 15-3-18.
 */
//创建一个 Notifications 集合
//因为我们将从客户端更新 notifications, 我们需要确定 allow 方法是防弹的。我们检查如下内容：
//
//用户是文档的创建者才能调用 update 方法
//用户只更新一个属性
//更新的属性名字是 read
Notifications = new Mongo.Collection('notifications');
Notifications.allow({
    update: function(userId, doc, fieldNames) {
        return ownsDocument(userId, doc) &&
            fieldNames.length === 1 && fieldNames[0] === 'read';
    }
});

//方法 createCommentNotification，当有人在你的帖子下添加评论时该方法会添加一个 notification 到集合
createCommentNotification = function(comment) {
    var post = Posts.findOne(comment.postId);
    if (comment.userId !== post.userId) {
        Notifications.insert({
            userId: post.userId,
            postId: post._id,
            commentId: comment._id,
            commenterName: comment.author,
            read: false
        });
    }
};