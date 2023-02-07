const discord_id = "kyre#4681";
const nintendo_id = "SW-1698-6437-2977";

function copyID (id)
{
    navigator.clipboard.writeText(id).then(() => {
	alert('Copied ID!')
    }, () => {
	alert('missed')
	/* clipboard write failed */
    });
}
