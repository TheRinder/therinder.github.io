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
    if (date.getDay() === 2) {
        return ScheduleRender(schedule.filter(item => item.day === 2))
    }
    if (date.getDay() === 4) {
        return ScheduleRender(schedule.filter(item => item.day === 4))
    }
    return `<p class="notToday">Нет занятий</p>`
}
const checkNumber = text => {
    return text > 9 ? text : `0${text}`
}
const digitalClock = () => {
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

const showSchedule = () => {
    if (document.querySelector('#schedule_list').classList[1] === 'schedule-list_active') {
        document.querySelector('#schedule_list').classList.remove('schedule-list_active')
        document.querySelector('#show1').innerHTML = 'Развернуть расписание'
    } else {
        document.querySelector('#schedule_list').classList.add('schedule-list_active')
        document.querySelector('#show1').innerHTML = 'Свернуть расписание'
    }
}
const onClickMaterial = url => {
    window.open(url)
}

const materials = [
    {
        url: "https://1drv.ms/p/s!AlI_mdwQk8yOhKp6cE0aXwzKBxVchw",
        createDate: "2021-10-12T18:30:00.801Z",
        autor: "Гольчук Кирилл",
        imageUrl: "./image/powerpoint-2.svg",
        title: "Создание сайтов HTML5/CSS3 - введение (занятие 1-2)"
    },
    {
        url: "https://1drv.ms/p/s!AlI_mdwQk8yOhKp7bFZy4PXGS8wc3A?e=IrNiNr",
        createDate: "2021-10-15T18:30:00.801Z",
        autor: "Гольчук Кирилл",
        imageUrl: "./image/powerpoint-2.svg",
        title: "Введение в профессию – front-end (занятие 1-2)"
    }
]
const TemplateMaterial = (url, title, autor, imageUrl) => {
    return `<span role="button" onclick="onClickMaterial('${url}')"
    class="btn-span">
    <div class="material-item flex">
        <div class="material-item__img">
            <img src="${imageUrl}" alt="">
        </div>
        <div class="material-item__info">
            <p class="material-item__theam">${title}</p>
            <p class="material-item__autor">${autor}</p>
        </div>
    </div>
</span>
    `
}
const MaterialRender = materials => {
    var result = ``
    materials.map(item => {
        const { url,
            autor,
            imageUrl,
            title } = item
        result += TemplateMaterial(url, title, autor, imageUrl)
        return null
    })
    return result
}
/*
<span role="button" onclick="onClickMaterial('https://1drv.ms/p/s!AlI_mdwQk8yOhKp6cE0aXwzKBxVchw')"
                    class="btn-span">
                    <div class="material-item flex">
                        <div class="material-item__img">
                            <img src="./image/powerpoint-2.svg" alt="">
                        </div>
                        <div class="material-item__info">
                            <p class="material-item__theam">Создание сайтов HTML5/CSS3 - введение (урок 1)</p>
                            <p class="material-item__autor">Гольчук Кирилл</p>
                        </div>
                    </div>
                </span>
*/

digitalClock()
document.querySelector('#schedule_list').innerHTML = ScheduleRender(schedule)
document.querySelector('#list_today').innerHTML = CheckDate()
document.querySelector('#material_list').innerHTML = MaterialRender(materials)