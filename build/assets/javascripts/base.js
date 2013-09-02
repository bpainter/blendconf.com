jQuery(document).ready(function($) {
    $('#nav-toggle').on('click', function() {
        $(this).next().slideToggle(200);
        return false;
    });
    $('#home nav ul a').click(function(){
        $.scrollTo (this.hash, 1000, {offset: -36});
        if (Modernizr.mq('only screen and (max-width: 767px)')) {
            $(this).parent().parent().slideUp(200);
        }
        if (this.attr('class') == 'button') {
            return true;
        } else {
            return false;
        }
    });

    // Make the speaker hexagon's clickable
    $('#speakers').find('li').click(function(){
        window.location = $(this).find('a').attr('href');
        return-false;
    });

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
