// creating array using literal style
// 


let num4 =[10,20,30,40,50];
//splice : using this method we can add, remove elemnets inbetween array
document.write("<br/> "+num4);
document.write("<br/> 0 position value "+num4[0]);
document.write("<br/> 1 position value "+num4[1]);
// num4.splice(1,1);
// num4.splice(1,2);
// num4.splice(1,1,200);

// //add 200 in 1 index position
// num4.splice(1,0,200);

num4.splice(1,0,111,222,333);
document.write("<br/> "+num4);