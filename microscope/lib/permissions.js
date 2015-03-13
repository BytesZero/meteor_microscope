/**
 * Created by fitark on 15-3-13.
 */
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}