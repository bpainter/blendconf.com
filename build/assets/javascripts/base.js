jQuery(document).ready(function($) {
	$("a[data-type]").on('click',function(e){
        var link = $(this).attr("href");
        var outboundLinkType = $(this).data("type");

        if (outboundLinkType == undefined || outboundLinkType == "") {
        	outboundLinkType = "External";
        }

        if (e.currentTarget.host != window.location.host) {
            _gat._getTrackerByName()._trackEvent(outboundLinkType, e.currentTarget, link, 0);
            if (e.metaKey || e.ctrlKey) {
                var newtab = true;
            }
            if (!newtab) {
                e.preventDefault();
                setTimeout('document.location = "' + link + '"', 100);
            }
        }
    });


});

// $(document).ready(function() {
//     var bodyheight = $(document).height();
//     $("#container").height(bodyheight);
//     // $("#intro").height(bodyheight - footerHeight - 50);

// });

// // for the window resize
// $(window).resize(function() {
//     var bodyheight = $(document).height();
//     console.log(bodyheight);
//     $("#container").height(bodyheight);
// });
