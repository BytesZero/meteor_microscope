/**
 * Created by fitark on 15-3-12.
 */
Meteor.publish('posts', function(sort, limit) {
    return Posts.find({}, {sort: sort, limit: limit});
});
Meteor.publish('comments', function() {
    return Comments.find();
});
//发布 notifications
Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId, read: false});
});
Meteor.publish('singlePost', function(id) {
    check(id, String)
    return Posts.find(id);
});