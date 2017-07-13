jQuery(document).ready(function () {

    if (jQuery('table').hasClass('dynamicTable')) {
        jQuery('.dynamicTable').dataTable({

            "bFilter": false,
            "bPaginate": false,
            "bJQueryUI": false,
            "bAutoWidth": false,

            "aaSorting": [[0, "desc"]],

            "aoColumnDefs": [

                {"sWidth": "30px", "aTargets": [0]}

            ]

        });
    }
});