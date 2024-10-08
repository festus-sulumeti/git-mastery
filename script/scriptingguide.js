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



// Function to dynamically load content from HTML files into the main section
function loadContent(page) {
    var filePath =  page + '.html';
    
    // Fetch the content from the HTML file
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            // Insert the fetched HTML content into the dynamicContent div
            document.getElementById('dynamicContent').innerHTML = data;
            
            // Close the sidebar after a link is clicked (only on smaller screens)
            if (window.innerWidth <= 768) { 
                closeNav();
            }
        })
        .catch(error => {
            console.error('Error loading content:', error);
            document.getElementById('dynamicContent').innerHTML = '<h1>Error</h1><p>Failed to load content.</p>';
        });
}
