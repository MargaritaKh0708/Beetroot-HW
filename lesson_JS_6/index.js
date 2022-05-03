

// WISH LIST 

const wishAddButton = document.getElementById('js-wish-add-button');
const wishList = document.getElementById('js-wish-list');


const addNewWish = () => {
    const wishListNewItem = document.getElementById('wish-input').value;

    if (wishListNewItem) {
        if (wishListNewItem.length >= 5) {
            const newWishName = document.createElement('span');
            const deleteButton = document.createElement('button');
            const newDiv = document.createElement('div');
            newWishName.classList.add('wish-item');
            deleteButton.classList.add('wish-delete-button');
            newDiv.classList.add('wish-item-block');

            wishList.append(newDiv);
            newDiv.append(newWishName);
            newDiv.append(deleteButton);
            deleteButton.innerText = 'X';
            newWishName.innerText = wishListNewItem;

            document.getElementById('wish-input').value = '';

            newWishName.addEventListener('click', () => {
                newWishName.innerText = `WISH IS DONE ✔`;
            });

            newWishName.addEventListener('dblclick', () => {
                newWishName.innerText = wishListNewItem;
            });

            deleteButton.addEventListener('click', () => {
                userAnswer = confirm('Are u sure?');
                if (userAnswer) {
                    newDiv.remove()
                }
            });

            // Styles (хотела вынести в отдельную ф-ю, но начало ругаться изза того что ссылаюсь на локальные переменные, а если обьявляю их не как глобальные внутри ф-ции - она ломается)
            newDiv.style.justifyContent = 'space-between';
            deleteButton.style.borderRadius = '50%';
            deleteButton.style.margin = '0 10px';
            newDiv.style.display = 'flex';
            newDiv.style.width = '300px';

            // Every 2d element displayed in green color 
            for (let i = 0; i <= wishList.children.length; i++) {
                if (i % 2 === 0)
                    wishList.children[i].style.color = 'green';
            }

        }
        else alert('Your wish is too short! ');
    } else alert('Please, type something!');
}


wishAddButton.addEventListener('click', addNewWish);


//! Try all methods 
console.log(wishList.querySelector('.wish-item-block')); // Return first elemet of Parent "wishList"
console.log(document.querySelectorAll('.wish-item-block')); // Return array of all elements with ".wish-item-block" class
console.log(document.querySelectorAll('*')); // Return array of all HTML elements
console.log(document.getElementsByName('js-container')); // Return array of all elements with such Name
console.log(wishList.getElementsByTagName('div')); // Return HTMLCollection with all div elements in wishList
console.log(wishList.getElementsByClassName('js-wish-input')); // Return HTMLCollection with all elements such class-name
console.log(document.getElementById('js-wish-list'));// Return element with  such id