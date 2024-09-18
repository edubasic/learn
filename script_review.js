function login() {
    const loginCode = document.getElementById('login-code').value;
    const correctCode = "ztehtkv2007"; // Đặt mã đăng nhập hợp lệ
  
    // Kiểm tra mã đăng nhập
    if (loginCode === correctCode) {
        // Ẩn form đăng nhập và hiển thị báo cáo
        document.getElementById('login-form').style.display = "none";
        document.getElementById('report').style.display = "block";
      
        // Hiển thị thông báo đăng nhập thành công
        showNotification('Login successful!');

        // Hiển thị số lượng học sinh online ngẫu nhiên
        const onlineCount = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        document.getElementById("online-students").textContent = `Students online: ${onlineCount}`;
    } else {
        // Hiển thị thông báo lỗi nếu mã đăng nhập sai
        document.getElementById('error-message').style.display = "block";
        showNotification('Invalid login code!');
    }
}
  
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    
    // Cập nhật nội dung thông báo
    notificationText.textContent = message;
    
    // Hiển thị thông báo
    notification.style.display = 'block';
    
    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}
