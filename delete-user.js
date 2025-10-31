const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json'); // You'll need to download this from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'async-d0c23'
});

async function deleteUserByEmail(email) {
  try {
    // Get user by email
    const userRecord = await admin.auth().getUserByEmail(email);
    console.log(`Found user: ${userRecord.uid}`);

    // Delete the user
    await admin.auth().deleteUser(userRecord.uid);
    console.log(`Successfully deleted user with email: ${email}`);
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      console.log(`User with email ${email} not found`);
    } else {
      console.error('Error deleting user:', error);
    }
  }
}

// Delete the jordandave account
deleteUserByEmail('jordandave').then(() => {
  console.log('Script completed');
  process.exit(0);
}).catch((error) => {
  console.error('Script failed:', error);
  process.exit(1);
});
