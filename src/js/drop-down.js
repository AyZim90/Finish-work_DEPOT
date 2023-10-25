document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown-bars');
    const trigger = dropdown.querySelector('.trigger');
    const content = dropdown.querySelector('.dropdown-content-bars');
    const closeIcon = dropdown.querySelector('.close-icon'); // выбираем иконку крестика

    trigger.addEventListener('click', function() {
        dropdown.classList.toggle('active');
    });

    // новый слушатель для иконки крестика
    closeIcon.addEventListener('click', function() {
        dropdown.classList.remove('active');
    });

    // Закрыть выпадающее меню, если кликнуть вне его
    window.onclick = function(event) {
        if (!event.target.matches('.trigger')) {
            dropdown.classList.remove('active');
        }
    }
});
