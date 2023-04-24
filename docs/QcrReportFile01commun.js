
function traiterBr(monObj) {
   var lsBlocArg = "";
   var lnArg     = 0;
   if (monObj.args!=undefined && monObj.args!=null ) {
      lnArg = monObj.args.length;
      for (var liInd=0; liInd<lnArg; liInd++) { 
         if (0<lsBlocArg.length) lsBlocArg=lsBlocArg.concat("<br />");
         lsBlocArg = lsBlocArg.concat(monObj.args[liInd]);
      }
   } else {
   }
   var lsStr = "<tr><td><a name='"+monObj.label+"'>"+monObj.label+"</a></td><td>"+lsBlocArg+"</td><td>"+monObj.detail+"</td><td><a href='#"+monObj.jumplabel+"'>"+monObj.jumplabel+"</a></td></tr>";
   return (lsStr);
}
function traiterCall(monObj) {
   var lsStr     = "";
   var lsBlocArg = "";
   var lnArg     = 0;
   if (typeof(monObj.args)!='undefined' && monObj.args!=null ) {
      lnArg = monObj.args.length;
      for (var liInd=0; liInd<lnArg; liInd++) { 
          if (0<lsStr.length) lsStr=lsStr.concat(",");
          lsStr = lsStr.concat(monObj.args[liInd]);
          if (0<lsBlocArg.length) lsBlocArg=lsBlocArg.concat("<br />");
          lsBlocArg = lsBlocArg.concat(monObj.args[liInd]);
      }
   } else {
   }

   var lsSuite= "";
   if (0<lnArg) {lsSuite="<td align='center'>|<br />v</td>";} else {lsSuite="<td></td>";}
   var lsColor= "style='color:black'";
   var lsSup  = "";
   if (0<=monObj.risk.indexOf('O')) {lsColor="style='color:red'";lsSup = "<sup>output</sup>";}
   if (0<=monObj.risk.indexOf('I')) {lsColor="style='color:red'";lsSup = "<sup>input</sup>";}
   if (0<=monObj.risk.indexOf('S')) {lsColor="style='color:green'";lsSup = "<sup>secure</sup>";}
   var lsInst = monObj.inst;
   if (30<lsInst.length) {
      var liIndI = lsInst.indexOf('.',30);
      if (0<liIndI) {
         lsInst = lsInst.substring(0,liInd)+'<br />'+lsInst.substring(liInd);
      }
   }
   return(
        ""
        +"<tr>"
        +"<td><a name='"+monObj.label+"'>"+monObj.label+"</a></td>"
        +"<td>"+lsBlocArg+"</td>"+lsSuite+"<td></td>"
        +"</tr>"
        +"<tr>"
        +"<td></td>"
        +"<td></td>"+"<td><span "+lsColor+">"+lsInst+" "+monObj.detail.replaceAll('<','&lt;').replaceAll('>','&gt;')+lsSup+"</<span></td>"+"<td></td>"
        +"</tr>"
        +"<tr>"
        +"<td></td>"
        +"<td></td>"+"<td align='right'>+----&gt;</td>"+"<td>"+((typeof(monObj.cible)!='undefined' && monObj.cible!=null && monObj.cible!='')? monObj.cible : "void")+"</td>"
        +"</tr>"
    );
}
function traiterLd(monObj) {
   var lsStr = "<tr><td><a name='"+monObj.label+"'>"+monObj.label+"</a></td><td>"+monObj.inst+"</td><td>"+(null!=monObj.valeur && 'undefined'!=monObj.valeur && ''!=monObj.valeur ? monObj.valeur+"." : "")+(null!=monObj.variable && 'undefined'!=monObj.variable && ''!=monObj.variable ? monObj.variable : "")+"</td><td>"+"</td></tr>";
   return (lsStr);
}
function traiter(monObj) {
   if (null!=monObj.nature) {
     switch (monObj.nature) {
      case "opcodebr"     : return(traiterBr  (monObj));
      case "opcodecall"   : return(traiterCall(monObj));
      case "opcodeisinst" : return(traiterCall(monObj));
      case "opcodenewobj" : return(traiterCall(monObj));
      case "opcodeoper"   : return(traiterCall(monObj));
      case "opcodestloc"  : return(traiterCall(monObj));
     }
   }
   switch (monObj.inst) {
case "ldloc.0": 
case "ldloc.1": 
case "ldloc.2": 
case "ldloc.3": 
case "ldloc.s": 
case "ldlocs.s": 
case "ldarg.0": 
case "ldarg.1": 
case "ldarg.2": 
case "ldarg.3": 
case "ldarg.s": 
case "ldfld": 
case "ldelem": 
case "ldsfld": 
case "ldsflda": 
case "ldstr": 
case "ldnull": 
case "ldtoken": 
case "stloc.0": 
case "stloc.1": 
case "stloc.2": 
case "stloc.3": 
case "stloc.s": 
case "stfld"  : 
case "stsfld" : 
// Cas du bytecode 
case "getfield": 
case "aaload": 
case "aload": 
case "aload_0": 
case "aload_1": 
case "aload_2": 
case "aload_3": 
case "baload": 
case "caload": 
case "daload": 
case "dload": 
case "dload_0": 
case "dload_1": 
case "dload_2": 
case "dload_3": 
case "faload": 
case "fload": 
case "fload_0": 
case "fload_1": 
case "fload_2": 
case "fload_3": 
case "iaload": 
case "iload": 
case "iload_0": 
case "iload_1": 
case "iload_2": 
case "iload_3": 
case "laload": 
case "lload": 
case "lload_0": 
case "lload_1": 
case "lload_2": 
case "lload_3": 
case "saload": 
case "ldc": 
case "aconst_null": 
case "dconst_0": 
case "dconst_1": 
case "fconst_0": 
case "fconst_1": 
case "fconst_2": 
case "iconst_m1": 
case "iconst_0": 
case "iconst_1": 
case "iconst_2": 
case "iconst_3": 
case "iconst_4": 
case "iconst_5": 
case "lconst_0": 
case "lconst_1": 
case "bipush": 
                   return(traiterLd(monObj));
default : 
        var lsStr = "<tr><td><a name='"+monObj.label+"'>"+monObj.label+"</a></td><td>"+monObj.inst+"</td><td>"+((monObj.detail!=null && typeof(monObj.detail)!='undefined') ? monObj.detail.replaceAll('<','&lt;').replaceAll('>','&gt;') : "")+"</td><td></td></tr>";
   return (lsStr);
}
}

