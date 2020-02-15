function timeCover(num) {
    if (parseInt(num) < 10) {
        return '0' + num;
    }
    return num
}

function getTime() {

    var timestamp = new Date().getTime();

    var random = Math.floor(Math.random() * (3 * 60 * 60 * 1000 - 2 * 60 * 60 * 1000) + 2 * 60 * 60 * 1000);

    timestamp = timestamp - random;

    var newDate = new Date(timestamp);

    var fullYear = newDate.getFullYear();
    var month = newDate.getMonth() + 1;
    var date = newDate.getDate();
    var hour = newDate.getHours();
    var minutes = newDate.getMinutes();
    var seconds = newDate.getSeconds();


    return timeCover(fullYear) + "." + timeCover(month) + "." + timeCover(date) + " " + timeCover(hour) + ":"
        + timeCover(minutes) + ":" + timeCover(seconds);

}
