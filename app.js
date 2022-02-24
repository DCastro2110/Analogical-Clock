(function() {
    const secondsPointer = document.querySelector('.seconds-pointer');
    const minutesPointer = document.querySelector('.minutes-pointer');
    const hoursPointer = document.querySelector('.hours-pointer');

    createHour()
    setInterval(createHour, 1000)

    function createHour() {
        const date = new Date()
        const sec = date.getSeconds();
        const min = date.getMinutes();
        const hour = date.getHours();

        const degSec = sec * 6;
        const degMin =  6 * min + sec * 1 / 10;
        const degHour = hour * 30 + 0.5 * min

        secondsPointer.style.transform = `translate(0, -50%) rotate(${degSec}deg)`;
        minutesPointer.style.transform = `translate(0, -50%) rotate(${degMin}deg)`;
        hoursPointer.style.transform = `translate(0, -50%) rotate(${degHour}deg)`;

        digitalTime(date.toLocaleTimeString('pt-br', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }))
    }

    function digitalTime(date) {
        const digitalHour = document.querySelector('.digital-hour');
        digitalHour.innerText = date
    }
}) ()