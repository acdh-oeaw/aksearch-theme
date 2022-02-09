$(document).ready(function () {
    // AK: Initialize popover for search tabs (see searchTabs.phtml)
    // See: https://getbootstrap.com/docs/3.4/javascript/#popovers
    // TODO: Check for accessibility (WCAG / ARIA)
    var popoverSearchTabsTemplate = '<div class="popover popover-search-tab" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>';
    
    $('.search-tab-link[data-toggle="popover"]').popover({
        //title: VuFind.translate('searchFor')+' ...',
        html: true,
        placement: 'auto top',
        container: 'body',
        template: popoverSearchTabsTemplate,
        trigger: 'hover focus',
        content: function() {
            var translateKey = $(this).attr('id') + '_text';
            return '<div class="popoverEntry">'
                + VuFind.translate(translateKey)
                +'</div>';
        }
    });
});
