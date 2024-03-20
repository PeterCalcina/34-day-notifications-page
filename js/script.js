let notification_item = document.querySelectorAll('.notification__item');
let number_of_notifications = document.querySelector('.header__notification_number');

function markAllAsRead() {
    notification_item.forEach(function (item) {
        item.classList.remove('no_read');
    });

    number_of_notifications.innerHTML = 0;
}