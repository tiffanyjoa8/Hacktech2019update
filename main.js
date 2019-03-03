let data;

function hte(){
    console.log("fsdgrhj");
    fetch('https://api.fitbit.com/1/user/7CT2RJ/activities/heart/date/today/1d.json')
    .then(function(resp){
        return resp.json();
    }).then(function(resp){
        data = JSON.stringify(resp);

    })
}
function hhte(){
    console.log("fsdgrhj");
    document.getElementById('heh').innerHTML+=' <img src="https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/1536255525/mcdonalds-french-fries-FT-BLOG0818.jpg?itok=xbCzN-Xb">';
    document.getElementById('heh').innerHTML+= data;

}


