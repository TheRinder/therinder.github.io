const URL_GOOLE_MEET = ''
//
const googleMeetRender = () => {

    const TemplateLink = `<a  href="${URL_GOOLE_MEET}"
    class="gradient-text gradient-text_hover link-meet" target="_blank">
    ${URL_GOOLE_MEET}
</a>`
    if (URL_GOOLE_MEET.length !== 0) {
        document.querySelector('#gmeet_beta').classList.add('active_google_meet')
        document.querySelector('#linkMeet').innerHTML = TemplateLink
    }
    if (URL_GOOLE_MEET.length === 0) {
        document.querySelector('#gmeet_beta').classList.remove('active_google_meet')
    }
}

googleMeetRender()


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
const MONTH = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
const digitalClock = () => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    //* добавление ведущих нулей */
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    document.getElementById("date").innerHTML = checkNumber(date.getDate()) + " " + MONTH[date.getMonth()] + " " + date.getUTCFullYear() + " " + hours + ":" + minutes;
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
        title: "Создание сайтов HTML5/CSS3 - введение (занятие 1-2)",
        tag: "powerpoint"
    },
    {
        url: "https://1drv.ms/p/s!AlI_mdwQk8yOhKp7bFZy4PXGS8wc3A?e=IrNiNr",
        createDate: "2021-10-15T18:30:00.801Z",
        autor: "Гольчук Кирилл",
        imageUrl: "./image/powerpoint-2.svg",
        title: "Введение в профессию – front-end (занятие 1-2)",
        tag: "powerpoint"
    },
    {
        url: "https://youtu.be/zZBiln_2FhM",
        createDate: "2021-10-15T18:30:00.801Z",
        autor: "Владилен Минин",
        imageUrl: "./image/youtube-logo.png",
        title: "Git и GitHub Курс Для Новичков",
        tag: "youtybe"
    },
    {
        url: "https://1drv.ms/p/s!AlI_mdwQk8yOhKp9vNGTTxcHrOWrfA?e=iPz6KA",
        createDate: "2021-10-19T18:30:00.801Z",
        autor: "Гольчук Кирилл",
        imageUrl: "./image/powerpoint-2.svg",
        title: "Основы HTML - Глава 1 (занятие 1-2)",
        tag: "powerpoint"
    },
    {
        url: "https://1drv.ms/p/s!AlI_mdwQk8yOhKsAAYH7slhmz0L-Rg?e=Zza4SG",
        createDate: "2021-10-21T18:30:00.801Z",
        autor: "Гольчук Кирилл",
        imageUrl: "./image/powerpoint-2.svg",
        title: "Основы HTML - Глава 2 (занятие 1)",
        tag: "powerpoint"
    },
    {
        url: "https://1drv.ms/p/s!AlI_mdwQk8yOhKsFTGaF1ibsQtDDXA?e=KLXRS0",
        createDate: "2021-10-21T18:30:00.801Z",
        autor: "Гольчук Кирилл",
        imageUrl: "./image/powerpoint-2.svg",
        title: "Введение в CSS (Занятие 2)",
        tag: "powerpoint"
    },
    {
        url: "https://1drv.ms/u/s!AlI_mdwQk8yOhKp5ap5G8WZtDBm9Cw?e=YaquZP",
        createDate: "2021-10-28T18:30:00.801Z",
        autor: "Гольчук Кирилл",
        imageUrl: "./image/powerpoint-2.svg",
        title: "Flex-box (на примерах)",
        tag: "powerpoint"
    },
    // https://1drv.ms/p/s!AlI_mdwQk8yOhKsFTGaF1ibsQtDDXA?e=KLXRS0


]
const TemplateMaterial = (url, title, autor, imageUrl, date) => {
    return `<span role="button" onclick="onClickMaterial('${url}')"
    class="btn-span">
    <div class="material-item flex">
        <div class="material-item__img">
            <img src="${imageUrl}" alt="">
        </div>
        <div class="material-item__info">
            <p class="material-item__theam">${title}</p>
            <p class="material-item__date">${date}</p>
            <p class="material-item__autor">${autor}</p>
        </div>
    </div>
</span>
    `
}
// сортировка по дате
// var arr = materials.sort(function (a, b) {
//     return new Date(b.createDate) - new Date(a.createDate);
// })
// var arr = materials.sort(function (a, b) {
//     return new Date(a.createDate) - new Date(b.createDate)
// })
const MaterialRender = materials => {
    var result = ``
    materials.map(item => {
        const { url,
            autor,
            imageUrl,
            title,
            createDate } = item
        const cd = new Date(createDate)
        const date = checkNumber(cd.getDate()) + " " + MONTH[cd.getMonth()] + " " + cd.getUTCFullYear()
        result += TemplateMaterial(url, title, autor, imageUrl, date)
        return null
    })
    return result
}
const TemplateProject = (title, url, imageUrl) => {
    return `<span class="btn-span" role="button" onclick="onClickMaterial('${url}')">
    <div class="project-item">
        <img class="project-item__img" src="${imageUrl}" alt="">
        <p class="project-item__title"> <span>${title}</span> </p>
    </div>
</span>`
}
const projects = [
    {
        title: "Задание 1-4",
        url: "./tasks/task1.html",
        imageUrl: "./image/html.png"
    }, {
        title: "Задание 5-6",
        url: "./tasks/task2.html",
        imageUrl: "./image/html.png"
    }, {
        title: "Задание 7",
        url: "./tasks/task4work.html",
        imageUrl: "./image/html.png"
    }, {
        title: "Задание 8",
        url: "./tasks/task5.html",
        imageUrl: "./image/html.png"
    },
    {
        title: "Вёрстка страницы",
        url: "./tasks/task6.html",
        imageUrl: "./image/html.png"
    }
]

const ProjectRender = projects => {
    var result = ``
    projects.map(item => {
        const { url,
            imageUrl,
            title } = item
        result += TemplateProject(title, url, imageUrl)
        return null
    })
    return result
}

digitalClock()
document.querySelector('#schedule_list').innerHTML = ScheduleRender(schedule)
document.querySelector('#list_today').innerHTML = CheckDate()
document.querySelector('#material_list').innerHTML = MaterialRender(materials)
document.querySelector('#project_list').innerHTML = ProjectRender(projects)