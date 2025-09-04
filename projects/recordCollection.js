const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


const updateRecords=(records,id,prop,value)=>{
  //check if value is an empty string
  if(value === ''){
    delete records[id][prop];
  }
  //if value is not an empty string proceed with the following
  else{

    if(prop !== 'tracks'){
      records[id][prop] = value;
    }

    else{
      //
      if(!records[id].hasOwnProperty('tracks')){
        records[id].tracks = [];
      }

      records[id].tracks.push(value);
    }
  }
  
  return records;
}

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));

console.log(updateRecords(recordCollection, 2548, "artist", ""));
