$(document).ready(function() {
    var scroll = 0;
    $(".pbs-item").on("click", function() {
        var index = $(this).data("index");
        var max = $(".pbs-content-wrapper").data("max");
        
        var top_text = $(this).find(".pbs-item-top-text").text();
        var desc = $(this).find(".pbs-item-description").html();
        var title = $(this).find(".pbs-item-heading").text();
        var image = $(this).find(".pbs-item-image").html();

        $(".pbi-modal .pbi-top-text").text(top_text);
        $(".pbi-modal .pbi-modal-text").html(desc);
        $(".pbi-modal .pbi-heading").text(title);
        $(".pbi-modal .pbi-modal-image").html(image);
        $(".pbi-modal").attr("data-index", index);

        $(".pbi-modal-image-wrapper .pbi-btn-arrow").removeClass("hide");

        if (index == max) {
            $(".pbi-modal-image-wrapper .pbi-btn-arrow.next").addClass("hide");
        }
        if (index == 1) {
            $(".pbi-modal-image-wrapper .pbi-btn-arrow.prev").addClass("hide");
        }

        $(".pbi-modal").addClass("open");
        $("body").addClass("pbi-modal-opened");
        
        if ($(window).width() <= 749) {
            $(".pbi-modal").css("padding-top", "0px");
            $(".pbi-modal.open").css("overflow-y", "unset");
            
            var elmnt = $(".product-box-section");
            var x = elmnt.offset();
            var diff = x.top - scroll;
    
            if (diff > 0) {
                $(".pbi-modal").css("padding-top", diff + "px");
            }
            setTimeout(() => {
                $(".pbi-modal.open").css("overflow-y", "scroll");
            }, 300);
        }
    })

    $(".pbi-btn-close-modal").on("click", function() {
        $(".pbi-modal").removeClass("open");
        $("body").removeClass("pbi-modal-opened");
    })

    $(".pbi-btn-back").on("click", function() {
        $(".pbi-btn-close-modal").trigger("click");
    })

    $(".pbi-modal-image-wrapper .pbi-btn-arrow.prev").on("click", function() {
        var cur_index = $(this).closest(".pbi-modal").attr("data-index");
        var prev_index = parseInt(cur_index) - 1;
        $(".pbs-item[data-index='"+prev_index+"']").trigger("click");
    })
    $(".pbi-modal-image-wrapper .pbi-btn-arrow.next").on("click", function() {
        var cur_index = $(this).closest(".pbi-modal").attr("data-index");
        var next_index = parseInt(cur_index) + 1;
        $(".pbs-item[data-index='"+next_index+"']").trigger("click");
    })

    $(window).scroll(function(){
        scroll = $(window).scrollTop();
    });
})