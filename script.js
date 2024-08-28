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
    1: `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lý Thuyết HTML và CSS Cơ Bản</title>
</head>
<body style="font-family: 'Arial', sans-serif; background-color: #f4f4f9; color: #333; margin: 0; padding: 0;">

    <!-- Header -->
    <header style="background-color: #6200ea; color: white; text-align: center; padding: 20px 0;">
        <h1 style="margin: 0; font-size: 2.5rem;">Lý Thuyết HTML và CSS Cơ Bản</h1>
        <p style="margin: 5px 0; font-size: 1.2rem;">Học cách tạo và định dạng trang web từ cơ bản</p>
    </header>

    <!-- Main Content -->
    <main style="padding: 20px; max-width: 1200px; margin: 20px auto;">
        <!-- HTML Section -->
        <section style="background-color: #ffffff; padding: 20px; margin-bottom: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #6200ea; margin-bottom: 10px;">HTML (HyperText Markup Language)</h2>
            <p style="margin-bottom: 15px;">HTML là ngôn ngữ đánh dấu được sử dụng để tạo cấu trúc của trang web. Nó bao gồm các thẻ để định nghĩa tiêu đề, đoạn văn, hình ảnh, liên kết, và nhiều hơn nữa. Dưới đây là một ví dụ cơ bản về tài liệu HTML:</p>
            <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; font-size: 1rem; border: 1px solid #ddd;">
&lt;!DOCTYPE html&gt;
&lt;html lang="vi"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Tiêu đề của Trang&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Chào mừng đến với HTML&lt;/h1&gt;
    &lt;p&gt;Đây là một đoạn văn bản mẫu.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
            </pre>
            <h3 style="color: #6200ea; margin-bottom: 10px;">Các Thẻ HTML Phổ Biến</h3>
            <ul style="margin-bottom: 15px; padding-left: 20px;">
                <li><strong>&lt;h1&gt; đến &lt;h6&gt;</strong>: Các thẻ tiêu đề từ lớn nhất (&lt;h1&gt;) đến nhỏ nhất (&lt;h6&gt;).</li>
                <li><strong>&lt;p&gt;</strong>: Thẻ đoạn văn.</li>
                <li><strong>&lt;a href="..."&gt;</strong>: Thẻ liên kết để tạo đường dẫn đến một trang khác.</li>
                <li><strong>&lt;img src="..." alt="..."&gt;</strong>: Thẻ hình ảnh để chèn hình ảnh vào trang.</li>
                <li><strong>&lt;ul&gt; và &lt;li&gt;</strong>: Thẻ danh sách không thứ tự (bullet list).</li>
                <li><strong>&lt;ol&gt; và &lt;li&gt;</strong>: Thẻ danh sách có thứ tự (numbered list).</li>
                <li><strong>&lt;div&gt;</strong>: Thẻ phân vùng hoặc khối, thường dùng để nhóm các phần tử lại với nhau.</li>
                <li><strong>&lt;span&gt;</strong>: Thẻ nội tuyến, thường dùng để định dạng một phần nhỏ của văn bản.</li>
            </ul>
            <p style="margin-bottom: 15px;">HTML được sử dụng để tạo ra các yếu tố cấu trúc cho một trang web. Dưới đây là ví dụ cách sử dụng một số thẻ HTML phổ biến:</p>
            <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; font-size: 1rem; border: 1px solid #ddd;">
&lt;h1&gt;Đây là Tiêu Đề Lớn&lt;/h1&gt;
&lt;p&gt;Đây là một đoạn văn bản đơn giản.&lt;/p&gt;
&lt;a href="https://www.example.com"&gt;Đây là một liên kết&lt;/a&gt;
&lt;img src="image.jpg" alt="Mô tả hình ảnh"&gt;
&lt;ul&gt;
    &lt;li&gt;Phần tử thứ nhất&lt;/li&gt;
    &lt;li&gt;Phần tử thứ hai&lt;/li&gt;
&lt;/ul&gt;
            </pre>
        </section>

        <!-- CSS Section -->
        <section style="background-color: #ffffff; padding: 20px; margin-bottom: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #6200ea; margin-bottom: 10px;">CSS (Cascading Style Sheets)</h2>
            <p style="margin-bottom: 15px;">CSS được sử dụng để định dạng và bố cục cho các phần tử trong trang web. CSS giúp bạn kiểm soát màu sắc, phông chữ, khoảng cách giữa các phần tử, và nhiều tính năng khác. Dưới đây là một ví dụ cơ bản về CSS:</p>
            <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; font-size: 1rem; border: 1px solid #ddd;">
h1 {
    color: blue;
    font-size: 24px;
    text-align: center;
}

p {
    color: green;
    font-size: 16px;
}
            </pre>
            <h3 style="color: #6200ea; margin-bottom: 10px;">Các Thuộc Tính CSS Phổ Biến</h3>
            <ul style="margin-bottom: 15px; padding-left: 20px;">
                <li><strong>color</strong>: Màu chữ.</li>
                <li><strong>background-color</strong>: Màu nền.</li>
                <li><strong>font-size</strong>: Kích thước chữ.</li>
                <li><strong>margin</strong>: Khoảng cách bên ngoài phần tử.</li>
                <li><strong>padding</strong>: Khoảng cách bên trong phần tử.</li>
                <li><strong>border</strong>: Đường viền quanh phần tử.</li>
                <li><strong>width</strong>: Chiều rộng của phần tử.</li>
                <li><strong>height</strong>: Chiều cao của phần tử.</li>
                <li><strong>text-align</strong>: Canh lề văn bản (trái, phải, giữa).</li>
                <li><strong>display</strong>: Kiểm soát cách phần tử được hiển thị (block, inline, flex, v.v.).</li>
            </ul>
            <p style="margin-bottom: 15px;">CSS được viết trong các tập tin riêng biệt với phần mở rộng .css hoặc được tích hợp trực tiếp trong thẻ &lt;style&gt; của HTML. Ví dụ, định dạng CSS để thay đổi màu nền của toàn bộ trang và định dạng đoạn văn:</p>
            <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; font-size: 1rem; border: 1px solid #ddd;">
&lt;style&gt;
body {
    background-color: #f0f0f0;
}

p {
    color: green;
    font-size: 18px;
}
&lt;/style&gt;
            </pre>
        </section>

        <!-- Advanced Topics Section -->
        <section style="background-color: #ffffff; padding: 20px; margin-bottom: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #6200ea; margin-bottom: 10px;">Các Chủ Đề Nâng Cao</h2>
            <p style="margin-bottom: 15px;">Khi bạn đã quen với các khái niệm cơ bản về HTML và CSS, bạn có thể khám phá các chủ đề nâng cao hơn để tạo ra các trang web đẹp và tương tác hơn. Dưới đây là một số chủ đề nâng cao bạn nên tìm hiểu:</p>
            <ul style="margin-bottom: 15px; padding-left: 20px;">
                <li><strong>Responsive Design</strong>: Thiết kế trang web để hoạt động tốt trên các thiết bị có kích thước màn hình khác nhau.</li>
                <li><strong>Flexbox</strong>: Hệ thống bố trí để tạo ra các bố cục linh hoạt và dễ dàng hơn.</li>
                <li><strong>CSS Grid</strong>: Hệ thống lưới để bố trí các phần tử trong hai chiều.</li>
                <li><strong>Animations và Transitions</strong>: Tạo hiệu ứng chuyển động và thay đổi giữa các trạng thái để làm cho trang web trở nên sống động và thú vị hơn.</li>
                <li><strong>CSS Variables</strong>: Sử dụng biến CSS để quản lý màu sắc và kích thước dễ dàng hơn, giúp tiết kiệm thời gian khi thay đổi giao diện.</li>
                <li><strong>Preprocessors</strong>: Sử dụng các công cụ như Sass hoặc LESS để viết CSS hiệu quả hơn. Preprocessors cung cấp các tính năng như biến, hàm, và nesting.</li>
            </ul>
            <p style="margin-bottom: 15px;">Các chủ đề nâng cao này sẽ giúp bạn tạo ra các trang web tinh vi và tương tác hơn. Bạn có thể tìm hiểu thêm thông qua tài liệu và hướng dẫn trên mạng, cũng như thực hành qua các dự án thực tế.</p>
        </section>

        <!-- Practical Exercises -->
        <section style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #6200ea; margin-bottom: 10px;">Bài Tập Thực Hành</h2>
            <div style="margin-bottom: 20px;">
                <h4 style="color: #333; margin-bottom: 5px;">Bài Tập 1: Tạo một trang HTML cơ bản</h4>
                <p style="margin: 0;">Viết một trang HTML đơn giản với tiêu đề, đoạn văn, và một liên kết đến trang web khác. Sử dụng thẻ &lt;h1&gt;, &lt;p&gt;, và &lt;a&gt; để hoàn thành bài tập này.</p>
            </div>
            <div style="margin-bottom: 20px;">
                <h4 style="color: #333; margin-bottom: 5px;">Bài Tập 2: Định dạng văn bản bằng CSS</h4>
                <p style="margin: 0;">Sử dụng CSS để thay đổi màu chữ và kích thước chữ cho các phần tử trong trang HTML của bạn. Thực hiện các thay đổi này trong một tập tin CSS riêng biệt và liên kết nó với trang HTML của bạn.</p>
            </div>
            <div style="margin-bottom: 20px;">
                <h4 style="color: #333; margin-bottom: 5px;">Bài Tập 3: Tạo Layout Responsive</h4>
                <p style="margin: 0;">Sử dụng media queries để làm cho trang web của bạn hoạt động tốt trên các kích thước màn hình khác nhau. Thay đổi bố cục và kích thước của các phần tử khi kích thước màn hình thay đổi.</p>
            </div>
            <div style="margin-bottom: 20px;">
                <h4 style="color: #333; margin-bottom: 5px;">Khi bạn làm xong các bài tập, hãy lưu lại vào folder riêng của bạn và sẽ có homework riêng cho bạn !</h4>
                <p style="margin: 0;">Mỗi ngày sẽ có 1 bài mới dành cho bạn, chúng tôi sẽ nhắc nhở liên tục, Hãy tập trung học nhé !.</p>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer style="background-color: #6200ea; color: white; text-align: center; padding: 15px 0; position: relative; bottom: 0; width: 100%;">
        <p style="margin: 0;">&copy; 2024 Edu Basic. All Rights Reserved.</p>
    </footer>
</body>
</html>
`,
    2:`<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lý Thuyết HTML Cơ Bản</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 0; padding: 0;">
    <!-- Header -->
    <header style="background-color: #4CAF50; color: white; text-align: center; padding: 20px;">
        <h1 style="margin: 0;">Lý Thuyết HTML Cơ Bản</h1>
        <p style="margin: 0;">Khám phá ngôn ngữ đánh dấu để tạo cấu trúc trang web</p>
    </header>

    <!-- Main Content -->
    <main style="padding: 20px; max-width: 1000px; margin: 0 auto;">
        <!-- HTML Section -->
        <section id="html-section" style="margin-bottom: 20px; padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #4CAF50;">HTML (HyperText Markup Language)</h2>
            <p>HTML là ngôn ngữ đánh dấu được sử dụng để tạo cấu trúc của trang web. Nó cung cấp các thẻ để định nghĩa các thành phần của trang, như tiêu đề, đoạn văn, hình ảnh, liên kết, và nhiều hơn nữa.</p>
            
            <h3 style="color: #333;">Cấu Trúc Cơ Bản của HTML</h3>
            <p>Đây là cấu trúc cơ bản của một tài liệu HTML:</p>
            <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; border: 1px solid #ddd; overflow-x: auto; white-space: pre-wrap;">
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tiêu đề của Trang</title>
</head>
<body>
    <h1>Tiêu đề chính</h1>
    <p>Đoạn văn bản mẫu</p>
</body>
</html>
            </pre>

            <h3 style="color: #333;">Các Thẻ HTML Phổ Biến</h3>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li><strong>&lt;h1&gt; đến &lt;h6&gt;</strong>: Các thẻ tiêu đề từ lớn nhất (&lt;h1&gt;) đến nhỏ nhất (&lt;h6&gt;).</li>
                <li><strong>&lt;p&gt;</strong>: Thẻ đoạn văn.</li>
                <li><strong>&lt;a href="..."&gt;</strong>: Thẻ liên kết để tạo đường dẫn đến một trang khác.</li>
                <li><strong>&lt;img src="..." alt="..."&gt;</strong>: Thẻ hình ảnh để chèn hình ảnh vào trang.</li>
                <li><strong>&lt;ul&gt; và &lt;li&gt;</strong>: Thẻ danh sách không thứ tự (bullet list).</li>
                <li><strong>&lt;ol&gt; và &lt;li&gt;</strong>: Thẻ danh sách có thứ tự (numbered list).</li>
                <li><strong>&lt;div&gt;</strong>: Thẻ phân vùng hoặc khối, thường dùng để nhóm các phần tử lại với nhau.</li>
                <li><strong>&lt;span&gt;</strong>: Thẻ inline để nhóm các phần tử nhỏ hơn, thường dùng để áp dụng kiểu dáng cho một đoạn văn bản cụ thể.</li>
                <li><strong>&lt;table&gt;, &lt;tr&gt;, &lt;td&gt;, &lt;th&gt;</strong>: Thẻ để tạo bảng.</li>
            </ul>

            <h3 style="color: #333;">Ví Dụ về HTML</h3>
            <p>Dưới đây là một ví dụ về việc sử dụng các thẻ HTML để tạo một trang web đơn giản:</p>
            <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; border: 1px solid #ddd; overflow-x: auto; white-space: pre-wrap;">
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Trang Web Đơn Giản</title>
</head>
<body>
    <h1>Chào Mừng</h1>
    <p>Đây là một trang web đơn giản sử dụng HTML.</p>
    <ul>
        <li>Điểm mạnh của HTML</li>
        <li>Tạo cấu trúc trang web</li>
    </ul>
    <img src="example.jpg" alt="Hình ảnh ví dụ">
</body>
</html>
            </pre>

            <h3 style="color: #333;">Bài Tập Thực Hành</h3>
            <p>Hãy tạo một tài liệu HTML đơn giản với cấu trúc sau:</p>
            <ul style="margin-bottom: 15px; padding-left: 20px;">
                <li>Tiêu đề chính của trang web</li>
                <li>Một đoạn văn giới thiệu</li>
                <li>Danh sách các sở thích của bạn</li>
                <li>Hình ảnh của bạn</li>
            </ul>

            <h3 style="color: #333;">Mẫu Giải</h3>
            <p>Dưới đây là một mẫu giải cho bài tập thực hành:</p>
            <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; border: 1px solid #ddd; overflow-x: auto; white-space: pre-wrap;">
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Trang Web Của Tôi</title>
</head>
<body>
    <h1>Sở Thích của Tôi</h1>
    <p>Chào mừng bạn đến với trang web của tôi. Đây là nơi tôi chia sẻ về những sở thích của mình.</p>
    <ul>
        <li>Đọc sách</li>
        <li>Du lịch</li>
        <li>Chơi thể thao</li>
    </ul>
    <img src="myphoto.jpg" alt="Hình ảnh của tôi">
</body>
</html>
            </pre>

            <h3 style="color: #333;">Nhập Mã HTML của Bạn</h3>
            <textarea id="user-code" placeholder="Nhập mã HTML của bạn ở đây..." style="width: 100%; height: 200px; padding: 10px; border: 1px solid #ddd; border-radius: 5px; box-sizing: border-box; margin-bottom: 10px;"></textarea>
            <button onclick="checkAnswer()" style="background-color: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Kiểm Tra</button>
            <div id="response"></div>
        </section>
    </main>

    <!-- Footer -->
    <footer style="background-color: #4CAF50; color: white; text-align: center; padding: 10px 0;">
        <p style="margin: 0;">© 2024 Học HTML. Tất cả các quyền được bảo lưu.</p>
    </footer>
</body>
</html>`
,
    3: `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Học CSS Cơ Bản</title>
</head>

<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f9;">

    <!-- Header -->
    <header style="background-color: #4CAF50; color: white; text-align: center; padding: 30px 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h1 style="margin: 0; font-size: 2.5em;">Chào Mừng Bạn Đến Với Khóa Học CSS Cơ Bản</h1>
        <p style="margin: 5px 0 0 0; font-size: 1.2em;">Học và thực hành CSS để tạo ra các trang web đẹp và chuyên nghiệp!</p>
    </header>

    <!-- Main content -->
    <main style="padding: 40px 20px; max-width: 1200px; margin: auto;">

        <!-- Introduction section -->
        <section style="margin-bottom: 40px;">
            <h2 style="color: #333; font-size: 2em; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Giới Thiệu Về CSS</h2>
            <p style="line-height: 1.8; font-size: 18px; color: #555;">CSS (Cascading Style Sheets) là ngôn ngữ dùng để tạo style cho trang web. CSS giúp bạn tùy chỉnh màu sắc, phông chữ, bố cục, và nhiều hơn nữa. Nó đóng vai trò quan trọng trong việc tạo ra giao diện người dùng và trải nghiệm tương tác trên web.</p>
        </section>

        <!-- Basic syntax section -->
        <section style="margin-bottom: 40px;">
            <h2 style="color: #333; font-size: 2em; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Cú Pháp Cơ Bản</h2>
            <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; margin-bottom: 20px;">
                <pre style="white-space: pre-wrap; font-size: 16px; color: #333;">
selector {
    property: value;
}
                </pre>
            </div>
            <p style="line-height: 1.8; font-size: 18px; color: #555;">Ví dụ: Đổi màu chữ thành xanh cho tất cả đoạn văn.</p>
            <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; margin-bottom: 20px;">
                <pre style="white-space: pre-wrap; font-size: 16px; color: #333;">
p {
    color: blue;
}
                </pre>
            </div>
        </section>

        <!-- Box model section -->
        <section style="margin-bottom: 40px;">
            <h2 style="color: #333; font-size: 2em; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Box Model</h2>
            <p style="line-height: 1.8; font-size: 18px; color: #555;">Mỗi phần tử trong CSS được xem như một hộp hình chữ nhật bao gồm <strong>content</strong>, <strong>padding</strong>, <strong>border</strong>, và <strong>margin</strong>. Hiểu rõ về Box Model là chìa khóa để điều chỉnh khoảng cách, kích thước và bố cục của phần tử HTML.</p>
            <img src="https://via.placeholder.com/600x300.png?text=Box+Model+Diagram" alt="Box Model Diagram" style="width: 100%; max-width: 600px; display: block; margin: 20px auto;">
        </section>

        <!-- Color section -->
        <section style="margin-bottom: 40px;">
            <h2 style="color: #333; font-size: 2em; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Màu Sắc Trong CSS</h2>
            <p style="line-height: 1.8; font-size: 18px; color: #555;">CSS cho phép bạn tùy chỉnh màu sắc của văn bản, nền, đường viền, và nhiều phần tử khác. Bạn có thể sử dụng tên màu (vd: red, blue), mã màu hex (vd: #ff0000), mã RGB (vd: rgb(255,0,0)), và mã RGBA (vd: rgba(255,0,0,0.5)) để thiết lập màu sắc.</p>
            <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; margin-bottom: 20px;">
                <pre style="white-space: pre-wrap; font-size: 16px; color: #333;">
body {
    background-color: #f0f0f0;
}

h1 {
    color: #4CAF50;
}

p {
    color: rgba(0, 0, 0, 0.8);
}
                </pre>
            </div>
        </section>

        <!-- Typography section -->
        <section style="margin-bottom: 40px;">
            <h2 style="color: #333; font-size: 2em; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Phông Chữ và Kiểu Chữ</h2>
            <p style="line-height: 1.8; font-size: 18px; color: #555;">CSS cung cấp các thuộc tính để thay đổi phông chữ (font family), kích thước chữ (font size), độ đậm (font weight), kiểu chữ (font style), và khoảng cách giữa các ký tự (letter spacing).</p>
            <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; margin-bottom: 20px;">
                <pre style="white-space: pre-wrap; font-size: 16px; color: #333;">
h1 {
    font-family: 'Arial', sans-serif;
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 2px;
}
                </pre>
            </div>
        </section>

        <!-- Flexbox section -->
        <section style="margin-bottom: 40px;">
            <h2 style="color: #333; font-size: 2em; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Flexbox</h2>
            <p style="line-height: 1.8; font-size: 18px; color: #555;">Flexbox là một phương pháp bố cục một chiều trong CSS. Nó giúp dễ dàng sắp xếp và căn chỉnh các phần tử bên trong một container theo các chiều khác nhau (ngang hoặc dọc).</p>
            <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; margin-bottom: 20px;">
                <pre style="white-space: pre-wrap; font-size: 16px; color: #333;">
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
                </pre>
            </div>
        </section>

        <!-- Grid section -->
        <section style="margin-bottom: 40px;">
            <h2 style="color: #333; font-size: 2em; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Grid Layout</h2>
            <p style="line-height: 1.8; font-size: 18px; color: #555;">CSS Grid Layout là một hệ thống bố cục hai chiều mạnh mẽ cho phép bạn tạo ra các thiết kế phức tạp. Bạn có thể kiểm soát hàng và cột của lưới và các vùng của phần tử một cách dễ dàng.</p>
            <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; margin-bottom: 20px;">
                <pre style="white-space: pre-wrap; font-size: 16px; color: #333;">
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
}
                </pre>
            </div>
        </section>

        <!-- Responsive Design section -->
        <section style="margin-bottom: 40px;">
            <h2 style="color: #333; font-size: 2em; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Thiết Kế Responsive</h2>
            <p style="line-height: 1.8; font-size: 18px; color: #555;">Thiết kế responsive là kỹ thuật CSS để tạo ra các trang web có thể tự động điều chỉnh giao diện để phù hợp với các kích thước màn hình khác nhau.</p>
            <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; margin-bottom: 20px;">
                <pre style="white-space: pre-wrap; font-size: 16px; color: #333;">
@media screen and (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
                </pre>
            </div>
        </section>

    </main>

    <!-- Footer -->
    <footer style="background-color: #4CAF50; color: white; text-align: center; padding: 20px 0; margin-top: 40px;">
        <p style="margin: 0; font-size: 1em;">© 2024 Học CSS Cơ Bản. All rights reserved.</p>
    </footer>

</body>

</html>


        `,
    4: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Học JavaScript Cơ Bản</title>
