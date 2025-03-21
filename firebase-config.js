// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyD_QusNDRMcRO5VtlRV5UMwrVnrRh-vPgQ",
  authDomain: "new-church-census-test.firebaseapp.com",
  databaseURL: "https://new-church-census-test-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "new-church-census-test",
  storageBucket: "new-church-census-test.appspot.com",
  messagingSenderId: "380854562551",
  appId: "1:380854562551:web:98a768d575e38032372df2"
};

// Initialize Firebase ONLY ONCE
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database(app); // Explicitly use the initialized app