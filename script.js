document.addEventListener("DOMContentLoaded", () => {
  // Kiểm tra nếu người dùng đã đăng nhập
  if (localStorage.getItem("user")) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("homePage").style.display = "block";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("navbarMenu").style.display = "none";
    updatePersonalInfo();
  } else {
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("homePage").style.display = "none";
    document.getElementById("coursePage").style.display = "none";
    document.getElementById("personalPage").style.display = "none";
    document.getElementById("sidebar").style.display = "none";
  }
});

// Dữ liệu nội dung khóa học
const courseContentData = {
  1: {
    1: `<div class="course-content">
                <img src="./image/fullstack.jpg" alt="Full Stack Developer">
                <h2 class="title">Full Stack Developer</h2>
                <p class="subtitle">Step by step guide to becoming a modern full stack developer in 2024</p>
            </div>`,
    2: `<div class="lesson__content">
            <div class="section-content" id="introHTMLContent">
                <p>HTML cung cấp cấu trúc cơ bản cho một trang web bằng cách sử dụng các thẻ như &lt;div&gt;, &lt;span&gt;, &lt;h1&gt;, và nhiều thẻ khác.</p>
            </div>
            <div class="section" id="vsCodeSetup">
                <h3 class="section-title">Cài đặt và sử dụng phần mềm Visual Studio Code</h3>
                <p>Visual Studio Code (VS Code) là một trình soạn thảo mã nguồn miễn phí và mạnh mẽ được phát triển bởi Microsoft.</p>
                <button class="toggle-button" onclick="toggleSection('vsCodeSetup')">Xem thêm</button>
            </div>
            <div class="section-content" id="vsCodeSetupContent">
                <p>Để cài đặt VS Code, bạn có thể tải xuống từ trang web chính thức và làm theo hướng dẫn cài đặt. Sau khi cài đặt, bạn có thể mở và chỉnh sửa các tệp HTML của mình dễ dàng.</p>
                <img src="./image/1_giới thiệu visual studio code.png" alt="VS Code Setup" class="section-image" >
                <img src="./image/2_giới thiệu visual studio code.png" alt="VS Code Setup" class="section-image" >
            </div>
            <div class="section" id="basicHTML">
                <h3 class="section-title">Cách tạo & cấu trúc cơ bản của một file HTML</h3>
                <p>Một tệp HTML cơ bản bắt đầu với các thẻ HTML cơ bản như &lt;html&gt;, &lt;head&gt;, và &lt;body&gt;.</p>
                
                <button class="toggle-button" onclick="toggleSection('basicHTML')">Xem thêm</button>
            </div>
            <div class="section-content" id="basicHTMLContent">
                <pre>
                    <code>
                        &lt;!DOCTYPE html&gt;
                        &lt;html&gt;
                            &lt;head&gt;
                                &lt;title&gt;Document&lt;/title&gt;
                            &lt;/head&gt;
                            &lt;body&gt;
                                &lt;h1&gt;Hello World&lt;/h1&gt;
                            &lt;/body&gt;
                        &lt;/html&gt;
                    </code>
                </pre>
             <h3>Cấu trúc chung của html gồm có thẻ <!DOCTYPE html> dùng để xác định rằng code bạn đang dùng là html</h3>

            <p>Cặp thẻ đóng mở <html> </html> chứa toàn bộ các dòng lệnh html bên trong (sau này còn là code của Javascript và CSS khi chèn vào)
            Tiếp đến là 2 cặp thẻ <head></head> chứa thông tin của webpage và đặc trưng bởi thẻ <title></title>, mà mặc định sẽ không được hiển thị trên web
            Thẻ <body></body> chứa toàn bộ nội dung html sẽ hiển thị lên trên trang web của chúng ta.</p>
            </div>
           
            <div class="section" id="conclusion">
                <h3 class="section-title">Kết luận</h3>
                <p>Đã học được cách tạo một trang HTML cơ bản và cách sử dụng VS Code để chỉnh sửa mã nguồn.</p>
                
                <button class="toggle-button" onclick="toggleSection('conclusion')">Xem thêm</button>
            </div>
            <div class="section-content" id="conclusionContent">
                <p>Tiếp theo, hãy thử tạo một dự án nhỏ và áp dụng những gì bạn đã học được vào thực tế.</p>
            </div>
            <div class="section" id="discussion">
                <h3 class="section-title">Thảo luận</h3>
                <p>Hãy tham gia vào các diễn đàn và nhóm thảo luận để chia sẻ ý tưởng và giải đáp các thắc mắc về HTML.</p>
                
                <button class="toggle-button" onclick="toggleSection('discussion')">Xem thêm</button>
            </div>
            <div class="section-content" id="discussionContent">
                <p>Các nhóm học tập trực tuyến như Stack Overflow và Reddit là những nơi tốt để đặt câu hỏi và trao đổi kiến thức với cộng đồng.</p>
            </div>
        </div>
        </div>
        `,
    3: `<div class="lesson__content"> 
          Will be open on 08/28/2024, there will be a private class for you 24/24
        </div>
        `,
    4: `<div class="lesson__content"> 
          Will be open on 08/28/2024, there will be a private class for you 24/24
        </div>
        `,
    5: `<div class="course-content">
                <h1>Checkpoint</h1>
                <p>Now that you have learnt HTML and CSS, you should be able to build static webpages. I recommend you to build as many test projects at each yellow step of the roadmap as possible to solidify what you learn.</p>
                <p>The practice that I used to follow when I was learning was this:</p>
                <ul>
                    <li>While you are watching a course or reading a book, make sure to code along with the instructor/author — pause the video at regular intervals and code what you are being taught.</li>
                    <li>Search on YouTube and watch a few project-based tutorials on the topic that you are learning. Apart from coding along with the instructor:
                        <ul>
                            <li>Try to build the same project at least 2 to 3 times on your own without looking at the video. If you get stuck, refer to the section of the video where the instructor builds that part of the project.</li>
                            <li>Build something else that is similar to the project that you just built. For example, if you just built a todo app, try to build a notes app or a reminder app.</li>
                        </ul>
                    </li>
                </ul>
                <h2>Project Ideas</h2>
                <p>Now that you have learnt HTML and CSS, here are a few ideas for you to build:</p>
                <ul>
                    <li>Try to copy the design of a website that you like.</li>
                    <li>Here is a simple blog design in figma that you can try to copy.</li>
                    <li>Or try to rebuild the webpages of this website.</li>
                    <li>Take some inspiration from personal portfolios of others and build your own personal portfolio.</li>
                </ul>
                <form id="checkPointForm">
                    <!-- Câu hỏi và đáp án -->
                    <!-- Các câu hỏi đã có thể được giữ nguyên từ ví dụ trước hoặc bạn có thể thay đổi -->
                    <button type="submit">Submit</button>
                </form>
                <div id="result" class="result" style="display:none;"></div>
            </div>`,
    6: `<div class="lesson__content"> 
          Will be open on 08/28/2024, there will be a private class for you 24/24
        </div>
        `,
    7: `<div class="lesson__content"> 
          Will be open on 08/28/2024, there will be a private class for you 24/24
        </div>
        `,
    8: `<div class="lesson__content"> 
          Will be open on 08/28/2024, there will be a private class for you 24/24
        </div>
        `,
    9: `<div class="lesson__content"> 
          Will be open on 08/28/2024, there will be a private class for you 24/24
        </div>
        `,
  },
  2: {
    1: `<div class="lesson__content"> 
          This is the content for Course 2, Lesson 1.
        </div>
        `,
    2: `<div class="lesson__content"> 
          This is the content for Course 2, Lesson 2.
        </div>
        `,
  },
  3: {
    1: `<div class="lesson__content"> 
          This is the content for Course 3, Lesson 1.
        </div>
        `,
    2: `<div class="lesson__content"> 
          This is the content for Course 3, Lesson 2.
        </div>
        `,
  },
  4: {
    1: `<div class="lesson__content"> 
          This is the content for Course 4, Lesson 1.
        </div>
        `,
    2: `<div class="lesson__content"> 
          This is the content for Course 4, Lesson 2.
        </div>
        `,
  },
  5: {
    1: `<div class="lesson__content"> 
          This is the content for Course 5, Lesson 1.
        </div>
        `,
    2: `<div class="lesson__content"> 
          This is the content for Course 5, Lesson 2.
        </div>
        `,
  },
  6: {
    1: `<div class="lesson__content"> 
          This is the content for Course 6, Lesson 1.
        </div>
        `,
    2: `<div class="lesson__content"> 
          This is the content for Course 6, Lesson 2.
        </div>
        `,
  },
  7: {
    1: `

   <div class="video-container">
        <h1>Learn-HTML Will be update soon</h1>
        <div class="video-wrapper">
            <!-- Replace 'my-video.mp4' with the filename of your video -->
            <video controls>
                <source src="../video/video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="description">
        <h1>Why Learn HTML?</h1>
        <ul>
            <li><strong>Build Websites:</strong> HTML is the foundation for creating and structuring web pages. It allows you to add text, images, links, and more.</li>
            <li><strong>Understand Web Basics:</strong> Knowing HTML helps you grasp how websites are organized and displayed in browsers.</li>
            <li><strong>Work with CSS and JavaScript:</strong> HTML integrates with CSS for styling and JavaScript for interactivity, making your web pages dynamic and visually appealing.</li>
            <li><strong>Develop Technical Skills:</strong> Learning HTML is the first step towards becoming a web developer and understanding other web technologies.</li>
            <li><strong>Create Personal Projects:</strong> With HTML, you can build your own blog, portfolio, or other web projects to showcase your work and ideas.</li>
        </ul>
        <p>This summary captures the essential reasons for learning HTML in a clear and brief manner.</p>
    </div>
        </div>
    </div>

    <script>
        function showHomePage() {
            window.location.href = 'index.html'; // Replace with your home page link
        }

        function showVideoPage() {
            // Already on the video page
        }

        function showContactPage() {
            window.location.href = 'contact.html'; // Replace with your contact page link
        }
    </script:>

    `,
    2: `

    <div class="video-container">
         <h1>Learn-CSS Will be update soon</h1>
         <div class="video-wrapper">
             <!-- Replace 'my-video.mp4' with the filename of your video -->
             <video controls>
                 <source src="../video/video.mp4" type="video/mp4">
                 Your browser does not support the video tag.
             </video>
         </div>
         <div class="description">
       <h1>Why Learn CSS?</h1>
        <ul>
            <li><strong>Enhance Visual Design:</strong> CSS (Cascading Style Sheets) allows you to apply styles such as colors, fonts, and layouts to your HTML elements, making your web pages visually appealing.</li>
            <li><strong>Improve User Experience:</strong> By using CSS, you can create responsive designs that adjust to different screen sizes and devices, improving the user experience across various platforms.</li>
            <li><strong>Separate Content from Design:</strong> CSS separates the content (HTML) from the design, making it easier to manage and update the look of your website without altering the content.</li>
            <li><strong>Enhance Accessibility:</strong> CSS enables you to design accessible websites by using styles that enhance readability and usability for users with disabilities.</li>
            <li><strong>Efficient Design Management:</strong> With CSS, you can use stylesheets to manage the design of multiple pages in a single place, ensuring consistency and reducing redundancy.</li>
        </ul>
        <p>This summary highlights the key benefits of learning CSS for creating attractive, functional, and efficient web designs.</p>
     </div>
         </div>
     </div>
 
     <script>
         function showHomePage() {
             window.location.href = 'index.html'; // Replace with your home page link
         }
 
         function showVideoPage() {
             // Already on the video page
         }
 
         function showContactPage() {
             window.location.href = 'contact.html'; // Replace with your contact page link
         }
     </script>
 
     `,
  },
  8: {
    1: "This is the content for Course 8, Lesson 1.",
    2: "This is the content for Course 8, Lesson 2.",
  },
  10: {
    10:"hello"
  },
};