</head>

<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f3f4f7;">

    <!-- Header -->
    <header style="background-color: #333; color: white; text-align: center; padding: 30px 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h1 style="margin: 0; font-size: 2.5em;">Chào Mừng Bạn Đến Với Khóa Học JavaScript Cơ Bản</h1>
        <p style="margin: 5px 0 0 0; font-size: 1.2em;">Khám phá thế giới JavaScript với các bài học và ví dụ thực tiễn!</p>
    </header>

    <!-- Main content -->
    <main style="padding: 40px 20px; max-width: 1200px; margin: auto;">

        <!-- Introduction section -->
        <section style="margin-bottom: 40px;">
            <h2 style="color: #444; font-size: 2em; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Giới Thiệu Về JavaScript</h2>
            <p style="line-height: 1.8; font-size: 18px; color: #666;">JavaScript là ngôn ngữ lập trình phổ biến nhất cho web. Nó giúp bạn thêm tương tác và động lực vào các trang web, từ việc xử lý các sự kiện đơn giản đến xây dựng các ứng dụng phức tạp như trò chơi và trình duyệt web.</p>
        </section>

        <!-- Basic syntax section -->
        <section style="margin-bottom: 40px;">
            <h2 style="color: #444; font-size: 2em; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Cú Pháp Cơ Bản</h2>
            <p style="line-height: 1.8; font-size: 18px; color: #666;">Để bắt đầu với JavaScript, bạn cần hiểu cách viết cú pháp cơ bản như khai báo biến, hàm, và sử dụng các cấu trúc điều khiển như vòng lặp và điều kiện.</p>
            <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; margin-bottom: 20px; overflow: auto;">
                <pre style="white-space: pre-wrap; font-size: 16px; color: #333;">
