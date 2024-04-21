// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.

// function dataReverse(data) {
//   //split array into chunks of 8
//   let arrays = [],
//     size = 8;

//   for (let i = 0; i < data.length; i += size)
//     arrays.push(data.slice(i, i + size));
//   //reverse the chunks
//   let revArr = [];
//   for (let j = 0; j < arrays.length; j++) {
//     revArr.push(arrays[j].reverse());
//   }
//   //join the reversed chunks into one array again
//   let endArr = revArr.join();
//   console.log(endArr);
// }
// dataReverse([
//   1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
//   1, 0, 1, 0, 1, 0,
// ]);

function dataReverse(data) {
  //split array into chunks of 8
  let arrays = [],
    size = 8;

  for (let i = 0; i < data.length; i += size)
    arrays.push(data.slice(i, i + size));
  //reverse the chunks
  arrays.reverse();
  //concatenate the reversed chunks into one array again
  let endArr = [].concat(...arrays);
  console.log(endArr);
}
