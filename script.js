<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EDU BASIC</title>
    <link rel="stylesheet" href="style.css">
    <link rel='shortcut icon' href='./image/icon.ico' />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        /* General Styles */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            padding: 0;
        }
        
        a {
            text-decoration: none;
        }

        .container {
            display: flex;
        }

        .navbar {
            background-color: #007BFF;
            color: white;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .navbar-logo {
            font-size: 1.5em;
            font-weight: bold;
        }

        .navbar-hamburger {
            display: none;
            font-size: 1.5em;
            cursor: pointer;
        }

        .navbar-menu {
            list-style: none;
            display: flex;
            gap: 15px;
        }

        .navbar-menu li {
            cursor: pointer;
            padding: 5px 10px;
            transition: background-color 0.3s;
        }

        .navbar-menu li:hover {
            background-color: #0056b3;
            border-radius: 5px;
        }

        /* Sidebar Styles */
        .sidebar {
            width: 250px;
            background-color: #ffffff;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            overflow-y: auto;
            position: fixed;
            height: 100vh;
        }

        .sidebar-menu {
            list-style: none;
            padding: 0;
        }

        .menu-item {
            margin-bottom: 15px;
        }

        .menu-item div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.2em;
            color: #007BFF;
            cursor: pointer;
            padding: 10px;
            transition: background-color 0.3s;
            border-radius: 8px;
        }

        .menu-item div:hover {
            background-color: #f0f8ff;
        }

        .sub-menu {
            list-style: none;
            padding-left: 20px;
            margin-top: 10px;
            display: none;
        }

        .sub-menu li {
            margin-bottom: 10px;
            font-size: 1em;
            color: #555;
            cursor: pointer;
        }

        .sub-menu li:hover {
            color: #007BFF;
        }

        .locked i {
            color: rgb(10, 9, 9);
        }

        /* Main Content Styles */
        .content {
            margin-left: 270px;
            padding: 20px;
            width: calc(100% - 270px);
            transition: margin-left 0.3s ease-in-out;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
            .navbar-hamburger {
                display: block;
            }

            .navbar-menu {
                display: none;
                position: absolute;
                top: 60px;
                right: 20px;
                background-color: #007BFF;
                flex-direction: column;
                width: 150px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
            }

            .navbar-menu.active {
                display: flex;
            }

            .sidebar {
                width: 0;
                transition: width 0.3s ease-in-out;
            }

            .sidebar.active {
                width: 250px;
            }

            .content {
                margin-left: 0;
                width: 100%;
            }
        }

        /* Additional Styles */
        .login-page {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #cfd5c6;
            color: white;
        }

        .login-page input {
            padding: 10px;
            font-size: 1em;
            margin-bottom: 20px;
            border-radius: 8px;
            border: none;
            text-align: center;
        }

        .login-page button {
            padding: 10px 20px;
            font-size: 1em;
            border: none;
            border-radius: 8px;
            background-color: #0056b3;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .login-page button:hover {
            background-color: #003f7f;
        }

        .home-page h1 {
            color: #333;
            font-size: 3em;
            font-weight: bold;
            text-align: center;
            margin-top: 50px;
            margin-bottom: 20px;
        }

        .course-page h1 {
            color: #333;
            font-size: 2.5em;
            font-weight: bold;
            text-align: center;
            margin-bottom: 30px;
        }

        .personal-page h1 {
            color: #333;
            font-size: 2.5em;
            font-weight: bold;
            text-align: center;
            margin-bottom: 30px;
        }

        .schedule-container {
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 12px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            max-width: 800px;
        }

        .schedule-table {
            width: 100%;
            border-collapse: collapse;
        }
        .schedule-table th, .schedule-table td {
            border: 1px solid #e0e0e0;
            padding: 15px;
            text-align: center;
            font-size: 1.1em;
        }
        .schedule-table th {
            background-color: #4CAF50;
            color: #ffffff;
            font-weight: 700;
        }
        .schedule-table tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        .schedule-table tr:hover {
            background-color: #f1f1f1;
        }
        .schedule-table td {
            color: #555555;
        }
        .schedule-table td:not(:empty)::before {
            content: '📚';
            display: block;
            font-size: 1.2em;
        }
        .video-container {
            max-width: 1000px;
            margin: 80px auto 0;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        .video-container h1 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }
        .video-wrapper {
            position: relative;
            padding-top: 56.25%; /* 16:9 Aspect Ratio */
            height: 0;
            overflow: hidden;
            background: #000;
            border-radius: 8px;
        }
        .video-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .description {
            margin-top: 20px;
            line-height: 1.6;
            color: #555;
        }
        </style>
