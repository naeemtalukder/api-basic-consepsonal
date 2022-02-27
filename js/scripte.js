const allPlayers = () => {
    document.getElementById('player-container').innerHTML = '';

    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    // console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => showAllPlayers(data.player));
    // console.log(searchValue);
};
const showAllPlayers = (players) => {
    for (const player of players) {
        const parent = document.getElementById('player-container');
        const div = document.createElement('div');
        div.innerHTML = ` <div class="card border p-5">
    <div class="pro-pic">
        <img class="w-75" src="${player.strThumb}" alt="">
    </div>
    <h3>Name: ${player.strPlayer}</h3>
    <h4>Country: ${player.strNationality}</h4>
    <p></p>
    <div class="allBtn">
        <button class="btn btn-danger">Delete</button>
        <button onclick="detials('${player.idPlayer}')" class="btn btn-success">Detials</button>
    </div>
</div>`
        parent.appendChild(div);
        // console.log(player);
    }
};
const detials = (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => setDetials(data.players[0]));
}
const setDetials = (info) => {
    if (info.strGender == "Male") {
        document.getElementById('male').style.display = 'block';
        document.getElementById('female').style.display = 'none';
    }
    else {
        document.getElementById('male').style.display = 'none';
        document.getElementById('female').style.display = 'block';
    }
    document.getElementById('detials-container').innerHTML = `
    <div>
    <img src="" alt="">
    <h3>Name: ${info.strPlayer}</h3>
</div>
    `
    console.log(info);
}