window.onload = function(){
  var reader = new FileReader();
  reader.readAsText('town_list.txt', "Shift_JIS");

  let data = fs.readFileSync('town_list.txt','shift_jis');	
  console.log("World");
}