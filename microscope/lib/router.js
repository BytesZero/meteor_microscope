/**
 * Created by fitark on 15-3-12.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('posts'); }
});
Router.route('/', {name: 'postsList'});
Router.onBeforeAction('dataNotFound', {only: 'postPage'});