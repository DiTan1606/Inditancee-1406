// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import cho Cloud Storage

// Lấy thông tin cấu hình từ biến môi trường (.env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// 1. Khởi tạo ứng dụng Firebase
const app = initializeApp(firebaseConfig);

// 2. Khởi tạo các dịch vụ chính
const db = getFirestore(app); // Firestore Database
const storage = getStorage(app); // Cloud Storage cho ảnh/video

// 3. Xuất ra để sử dụng trong ứng dụng React
export { app, db, storage };