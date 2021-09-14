$(document).ready(function() {
    
    // Execute the function only if the user is logged in
    if (userIsLoggedIn) {
        checkOpeningPopup();
    }

    // Check if the email alert popup should be opened
    function checkOpeningPopup() {
        // Get the current query for appending it to the AJAX call
        var query = window.location.href.split('?')[1] ?? '';

        $.getJSON(
            VuFind.path + '/AJAX/JSON?' + query,
            {
                method: 'getEmailAlertData',
                action: 'checkOpeningPopup'
            },
            function success(response) {
                if (response.hasOwnProperty('data')) {
                    // Check if the popup should be opened
                    if (response.data == true) {
                        // Get popup template and open it
                        getEmailAlertPopupTemplate();
                    }
                }
            }
        );
    }

    function getEmailAlertPopupTemplate() {
        // Execute query to get the HTML for the popup
        $.get(
            // Query the template with GET params
            '/AJAX/JSON',
            {
                method: 'getEmailAlertPopupTemplate',
                action: 'getMainTemplate'
            },
            // Function when we successfully got the template with the facet data
            function success(response) {
                // Open Lightbox and add the HTML from the template to it
                VuFind.lightbox.init();
                VuFind.lightbox.render(response.data);
            },
            'json'
        );
    }
    
});
