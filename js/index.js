const schedule = [
    {
        "day": 2,
        "startTime": "18:30",
        "finishTime": "19:50"
    },
    {
        "day": 2,
        "startTime": "20:00",
        "finishTime": "21:20"
    },
    {
        "day": 4,
        "startTime": "18:30",
        "finishTime": "19:50"
    },
    {
        "day": 4,
        "startTime": "20:00",
        "finishTime": "21:20"
    }
]
const TemplateDay = (dayWeek, start, finish) => {
    return `<div class="schedule-list__item">
    <p class="schedule-list__item__title">${dayWeek}</p>
    <div class="flex schedule-list__item-times">
        <div class="schedule-list__item__time">
            <p class="schedule-list__item__time_text">начало</p>
            <p class="schedule-list__item__time_start">${start}</p>
        </div>
        <div class="schedule-list__item__time">
            <p class="schedule-list__item__time_text">конец</p>
            <p class="schedule-list__item__time_start">${finish}</p>
        </div>
    </div>
</div>`
}
const ParseDay = day => {
    const arrDay = ['Воскресенье', "Понедельник", "Вторник", "Среда", "Четверг", "Пятниц", "Суббота"]
    return arrDay[day]
}
const ScheduleRender = schedule => {
    var result = ``
    schedule.map(item => {
        const { day,
            startTime,
            finishTime } = item
        result += TemplateDay(ParseDay(day), startTime, finishTime)
        return null
    })
    return result
}
const CheckDate = () => {
    const date = new Date()
    if (date.getDate() === 2) {
        return ScheduleRender(schedule.filter(item => item.day === 2))
    }
    if (date.getDate() === 4) {
        return ScheduleRender(schedule.filter(item => item.day === 4))
    }
    return `<p class="notToday">Нет занятий</p>`
}
const checkNumber = text => {
    return text > 9 ? text : `0${text}`
}
function digitalClock() {
    const arr = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    //* добавление ведущих нулей */
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    document.getElementById("date").innerHTML = checkNumber(date.getDay()) + " " + arr[date.getMonth()] + " " + date.getUTCFullYear() + " " + hours + ":" + minutes;
    setTimeout("digitalClock()", 1000);
}
digitalClock()
document.querySelector('#schedule_list').innerHTML = ScheduleRender(schedule)
document.querySelector('#list_today').innerHTML = CheckDate()