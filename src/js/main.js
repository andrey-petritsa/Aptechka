import $ from '../local_modules/jquery/dist/jquery.min'
import Swiper from 'swiper/bundle'
import datepicker from 'js-datepicker'


$(document).ready(() => {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper(`.swiper-container`, {
        autoHeight: true,
        effect: `fade`,
        loop: true,
        navigation: {
            nextEl: `.swiper-button-next`,
            prevEl: `.swiper-button-prev`,
        },
        speed: 400,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    })
    // eslint-disable-next-line no-unused-vars
    const picker = datepicker(`#form-subscribe__client-date`, {
        // eslint-disable-next-line no-unused-vars
        formatter: (input, date, instance) => {
            const value = date.toLocaleDateString()
            input.value = value // => '1/1/2099'
        },
        overlayPlaceholder: `Месяц рождения вашего малыша`,
        customDays: [`Пн`, `Вт`, `Ср`, `Чт`, `Пт`, `Сб`, `Вс`],
        customMonths: [`Январь`, `Февраль`, `Март`, `Апрель`, `Май`, `Июнь`, `Июль`, `Август`, `Сентябрь`, `Октябрь`, `Ноябрь`, `Декабрь`],
    })
    const burger = document.querySelector(`.burger`)
    const body = document.querySelector(`body`)
    const menu = document.querySelector(`.header__menu`)
    burger.addEventListener(`click`, function () {
        burger.classList.toggle(`burger_active`)
        body.classList.toggle(`lock`)
        menu.classList.toggle(`menu_active`)
    })
    document.querySelector(`.menu__action`).addEventListener(`click`, function (event) {
        event.preventDefault()
        this.classList.toggle(`active`)
    })
})
