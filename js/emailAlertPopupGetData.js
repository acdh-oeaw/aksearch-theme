$(document).ready(function() {
    // Hide "close" button (the top right "X") and disable "close on backdrop click".
    // This forces the user to choose one of the buttons at the bottom of the modal dialog.
    // See also: https://stackoverflow.com/q/11806816/792962
    // INFO: Disabling keyboard "Esc" button is not possible because this behaviour is defined
    // in lightbox.js in the "onKeydown" function. If it must be disabled, disable it there.
    $('#modal .modal-content > .close').hide();
    if (typeof $('#modal').data('bs.modal') !== 'undefined') { // Bootstrap 3
        $('#modal').data('bs.modal').options.backdrop = 'static';
    }
    if (typeof $('#modal').data('modal') !== 'undefined') { // Bootstrap 4
        $('#modal').data('modal').options.backdrop = 'static';
    }

    // Only get email alert data if user is logged in
    if (userIsLoggedIn) {
        getEmailAlertData();
    }

    function getEmailAlertData() {
        // Data for the "getJSON" request
        var request = {
            method: 'getEmailAlertData',
            action: 'getData',
            source: 'Solr',
            facetOperator: 'AND'
        };
        $.getJSON(
            VuFind.path + '/AJAX/JSON',
            request,
            function success(response) {
                if (response.hasOwnProperty('data')) {
                    // Check if we have some data
                    if (response.data != false) {
                        // Get the data
                        facets = response.data.facets;
                        scheduleOptions = response.data.scheduleOptions;

                        // Create parameters for processPopupHtml function
                        var params = {
                            facets: facets,
                            scheduleOptions: scheduleOptions
                        }

                        // Process the popup HTML with the given data
                        processPopupHtml(params);
                    }
                }
            }
        );
    }
    
    function processPopupHtml(params) {
        // Execute a post query to get the HTML with the facets and schedule options
        $.post(
            // Query the template with GET params
            VuFind.path + '/AJAX/JSON?method=getEmailAlertPopupTemplate',
            // POST data to the template
            {
                action: 'getTemplateFields',
                facets: JSON.stringify(params.facets),
                scheduleOptions: JSON.stringify(params.scheduleOptions)
            },
            // Function when we successfully got the template with the facet data
            function success(response) {
                // Set the HTML that we got as response to an HTML element
                $('#email-alert-data').html(response.data);

            },
            'json'
        )
    }
});
