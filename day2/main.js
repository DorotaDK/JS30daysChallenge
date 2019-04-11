const runClock = function () {
    const currentDate = new Date();
    let secValue = currentDate.getSeconds();
    let minValue = currentDate.getMinutes();
    let hourValue = currentDate.getHours();
    document.querySelector(".sec").style.transform = `rotate(${(secValue === 0) ? secValue : secValue * 6}deg)`;
    document.querySelector(".min").style.transform = `rotate(${(minValue === 0) ? secValue : minValue * 6}deg)`;
    document.querySelector(".hour").style.transform = `rotate(${(hourValue === 0) ? hourValue : hourValue * 30}deg)`;
    document.querySelector("h1").textContent = `${(hourValue <= 9) ? "0" + hourValue:hourValue}:${(minValue <= 9) ? "0" + minValue:minValue}:${(secValue <= 9) ? "0" + secValue:secValue}`

    if ((new Date(currentDate.getFullYear(), 0, 4, 16, 30) - new Date()) < 0) {
        year = currentDate.getFullYear() + 1;
    } else {
        year = currentDate.getFullYear();
    }
    let birthday = new Date(year, 0, 4, 16, 30);
    const timeDifference = birthday - currentDate;
    const ms = 24 * 60 * 60 * 1000;
    const daysTo = Math.floor(timeDifference / ms);
    if (daysTo < 1) {
        fix = 1;
    } else {
        fix = daysTo;
    }
    const hoursTo = ((timeDifference / ms) % fix) * 24;
    const matHoursTo = Math.floor(hoursTo);
    const minutesTo = (hoursTo - matHoursTo) * 60;
    const matMinutesTo = Math.floor(minutesTo);
    const secundsTo = (minutesTo - matMinutesTo) * 60;
    const matSecundsTo = Math.floor(secundsTo);
    document.querySelector("h2").textContent = `Do urodzin Dosi zostało: ${daysTo} dni, ${matHoursTo} godzin, ${matMinutesTo} minut, ${matSecundsTo} sekund`;

    setTimeout(function () {
        runClock();
    }, 1000);


}
runClock();