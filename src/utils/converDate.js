export default function convertDate(date) {
    const dateOption = { year: "numeric", month: "short", day: "numeric" };
    const dates = new Date(date);
    const result = dates.toLocaleDateString("fr-FR", dateOption);
    return result;

}

export function convertDateString(dateString) {
    if (dateString != null) {
        var parts = dateString.split('/');
        var dateObject = new Date(parts[2], parts[0] - 1, parts[1]);
        var day = dateObject.getDate();
        var month = dateObject.getMonth() + 1;
        var year = dateObject.getFullYear();
        var outputString = day + '/' + month + '/' + year;
        return outputString;
    }
}