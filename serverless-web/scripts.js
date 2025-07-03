var API_ENDPOINT = "API endpoint";

$(document).ready(function() {
    $("#sayButton").click(function() {
        var inputData = {
            "voice": $('#voiceSelected option:selected').val(),
            "text": $('#postText').val()
        };

        $.ajax({
            url: API_ENDPOINT,
            type: 'POST',
            data: JSON.stringify(inputData),
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                $("#postIDreturned").text("Message : " + response);
            },
            error: function() {
                alert("error");
            }
        });
    });

    $("#searchButton").click(function() {
        $.ajax({
            url: API_ENDPOINT,
            type: 'GET',
            success: function(response) {
                $('#posts tbody tr').remove();

                $.each(response, function(i, data) {
                    var player = "";
                    if (typeof data['url'] !== "undefined") {
                        player = "<audio controls><source src='" + data['url'] + "' type='audio/mpeg'></audio>";
                    }

                    $("#posts tbody").append(
                        "<tr>" +
                        "<td data-label='Voice'>" + data['selected voice'] + "</td>" +
                        "<td data-label='Post'>" + data['input text'] + "</td>" +
                        "<td data-label='Status'>" + data['status'] + "</td>" +
                        "<td data-label='Player'>" + player + "</td>" +
                        "</tr>"
                    );
                });
            },
            error: function() {
                alert("error");
            }
        });
    });

    $("#postText").on("keyup", function() {
        var length = $(this).val().length;
        $("#charCounter").text("Characters: " + length);
    });
});