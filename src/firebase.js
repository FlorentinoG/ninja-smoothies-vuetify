import * as firebase from 'firebase'
 import 'firebase/firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "AIzaSyACtICu0CcSdpqZpGIE6R0jfyVKVEs-aRE",
     authDomain: "ninja-smoothies-e6271.firebaseapp.com",
     databaseURL: "https://ninja-smoothies-e6271.firebaseio.com",
     projectId: "ninja-smoothies-e6271",
     storageBucket: "ninja-smoothies-e6271.appspot.com",
     messagingSenderId: "1286826335",
     appId: "1:1286826335:web:246811433e06b47bf06eea"
 };
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
const db = firebase.firestore()

export default {
    db
}