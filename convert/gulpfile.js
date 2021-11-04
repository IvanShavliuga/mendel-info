var gulp = require('gulp')
var replace = require('gulp-replace')
var concat = require('gulp-concat');
const fs = require("fs");
var rename = require("gulp-rename");
var convertEncoding = require('gulp-convert-encoding');

const files = [
"in/short/Ac.html",
"in/short/Ag.html",
"in/short/Al.html",
"in/short/Am.html",
"in/short/Ar.html",
"in/short/As.html",
"in/short/At.html",
"in/short/Au.html",
"in/short/B.html",
"in/short/Ba.html",
"in/short/Be.html",
"in/short/Bh.html",
"in/short/Bi.html",
"in/short/Bk.html",
"in/short/Br.html",
"in/short/C.html",
"in/short/Ca.html",
"in/short/Cd.html",
"in/short/Ce.html",
"in/short/Cf.html",
"in/short/Cl.html",
"in/short/Cm.html",
"in/short/Cn.html",
"in/short/Co.html",
"in/short/Cr.html",
"in/short/Cs.html",
"in/short/Cu.html",
"in/short/Db.html",
"in/short/Ds.html",
"in/short/Dy.html",
"in/short/Er.html",
"in/short/Es.html",
"in/short/Eu.html",
"in/short/F.html",
"in/short/Fe.html",
"in/short/Fl.html",
"in/short/Fm.html",
"in/short/Fr.html",
"in/short/Ga.html",
"in/short/Gd.html",
"in/short/Ge.html",
"in/short/H.html",
"in/short/He.html",
"in/short/Hf.html",
"in/short/Hg.html",
"in/short/Ho.html",
"in/short/Hs.html",
"in/short/I.html",
"in/short/In.html",
"in/short/Ir.html",
"in/short/K.html",
"in/short/Kr.html",
"in/short/La.html",
"in/short/Li.html",
"in/short/Lr.html",
"in/short/Lu.html",
"in/short/Lv.html",
"in/short/Mc.html",
"in/short/Md.html",
"in/short/Mg.html",
"in/short/Mn.html",
"in/short/Mo.html",
"in/short/Mt.html",
"in/short/N.html",
"in/short/Na.html",
"in/short/Nb.html",
"in/short/Nd.html",
"in/short/Ne.html",
"in/short/Nh.html",
"in/short/Ni.html",
"in/short/No.html",
"in/short/Np.html",
"in/short/O.html",
"in/short/Og.html",
"in/short/Os.html",
"in/short/P.html",
"in/short/Pa.html",
"in/short/Pb.html",
"in/short/Pd.html",
"in/short/Pm.html",
"in/short/Po.html",
"in/short/Pr.html",
"in/short/Pt.html",
"in/short/Pu.html",
"in/short/Ra.html",
"in/short/Rb.html",
"in/short/Re.html",
"in/short/Rf.html",
"in/short/Rg.html",
"in/short/Rh.html",
"in/short/Rn.html",
"in/short/Ru.html",
"in/short/S.html",
"in/short/Sb.html",
"in/short/Sc.html",
"in/short/Se.html",
"in/short/Sg.html",
"in/short/Si.html",
"in/short/Sm.html",
"in/short/Sn.html",
"in/short/Sr.html",
"in/short/Ta.html",
"in/short/Tb.html",
"in/short/Tc.html",
"in/short/Te.html",
"in/short/Th.html",
"in/short/Ti.html",
"in/short/Tl.html",
"in/short/Tm.html",
"in/short/Ts.html",
"in/short/U.html",
"in/short/V.html",
"in/short/W.html",
"in/short/Xe.html",
"in/short/Y.html",
"in/short/Yb.html",
"in/short/Zn.html",
"in/short/Zr.html",
]
gulp.task("getelect", function () {
  let out=[];
  for(let i=0; i<files.length; i++) {
    let arr = files[i].split('in/');
    let res = 'out/'+arr[1];
    gulp.src(files[i])
      .pipe(replace(/Электроотрицательность(.*?)<br>/g, function (match) {
        const postag = match.indexOf('Электроотрицательность')
        const posstartval = match.indexOf(':',postag)  
        const posendtag = match.indexOf('<br>',postag)  
        let val = match.slice(posstartval+1, posendtag-1).trim()
        if(val.indexOf('</I>',0)>-1||val.indexOf('</i>',0)>-1) val = val.slice(4,8).trim()
        if(val[1] === ',') val = val.split(',').join('.')
        let shortname = files[i].slice(9,11)
        if(shortname[1] === '.') shortname = shortname.split('.').join('')
        const idelem = list.findIndex((el)=>el.shortname === shortname)
        list[idelem].electronegativity = +val
        console.log(match)
let txt = 'export default {\nlist:[\n'
    for(el of list) {
      txt+='{\n'
      txt+='// '+el.index+': '+el.shortname+' '+el.rusname+'\n'
      for(prop in el) {
         if(typeof el[prop] === 'string') txt +=''+prop+':"'+el[prop]+'",\n'
         else txt +=''+prop+':'+el[prop]+',\n'
      }
      txt+='},\n'
    }
    txt+=']\n}'
    fs.writeFile('elements-res.js',txt,(err) => {
       if (err) {
        console.error(err)
        return
      }})
      }))
    .pipe(gulp.dest("out/short/"))
    
  }
})

