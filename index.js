// let song1 = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=Humble' 
// let song2 = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=N95' 
// let song3 = "https://striveschool-api.herokuapp.com/api/deezer/search?q=Sing About Me, I'm dying of Thirst"
// let song4 = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=King Kunta' 
// let song5 = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=Family Ties' 
// let song6 = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=Humble' 
// let song7 = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=Humble' 

// const takeDeezer1 = async function(s1, s2, s3, s4, s5, s6, s7) {
//     for(i=0; i<4; i++) {
//         let song = ""
//         if(i === 0) {
//             song = song1
//         } else if (i === 1) {
//             song = song2
//         } else if (i === 2) {
//             song = song3
//         } else if(i === 3){
//             song = song4
//         } else if(i === 4){
//             try{
//                 let response = await fetch(song)
//             if (response.ok) {
//                 let data = await response.json()
//                 let song = data.data.filter(song => song.artist.name === "Baby Keem")
//                 let row = document.querySelector(".riga2")
//                 row.innerHTML += `
//                 <div class="card mb-3" style="max-width: 540px;">
//                 <div class="row g-0">
//                     <div class="col-md-4">
//                     <img src="${song[0].album.cover}" class="img-fluid rounded-start" alt="...">
//                     </div>
//                     <div class="col-md-8">
//                     <div class="card-body">
//                         <h5 class="card-title">Card title</h5>
//                         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//                 `
//         }
//     } catch(errror) {
//         console.log("E' presente un errore di tipo: ", error)
//     }
//         try{
//             let response = await fetch(song)
//         if (response.ok) {
//             let data = await response.json()
//             let song = data.data.filter(song => song.artist.name === "Kendrick Lamar")
//             let row = document.querySelector(".riga1")
            
//             row.innerHTML += `
//             <div class="col col-3">
//                 <div class="card h-100 justify-space-between" >
//                 <img src="${song[0].album.cover}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                 <h5 class="card-title">${song[0].artist.name}</h5>
//                 <p class="card-text">${song[0].title}</p>
//                 <button onclick="deleteCard(event)" class="btn btn-primary">Delete</button>
//                 </div>
//                 </div>
//             </div>
        
//         ` 
            
//         }
//     }catch(error) {
//         console.log("E' presente un errore di tipo: ", error)
//     }
    
// }

//         }
    
// takeDeezer1()

// const takeDeezer = async function(s1, s2, s3, s4, s5, s6, s7, s8) {
//     for(i=0; i<5; i++) {
        
        
//         if(i === 0) {
//             songName = s1
//         } else if (i === 1) {
//             songName = s2
//         } else if (i === 2) {
//             songName = s3
//         } else if (i === 3){
//             songName = s4
//         } else if (i === 4){
//             songName = s5
//         } else if (i === 5){
//             songName = s6
//         } else if (i === 6){
//             songName = s7
//         } else if (i === 7){
//             songName = s8
//         }
//         try{
//             let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + songName )
//         if (response.ok) {
//             let data = await response.json()
//             if(i < 4 ){
//                 let song = data.data.filter(song => song.artist.name === "Kendrick Lamar")
//                 let row = document.querySelector(".riga1")
                
//                 row.innerHTML += `
//                 <div class="col col-3">
//                     <div class="card h-100" >
//                     <img src="${song[0].album.cover}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                     <h5 class="card-title">${song[0].artist.name}</h5>
//                     <p class="card-text">${song[0].title}</p>
//                     <button onclick="deleteCard(event)" class="btn btn-primary button">Delete</button>
//                     </div>
//                     </div>
//                 </div>
            
//             ` 
            
//         } else if (i === 4){
//             let song = data.data.filter(song => song.artist.name === "Baby Keem")
//                 let row = document.querySelector(".riga2")
                
//                 row.innerHTML += `
//                 <div class="card mb-3">
//                     <div class="row g-0">
//                         <div class="col-md-6">
//                         <img src="${song[0].album.cover}" class="img-fluid rounded-start" alt="...">
//                         </div>
//                         <div class="col-md-6">
//                         <div class="card-body">
//                             <h5 class="card-title">${song[0].artist.name}</h5>
//                             <p class="card-text">${song[0].title}</p>
//                             <button onclick="deleteCard(event)" class="btn btn-primary">Delete</button>
//                         </div>
//                         </div>
//                     </div>
//                 </div>
            
//             ` 
//         } else {

//         }
//             }
            
//     }catch(error) {
//         console.log("E' presente un errore di tipo: ", error)
//     }
    
// }
// }


//takeDeezer("Humble", "N95", "Sing About Me, I'm dying of Thirst", "King Kunta", "Family Ties", "In Utero")

