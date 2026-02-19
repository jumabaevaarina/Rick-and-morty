const button = document.querySelector('.contact--us');
const form = document.querySelector('.contact--us--body');
const overlay = document.createElement('div'); // создаём overlay
overlay.classList.add('overlay');
document.body.appendChild(overlay);

const name = document.getElementById('name');
const email = document.getElementById('email');

button.addEventListener('click', () => {
    overlay.classList.add('active');
    form.classList.add('active');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
        form.classList.remove('active');
        form.reset();
    }
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();

    if (nameValue.length < 2 || emailValue.length < 4) {
        alert('Please enter valid values');
        return;
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: nameValue, email: emailValue })
        });

        if (!response.ok) throw new Error('Ошибка при отправке формы');

        alert('Форма успешно отправлена!');
        overlay.classList.remove('active');
        form.classList.remove('active');
        form.reset();

    } catch (error) {
        alert('Не удалось отправить форму: ' + error.message);
    }
});