gulp.task("getconfig", function () {
  let out=[];
  for(let i=0; i<files.length; i++) {
    let arr = files[i].split('in/');
    let res = 'out/'+arr[1];
    gulp.src(files[i])
      .pipe(replace(/Электронная конфигурация(.*?)<br>/g, function (match) {
        const postag = match.indexOf('Электронная конфигурация')
        const posstartval = match.indexOf(':',postag)  
        const posendtag = match.indexOf('<br>',postag)  
        let val = match.slice(posstartval+1, posendtag).trim()
        let shortname = files[i].slice(9,11)
        if(shortname[1] === '.') shortname = shortname.split('.').join('')
        const idelem = list.findIndex((el)=>el.shortname === shortname)
        if(val.indexOf('</I>',0)>-1||val.indexOf('</i>',0)>-1) val = val.slice(4)
        let tempconf = val.split('\n').join('').trim()
        let stlink = val.indexOf('[',0) 
        let endlink = val.indexOf(']',0)
        let link=val.slice(stlink, endlink+1)
        if(link.length > 4) {
          let cut = link.slice(val.indexOf('">',0), val.indexOf('</',0))
          if(cut[0] === '"' || cut[1] === '"') cut = cut.split('"').join('')
          if(cut[0] === '>' || cut[1] === '>') cut = cut.split('>').join('[')
          if(cut[cut.length-1] === '<') cut = cut.split('<').join(']')
          if(cut[cut.length-1] !== ']') cut = cut.trim() + ']'
          console.log(cut)
          const rep = val.indexOf(']',0)
          if (rep>-1) {
             tempconf = cut +  tempconf.slice(rep)
          }
        }else {
           console.log(link)
        }
        console.log('tempconf: '+tempconf)
        list[idelem].config = tempconf
let txt = 'export default {\nlist:[\n'
    for(el of list) {
      txt+='{\n'
      txt+='// '+el.index+': '+el.shortname+' '+el.rusname+'\n'
      for(prop in el) {
         if(typeof el[prop] === 'string') txt +=''+prop+':"'+el[prop]+'",\n'
         else txt +=''+prop+':'+el[prop]+',\n'
      }
      txt+='},\n'
    }
    txt+=']\n}'
    fs.writeFile('elements-res.js',txt,(err) => {
       if (err) {
        console.error(err)
        return
      }})
      }))
    .pipe(gulp.dest("out/short/"))
    
  }
})
gulp.task("concat", function(){
  gulp.src(files)
    .pipe(concat('out/full-elements.html'))
    .pipe(gulp.dest('out/result/'));
})
gulp.task('reptest', function () {
  gulp.src('in/full-elements.html')
    .pipe(replace('H1 align=center>', '<h1>'))
    .pipe(gulp.dest('out/'))
})
gulp.task('latname', function(){
   let txt = 'export default {\nlist:[\n'
   for (latobj of listlat) {
      txt+='{\n'
      txt+='// '+latobj.index+': '+latobj.shortname+' '+latobj.rusname+'\n'
      const id = list.findIndex((el)=>el.index===latobj.index)
      if('lat' in latobj) {
        list[id].lat = latobj.lat
      }
      for(prop in list[id]) {
         if(typeof list[id][prop] === 'string') txt +=''+prop+':"'+list[id][prop]+'",\n'
         else txt +=''+prop+':'+list[id][prop]+',\n'
      }
     
   }
 txt+='},\n'
txt+=']\n}'
    fs.writeFile('elements-res.js',txt,(err) => {
       if (err) {
        console.error(err)
        return
      }})
})
