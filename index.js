const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".them-toggler");

/// tab management


menuBtn.addEventListener('click', () => {
sideMenu.style.display = 'block';
})

closeBtn. addEventListener('click', () =>{
sideMenu.style.display = 'none';
})

// change them

themeToggler.addEventListener('click',() => {

    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    
})

document.addEventListener('DOMContentLoaded', function () {
    const dashboardBtn = document.getElementById('dashboardBtn');
    const managePostBtn = document.getElementById('manage_post_Btn');
    const addCategoryBtn = document.getElementById('Add_category');
    const addItemBtn = document.getElementById('Add_Item');
    const manage_cat = document.getElementById('Manage_category');
    const manage_item = document.getElementById('Manage_item');
    const manage_user_account = document.getElementById('Manage_user_account');
    const manage_admin = document.getElementById('Manage_admin_account');
    const mainContent = document.getElementById('main-content');

    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                mainContent.innerHTML = data;
            })
            .catch(error => console.error('Error loading page:', error));
    }

    // Load default content (dashboard) when the page loads
    loadPage('dashboard.html');

    dashboardBtn.addEventListener('click', function () {
        loadPage('dashboard.html');

    });

    managePostBtn.addEventListener('click', function () {
        loadPage('manage_post.html');
    });

    addCategoryBtn.addEventListener('click', function () {
        loadPage('Add_category.html');
    });

    addItemBtn.addEventListener('click', function () {
        loadPage('Add_Item.html');
    });

    manage_cat.addEventListener('click',function() {
        loadPage('manage_category.html');
    })

    manage_item.addEventListener('click',function() {
        loadPage('manage_item.html');
    })

    manage_user_account.addEventListener('click',function() {
        loadPage('manage_account.html');
    })

    manage_admin.addEventListener('click',function() {
        loadPage('admin_account.html');
    })


});


// =============== change active class ==========

// Select all sidebar links
const sidebarLinks = document.querySelectorAll('aside .sidebar a');

// Add click event to each link
sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        sidebarLinks.forEach(link => link.classList.remove('active'));
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});


// =============== Manage Category ================

function previewImage() {
    const input = document.getElementById('image-input');
    const preview = document.getElementById('image-preview');
    
    const file = input.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        preview.src = e.target.result;
    };
    
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}



