let modal = document.querySelector('.modal')
let news = document.querySelectorAll('.news__body')
let modalTitle = document.querySelector('.modal__title')
let modalDate = document.querySelector('.modal__date--body')
let modalTime = document.querySelector('.modal__date--time')
let modalText = document.querySelector('.modal__text')

news.forEach(body => 
    body.addEventListener('click', ()=>{
        let title = body.querySelector('.news__body--title > p').innerHTML
        let date = body.querySelector('.news__body--date--text').innerHTML
        let time = body.querySelector('.news__body--date--time').innerHTML
        let texts = body.querySelectorAll('.news__body--text > p')
        let text = []
        texts.forEach(textItem => text += textItem.innerHTML.replace(/<\/?[^>]+(>|$)/g, "") +
        '. ' )
        modal.classList.add('active')
        modalTitle.textContent = title
        modalDate.textContent = date
        modalTime.textContent = time
        modalText.textContent = text
        if(modal.classList.contains('active')){
            document.addEventListener('click', (e)=>{
                if(e.target.classList.contains('close') || e.target.closest('.close') || e.target.classList.contains('modal')){
                    modal.classList.remove('active')
                }
            })
        }
    })
)


    

