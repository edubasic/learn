function confirmPayment() {
  closeModal();
  showSuccessToast();
}

// Function to show notification
function showNotification() {
  var notification = document.getElementById("notification");
  notification.style.display = "block";
  setTimeout(function () {
    notification.style.display = "none";
  }, 10000); // Hide notification after 3 seconds
}
function checkLogin() {
  var loginKey = document.getElementById("loginKey").value;
  if (loginKey === "ztehtkv2007") {
    // Example valid key
    document.getElementById("loginSection").style.display = "none";
    document.querySelector(".container").style.display = "flex";
  } else {
    alert("Mã khóa không chính xác. Vui lòng thử lại.");
  }
}
let countdownInterval;
let countdownMinutes = 5; // Số phút đếm ngược mặc định
let countdownSeconds = 0;

// Hàm tạo chuỗi ngẫu nhiên gồm 5 chữ cái và số
function generateRandomString() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "edubasic";
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function showPaymentInfo() {
  // Cập nhật lại nội dung thanh toán
  const paymentDescription = generateRandomString();
  document.getElementById(
    "payment-description"
  ).textContent = `${paymentDescription}`;

  // Hiển thị modal thanh toán
  document.getElementById("paymentModal").style.display = "block";

  // Reset đếm ngược về giá trị mặc định
  countdownMinutes = 5;
  countdownSeconds = 0;

  // Khởi động đếm ngược
  startCountdown();
}

function closeModal() {
  document.getElementById("paymentModal").style.display = "none";
  clearInterval(countdownInterval); // Dừng đếm ngược khi đóng modal
}

// function processPayment() {
//   alert("Thanh toán thành công!");
//   closeModal();
// }

// Hàm đếm ngược thời gian
function startCountdown() {
  const countdownElement = document.getElementById("countdown");
  if (!countdownElement) {
    console.error('Element with ID "countdown" not found.');
    return;
  }
  updateCountdownDisplay(); // Hiển thị thời gian ban đầu ngay lập tức

  countdownInterval = setInterval(() => {
    if (countdownMinutes === 0 && countdownSeconds === 0) {
      clearInterval(countdownInterval);
      alert("Hết thời gian! Vui lòng lấy lại thông tin thanh toán.");
      closeModal();
    } else {
      if (countdownSeconds === 0) {
        countdownMinutes--;
        countdownSeconds = 59;
      } else {
        countdownSeconds--;
      }

      updateCountdownDisplay();
    }
  }, 1000);
}

// Hàm cập nhật hiển thị đếm ngược
function updateCountdownDisplay() {
  const countdownElement = document.getElementById("countdown");
  if (!countdownElement) {
    console.error('Element with ID "countdown" not found.');
    return;
  }
  const formattedTime = `${countdownMinutes}:${
    countdownSeconds < 10 ? "0" : ""
  }${countdownSeconds}`;
  countdownElement.textContent = formattedTime;
}
document.addEventListener("DOMContentLoaded", function () {
  // Hide main content and notification on page load
  document.querySelector(".container").style.display = "none";
  document.getElementById("notification").style.display = "none";
});
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-exclamation-circle",
      error: "fas fa-exclamation-circle",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>
                `;
    main.appendChild(toast);
  }
}
function showInfoToast() {
  toast({
    title: "Lỗi!!!",
    message: "Bạn đang gặp lỗi hãy thử lại.",
    type: "info",
    duration: 5000,
  });
}

function showwarningToast() {
  toast({
    title: "Lỗi!!!",
    message: "Bạn đang gặp lỗi hãy thử lại.",
    type: "warning",
    duration: 5000,
  });
}

function showSuccessToast() {
  toast({
    title: "Vui lòng chờ!",
    message: "Sau khi nhận được, chúng tôi sẽ gửi biên lai về gmail của bạn.",
    type: "success",
    duration: 5000,
  });
}

function showErrorToast() {
  toast({
    title: "Thất bại!",
    message: "Có lỗi xảy ra, vui lòng liên hệ quản trị viên.",
    type: "error",
    duration: 5000,
  });
}

// xử lý mode show
var btn = document.querySelector(".btnShowContent");
var close = document.querySelector(".modelList-remove");
var modelList = document.querySelector(".modelList");
btn.addEventListener("click", function () {
  modelList.classList.add("show");
});

close.addEventListener("click", function () {
  modelList.classList.remove("show");
});
