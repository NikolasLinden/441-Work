var http = require('http');
var fs = require('fs');
var url = require('url');
const parse = require('node-html-parser').parse;
var carryover = "";

http.createServer(function (request, response) {
   var pathname = url.parse(request.url).pathname;
   const queryObject = url.parse(request.url, true).query;

   console.log("Request for " + pathname + " received.");
   if(pathname == "/index2.html")
   {
      readQueryString(queryObject);
   }
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);

         response.writeHead(404, {
            'Content-Type': 'text/html'
         });
      } else {


         response.writeHead(200, {
            'Content-Type': 'text/html'
         });
         response.write(data.toString());
      }

      response.end();
   });
}).listen(8081);
console.log("Listening on Port 8081");

function readQueryString(queryObject) {

   if (queryObject != null) {
      let fName = queryObject.firstName;
      let lName = queryObject.lastName;
      let age = queryObject.personage;
      let color = queryObject.favoritecolor;
      if (fName != undefined && lName != undefined) {
         carryover = fName + " " + lName + "<br>" + "Your age is" + " " + age + "<br>" + "Your favorite color is" + " " + color;
         updateFile(carryover);
      }

   }
}

function updateFile(carryover)
{

   fs.readFile('index2.html', 'utf8', (err,html)=>{
      if(err){
         throw err;
      }

      let root = parse(html);
      let mySpan = root.querySelector('span');
      mySpan.set_content(carryover);
      var writerStream = fs.createWriteStream("index2.html");
      writerStream.write(root.toString(), 'UTF8');
      writerStream.end();
      writerStream.on('finish', function () {
         console.log("Write completed.");
      });

      writerStream.on('error', function (err) {
         console.log(err.stack);
      });
    });

}
