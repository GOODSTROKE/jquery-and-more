let newDiv = $('<div> Click Here </div>');

let page = $('body');
page.append(newDiv)

let ul = $('<ul></ul>');

page.append(ul);

newDiv.on('click', () => {
    console.log('test');
    let input = $('#myInput')
    let myLi = $(`<li>${input.val()}</li>`)
    ul.append(myLi)

    // inteads of .style, .css
    
page.css({



})




})