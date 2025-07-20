import * as admin from 'firebase-admin'

const serviceAccountPath = `${process.env.FIREBASE_SERVICE_ACCOUNT_PATH}`
let serviceAccount: admin.ServiceAccount

try {
  serviceAccount = JSON.parse(serviceAccountPath)
} catch (e) {
  serviceAccount = require(serviceAccountPath)
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

export default admin