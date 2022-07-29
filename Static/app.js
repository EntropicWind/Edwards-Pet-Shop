

$(`.owners`).click(() => {
    $(".ownersContainer").empty();
    $.get("/api/owner", (result) => {
        for(i = 0; i < result.length; i++) {
            let{name, address, phone_number } = result[i];
            $(`<h2>Owner: ${name}<h2>`).appendTo(".ownersContainer");
            $(`<h5>Address: ${address}<h5>`).appendTo(".ownersContainer");
            $(`<h5>Phone Number: ${phone_number}<h5>`).appendTo(".ownersContainer");
        }
    })
})
$(`.pets`).click(() => {
    $(".petsContainer").empty();
    $.get("/api/pets", (result) => {
        for(i = 0; i < result.length; i++) {
            let{name, owner_id, age, type, color } = result[i];
            $(`<h2>Pet Name: ${name}<H2>`).appendTo(".petsContainer");
            $(`<h3>Owner: ${owner_id}<H3>`).appendTo(".petsContainer");
            $(`<h5>Age: ${age}<h5>`).appendTo(".petsContainer");
            $(`<h5>Type: ${type}<h5>`).appendTo(".petsContainer");
            $(`<h5>Color: ${color}<h5>`).appendTo(".petsContainer");
        }
    })
})

$(`.addUser`).click((event) => {
    event.preventDefault();
    let name = $('#New-Owner-Name').val();
    let address = $('#New-Owner-Address').val();
    let phone_number = $('#New-Owner-Phone-Number').val();
    let newOwner = {name, address, phone_number};
        fetch('/api/owner', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(newOwner),
        })
    .then((response) => response.json())
    .then((data) => console.log('Success:', data));
});


$(`.addPet`).click((event) => {
        event.preventDefault();
        let owner_id = $('#New-Pet-Owner').val();
        let name = $('#New-Pet-Name').val();
        let age = $('#New-Pet-Age').val();
        let type = $('#New-Pet-Type').val();
        let color = $('#New-Pet-Color').val();
        let newPet = {owner_id, name, age, type, color};
            fetch('/api/pets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(newPet),
            })
        .then((response) => response.json())
        .then((data) => console.log('Success:', data));
    });



$(`.clear`).click(() => {
    $('.ownersContainer').empty();
    console.log('empty')
});

$(`.clear-pets`).click(() => {
    $('.petsContainer').empty();
    console.log('empty')
});