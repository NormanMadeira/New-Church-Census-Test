// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyD_QusNDRMcRO5VtlRV5UMwrVnrRh-vPgQ",
  authDomain: "new-church-census-test.firebaseapp.com",
  databaseURL: "https://new-church-census-test-default-rtdb.firebaseio.com", // Add this
  projectId: "new-church-census-test",
  storageBucket: "new-church-census-test.appspot.com",
  messagingSenderId: "380854562551",
  appId: "1:380854562551:web:98a768d575e38032372df2"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database(); // Add this line