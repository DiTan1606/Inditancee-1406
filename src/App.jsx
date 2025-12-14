// src/App.jsx
import PostList from './components/PostList'; // Import component mới
import SimplePostList from './components/SimplePostList'; // Import component đơn giản
import AddTestData from './components/AddTestData'; // Import component thêm dữ liệu test
import FirebaseTest from './components/FirebaseTest'; // Import component test kết nối

function App() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>🌟 Mạng xã hội Inditancee</h1>
      
      {/* Component kiểm tra kết nối Firebase */}
      <FirebaseTest />
      
      {/* Component để thêm dữ liệu test */}
      <AddTestData />
      
      {/* Component hiển thị dữ liệu đơn giản */}
      <SimplePostList />
      
      {/* Component với real-time listener (có thể comment out nếu có vấn đề) */}
      {/* <PostList />  */}
    </div>
  );
}

export default App;