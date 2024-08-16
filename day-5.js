// File: arrayOfObjects.js

console.log("Storing and Accessing Traditional Songs in Arrays");

// Factory Function
function createSong(title, artist, year) {
  return {
    title: title,
    artist: artist,
    year: year
  };
}

// Example 1: Create an array and populate it using the factory function
const songs = [];

// TODO 1: Use the factory function to create three song objects with the following details and add them to the array `songs`:
// 1. Title: 'Yesterday', Artist: 'The Beatles', Year: 1965
// 2. Title: 'What a Wonderful World', Artist: 'Louis Armstrong', Year: 1967
// 3. Title: 'Over the Rainbow', Artist: 'Judy Garland', Year: 1939
// 4. One of your own.

// Example: 
songs.push(createSong('Yesterday', 'The Beatles', 1965));
songs.push(createSong('What a Wonderful World', 'Louis Armstrong', 1967));
songs.push(createSong('Over the Rainbow', 'Judy Garland', 1967));
songs.push(createSong('No Rain', 'Blind Melon', 1993));

console.table(songs);


console.log("\nExample 2: Accessing Objects in the Array");

// TODO 2: Access the first, second, and third objects in the array `songs` and log:
// - The title and artist of the first song
// - The artist and year of the second song
// - The title and year of the third song

// Example
console.log("First song: Title = " + songs[0].title + ", Artist = " + songs[0].artist);
// TODO: Access and log the details of the rest of the songs in the array
console.log("Second song: Title = " + songs[1].title + ", Artist = " + songs[1].artist);
console.log("Third song: Title = " + songs[2].title + ", Artist = " + songs[2].artist);
console.log("Fourth song: Title = " + songs[3].title + ", Artist = " + songs[3].artist);

console.log("\nExample 3: Adding More Songs");

// TODO 3: Add two more song objects to the `songs` array using the factory function:
// 1. Title: 'My Way', Artist: 'Frank Sinatra', Year: 1969
// 2. Title: 'Imagine', Artist: 'John Lennon', Year: 1971

// Example 3: Adding More Songs
songs.push(createSong('My Way', 'Frank Sinatra', 1969));
songs.push(createSong('Imagine', 'John Lennon', 1971));
// TODO 3: Add two songs more of your own
songs.push(createSong('Barbie Girl', 'Aqua', 1997));
songs.push(createSong('Hanging by a Moment', 'Lifehouse', 2000));

console.table(songs);

console.log("\nExample 4: Accessing New Songs");

// TODO 4: Modify the details of the newly added songs in the array:

// Example:
// - Title and artist of the fourth song
songs[3].title = "Puff the Magic Dragon";
songs[3].artist = "Peter, Paul, and Mary";

console.log("Fourth song changed to: Title = " + songs[3].title + ", Artist = " + songs[3].artist);

// TODO 4:
// Modify the details of the fifth song
// - Artist and year of the fifth song
songs[4].artist = "Elvis Presley";
songs[4].year = 1973;



console.log("\nExample 5: Modifying the Array");

// Example 5: Modifying the Array
// Completely replace the details of the first song with the following:
// - Title: 'Eleanor Rigby'
// - Artist: 'The Beatles'
// - Year: 1966

songs[0] = createSong('Eleanor Rigby', 'The Beatles', 1966);

console.log("Updated first song: Title = " + songs[0].title + ", Artist = " + songs[0].artist + ", Year = " + songs[0].year);

// TODO 5: Completely Replace the details of the second song.

songs[1] = createSong('Brains', 'Voltaire', 2002);
console.log("Updated second song: Title = " + songs[1].title + ", Artist = " + songs[1].artist + ", Year = " + songs[1].year);

console.table(songs);
