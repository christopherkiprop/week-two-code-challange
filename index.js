document.addEventListener('DOMContentLoaded', function() {
    const addItemBtn = document.getElementById('addItemBtn');
    const markPurchasedBtn = document.getElementById('markPurchasedBtn');
    const clearListBtn = document.getElementById('clearListBtn');
    const itemList = document.getElementById('itemList');
    const itemInput = document.getElementById('itemInput');

    // for adding an item//
    addItemBtn.addEventListener('click', function() {
        const itemName = itemInput.value.trim();
        document.addEventListener('DOMContentLoaded', function() {
    const addItemBtn = document.getElementById('addItemBtn');
    const markPurchasedBtn = document.getElementById('markPurchasedBtn');
    const clearListBtn = document.getElementById('clearListBtn');
    const itemList = document.getElementById('itemList');
    const itemInput = document.getElementById('itemInput');

    //  for adding an item//
    addItemBtn.addEventListener('click', function() {
        const itemName = itemInput.value.trim();
        // prevent adding empty items//
        if (itemName === '') return; 
        
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${itemName}</span>
            <button class="markBtn">Mark Purchased</button>
        `;
        itemList.appendChild(li);
        // clear anything that is thereafter adding item//
        itemInput.value = ''; 
    });

    // for marking purchased items//
    itemList.addEventListener('click', function(e) {
        if (e.target.classList.contains('markBtn')) {
            const listItem = e.target.parentElement;
            listItem.classList.toggle('purchased');
        }
    });

    //  for marking  items as purchased//
    markPurchasedBtn.addEventListener('click', function() {
        const items = itemList.querySelectorAll('li');
        items.forEach(item => {
            item.classList.add('purchased');
        });
    });

    //  for clearing the list//
    clearListBtn.addEventListener('click', function() {
    // clear all items listed//
        itemList.innerHTML = ''; 
    });
    // stopping from adding empty items//
});
        if (itemName === '') return; 
        
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${itemName}</span>
            <button class="markBtn">Mark Purchased</button>
        `;
        itemList.appendChild(li);

        itemInput.value = ''; // Clear input field after adding item//
    });

    //  for marking purchased items//
    itemList.addEventListener('click', function(e) {
        if (e.target.classList.contains('markBtn')) {
            const listItem = e.target.parentElement;
            listItem.classList.toggle('purchased');
        }
    });

    // for marking all items as purchased//
    markPurchasedBtn.addEventListener('click', function() {
        const items = itemList.querySelectorAll('li');
        items.forEach(item => {
            item.classList.add('purchased');
        });
    });

    //  for clearing the list//
    clearListBtn.addEventListener('click', function() {
        itemList.innerHTML = ''; // Clear all list items//
    });
}); 