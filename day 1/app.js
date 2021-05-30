let data;

const btn = document.querySelector('#btn');
const textarea = document.querySelector('.lorem');
async function getData() {
    try {
        let b = document.createElement('p');
        b.textContent = 'Loading...';
        b.setAttribute('class', 'loading');
        textarea.innerHTML = b.innerText;
        data = await fetch(
                'https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html'
            )
            .then(result => result.text())
            .then(
                data =>
                (data = data
                    .trim()
                    .replace(/bacon/gi, ' ')
                    .replace(/ipsum/gi, 'Ipsum'))
            );
    } catch (error) {
        console.log(
            'we are unable to fetch data from server , is everything alright ?'
        );
    }
}

async function lorem() {
    await getData();
    textarea.innerHTML = data;
}

btn.addEventListener('click', lorem);

// dom function