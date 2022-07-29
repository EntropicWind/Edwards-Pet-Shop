

$(`.owners`).click(() => {
    $(".ownersContainer").empty();
    $.get("/api/owner", (result) => {
        for(i = 0; i < result.length; i++) {
            let{name, address, phone_number } = result[i];
            $(`<h2>Owner: ${name}<h2>`).appendTo(".ownersContainer");
            $(`<h5>Address: ${address}<h5>`).appendTo(".ownersContainer");
            $(`<h5>Address: ${phone_number}<h5>`).appendTo(".ownersContainer");
        }
    })
})
$(`.pets`).click(() => {
    $(".petsContainer").empty();
    $.get("/api/pets", (result) => {
        for(i = 0; i < result.length; i++) {
            let{name, age, type, color } = result[i];
            $(`<h2>Pet Name: ${name}<H2>`).appendTo(".petsContainer");
            $(`<h5>Age: ${age}<h5>`).appendTo(".petsContainer");
            $(`<h5>Type: ${type}<h5>`).appendTo(".petsContainer");
            $(`<h5>Color: ${color}<h5>`).appendTo(".petsContainer");
        }
    })
})


$(`.clear`).click(() => {
    $('.ownersContainer').empty();
    console.log('empty')
});

$(`.clear-pets`).click(() => {
    $('.petsContainer').empty();
    console.log('empty')
});