function openNav() {
    // Open the sidebar
    document.getElementById("sidebar").style.width = "250px";  

    
    // Push the main content to the right by the same amount on larger screens
    if (window.innerWidth > 768) {
        document.getElementById("main").style.marginLeft = "250px";
    } else {
        // On smaller screens, keep the main content in place
        document.getElementById("main").style.marginLeft = "0";
        // Hide the open button when the sidebar is opened
        document.querySelector('.openbtn').style.display = 'none';
    }
}

function closeNav() {
    // Close the sidebar
    document.getElementById("sidebar").style.width = "0";  

    // Reset the main content's margin to its default position
    document.getElementById("main").style.marginLeft = "0";

    // Show the open button when the sidebar is closed (only on smaller screens)
    if (window.innerWidth <= 768) { 
        document.querySelector('.openbtn').style.display = 'block';
    }
}



// Function to dynamically load content into the main section
function loadContent(page) {
    var content = '';
    switch (page) {
        case 'home':
            content = '<h1>Home Section</h1><p>This is the Home section content.</p>';
            break;
        case 'guide':
            content = '<h1>Guide Section</h1><p>This is the Guide section content.</p>';
            break;
        case 'about':
            content = '<h1>About Section</h1><p>This is the About section content.</p>';
            break;
        case 'contact':
            content = '<h1>Contact Section</h1><p>This is the Contact section content.</p>';
            break;
        default:
            content = '<h1>Welcome</h1><p>Welcome to the Guide Section. Please select a page from the sidebar.</p>';
    }
    document.getElementById('dynamicContent').innerHTML = content;

    // Close the sidebar after a link is clicked (only on smaller screens)
    if (window.innerWidth <= 768) { 
        closeNav();
    }
}