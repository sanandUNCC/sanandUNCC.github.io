//jQuery call to the accordion() method
    $(document).ready(function () {
        $("#accordion").accordion({
            event: "mousedown",
            heightStyle: "content",
            collapsible: true
        });
    });