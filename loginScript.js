// Detect the submission of the login form.
$('#formLogin').submit(function(e) {
    // Prevent a reload of the page
    e.preventDefault();

    // Make AJAX call to auth.php
    $.ajax({
        // URL is where we are sending it
        url: './php/auth.php',

        // Method is how we are sending it
        method: 'POST',

        // Data is the data we are sending
        data: $(this).serialize(),

        success: function(response) {
            // "true" means that the user was authenticated from auth.php
            if (response == 'true')
            {
                // Redirect to index.php
                window.location.href = 'index.php';
            }
            else
            {
                Swal.fire({
                    title: "Something went wrong!",
                    text: response,
                    icon: "error"
                });
            }
        }
    });
});