const lockedCourses = [10]; 

function showCourseContent(courseNumber, lessonNumber) {
  // Kiểm tra nếu khóa học bị khóa
  if (lockedCourses.includes(courseNumber)) {
    showUpdateSoonMessage();
    return;
  }

  const content =
    courseContentData[courseNumber]?.[lessonNumber] ||
    `<div class="lesson__content"> 
      Will be update soon.
    </div>`;

  document.getElementById(
    "courseContent"
  ).innerHTML = `<div class="bdlayout"><h1 class="h1Title">Course ${courseNumber}: Lesson ${lessonNumber}</h1>${content}</div>`;

  document.getElementById("coursePage").style.display = "block";
  document.getElementById("personalPage").style.display = "none";
  document.getElementById("homePage").style.display = "none";
  document
    .querySelectorAll(".sidebar-menu .sub-menu li")
    .forEach((item) => item.classList.remove("active"));
  document
    .querySelector(`#subMenu${courseNumber} li:nth-child(${lessonNumber})`)
    .classList.add("active");
}

function showUpdateSoonMessage() {
  const updateSoonMessage = document.createElement("div");
  updateSoonMessage.className = "update-soon-message";
  updateSoonMessage.innerHTML = `
        <div class="update-soon-overlay"></div>
        <div class="update-soon-content">
            <h2>This course you have owned</h2>
            <p>You can study and do homework.</p>
            <p><b>F8</b> team has been collaborating</p>
            <button onclick="closeUpdateSoonMessage()">Close</button>
        </div>
    `;
  document.body.appendChild(updateSoonMessage);
}

