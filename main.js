const row = document.querySelector('.row');

fetch('https://restcountries.com/v3.1/all/')
    .then(date => date.json())
    .then(result => {
        // console.log(result.slice(0,3))

        result.map((el,idx) => {
            row.innerHTML += `
                
                <div class="block col-4">
                    <h2>${idx +1}</h2>
                    <img class="flag" src="${el.flags.png}" alt="${el.flags.alt}">
                    <h3>Аты: ${el.name.common}</h3>
                    <h4>Борбору: ${el.capital}</h4>
                    <h4>Регион: ${el.region}</h4>
                    <h5>Калкынын саны: ${el.population}</h5>
                    <h5>Аянты: ${el.area}м²</h5>
                    <a href="${el.maps.googleMaps}" target="_blank">
                        <button class="btn btn-outline-light">Карта</button>
                    </a>
                </div>
                
            `

        })

    })