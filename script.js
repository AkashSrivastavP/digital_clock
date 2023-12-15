function timeShow() {
    let ti = new Date();
    let ho = ti.getHours();
    let mi = ti.getMinutes();
    let se = ti.getSeconds();
    ampm = "AM"

    if (ho > 12) {
        ho -=12;
        ampm = "PM"
    }

    if (ho == 0) {
        tr = 12;
        ampm = "AM"
    }

    ho = ho < 10 ? "0" + ho : ho;
    mi = mi < 10 ? "0" + mi : mi;
    se = se < 10 ? "0" + se : se;

    let mainTime = ho + ":" + mi + ":" + se + " " + ampm;

    document.getElementById("timebox").innerHTML = mainTime;

}
setInterval(timeShow, 1000)


timeShow();

