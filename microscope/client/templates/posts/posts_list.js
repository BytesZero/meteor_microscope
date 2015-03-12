/**
 * Created by fitark on 15-3-12.
 */
Template.postsList.helpers({
    posts: function(){
        return Posts.find();
    }
});