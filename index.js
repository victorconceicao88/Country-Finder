document.getElementById("card").style.setProperty("display","none","important")


function search(){
    document.getElementById("card").style.setProperty("display","block","important")
    let country = document.getElementById("country").value
    let finalURL = `https://restcountries.com/v3.1/name/${country}?fullText=true`
    console.log(finalURL)

    fetch(finalURL)
    .then(function(response){
         return response.json()
    })
    .then(function(data){   // this will show up the information on Console but need to display on the website
        console.log(data[0])
        console.log(data[0].population)     
        console.log(data[0].capital[0])
        console.log(data[0].continents[0])

        let flag = document.getElementById("flag")             // this will bring eceryone from the Index to our Function
        let name = document.getElementById("name")
        let capital = document.getElementById("capital")
        let pop = document.getElementById("pop")
        let cont = document.getElementById("cont")

        name.innerHTML = country
        capital.innerHTML = data[0].capital[0]
        cont.innerHTML = data[0].continents[0]
        pop.innerHTML = data[0].population
        flag.src = data[0].flags.svg
 
    })
}