</head>
<body>
    <nav class="navbar">
        <div class="navbar-logo">
            <i class="fas fa-graduation-cap"></i> EDU BACSIC
        </div>
        <div class="navbar-hamburger" onclick="toggleNavMenu()">
            <i class="fas fa-bars"></i>
        </div>
        <ul class="navbar-menu" id="navbarMenu">
            <li onclick="showHomePage()"><i class="fas fa-home"></i> Home</li>
            <li onclick="showAboutPage()"><i class="fas fa-info-circle"></i> About</li>
            <li onclick="showContactPage()"><i class="fas fa-envelope"></i> Contact</li>
        </ul>
    </nav>

    <div class="container">
        <aside class="sidebar" id="sidebar">
            <ul class="sidebar-menu">
                <li class="menu-item locked"> 
                    <div onclick="toggleSubMenu(1)"><i class="fas fa-book"></i> Full Stack Developer <i class="fas fa-chevron-down"></i></div>
                    <ul class="sub-menu" id="subMenu1">
                        <li onclick="showCourseContent(1, 1)"><i class="fas fa-file-alt"></i> Theory</li>
                        <li onclick="showCourseContent(1, 2)"><i class="fa-brands fa-html5"></i> HTML</li>
                        <li onclick="showCourseContent(1, 3)"><i class="fa-brands fa-css3"></i> CSS</li>
                        <li onclick="showCourseContent(1, 4)"><i class="fa-brands fa-js"></i> Javascript</li>
                        <li onclick="showCourseContent(1, 5)"><i class="fa-solid fa-check"></i> Checkpoint - Static WebPages</li>
                        <li onclick="showCourseContent(1,6)"><i class="fa-brands fa-cloudflare"></i> Homework</li>
                        <li onclick="showCourseContent(1,7)"><i class="fa-brands fa-npm"></i> NPM</li>
                        <li onclick="showCourseContent(1, 8)"><i class="fa-solid fa-check"></i> Checkpoint -Interactivity</li>
                        <li onclick="showCourseContent(1,9)"><i class="fa-brands fa-git-alt"></i> GIT</li>
                        <li onclick="showCourseContent(1,10)"><i class="fa-brands fa-github"></i> GITHUB</li>
                        <li onclick="showCourseContent(1, 11)"><i class="fa-solid fa-check"></i> Checkpoint - Collaborative Work</li>
                        <li onclick="showCourseContent(1,12)"><i class="fa-brands fa-react"></i> REACT</li>
                        <li onclick="showCourseContent(1,13)"><i class="fa-brands fa-node"></i>NODE JS</li>
                        <li onclick="showCourseContent(1, 14)"><i class="fa-solid fa-check"></i> Checkpoint - CLI APPS</li>


                    </ul>
                </li>
                <li class="menu-item course-2 locked">
                    <div onclick="toggleSubMenu(2)"><i class="fa-solid fa-lock"></i> AI and Data Scientist <i class="fas fa-chevron-down"></i></div>
                    <ul class="sub-menu" id="subMenu2">
                        <li onclick="showCourseContent(2, 1)"><i class="fa-solid fa-superscript"></i> Locked</li>
                        <li onclick="showCourseContent(2, 2)"><i class="fa-solid fa-square-poll-vertical"></i> Locked</li>
                        <li onclick="showCourseContent(2, 3)"><i class="fa-brands fa-asymmetrik"></i> Locked</li>
                        <li onclick="showCourseContent(2, 4)"><i class="fa-brands fa-internet-explorer"></i> Locked</li>
                        <li onclick="showCourseContent(2, 5)"><i class="fa-solid fa-laptop-code"></i> Locked</li>
                        <li onclick="showCourseContent(2, 6)"><i class="fa-solid fa-pager"></i> Locked</li>
                        <li onclick="showCourseContent(2, 7)"><i class="fa-solid fa-crown"></i></i> Locked</li>
                        <li onclick="showCourseContent(2, 8)"><i class="fa-solid fa-terminal"></i> Locked</li>
                        


                    </ul>
                </li>
                <li class="menu-item course-3 locked">
                    <div onclick="toggleSubMenu(3)"><i class="fa-solid fa-lock"></i> Software Architect <i class="fas fa-chevron-down"></i></div>
                    <ul class="sub-menu" id="subMenu3">
                        <li onclick="showCourseContent(3, 1)"><i class="fas fa-file-alt"></i> Locked</li>
                        <li onclick="showCourseContent(3, 2)"><i class="fas fa-file-alt"></i> Locked</li>
                    </ul>
                </li>
                <li class="menu-item course-4 locked">
                    <div onclick="toggleSubMenu(4)"><i class="fa-solid fa-lock"></i> <b>HW</b>FULLSTACK <i class="fas fa-chevron-down"></i></div>
                    <ul class="sub-menu" id="subMenu4">
                        <li onclick="showCourseContent(4, 1)"><i class="fa-brands fa-html5"></i> HTML-HomeWork <i class="fa-solid fa-briefcase"></i></li>
                        <li onclick="showCourseContent(4, 2)"><i class="fa-brands fa-css3"></i> CSS -HomeWork <i class="fa-solid fa-briefcase"></i></li>
                        <li onclick="showCourseContent(4, 3)"><i class="fa-brands fa-js"></i> Javascript -HomeWork <i class="fa-solid fa-briefcase"></i></li>
                        <li onclick="showCourseContent(4, 4)"><i class="fa-brands fa-npm"></i> NPM -HomeWork <i class="fa-solid fa-briefcase"></i></li>
                        <li onclick="showCourseContent(4, 5)"><i class="fa-brands fa-git-alt"></i> GIT -HomeWork <i class="fa-solid fa-briefcase"></i></li>
                        <li onclick="showCourseContent(4, 6)"><i class="fa-brands fa-github"></i> GITHUB -HomeWork <i class="fa-solid fa-briefcase"></i></li>
                        <li onclick="showCourseContent(4, 7)"><i class="fa-brands fa-react"></i> REACT -HomeWork <i class="fa-solid fa-briefcase"></i></li>
                        <li onclick="showCourseContent(4, 8)"><i class="fa-brands fa-node"></i>NODE JS -HomeWork <i class="fa-solid fa-briefcase"></i></li>
                    </ul>
                </li>
                <li class="menu-item course-5 locked">
                    <div onclick="toggleSubMenu(5)"><i class="fa-solid fa-lock"></i> <b>HW</b>AI & DATA <i class="fas fa-chevron-down"></i></div>
                    <ul class="sub-menu" id="subMenu5">
                        <li onclick="showCourseContent(5, 1)"><i class="fa-solid fa-superscript"></i> Locked</li>
                        <li onclick="showCourseContent(5, 2)"><i class="fa-solid fa-square-poll-vertical"></i> Locked</li>
                        <li onclick="showCourseContent(5, 3)"><i class="fa-brands fa-asymmetrik"></i> Locked</li>
                        <li onclick="showCourseContent(5, 4)"><i class="fa-brands fa-internet-explorer"></i> Locked</li>
                        <li onclick="showCourseContent(5, 5)"><i class="fa-solid fa-laptop-code"></i> Locked</li>
                        <li onclick="showCourseContent(5, 6)"><i class="fa-solid fa-pager"></i> Locked</li>
                        <li onclick="showCourseContent(5, 7)"><i class="fa-solid fa-crown"></i></i> Locked</li>
                        <li onclick="showCourseContent(5, 8)"><i class="fa-solid fa-terminal"></i> Locked</li>
                    </ul>
                </li>
                <li class="menu-item course-6 locked">
                    <div onclick="toggleSubMenu(6)"><i class="fa-solid fa-lock"></i> <b>HW</b>Software Architect <i class="fas fa-chevron-down"></i></div>
                    <ul class="sub-menu" id="subMenu6">
                        <li onclick="showCourseContent(6, 1)"><i class="fas fa-file-alt"></i> Locked</li>
                        <li onclick="showCourseContent(6, 2)"><i class="fas fa-file-alt"></i> Locked</li>
                    </ul>
                </li>
                <li class="menu-item course-7 locked">
                    <div onclick="toggleSubMenu(7)"><i class="fa-brands fa-youtube"></i> FULLSTACK <i class="fas fa-chevron-down"></i></div>
                    <ul class="sub-menu" id="subMenu7">
                        <li onclick="showCourseContent(7, 1)"><i class="fa-brands fa-html5"></i> HTML-Learn <i class="fa-brands fa-youtube"></i></li>
                        <li onclick="showCourseContent(7, 2)"><i class="fa-brands fa-css3"></i> CSS -Learn <i class="fa-brands fa-youtube"></i></li>
                        <li onclick="showCourseContent(7, 3)"><i class="fa-brands fa-js"></i> Javascript -Learn <i class="fa-brands fa-youtube"></i></li>
                        <li onclick="showCourseContent(7, 4)"><i class="fa-brands fa-npm"></i> NPM -Learn <i class="fa-brands fa-youtube"></i></li>
                        <li onclick="showCourseContent(7, 5)"><i class="fa-brands fa-git-alt"></i> GIT -Learn <i class="fa-brands fa-youtube"></i></li>
                        <li onclick="showCourseContent(7, 6)"><i class="fa-brands fa-github"></i> GITHUB -Learn <i class="fa-brands fa-youtube"></i></li>
                        <li onclick="showCourseContent(7, 7)"><i class="fa-brands fa-react"></i> REACT -Learn <i class="fa-brands fa-youtube"></i></li>
                        <li onclick="showCourseContent(7, 8)"><i class="fa-brands fa-node"></i>NODE JS -Learn <i class="fa-brands fa-youtube"></i></li>
                    </ul>
                </li>
                <li class="menu-item course-8 locked">
                    <div onclick="toggleSubMenu(8)"><i class="fa-solid fa-wrench"></i> Update soon.... <i class="fas fa-chevron-down"></i></div>
                    <ul class="sub-menu" id="subMenu8">
                        <li onclick="showCourseContent(8, 1)"><i class="fa-solid fa-unlock"></i> Unlocked ?</li>
                        <li onclick="showCourseContent(8, 2)"><i class="fa-solid fa-unlock"></i> Unlocked ?</li>
                    </ul>
                </li>
                <li onclick="showPersonalInfo()"><i class="fas fa-user"></i> Personal Info</li>
            </ul>
        </aside>

        <main class="content">
            <section id="loginPage" class="login-page">
                <h1>Welcome to EDU BASIC</h1>
                <input type="password" id="keyInput" placeholder="Enter your key">
                <button onclick="handleLogin()">Login</button>
            </section>

            <section id="homePage" class="home-page" style="display:none;">
                <h1>Welcome to EDU BASIC</h1>
                <h2>Navigate through the courses using the menu.</h2>
            </section>

            <div class="course-page" id="coursePage" style="display:none;">
                <h1>Course Content</h1>
                <div id="courseContent"></div>
            </div>

            <div class="personal-page" id="personalPage" style="display:none;">
                <h1>Vy's Profile</h1>
                <div id="personalInfoDisplay">
                    <p><i class="fa-solid fa-user"></i> Name: <span id="userName"></span></p>
                    <p><i class="fa-solid fa-address-card"></i> Address: <span id="userAddress"></span></p>
                    <p><i class="fa-solid fa-phone"></i> Phone Number: <span id="userPhoneNumber"></span></p>
                    <p><i class="fa-solid fa-envelope"></i> Email: <span id="userEmail"></span></p>
                    <p><i class="fa-brands fa-discourse"></i> Course: <span id="userCourse"></span></p>
                    <p><i class="fa-brands fa-cc-apple-pay"></i> Payment: <b><font color="green">Success</font></b> <i class="fa-solid fa-check"></i> </p>
                    <p><i class="fa-solid fa-dollar-sign"></i> Method: (338.51 United States Dollar, with 1 United States Dollar equals
                            25,110.00 Vietnamese dong) </p>
                    <p id="userIp">IP Address: </p>
                    <p id="userRegion">Region: </p>
                    <p><i class="fa-solid fa-language"></i> Selected language:VietNam</p>
                    <p><i class="fa-solid fa-certificate"></i> Certificate: No </p>
                    <p><i class="fa-solid fa-file-signature"></i>Your learning path will end in <b><font color="red">December 2025</font></b>. While studying, we will send international tests to issue certificates!</p>
                    <img id="userFlag" src="" alt="Country Flag" style="width: 64px; height: auto;">
                    <div class="schedule-container">
                        <h1>Study Online Schedule IN 28TH</h1>
                        <table class="schedule-table">
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    <td>7:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>8:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

    <script src="script.js"></script>
    <script> 
        function toggleSection(sectionId) {
    const sectionContent = document.getElementById(`${sectionId}Content`);
    if (sectionContent) {
        if (sectionContent.style.display === 'block') {
            sectionContent.style.display = 'none';
        } else {
            sectionContent.style.display = 'block';
        }
    } else {
        console.error(`Element with ID ${sectionId}Content not found.`);
    }
}

    </script>

</body>
</html>
