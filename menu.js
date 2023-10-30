var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item .classList = remove('ativo')
    )
    this.classList.add('ativo')
}
menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)

)
var btnExp = document.querySelectorAll('#btn-exp')
var menuSide = document.querySelectorAll('.menu-lateral')
btnExp.addEventListener('click', function(){   
    menuSide.classList.toggle('expandir')
})