function closeUpdateSoonMessage() {
  const updateSoonMessage = document.querySelector(".update-soon-message");
  if (updateSoonMessage) {
    updateSoonMessage.remove();
  }
}

function showPersonalInfo() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userAddress").textContent = user.address;
    document.getElementById("userPhoneNumber").textContent = user.phoneNumber;
    document.getElementById("userEmail").textContent = user.email;
    document.getElementById("userCourse").textContent = user.course;

    fetch("https://ipinfo.io/json?token=f1b51520c36a41")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById(
          "userIp"
        ).textContent = `IP Address: ${data.ip}`;
        document.getElementById(
          "userRegion"
        ).textContent = `Region: ${data.region} (${data.country})`;
        document.getElementById(
          "userFlag"
        ).src = `https://flagcdn.com/w80/${data.country.toLowerCase()}.png`;
      })
      .catch((error) => {
        console.error("Error fetching IP info:", error);
        document.getElementById("userIp").textContent =
          "IP Address: Unable to fetch";
        document.getElementById("userRegion").textContent =
          "Region: Unable to fetch";
        document.getElementById("userFlag").src = "";
      });

    document.getElementById("personalPage").style.display = "block";
    document.getElementById("coursePage").style.display = "none";
    document.getElementById("homePage").style.display = "none";
  } else {
    alert("User not logged in");
  }
}

