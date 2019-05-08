/**
 *
 *
 * IMPORTANT! This will delete firestore data.
 * 
 * This function is called when a user's account is deleted from
 * auth on Firebase. It then deletes any collection you have in
 * firestore that has a document ID of the user's UID.
 *
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


exports.deleteFirebaseUser = functions.auth.user().onDelete((user) => {
    const store = admin.firestore()

    // Delete from users collection
    return store.collection('users').doc(user.uid).delete()
        .then(() => {
            return console.log('Deleted user account', user.uid);
        }).catch(error => {
            return console.error('Deletion of user account failed', error);
        })
});