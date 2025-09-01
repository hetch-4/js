//break is used to exit a loop early

for(let i=0; i<=20; i++){
  if(i == 5){
    break;
  }
  console.log(i);
}

//continue skips an iteration in the loop

for(let i=30; i<=40; i++){
  if(i == 35){
    //whent iteration i=35 is s met it skips and moves to the next iteration
    continue;
  }
  console.log(i);
}


//you can use labels to specify which statement you want to break or continue

outerloop: for(let i=0; i<3; i++){
  innerloop: for(let j=0; j<3; j++){
    if(i==1 && j==2){
      break outerloop;
    }
    console.log(`i: ${i}, j:${j}`);
  }
}
