$(document).ready(function() {
    var show_all = document.getElementById('show-all');
    var input = document.getElementById('file-upload');
    var infoArea = document.getElementById('file-upload-filename');

    input.addEventListener('change', showFileName);

    function showFileName(event) {

        var input = event.srcElement;

        var fileName = input.files[0].name;

        infoArea.textContent = ' ' + fileName;
        show_all.style.display = "block";
    }

    $('.close-all').click(function(e) {
        document.getElementById("file-upload").value = null;
        show_all.style.display = "none";

    });

});