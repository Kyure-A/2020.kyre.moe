const discord_id: string = "kyre#4681";
const nintendo_id: string = "SW-1698-6437-2977";

function copyID(id: string) {
    navigator.clipboard.writeText(id).then(() => {
        alert('Copied ID!')
    }, () => {
        // alert('missed')
    });
}
