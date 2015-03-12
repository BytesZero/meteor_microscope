/**
 * Created by fitark on 15-3-12.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});