export function converDateAndHours(date) {
    const dateOption = {year: "numeric", month: "short", day: "numeric"};
    const dateNow = new Date(date);
    const current_date =
        dateNow.toLocaleDateString("fr-FR", dateOption) +
        " à " +
        dateNow.getHours() +
        ":" +
        dateNow.getMinutes();

    return current_date;
}
