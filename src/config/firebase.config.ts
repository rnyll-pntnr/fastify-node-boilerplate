import * as admin from 'firebase-admin'

const serviceAccount = require(
  process.env.FIREBASE_SERVICE_ACCOUNT_PATH as string,
)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

export default admin