function traiterVariableHisto(theList)
{
   var lsStr ="";
   lsStr +="<table border='1'>";
   var liMax = theList.length
   for (var liInd=0; liInd<liMax; liInd++) {
      lsStr +="<tr><td>Variable ";
      var leVar = theList[liInd].variable;
      lsStr +=leVar+"</td><td></td><td></td></tr>";
      var liMaxHisto = theList[liInd].histo.length
      lsStr +="<tr><td></td><td>Label</td><td>Detail</td></tr>";
      for (var liIndH=0; liIndH<liMaxHisto; liIndH++) {
         var leVarLabel  = theList[liInd].histo[liIndH].label;
         var leVarDetail = theList[liInd].histo[liIndH].detail;
         lsStr +="<tr><td></td><td>"+leVarLabel+"</td><td>"+leVarDetail+"</td></tr>";
      }
   }
   lsStr +="</table>";
   return lsStr;
}
function combo(thelist)
{
  var idx     = thelist.selectedIndex;
  var content = thelist.options[idx].innerHTML;
  console.log("combo "+content);
  charger(content);
}
function chargerTheDivClasse(avClasse) {
   var theDivClasse = document.getElementById("thedivClasse");  
   var lsStr ="";
   for (var liIndi=0; liIndi<maData.methodes.length; liIndi++) {
      var lvMethode = maData.methodes[liIndi];
      if (avClasse == lvMethode.classe && maData.methodes[monNumMethode].methode==lvMethode.methode) {
         lsStr += "<br />";
         lsStr += "<table border='1'>";
         lsStr += "<tr><td><h3><a name='methodsignature'>Method signature</a></h3></td></tr>";
         lsStr +=   "<tr><td><table border=\"1\">";
         lsStr +=           "<tr><td>Classe "+lvMethode.classe+"</td><td></td><td></td></tr>";
         lsStr +=           "<tr><td></td><td>methode "+lvMethode.methode.replace('<','&lt;').replace('>','&gt;')+"</td><td></td></tr>";
         lsStr +=           "<tr><td></td><td></td><td>args "+lvMethode.args+"</td></tr>";
         lsStr +=           "</table></td></tr>";
         if (typeof(lvMethode.locals)!='undefined' && lvMethode.locals!=null){
            lsStr += "<tr><td><br /></td></tr>";
            lsStr += "<tr><td><table border=\"1\">";
            lsStr += "<tr><td>locals</td><td></td></tr>";
            var lnNb = lvMethode.locals.length;
            for (var liInd=0; liInd<lnNb; liInd++) {
               lsStr+="<tr><td></td><td>"+lvMethode.locals[liInd]+"</td></tr>";
            }
            lsStr += "</table></td></tr>"
         }
         lsStr +=   "<tr><td><br /></td></tr>";
         lsStr += "<tr><td><h3><a name='ancre01'>Intermediate Language code sequence</a></h3></td></tr>";
         lsStr += "<tr><td><table border=\"1\">";
         if (typeof(lvMethode.corps)!='undefined' && lvMethode.corps!=null){
            var lnNb = lvMethode.corps.length;
            for (var liInd=0; liInd<lnNb; liInd++) {
               lsStr=lsStr.concat(traiter(lvMethode.corps[liInd]));
            }
         }
         lsStr +=          "</table></td>"
         lsStr +=   "</tr>";
         lsStr += "</table>";
         lsStr += "<tr><td></td></tr>";
         lsStr += "<tr><td><h3><a name='ancre02'>Sequential Dataflow for method</a></h3></td></tr>";
         lsStr += "<table border='1'>";
         lsStr +=   "<tr><td>Dataflow for method "+lvMethode.methode.replaceAll('<','&lt;').replaceAll('>','&gt;')+":</td></tr>";
         lsStr +=   "<tr><td><div id='sankey_multiple"+liIndi+"' style='width: 1300px;";
         lsStr +=   "'></div></td></tr>";
         lsStr += "</table>";
         lsStr += "<tr><td></td></tr>";
         lsStr += "<tr><td><h3><a name='ancre03'>Dataflow network for method</a></h3></td></tr>";
         lsStr += "<table border='1'>";
         lsStr +=   "<tr><td>Dataflow network for method "+lvMethode.methode.replaceAll('<','&lt;').replaceAll('>','&gt;')+":</td></tr>";
         lsStr +=   "<tr><td><div id='mynetwork_dataflow"+liIndi+"' style='width: 1300px; height:500px;";
         lsStr +=   "'></div></td></tr>";
         lsStr += "</table>";
         lsStr += "<tr><td></td></tr>";
         lsStr += "<tr><td><h3><a name='ancre04'>Control flow for each variable</a></h3></td></tr>";
         lsStr += "<table border='1'>";
         lsStr +=   "<tr><td>Controlflow for each variable</td></tr>";
         lsStr +=   "<tr><td>"+traiterVariableHisto(lvMethode.histoVariables)+"</td></tr>";
         lsStr += "</table>";
         lsStr += "<tr><td></td></tr>";
         lsStr += "<tr><td><h3><a name='ancre05'>Controlflow for method</a></h3></td></tr>";
         lsStr += "<table border='1'>";
         lsStr +=   "<tr><td>Controlflow for method "+lvMethode.methode.replaceAll('<','&lt;').replaceAll('>','&gt;')+":</td></tr>";
         lsStr +=   "<tr><td><div id='mynetwork"+liIndi+"' style='width: 1300px;";
         lsStr +=   "'></div></td></tr>";
         lsStr += "<tr><td></td></tr>";
         lsStr += "</table>";
         lsStr += "<tr><td><h3><a name='ancre06'>Sequential controlflows</h3></a></td></tr>";
         lsStr += "<table border='1'>";
         lsStr +=   "<tr><td>Sequential controlflows for method "+lvMethode.methode.replaceAll('<','&lt;').replaceAll('>','&gt;')+":</td></tr>";
         lsStr +=   "<tr><td>"+getCalculer(lvMethode.classe, lvMethode.methode)+"</td></tr>";
         lsStr += "</table>";
      }
   }
   var theDivClasse = document.getElementById("theDivClasse");  
   theDivClasse.innerHTML = lsStr;
}
function traiterClasseData(liIndi, laArray) {
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'From');
   data.addColumn('string', 'To');
   data.addColumn('number', 'Weight');
   data.addColumn({type: 'string', role: 'tooltip'});
   data.addRows(laArray);

   // Set chart options
   var options = {
      height:30*laArray.length,
      width: 1000,
      sankey: { node: { nodePadding: 30 } , link: { colorMode : 'source'}},
   };

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'+liIndi));
   chart.draw(data, options);
}
function traiterGetOptions() {
   var options = {
      interaction  : { hover   : true } , 
      nodes: {
         scaling: {
            min: 16,
            max: 32
         }
      },
      edges: {
         color: 'gray',
         smooth: false,
         arrows: 'to'
      },
      physics:{
         barnesHut:{gravitationalConstant:-40000},
         stabilization: {iterations:2500}
      },
      groups: {
         'start': {
            shape: 'square',
            color: '#109618' // green
         },
         'secure': {
            shape: 'square',
            color: '#109618' // green
         },
         'callmethod': {
            shape: 'square',
            color: '#2B7CE9' // blue
         },
         'end': {
            shape: 'triangle',
            color: '#C5000B' // red
         },
         'none': {
            shape: 'dot',
            color: '#2B7CE9' // blue
         },
         'input': {
            shape: 'triangleDown',
            color: '#C5000B' // red
         },
         'output': {
            shape: 'triangle',
            color: '#C5000B' // red
         }
     } // fin groups
   }; // fin options
   return options;
};
function traiterClasseNodesEdges(liIndi, nodes, edges) {
   // create a network
   // Pour network
   var lsNom='mynetwork'+liIndi;
   var container = document.getElementById(lsNom);
   if (null==container) {
      return;
   }
   var data = {
      nodes: nodes,
      edges: edges
   };
   var options = traiterGetOptions();
   var network = new vis.Network(container, data, options);
   // force la hauteur cf https://github.com/almende/vis/issues/358 
   container.style.height = '500px';
   network.redraw();
}
function traiterClasseNodesEdgesDataflow(liIndi, Dataflownodes, Dataflowedges, abTout) {
   // Pour network dataflow
   if (abTout) {
      var lsNom='mynetwork_dataflow'+liIndi;
   } else {
      var lsNom='mynetwork_dataflow_seq'+liIndi;
   }
   var Dataflowcontainer = document.getElementById(lsNom);
   if (null==Dataflowcontainer) {
      return;
   }
   var Dataflowdata = {
      nodes: Dataflownodes,
      edges: Dataflowedges
   };
   var options = traiterGetOptions();
   var Dataflownetwork = new vis.Network(Dataflowcontainer, Dataflowdata, options);
   // force la hauteur cf https://github.com/almende/vis/issues/358 
   Dataflownetwork.redraw();
}
function getInst(asLabel, aeListe) {
   //Cherche asLabel pour asLabel==aeListe.label
   for (var liInd=0; liInd<aeListe.length; liInd++) {
      if(asLabel==aeListe[liInd].label) {
         return aeListe[liInd];
      }
   }
}
function traiterClasse(liIndi, lvClasse) {
   console.log("traiterClasse01 start");
   if (typeof(lvClasse.corps)!='undefined' && lvClasse.corps!=null) {
      traiterClasseDetail(liIndi, lvClasse, lvClasse.corps, true);
   }
   if (typeof(lvClasse.listeDeListeLabel)!='undefined' && lvClasse.listeDeListeLabel!=null) {
      for (var liIndSeq=0; liIndSeq<lvClasse.listeDeListeLabel.length; liIndSeq++) {
         var lvSeq = lvClasse.listeDeListeLabel[liIndSeq];
         if (typeof(lvSeq)!='undefined' && lvSeq!=null) {
            // A traiter
            //console.log("traiterClasse02 sequence "+lvSeq.noseq+" "+lvSeq.contenu);
            var laArrayC = new Array();
            for (var liIndC=0; liIndC<lvSeq.contenu.length; liIndC++) {
               var leInst = getInst(lvSeq.contenu[liIndC], lvClasse.corps);
               //console.log("traiterClasse03 leInst.label "+leInst.label+" inst "+leInst.inst);
               laArrayC.push(leInst);
            }
            traiterClasseDetail(liIndSeq, lvClasse, laArrayC, false);
         }
      }
   }
   console.log("traiterClasse99 end");
}
function traiterClasseDetail(liIndi, lvClasse, lvListeInst, abTout) {
   var lbPremier       = true;
   var laArray         = new Array();
   var lsJumpPrecedent = '';
   var nodes           = [];
   var nodesId         = [];
   var edges           = [];
   // Pour Dataflow
   var Dataflownodes   = [];
   var DataflownodesId = [];
   var Dataflowedges   = [];
      console.log('traiterClasseDetail01 lvClasse '+lvClasse+' lvListeInst.length : '+lvListeInst.length);
      for (var liInd=0; liInd<lvListeInst.length; liInd++) {
         var lvInst = lvListeInst[liInd];
         if (typeof(lvInst.args)!='undefined' && lvInst.args!=null) {
            //console.log('traiterClasseDetail02 lvInst.label : '+lvInst.label+' lvInst.inst '+lvInst.inst+' lvInst.args '+lvInst.args);
            var lsCible = lvInst.cible;
            var lsMet   = lvInst.detail;
            if (lsCible=="" || lsCible===undefined || lsCible===null) lsCible='(void) '+lsMet+' id'+liInd;
            // Pour dataflow sur methode
            var lsGroup= "callmethod";
            if (0<=lvInst.risk.indexOf('O')) {lsGroup="output";}
            if (0<=lvInst.risk.indexOf('I')) {lsGroup="input";}
            if (0<=lvInst.risk.indexOf('S')) {lsGroup="secure";}
            var ltTab;
            ltTab = {id  : lsMet+liInd   , label : lsMet  , group : lsGroup };
            if (DataflownodesId.indexOf(ltTab.id)<0) { Dataflownodes.push(ltTab); DataflownodesId.push(ltTab.id);}
            Dataflownodes[DataflownodesId.indexOf(ltTab.id)].title = '<div>['+lvInst.label+'] : '+lvInst.detail+'<sup>'+lsGroup+'</sup></div>';
            //console.log('traiterClasseDetail01 ajout Dataflownodes : '+ltTab.id);
            // Pour dataflow sur cible
            var lsGroup= "none";
            var ltTab;
            ltTab = {id  : lsCible   , label : lsCible  , group : lsGroup };
            if (DataflownodesId.indexOf(ltTab.id)<0) { Dataflownodes.push(ltTab); DataflownodesId.push(ltTab.id);}
            //console.log('traiterClasseDetail02 ajout Dataflownodes : '+ltTab.id);
            Dataflowedges.push({from : lsMet+liInd, to : lsCible});
            //console.log('traiterClasseDetail03 ajout from : '+lsMet+liInd+' to : '+lsCible);
            // Pour dataflow sur les args
            //console.log('traiterClasseDetail03a lvInst.args '+lvInst.args);
            if (typeof(lvInst.args)!='undefined' && lvInst.args!=null &&0<lvInst.args.length) {
               var lnArg = lvInst.args.length;
               for (var liIndArg=0; liIndArg<lnArg; liIndArg++) { 
                  var lsArg = lvInst.args[liIndArg];
                  if (lsArg=="" || lsArg===undefined || lsArg===null) lsArg='argrien'+liInd+'_'+liIndArg;
                  var lsNom = lsMet+" arg "+liIndArg;
                  laArray.push([lsArg, lsCible,1, lsNom]);
                  // Pour dataflow sur arg
                  var lsGroup= "none";
                  var ltTab;
                  if (0==lsArg.indexOf('ldarg')) { // Si argument alors ajt in liInd pour separer les cas
                     ltTab = {id  : lsArg+liInd   , label : lsArg  , group : lsGroup };
                  } else {
                     ltTab = {id  : lsArg         , label : lsArg  , group : lsGroup };
                  }
                  if (DataflownodesId.indexOf(ltTab.id)<0) { Dataflownodes.push(ltTab); DataflownodesId.push(ltTab.id);}
                  if (0==lsArg.indexOf('ldarg')) { // Si argument alors ajt in liInd pour separer les cas
                     Dataflowedges.push({from : lsArg+liInd, to : lsMet+liInd});
                  } else {
                     Dataflowedges.push({from : lsArg, to : lsMet+liInd});
                  }
                  //console.log('traiterClasseDetail04 ajout from : '+ltTab.id+' to : '+lsMet+liInd);
               }
            } else {
               var lsNom = 'argrien'+liInd;
               laArray.push([lsNom, lsCible,1, lsMet]);
               // Pour dataflow
               var lsGroup= "none";
               var ltTab;
               ltTab = {id  : lsNom   , label : lsNom  , group : lsGroup };
               if (DataflownodesId.indexOf(ltTab.id)<0) { Dataflownodes.push(ltTab); DataflownodesId.push(ltTab.id);}
               //console.log('traiterClasseDetail05 ajout Dataflownodes : '+ltTab.id);
               Dataflowedges.push({from : lsNom, to : lsCible});
               //console.log('traiterClasseDetail06 ajout from : '+lsNom+' to : '+lsCible);
            }
         } // fin if call
         // Modif pour jumps
         if (lvInst.label!='       ' && lvInst.label!=lsJumpPrecedent) {
            var lsGroup= "none";
            if (lvInst.inst!=null && lvInst.inst=='call') {lsGroup="callmethod";}
            if (0<=lvInst.risk.indexOf('O'))              {lsGroup="output";}
            if (0<=lvInst.risk.indexOf('I'))              {lsGroup="input";}
            if (0<=lvInst.risk.indexOf('S'))              {lsGroup="secure";}
            var ltTab;
            ltTab = {id  : lvInst.label   , label : lvInst.label  , group : lsGroup };
            if (nodesId.indexOf(ltTab.id)<0) { nodes.push(ltTab); nodesId.push(ltTab.id);}
            if ("none"==lsGroup || "callmethod"==lsGroup) {lsGroup="";}
            if (null!=lvInst.detail) { 
               nodes[nodesId.indexOf(ltTab.id)].title = '<div>['+lvInst.label+'] : '+lvInst.detail+'<sup>'+lsGroup+'</sup></div>';
            }
            // premiere ligne
            if (lbPremier) {
               nodes[nodesId.indexOf(ltTab.id)].group = 'start';
               lbPremier = false;
            }
            // instruction return
            if (null!=lvInst.detail && lvInst.detail.endsWith(' ret')) { 
               nodes[nodesId.indexOf(ltTab.id)].group = 'end';
            }
            edges.push({from: lsJumpPrecedent, to    : lvInst.label});
            if (null!=lvInst.jumplabel) { 
               ltTab = {id : lvInst.jumplabel, label : lvInst.jumplabel};
               if (nodesId.indexOf(ltTab.id)<0) { nodes.push(ltTab); nodesId.push(ltTab.id);}
               edges.push({from: lvInst.label, to : lvInst.jumplabel});
            }
            lsJumpPrecedent = lvInst.label;
            if (null!=lvInst.detail && (lvInst.detail=='br.s' || lvInst.detail=='br' || lvInst.detail.endsWith(' ret'))) lsJumpPrecedent = '';
         }
      } // fin for 
   if (abTout==true) {
      //console.log("traiterClasseDetail07 laArray.length "+laArray.length);
      if (0<laArray.length) {
         traiterClasseData(liIndi, laArray);
      }
      traiterClasseNodesEdges        (liIndi, nodes        , edges);
   }
   traiterClasseNodesEdgesDataflow(liIndi, Dataflownodes, Dataflowedges, abTout);
   console.log("traiterClasseDetail99 end ");
}
function charger(avClasse) {
   console.log("charger01 start classe "+avClasse);
   chargerTheDivClasse(avClasse);
   for (var liIndi=0; liIndi<maData.methodes.length; liIndi++) {
      var lvMethode = maData.methodes[liIndi];
      if (avClasse == lvMethode.classe && maData.methodes[monNumMethode].methode==lvMethode.methode) {
            traiterClasse(liIndi, lvMethode);
      }
   }
   patience.innerHTML='';
   console.log("charger99 end");
}

