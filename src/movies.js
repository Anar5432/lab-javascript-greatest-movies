function getAllDirectors(moviesArray) {
  const directors=  moviesArray.map(movie => movie.director);
  return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
 
  const  howManyMovies = moviesArray
  .filter((item) => item.genre.includes("Drama") && item.director === "Steven Spielberg");
   if (howManyMovies === null ){
    return 0;
  }
  return howManyMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(moviesArray.length === 0){
    return 0;
    
  }

  const average = moviesArray.reduce((sum, item) => sum + (item.score || 0), 0)/moviesArray.length;
  return Math.round(average * 100) / 100;[0]
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((items)=> items.genre.includes("Drama"));
  if(dramaMovies.length === 0){
    return 0;
}
 const dramaMoviesScore = dramaMovies.reduce((sum,items)=> sum + (items.score || 0), 0 )/dramaMovies.length;
 return Math.round(dramaMoviesScore * 100) / 100;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = [...moviesArray];
  moviesCopy.sort((a,b) => {
    if (a.year < b.year){return -1; }
    if (a.year > b.year){return 1; }
    if (a.year === b.year){
      return a.title.localeCompare(b.title);
    }
});
  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesAlphabetically = [...moviesArray];
  moviesAlphabetically.sort((a,b) => a.title.localeCompare(b.title));
  if (moviesAlphabetically.length > 20){
    return moviesAlphabetically.slice(0,20).map(movie => movie.title);
  }else {
    return moviesAlphabetically.map(movie => movie.title);  
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // 1. Map over moviesArray directly
  return moviesArray.map((movie) => {    
    // 2. Create the copy of the current movie object inside the loop
    const movieCopy = { ...movie };
    
    let hours = 0;
    let minutes = 0;
    const duration = movieCopy.duration;

    if (duration.includes('h')) {
      const parts = duration.split('h');
      hours = parseInt(parts[0]);
      if (parts[1] && parts[1].includes('min')) {
        minutes = parseInt(parts[1]);
      }
    } else if (duration.includes('min')) {
      minutes = parseInt(duration);
    }
    
    // 3. Set the new duration
    movieCopy.duration = (hours * 60) + minutes;
    
    // 4. Return the copy so it gets added to the new array
    return movieCopy; 
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
//function bestYearAvg(moviesArray) {}
