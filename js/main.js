const newsBlock = document.querySelectorAll('.news__body--inner .news__body--message')

if (newsBlock.length > 0){
    document.querySelector('.news__body').classList.remove('empty')
}

document.addEventListener('click', function (e) {
    if(e.target.closest('.content__tab--select')){
        selectText('#FCFF82')
    } 

    if(e.target.dataset.tab){
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
            const element = subtopics[i];
            element.style.opacity = '0';
            element.style.transform = 'translateY(95%)'
            element.classList.toggle('active')
            if(element.dataset.fortheme == e.target.dataset.theme){
                setTimeout(()=>{
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(100%)'
                },2)
            }
            
        }
    }
}
)

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

