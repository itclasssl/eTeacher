document.addEventListener("DOMContentLoaded", function () {
    // 1. Inject CSS
    const style = document.createElement('style');
    style.innerHTML = `
        /* Navbar CSS injected by navbar.js */
        .top-menu {
            background-color: #000000;
            padding: 10px 0;
            color: white;
        }
        .menu-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
        }
        .menu-items {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .menu-item {
            position: relative;
            color: white;
            padding: 10px 15px;
            cursor: pointer;
            white-space: nowrap;
        }
        .menu-item a {
            color: white;
            text-decoration: none;
            display: block;
        }
        .menu-item:hover {
            background-color: #444d56;
        }
        /* Sub-menu styles */
        .sub-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #000000;
            min-width: 200px;
            z-index: 1000;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        .menu-item:hover > .sub-menu {
            display: block;
        }
        .sub-menu .sub-menu {
            left: 100%;
            top: 0;
        }
        .sub-menu .menu-item {
            padding: 10px 15px;
        }
        .sub-menu a {
            padding: 5px 0;
        }
        
        /* Social Links */
        .social-links a {
            color: white;
            margin-left: 10px;
            text-decoration: none;
        }

        /* Mobile Toggle */
        .menu-toggle {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5em;
            cursor: pointer;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
            .menu-container {
                flex-wrap: wrap;
            }
            .menu-toggle {
                display: block;
            }
            .menu-items {
                display: none;
                flex-direction: column;
                width: 100%;
                background-color: #000000;
            }
            .menu-items.active {
                display: flex;
            }
            .menu-item {
                width: 100%;
                box-sizing: border-box;
            }
            .sub-menu {
                position: static;
                display: none;
                box-shadow: none;
                padding-left: 20px;
            }
            .sub-menu .sub-menu {
                padding-left: 20px;
            }
            /* Disable hover on mobile, rely on click/active */
            .menu-item:hover > .sub-menu {
                display: none;
            }
            .menu-item.expanded > .sub-menu {
                display: block;
            }
            .social-links {
                margin-top: 10px;
            }
        }
    `;
    document.head.appendChild(style);

    // 2. Inject HTML
    const navHTML = `
        <div class="menu-container">
            <button class="menu-toggle" aria-label="Toggle menu">☰</button>
            <div class="menu-items">
                <div class="menu-item"><a href="index.html">Home</a></div>
                <div class="menu-item">
                    Courses
                    <div class="sub-menu">
                        <div class="menu-item">
                            Local syllabus >
                            <div class="sub-menu">
                                <a href="#">Grade 1</a>
                                <a href="#">Grade 2</a>
                                <a href="#">Grade 3</a>
                                <a href="#">Grade 4</a>
                                <a href="Grade-5-NC-Eng.html">Grade 5 ></a>
                                <a href="Grade-6-NC-Eng.html">Grade 6 ></a>
                                <a href="Grade-7-NC-Eng.html">Grade 7 ></a>
                                <a href="#">Grade 8</a>
                                <a href="#">Grade 9</a>
                                <a href="#">Grade 10</a>
                                <a href="#">Grade 11</a>
                                <a href="#">Grade 12</a>
                            </div>
                        </div>
                        <div class="menu-item">
                            British Curriculum
                            <div class="sub-menu">
                                <a href="#">Grade 1</a>
                                <a href="#">Grade 2</a>
                                <a href="Grade-3-BC.html">Grade 3</a>
                                <a href="#">Grade 4</a>
                                <a href="#">Grade 5</a>
                                <a href="#">Grade 6</a>
                                <a href="#">Grade 7</a>
                                <a href="#">Grade 8</a>
                                <a href="#">Grade 9</a>
                                <a href="#">Grade 10</a>
                                <a href="#">Grade 11</a>
                                <a href="#">Grade 12</a>
                            </div>
                        </div>
                        <div class="menu-item">
                            ICT
                            <div class="sub-menu">
                                <a href="#">School</a>
                                <a href="#">University</a>
                                <a href="#">Professional</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menu-item">
                    Posts
                    <div class="sub-menu">
                        <a href="#">Latest News</a>
                        <a href="#">Study Tips</a>
                        <a href="Kids-Robotics.html">Student Life</a>
                    </div>
                </div>
                <div class="menu-item">
                    Services
                    <div class="sub-menu">
                        <a href="https://localedxcelcambridgeictcomputerclass.blogspot.com/">Tutoring</a>
                        <a href="https://localedxcelcambridgeictcomputerclass.blogspot.com/">Software Development</a>
                        <a href="Online-Shopping.html">Online Business</a>
                        <a href="Travel-Sri-Lanka.html">Travel</a>
                    </div>
                </div>
                <div class="menu-item">
                    Contacts
                    <div class="sub-menu">
                        <a href="#">Email Us</a>
                        <a href="#">Phone</a>
                        <a href="#">Visit Us</a>
                    </div>
                </div>
            </div>
            <div class="social-links">
                <a href="https://web.facebook.com/itclasssrilanka" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="https://computerclassinsrilanka.wordpress.com" target="_blank" aria-label="Wordpress"><i class="fab fa-wordpress"></i></a>
                <a href="https://www.youtube.com/channel/UCJojbxGV0sfU1QPWhRxx4-A" target="_blank" aria-label="Youtube"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
    `;

    const navElement = document.querySelector('.top-menu');
    if (navElement) {
        navElement.innerHTML = navHTML;

        // 3. Add Event Listeners
        const menuToggle = navElement.querySelector('.menu-toggle');
        const menuItems = navElement.querySelector('.menu-items');

        if (menuToggle && menuItems) {
            menuToggle.addEventListener('click', function () {
                menuItems.classList.toggle('active');
            });
        }

        // Mobile sub-menu toggling
        const menuItemsWithSub = navElement.querySelectorAll('.menu-item');
        menuItemsWithSub.forEach(item => {
            // Check if it has a sub-menu
            if (item.querySelector('.sub-menu')) {
                item.addEventListener('click', function (e) {
                    if (window.innerWidth <= 768) {
                        // Prevent default if clicking the parent item itself (not a link inside)
                        // But wait, the parent text is often just text, not a link.
                        // If the click target is a link, let it go? 
                        // The structure is <div class="menu-item">Text <div class="sub-menu">...</div></div>
                        // So clicking "Text" triggers this.

                        // If we clicked on the A tag inside, we might want to navigate.
                        // But here the parent items "Courses", "Posts" etc don't have A tags, they are just text nodes + div.
                        // However, "Local syllabus >" is text.

                        // Let's toggle 'expanded' class
                        e.stopPropagation(); // Prevent bubbling
                        this.classList.toggle('expanded');
                    }
                });
            }
        });
    }
});