// Khai báo biến
let message = 'Xin chào, JavaScript!';
console.log(message);

// Hàm đơn giản
function sayHello() {
    alert('Xin chào, bạn đã nhấn nút!');
}
                </pre>
            </div>
        </section>

        <!-- Video section -->
        <section style="margin-bottom: 40px;">
            <h2 style="color: #444; font-size: 2em; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Video Hướng Dẫn JavaScript</h2>
            <p style="line-height: 1.8; font-size: 18px; color: #666;">Xem video hướng dẫn bên dưới để hiểu rõ hơn về cú pháp cơ bản và cách sử dụng JavaScript trong thực tế:</p>
            <div style="text-align: center; margin: 20px 0;">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/PkZNo7MFNFg" title="JavaScript Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="max-width: 100%;"></iframe>
            </div>
        </section>

        <!-- Functions section -->
        <section style="margin-bottom: 40px;">
            <h2 style="color: #444; font-size: 2em; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Hàm trong JavaScript</h2>
            <p style="line-height: 1.8; font-size: 18px; color: #666;">Hàm là một khối mã được thiết kế để thực hiện một nhiệm vụ cụ thể. Hàm có thể nhận tham số và trả về giá trị.</p>
            <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; margin-bottom: 20px; overflow: auto;">
                <pre style="white-space: pre-wrap; font-size: 16px; color: #333;">
