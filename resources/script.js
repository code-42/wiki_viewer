$(document).ready(function(){
    $("#search").on("click", function() {
        var searchTerm = $("#searchTerm").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&namespace=0&callback=?";
        $.ajax({
            type: "GET",
            url: url,
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function (data) {
                var html = "<ul class='list-group'>"
                for(var i=0; i < data[1].length; i++){
                    html += 
                    "<li class='list-group-item'>" +
                    "<a href='" + data[3][i] + "' target='_blank' class='title'>" + data[1][i] + "</a>" +
                    "<p>" + data[2][i] + "</p>" +
                    "</li>"
                }
                html += "</ul>";
                $("#search_results").html(html);
            }
        });
    });
}); 
