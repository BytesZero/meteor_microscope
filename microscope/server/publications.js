/**
 * Created by fitark on 15-3-12.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});
Meteor.publish('comments', function() {
    return Comments.find();
});
//发布 notifications
Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId, read: false});
});