function sum(a, b) {
    return a + b;
}

let result = sum(5, 10);
console.log(result); // Output: 15
                </pre>
            </div>
        </section>

        <!-- DOM Manipulation section -->
        <section style="margin-bottom: 40px;">
            <h2 style="color: #444; font-size: 2em; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Tương Tác Với DOM</h2>
            <p style="line-height: 1.8; font-size: 18px; color: #666;">Document Object Model (DOM) là mô hình đối tượng tài liệu của trang web, cho phép JavaScript thay đổi nội dung và cấu trúc trang web động.</p>
            <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; margin-bottom: 20px; overflow: auto;">
                <pre style="white-space: pre-wrap; font-size: 16px; color: #333;">
// Thay đổi nội dung của một phần tử
document.getElementById('demo').innerHTML = 'Hello JavaScript!';

// Thêm sự kiện vào một nút
document.getElementById('myButton').addEventListener('click', function() {
    alert('Bạn đã nhấn nút!');
});
                </pre>
            </div>
        </section>

        <!-- Event Handling section -->
        <section style="margin-bottom: 40px;">
            <h2 style="color: #444; font-size: 2em; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Xử Lý Sự Kiện</h2>
            <p style="line-height: 1.8; font-size: 18px; color: #666;">JavaScript có thể xử lý các sự kiện như nhấp chuột, di chuột, và các hành động người dùng khác để tạo ra trải nghiệm tương tác trên web.</p>
            <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; margin-bottom: 20px; overflow: auto;">
                <pre style="white-space: pre-wrap; font-size: 16px; color: #333;">
document.querySelector('button').onclick = function() {
    alert('Button clicked!');
};
                </pre>
            </div>
        </section>

    </main>

    <!-- Footer -->
    <footer style="background-color: #333; color: white; text-align: center; padding: 20px 0; margin-top: 40px;">
        <p style="margin: 0; font-size: 1em;">© 2024 Học JavaScript Cơ Bản. All rights reserved.</p>
    </footer>

</body>

</html>



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
    10: "hello",
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
