document.addEventListener('DOMContentLoaded', () => {
    parseDog();
})

function parseDog() {
    fetch('http://localhost:3000/dogs')
    .then(resp => resp.json())
    .then(json => json.forEach(addDogToTable))
}

function addDogToTable(dog) {
    let form = document.querySelector('#dog-form');
    let row = document.createElement('tr');
    let cellDogName = document.createElement('td');
    let cellDogBreed = document.createElement('td');
    let cellDogSex = document.createElement('td');
    let cellEditDog = document.createElement('td');
    let editButton = document.createElement('button');

    cellDogName.textContent = dog.name;
    cellDogBreed.textContent = dog.breed;
    cellDogSex.textContent = dog.sex;
    editButton.textContent = 'Edit This Dog'

    cellEditDog.append(editButton)
    row.append(cellDogName, cellDogBreed, cellDogSex, cellEditDog);
    document.querySelector('#table-body').append(row);
    
    cellEditDog.addEventListener('click', () => {
        form.name.value = dog.name;
        form.breed.value = dog.breed;
        form.sex.value = dog.sex;
    })
}