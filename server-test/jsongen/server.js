var http = require("http");
const util = require("util");
const fs = require("fs");
let dt = "";
let jsdt = {};
const readFile2 = util.promisify(fs.readFile);
readFile2("./elements.json", "utf8")
  .then((data) => {
    dt = data.toString();
    jsdt = JSON.parse(data);
    //console.log(typeof jsdt);
    return data.toString();
  })
  .catch((err) => {
    console.log(err);
  });
//create a server object:
http
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
      let rf= readFile2('./'+dtt.shortname+'.html', "utf8")
      .then((data) => {
        let dta = data.toString();
        let indst = dta.indexOf('Положение в таблице')
        let ln = 'Положение в таблице'.length
        let indend = indst + ln
        let indstop = dta.indexOf('<br>', indend)
        let fnstr = dta.slice(indend, indstop)
        dtt.pos = fnstr
        return { findres: fnstr, status: 200}
      })
      .catch((err) => {
        console.log(err);
        return { findres: 'not', status: 404}
      });
      res.write(dtt.pos+"");
      res.write(" ");
      console.log(rf)
    }
  // fs.writeFile('test.txt',JSON.stringify(jsdt), (err) => {
  // if (err) {
  //  console.error(err)
  //  return
  //}
  //���� ������� �������
    // res.write(JSON.stringify(jsdt)); //write a response to the client
    res.end(); //end the response
  })
  .listen(3000); //the server object listens on port 3000
