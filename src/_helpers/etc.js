import moment from "moment";
function dateFormat(d) {
    return moment(d).format("LL");
}

function numberFormat(d) {
    d = "" + d;
    d = parseFloat(d);
    return d.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

export {
    dateFormat,
    numberFormat
}