function toggleNavMenu() {
  const navMenu = document.getElementById("navbarMenu");
  navMenu.classList.toggle("active");
}

document.addEventListener("click", (event) => {
  const isClickInside = document
    .querySelector(".navbar")
    .contains(event.target);
  if (!isClickInside) {
    const navMenu = document.getElementById("navbarMenu");
    navMenu.classList.remove("active");
  }
});

function showCheckPoint() {
  document
    .querySelectorAll(".home-page, .course-page, .personal-page")
    .forEach((page) => {
      page.style.display = "none";
    });
  document.getElementById("checkPointPage").style.display = "block";
}

document
  .getElementById("checkPointForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const answers = {
      q1: document.querySelector('input[name="q1"]:checked')?.value,
      q2: document.querySelector('input[name="q2"]:checked')?.value,
      q3: document.querySelector('input[name="q3"]:checked')?.value,
      q4: document.querySelector('input[name="q4"]:checked')?.value,
      q5: document.querySelector('input[name="q5"]:checked')?.value,
    };

    const correctAnswers = {
      q1: "a",
      q2: "a",
      q3: "b",
      q4: "b",
      q5: "a",
    };

    let score = 0;
    for (const [question, answer] of Object.entries(answers)) {
      if (answer === correctAnswers[question]) {
        score++;
      }
    }

    const totalQuestions = Object.keys(correctAnswers).length;
    const percentage = (score / totalQuestions) * 100;

    localStorage.setItem("checkPointSubmitted", percentage.toFixed(2));
    document.getElementById("checkPointForm").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById(
      "result"
    ).innerHTML = `You have completed the checkpoint with a score of ${percentage.toFixed(
      2
    )}%.`;
  });

function showLockMessage() {
  const lockMessage = document.createElement("div");
  lockMessage.className = "lock-message";
  lockMessage.innerHTML = `
        <div class="lock-overlay"></div>
        <div class="lock-content">
            <h2>Khóa học chưa được mở</h2>
            <p>Bạn cần liên hệ với quản trị viên để mở khóa khóa học này.</p>
            <button onclick="closeLockMessage()">Đóng</button>
        </div>
    `;
  document.body.appendChild(lockMessage);
}

function closeLockMessage() {
  const lockMessage = document.querySelector(".lock-message");
  if (lockMessage) {
    lockMessage.remove();
  }
}

function handleLogin() {
  const key = document.getElementById("keyInput").value;
  if (key === "ztehtkv2007") {
    const user = {
      name: "Huỳnh Trương Khánh Vy",
      address: "50 bedford, west croydon 5008",
      phoneNumber: "0421582472",
      email: "huynhtruongkhanhvy1007@gmail.com",
      course:
        "Fullstack, AI and Data Scientist, Software Architect, and GAME DEV",
    };

    localStorage.setItem("user", JSON.stringify(user));

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("homePage").style.display = "block";
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("navbarMenu").style.display = "none";
    updatePersonalInfo();
  } else {
    alert("Invalid key");
  }
}

function toggleSubMenu(menuNumber) {
  const subMenu = document.getElementById(`subMenu${menuNumber}`);
  const isVisible = subMenu.style.display === "block";
  document
    .querySelectorAll(".sub-menu")
    .forEach((menu) => (menu.style.display = "none"));
  document
    .querySelectorAll(".menu-item")
    .forEach((item) => item.classList.remove("active"));
  if (!isVisible) {
    subMenu.style.display = "block";
    document
      .querySelectorAll(".menu-item")
      [menuNumber - 1].classList.add("active");
  }
}

// Thêm sự kiện cho các mục menu bị khóa
document.querySelectorAll(".menu-item.locked").forEach((item) => {
  item.addEventListener("click", showLockMessage);
});