function initChart() {
   console.log("initChart01 start");
   google.charts.load("current", {packages:["sankey"]}).then(initChartEnd);
   console.log("initChart99 end");
}
function initChartEnd() {
   console.log("initChartEnd01 start");
   console.log("initChartEnd02 monNumMethode "+monNumMethode);
   charger(maData.methodes[monNumMethode].classe);
   console.log("initChartEnd99 end");
}

function getCalculer(asClasse, asMethode) {
   console.log("getCalculer01 start asClasse "+asClasse+" asMethode "+asMethode);
   var lsRes = "";
   for (var liIndi=0; liIndi<maData.methodes.length; liIndi++) {
      var lvMeth = maData.methodes[liIndi];
      if (asClasse == lvMeth.classe && asMethode==lvMeth.methode) {
         console.log("getCalculer02 methode "+lvMeth.methode);
         lsRes = getCalculerClasse(liIndi, lvMeth);
      }
   }
   console.log("getCalculer99 end");
   return lsRes;
}
// Variable globale
function getCalculerClasse(liIndi, lvMeth) {
   var lsRes = "";
   if (typeof(lvMeth.listeDeListeLabel)!='undefined' && lvMeth.listeDeListeLabel!=null) {
       lsRes+="<table border='1'>";
       var lsCh    = "";
       var lsChA   = "";
       var lsRisk  = "";
       var lsLabel = "";
       for (var liIndLigne=0; liIndLigne<lvMeth.listeDeListeLabel.length; liIndLigne++) {
          var leVar   = lvMeth.listeDeListeLabel[liIndLigne];
          var lsColor = '';
          // Seq green si Ok
          if (0<=leVar.criteres[3].critereresultat.indexOf('Ok')) lsColor ="style='color : green'";
          if (0<=leVar.criteres[3].critereresultat.indexOf('Ko')) lsColor ="style='color : red'";
          lsRes+="<tr><td "+lsColor+">Cas"+leVar.noseq+"</td><td>";
          lsRes+="<table border='1'><tr><td>No seq</td><td>Libelle</td><td>Resultat</td></tr>";
          for (var liIndLigneA=0; liIndLigneA<leVar.criteres.length; liIndLigneA++) {
             var leVarFor = leVar.criteres[liIndLigneA];
             lsRes+="<tr>";
             lsRes+="<td>"+leVarFor.criterenoseq+"</td>";
             lsRes+="<td>"+leVarFor.criterelibelle+"</td>";
             if (0<=leVarFor.critereresultat.indexOf('Ok')) lsRes+="<td  style='color : green'>"+leVarFor.critereresultat+"</td></tr>";
             if (0<=leVarFor.critereresultat.indexOf('Ko')) lsRes+="<td  style='color : red'>"+leVarFor.critereresultat+"</td></tr>";
          }
          lsRes+="</table>";
          lsRes+="</td></tr>";
          lsRes+="<tr><td>Nb of steps "+leVar.contenu.length+"</td><td style='width: 1100px;'>";
          for (var liIndLigneA=0; liIndLigneA<leVar.contenu.length; liIndLigneA++) {
             lsChA   = leVar.contenu[liIndLigneA];
             var liInd = -1;
             if (0!=lsChA.indexOf(' ')) {
                for (var liI=0; liI<lvMeth.corps.length; liI++) {
                   if (lvMeth.corps[liI].label == lsChA) {
                      liInd = liI;break;
                   }
                }
             }
             lsRisk = '';
             if (0<=liInd) lsRisk = lvMeth.corps[liInd].risk;
             var lsForme = "<a href='#"+lsChA+"'>"+lsChA+"</a>"    ;
             if        (lsRisk == 'I  ') {
                lsCh="<span style='color:red'>"+lsForme+"<sup>input</sup></span>";
             } else if (lsRisk == '  O') {
                lsCh="<span style='color:red'>"+lsForme+"<sup>output</sup></span>";
             } else if (lsRisk == ' S ') {
                lsCh="<span style='color:green'>"+lsForme+"<sup>secure</sup></span>";
             } else {
                lsCh="<span style='color:black'>"+lsForme+"</span>";
             }
             lsRes+=lsCh+' ';
          }
          lsRes+="</td></tr>";
          lsRes+="<tr><td></td>";
          lsRes+="<td><div id='mynetwork_dataflow_seq"+leVar.noseq+"' style='width: 1100px; height: 200px;'>a remplir dataflow sequence</div>";
          lsRes+="</td></tr>";
      }
      lsRes+="</table>";
   }
   return lsRes;
}

