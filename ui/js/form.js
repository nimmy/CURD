'use-strict';

function formSubmit(e) {
    e.preventDefault();
    let formCollection = [];
    // let jsonObj = {};
    let inputArray = document.querySelectorAll('.form-control');
    for (let index = 0; index < inputArray.length; index++) {
        const element = inputArray[index];
        // inputArray[index].id = inputArray[index].value;
        const keyValue = formCollection.push({'key': element.id, 'value': element.value});
        // {"title":"Ducati Bike", "price": "30000", "image": "https://bd.gaadicdn.com/processedimages/ducati/panigale-v4/source/panigale-v4630dac4c64957.jpg", "details":"Ducati Panigale V4"}
    }
    // formCollection.push(jsonObj);
    console.log(formCollection);
    var jsonData = {};
    formCollection.forEach(function(column) 
    {
        var columnName = column.key;
        jsonData[columnName] = column.value;
    });
    // viewData.employees.push(jsonData);
    console.log(jsonData);

    const fetchPost = fetch('http://localhost:4000/api/products', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    });
    fetchPost.then((req, res) => {
        console.log(req, res);
    });
}





let formSubmitCta = document.querySelector('.form-submit');
console.log(formSubmitCta);
formSubmitCta.addEventListener('click', formSubmit);