const takeDeezer1 = async function(...rest) {
    for(let i=0; i<8; i++) {
        try{
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + rest[i] )
        if (response.ok) {
            let data = await response.json()
            if(i < 4 ){
                let song = data.data.filter(song => song.artist.name === "Kendrick Lamar")
                let row = document.querySelector(".riga1")
                row.innerHTML += `
                <div class="col col-3">
                    <div class="card h-100" >
                    <img src="${song[0].album.cover}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <span class="rank d-none">${song[0].rank}</span>
                    <h5 class="card-title">${song[0].artist.name}</h5>
                    <p class="card-text titleP">${song[0].title}</p>
                    <button onclick="deleteCard(event)" class="btn btn-primary button">Delete</button>
                    </div>
                    </div>
                </div>
            
            ` 
            console.log(song[0].title + song[0].rank + [i])
        } else if (i === 4){
            let searchedSong = data.data.filter(searchedSong => searchedSong.artist.name === "Baby Keem")
                let row = document.querySelector(".riga2")
                
                row.innerHTML += `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-6">
                        <img src="${searchedSong[0].album.cover}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-6">
                        <div class="card-body">
                        <span class="rank d-none">${searchedSong[0].rank}</span>
                            <h5 class="card-title">${searchedSong[0].artist.name}</h5>
                            <p class="card-text titleP">${searchedSong[0].title}</p>
                            
                        </div>
                        </div>
                    </div>
                </div>
            
            ` 
            console.log(searchedSong[0].title + searchedSong[0].rank + [i])
        } else if (i === 5) {
            let searchedSong = data.data.filter(searchedSong => searchedSong.artist.name === rest[i+3])
            let carouselInner = document.querySelector(".carousel-inner")
                      carouselInner.innerHTML += `
                      <div class="carousel-item active">
                      <span class="rank d-none">${searchedSong[0].rank}</span>
                      <img src="${searchedSong[0].album.cover}" class="d-block w-100 firstImage" alt="...">
                         <div class="carousel-caption d-none d-md-block">
                         <h5>${searchedSong[0].artist.name}</h5>
                          <p class="firstP text-dark titleP">${searchedSong[0].album.title}</p>
                      </div> `
                      console.log(searchedSong[0].title + searchedSong[0].rank + [i])
        } else {
            let searchedSong = data.data.filter(searchedSong => searchedSong.artist.name === rest[i+3])
            let carouselInner = document.querySelector(".carousel-inner")
                      carouselInner.innerHTML += `
                      <div class="carousel-item">
                      <span class="rank d-none">${searchedSong[0].rank}</span>
                      <img src="${searchedSong[0].album.cover}" class="d-block w-100 firstImage" alt="...">
                         <div class="carousel-caption d-none d-md-block">
                         <h5>${searchedSong[0].artist.name}</h5>
                          <p class="firstP text-dark titleP">${searchedSong[0].album.title}</p>
                      </div> `
                      console.log(searchedSong[0].title + searchedSong[0].rank + [i])
        }
    }
            
        } catch(error) {
            console.log("E' presente un errore di tipo: ", error)
        }
            }
            
    }
    




takeDeezer1("Humble", "N95", "Sing About Me, I'm dying of Thirst", "King Kunta", "Family Ties", "In Utero", "The Melodic Blue", "Davide", "Nirvana", "Baby Keem", "Gemitaiz")


// ALERT

const showRank = () => {
    
    let rankSpan = document.querySelectorAll(".rank")
    let arrayOfSpan = []
    rankSpan.forEach(span => {
    arrayOfSpan.push(span.innerHTML)
})
    let title = document.querySelectorAll(".titleP")
    let arrayOfTitle = []
    title.forEach(title => {
    arrayOfTitle.push(" " + title.innerHTML)
    })

    for (j = 0; j < arrayOfSpan.length; j++) {
        for (i = 0; i < arrayOfSpan.length; i ++) {
          if (arrayOfSpan[i] > arrayOfSpan[i + 1]) {
            let firstRank = arrayOfSpan[i] 
            let firstRankIndex = arrayOfSpan.indexOf(firstRank)
            let secondRank = arrayOfSpan[i + 1] 
            let secondRankIndex = arrayOfSpan.indexOf(secondRank)
            let firstTitle = arrayOfTitle[i] 
            let firstTitleIndex = arrayOfTitle.indexOf(firstTitle)
            let secondTitle = arrayOfTitle[i + 1] 
            let secondTitleIndex = arrayOfTitle.indexOf(secondTitle)
            arrayOfSpan.splice(firstRankIndex, 1, secondRank)
            arrayOfSpan.splice(secondRankIndex, 1, firstRank)
            arrayOfTitle.splice(firstTitleIndex, 1, secondTitle)
            arrayOfTitle.splice(secondTitleIndex, 1, firstTitle)
          
        }
    }
}
console.log(arrayOfTitle)

arrayOfTitle[0][0].slice(0, 1)
let alertP = document.querySelector(".alertP")
alertP.innerHTML = arrayOfTitle

let alert = document.querySelector(".alert")
alert.style.opacity = 1


console.log(alertP.innerHTML)

console.log(arrayOfSpan)
console.log(arrayOfTitle)

}


// MODAL
const titleModal = () => {
    let title = document.querySelectorAll(".titleP")
    let arrayOfTitle = []
    title.forEach(title => {
    arrayOfTitle.push(" " + title.innerHTML)
    })
let modal = document.querySelector(".modal-body")
modal.innerHTML = arrayOfTitle
}

const deleteCard = (event) => {
      event.target.parentNode.parentNode.remove()
}
// counter = 0
// const deleteCard = (event) => {
//     event.target.parentNode.parentNode.style.display = "none"
//     if (counter === 0) {
//         let col = document.querySelectorAll(".col-3")
//         col.forEach(col => {
//         col.classList.add("col-4")
//     })
//     } else if (counter === 1) {
//         let col = document.querySelectorAll(".col-4")
//         col.forEach(col => {
//         col.classList.add("col-6")
//     })
//     } else {
//         let col = document.querySelectorAll(".col-6")
//         col.forEach(col => {
//         col.classList.add("col-12")
//     })
// }

    
//     counter ++
// }




        
