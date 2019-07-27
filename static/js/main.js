/**
 * Created by ray zhu on 7/25/19.
 */

$(".size-button").click(function() {
    $(".err_msg").hide()

    var elementId = $(this).attr("id")
    if ($(this).hasClass("selected") ==  true) {
        $(this).removeClass("selected")
        $(".size-check").hide()
        $(".size-check").empty()
    }
    else {
        if (elementId == "small") {
            $(this).addClass("selected")
            $("#medium").removeClass("selected")
            $("#large").removeClass("selected")
            $(".size-check").hide()
            $(".size-check").empty()
            $(".size-check").append("S")
            $(".size-check").show()
            //$(this).append
        } else if (elementId == "medium") {
            $(this).addClass("selected")
            $("#small").removeClass("selected")
            $("#large").removeClass("selected")
            $(".size-check").hide()
            $(".size-check").empty()
            $(".size-check").append("M")
            $(".size-check").show()
        } else {
            $(this).addClass("selected")
            $("#medium").removeClass("selected")
            $("#small").removeClass("selected")
            $(".size-check").hide()
            $(".size-check").empty()
            $(".size-check").append("L")
            $(".size-check").show()
        }
    }

});

$(".cart").hover(
    // hover in
    function() {
        $(".cart-list").show()
        $(this).addClass("active")
    },
    // hover out
    function() {
        $(".cart-list").hide()
        $(this).removeClass("active")

    }
)

$(".size-submit").click(function() {
    itemName = $(".item-name").text()
    id = $(".selected").attr("id")
    if (id == "small") {
        submit2Cart(itemName, "S")
    } else if (id == "medium") {
        submit2Cart(itemName, "M")
    } else if (id == "large") {
        submit2Cart(itemName, "L")
    } else {
        // show error msg
        $(".err_msg").show()
    }
})


function submit2Cart(itemName, itemSize, itemPrice) {
    // if flag == 0, it means the item is not a new size product in the list
    flag = 0
    $(".cart-item").each(function() {
        cartItemName = $(this).find(".cart-item-name").text()
        cartItemSize = $(this).find(".cart-item-size").text()
        if (itemName == cartItemName && cartItemSize == itemSize) {
            numTag = $(this).find(".cart-item-num")
            numTag.text(numTag.text() * 1 + 1)
            flag = 1
            return false // stop iteration
        }
    })
    if (flag == 0) {
        itemPrice = $(".item-price").text()
        $(".cart-list").append(
            "<div class=\"cart-item\">" +
                "<img src=\"static/img/tee.jpg\">" +
                "<div class=\"cart-item-info\">" +
                    "<div class=\"cart-item-name cart-font\">" + itemName + "</div>" +
                    "<div class=\"cart-font\" style=\"margin-top: 10px;\"><span class=\"cart-item-num\">1</span>x <span class=\"cart-item-price\">" + itemPrice + "</span></div>" +
                    "<div class=\"cart-font\" style=\"margin-top: 15px;\">Size: <span class=\"cart-item-size\">" + itemSize + "</span></div>" +
                "</div>" +
            "</div>"
        )
    }


}