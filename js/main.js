//   nav bar
$('.bars').click(function () {
    let left = $('#slideBar').css('left')
    let start = $('.bars').css('left')
    if (left == '0px' && start == '250px') {
        $('#slideBar').animate({ left: '-250px' }, 500)
        $(this).animate({ left: '0px' }, 500)
    }
    else {
        $('#slideBar').animate({ left: '0px' }, 500)
        $(this).animate({ left: '250px' }, 500)

    }
})



//                        close button
$('.closeBtn').click(function () {
    $('#slideBar').animate({ left: '-=250px' }, 1000)
    $('.bars').animate({ left: '-=250px' }, 1000)

})
//                        count Down
let countDownDate = new Date('Dec 31,2023 23:59:59').getTime()
let counter = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById('days').innerText = days + ' D';
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    document.getElementById('hours').innerText = hours + ' H';
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    document.getElementById('minutes').innerText = minutes + ' M';
    let seconds = Math.floor(distance % (1000 * 60) / (1000));
    document.getElementById('seconds').innerText = seconds + ' S';
    if (distance < 0) {
        clearInterval(counter)
        document.getElementById('expired').innerText = 'This party is expired'
    }
})



//                            toggle 
$('.first').css('display', 'block')
$('.words').not('.first').css('display', 'none')
$('h3').click(function () {
    $(this).next().slideToggle(500)
    $('.words').not($(this).next()).slideUp(500)
})


//                           counter of letters
$('#enterMessage').keyup(function () {
    let count = 100;
    let letters = $(this).val().length
    let difference = count - letters;
    if (difference <= 0) {
        $('#limit').text(`your available characters are finished`
        )
    }
    else {
        $('#limit').text(difference)
    }

})





