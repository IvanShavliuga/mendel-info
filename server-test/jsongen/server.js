var http = require("http");
const util = require("util");
const fs = require("fs");
let dt = "";
let jsdt = {};
let resarr = [];
let res=""
console.log('test node')
const readFile2 = util.promisify(fs.readFile);
const writeFile2 = util.promisify(fs.writeFile);
readFile2("./elements.js", "utf8")
  .then((data) => {
    dt = data.toString();
    // jsdt = JSON.parse(data);
    let arr = dt.split('[')[1]
    let objs = arr.split('{')
    for (let o of objs) {
    	if (o.length)
    	  resarr.push('\nmelting: 0, bolling: 0, '+o)
    }
    console.log(objs.length)
     res = 'export default { list: [\n{'+resarr.join('\n{')+'\n]}'
console.log(res.length)
	 fs.writeFile('elements-res.js',res,(err) => {
       if (err) {
        console.error(err)
        return
      }})
    return data.toString();
  })
  .catch((err) => {
    console.log(err);
  });

//create a server object:
/* http
  .createServer(function (req, res) {
    let c = 0;

    for (let dtt of jsdt.list) {
      // console.log(dtt);
      const s = dtt.link.split("lat_");
      if (s.length === 2) {
        const s1 = s[1].split("/");
        // res.write(s1[0]);
        c++;
        dtt.lat = s1[0];
      } else {
        // res.write("none");
        dtt.lat = "none";
      }
      //let rf = await findPosition('./'+dtt.shortname+'.html')
      let rf= readFile2('./short/'+dtt.shortname+'.html', "utf8")
      .then((data) => {
        let dta = data.toString();
        let indst = dta.indexOf('Положение в таблице')
        let indend = dta.indexOf('<br>',indst)
        let ln = 'Положение в таблице'.length
        let fnstr = dta.slice(indst+ln+5, indend)
        dtt.pos=fnstr
        indst = dta.indexOf('Положение в таблице')
        indend = dta.indexOf('<br>',indst)
        ln = 'Положение в таблице'.length
        fnstr = dta.slice(indst+ln+5, indend)
        dtt.pos=fnstr
        return { findres: fnstr, status: 200}
      })
      .catch((err) => {
        console.log(err);
        return { findres: 'not', status: 404}
      });
      fs.writeFile('elements-res.json',JSON.stringify(jsdt),(err) => {
       if (err) {
        console.error(err)
        return
      }})
      res.write(dtt.pos+"");
      res.write(" ");
      console.log(rf)
    }
      res.end(); //end the response
  })
  .listen(3000); //the server object listens on port 3000
 */