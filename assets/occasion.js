$(document).ready(function() {
    $(".cyo-content-options .cyo-option-item").on("click", function() {
        $(".cyo-content-options .cyo-option-item.active-item").find("img").toggleClass("deactive");
        $(".cyo-content-options .cyo-option-item.active-item").find(".item-heading").removeClass("active");
        $(".cyo-content-options .cyo-option-item").removeClass("active-item");

        var that = $(this);

        var url = that.data("href");
        $(".cyo-button .button--primary").attr('href', url);

        $(".cyo-main-wrapper .main-image img.mobile-hide").attr("src", that.find(".normal-image").attr("src"));
        $(".cyo-main-wrapper .main-image img.desktop-hide").attr("src", that.find(".active-image").attr("src"));
        $(".cyo-main-wrapper .item-heading").text(that.find(".item-heading").text());
        $(".cyo-main-wrapper .item-text p").text(that.find(".item-text").text());

        that.find("img").toggleClass("deactive");
        that.find(".item-heading").addClass("active");
        that.addClass("active-item");
    })
})