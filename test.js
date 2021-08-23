window.onload = function(){
  var req = new XMLHttpRequest();//オンラインでしか動かない
  req.open("get", "town_list.txt", true); // アクセスするファイルを指定
  req.send(null); // HTTPリクエストの発行
  req.onload = function(){
	console.log(req.responseText);
  }	
  console.log("End.");
}
