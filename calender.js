var dt = new Date();
function renderDate() {
    dt.setDate(1);
    var day = dt.getDay(); //show the last month balance days
    var today = new Date(); // current date time
    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();  // 31
    var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();   // 30

    var months = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"
    ]
    const a = document.getElementById("month").innerHTML = `${months[dt.getMonth()]} ${dt.getFullYear()}`;
    // console.log(a);  // month year

    const b = document.getElementById("date_str").innerHTML = `${new Date().toDateString()}`;
    // console.log(b);

    var cells = "";
    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";

    }
    // console.log(cells);  // month end ke bal day
    // console.log(day); // month 

    for (i = 1; i <= endDate; i++) {
        if (i === today.getDate() && dt.getMonth() === today.getMonth()) {
            cells += "<div class='today'>" + i + "</div>"
                ;
        }
        else
            cells += "<div>" + i + "</div>";
        // console.log(cells)
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;
    // console.log(cells)
}

function moveDate(para) {
    if (para == "prev") {
        dt.setMonth(dt.getMonth() - 1);
    } else if (para == 'next') {
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
}