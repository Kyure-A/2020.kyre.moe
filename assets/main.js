var discord_id = "kyre#4681";
var nintendo_id = "SW-1698-6437-2977";
function copyID(id) {
    navigator.clipboard.writeText(id).then(function () {
        alert('Copied ID!');
    }, function () {
        // alert('missed')
    });
}
