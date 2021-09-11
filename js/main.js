const newsBlock = document.querySelectorAll('.news__body--inner .news__body--message')
const markers = []

if (newsBlock.length > 0){
    document.querySelector('.news__body').classList.remove('empty')
}

//Отслеживание нажатий на странице

document.addEventListener('click', function (e) {
    if(e.target.dataset.tab){
        activeSubtopics = document.querySelectorAll('.header__tab--theme--subtopics')
        for (let i = 0; i < activeSubtopics.length; i++) {
            const subtopic = activeSubtopics[i];
            if(subtopic.classList.contains('active')){
                subtopic.classList.remove('active')
            }
            
        }
        themes = document.querySelectorAll('[data-fortab]')
        for (let i = 0; i < themes.length; i++) {
            const element = themes[i];
            if(element.dataset.fortab == e.target.dataset.tab){
                element.style.opacity = '0';
                element.style.transform = 'translateY(95%)'
                element.classList.toggle('active')
                setTimeout(()=>{
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(100%)'
                },2)
            }
            
        }
    }

    if(e.target.dataset.theme){
        subtopics = document.querySelectorAll('[data-fortheme]')

        for (let i = 0; i < subtopics.length; i++) {
            const activeElement = subtopics[i];
            if(activeElement.classList.contains('active')){
                activeElement.classList.remove('active')
            }
        }

        subtopics.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(95%)'
            if(element.dataset.fortheme == e.target.dataset.theme){
                console.log(element.classList.contains('active'))
                if(!(element.classList.contains('active'))){
                    
                    element.classList.add('active')
                    setTimeout(()=>{
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(100%)'
                    },2)
                }
            }
        });
    }

    if(e.target.classList.contains('modal__marker--close') || e.target.closest('.modal__marker--close')){
        document.getElementById('modal-marker').classList.remove('active')
    }

    if(e.target.closest('.content__tab--view')){
        document.querySelector('.content__window').classList.toggle('active');
    }

    if(e.target.classList.contains('content__window--create')){
        createTabsBtns('p[data-lining]','marker__button');
        document.querySelector('.content__window--cancel').classList.toggle('active')
    }

    if(e.target.classList.contains('content__window--cancel')){
        deleatBtns('p[data-lining]')
        document.querySelector('.content__window--cancel').classList.remove('active')
    }

    if(e.target.classList.contains('marker__button')){
        parentOfBtn = e.target.parentNode
        parentOfString = parentOfBtn.parentNode
        indexOfLine = parentOfBtn.getAttribute('index')
        indexOfParagraph = getElementIndex(parentOfString)
        document.getElementById('modal-marker').classList.add('active')
        document.querySelector('.content__window').classList.remove('active');
        document.getElementById('modal-paragraph').innerText = 'Номер абзаца: '+ indexOfParagraph
        document.getElementById('modal-string').innerText = 'Номер строки: '+ indexOfLine

        deleatBtns('p[data-lining]')
    }
}
)

//Конец отслеживания нажатий на странице


document.querySelector('.content__inner').addEventListener('scroll', ()=>{
    tabs = document.querySelectorAll('[data-fortab]')
    for (let i = 0; i < tabs.length; i++) {
        const element = tabs[i];
        if(element.classList.contains('active')){
            console.log(element)
            element.classList.remove('active')
        }
        
    }
})



function createTabsBtns(elem, btnClass) {
    strings = document.querySelectorAll(elem)
    for (let i = 0; i < strings.length; i++) {
        const string = strings[i];
        const textareas = string.querySelectorAll('text-line')
        for (let i = 0; i < textareas.length; i++) {
            const textarea = textareas[i];
            const firstChild = textarea.firstChild;
            if(!(firstChild.tagName == 'BUTTON')){
                let button = document.createElement('button');
                button.classList.add(btnClass)
                textarea.prepend(button)
            }
            if(firstChild.tagName == 'BUTTON'){
                const btn = textarea.querySelector('.marker__button')
                btn.remove()
            }
                
                
        }
            
    }
}

function deleatBtns(elem) {
    strings = document.querySelectorAll(elem)
    for (let i = 0; i < strings.length; i++) {
        const string = strings[i];
        const textareas = string.querySelectorAll('text-line')
        for (let i = 0; i < textareas.length; i++) {
            const textarea = textareas[i];
            const firstChild = textarea.firstChild;
            if(firstChild.tagName == 'BUTTON'){
                const btn = textarea.querySelector('.marker__button')
                btn.remove()
            }     
        }        
    }
}

function getElementIndex(elem) {
    elem = elem.tagName ? elem : document.querySelector(elem)
    return [].indexOf.call(elem.parentNode.children, elem)
}

function Marker(title, paragraph, line) {
    this.title = title;
    this.paragraph = paragraph;
    this.line = line;
}