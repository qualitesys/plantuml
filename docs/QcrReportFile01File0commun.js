console.log('leInstrStr main01 start js des instructions');
var leEntry=[];
var lien = window.location;
var url = new URL(lien);
var searchParams = new URLSearchParams(url.search);
var monNumFile = searchParams.get('numFile');
var monNumClasse = searchParams.get('numClasse');
var monNumMethode = searchParams.get('numMethode');
var monNumSeq = searchParams.get('numSeq');
if (null==monNumSeq) monNumSeq = 1;
var paramResourceKey = searchParams.get('resourceKey');
var paramProjectKey = searchParams.get('id');
console.log('avant declaration function calculerUrl');
function calculerUrl(asNature,asSource) {
   console.log('calculerUrl01 window.location.pathname '+window.location.pathname);
   console.log('calculerUrl02 asNature                 '+asNature);
   console.log('calculerUrl03 asSource                 '+asSource);
   var url      = '';
   var urlsuite = '';
   if (0==asSource.indexOf('http')) {
      url = asSource;
   } else if (paramProjectKey!=null) {
      if (0<asSource.indexOf('?')) {
         asSource=asSource.replace("?","&");
      }
      // asNature : 'link' interne au site ou resource appele par api
      if (asNature=='resource') {
         url = "/api/hello4mvnsite/getResource";
      } else {
         url      = window.location.pathname;
         urlsuite = "id="+paramProjectKey+"&qualifier=TRK&";
      }
      url += "?"+urlsuite+"projectKey="+paramProjectKey+"&resourceKey="+paramResourceKey+"/"+asSource;
   } else {
      url = asSource;
   }
   console.log('calculerUrl98 url                     '+url);
   return url;
}
console.log('apres declaration function calculerUrl');
function genererBloc00() {
   var lsStr ='';
   if (typeof(maDataBlocs)!='undefined'&& typeof(maDataBlocs.data00)!='undefined') {
      leEntry.push('Files')
      lsStr+='<h3><a name="files">Files</a></h3><br />';
      lsStr+='<a href="'+calculerUrl('link',maDataBlocs.data00.fic1)+'">'+maDataBlocs.data00.texte+'</a>';
      lsStr+='<br /><a href="'+calculerUrl('link',maDataBlocs.data00.fic2)+'">'+'Link to XML File 0kb'+'</a>';
      lsStr+='';
      var theDivBloc00 = document.getElementById("theDivBloc00");  

      theDivBloc00.innerHTML = lsStr;

   } else {
   }
}
function genererBloc01() {
   var lsStr ='';
   if (typeof(maDataBlocs)!='undefined'&& typeof(maDataBlocs.data01)!='undefined'  && 0<maDataBlocs.data01.length) {
      lsStr+='<h3><a name="ancestor">Ancestor</a></h3><br />';
      leEntry.push('Ancestor')
      lsStr+='<table border="0" class="bodyTable">';
      lsStr+='<tr>';
      lsStr+='<th>Ancestor class</th>';
      lsStr+='<th>Children class</th>';
      lsStr+='</tr>';
      for (var liInd=0; liInd<maDataBlocs.data01.length; liInd++) {
         var monBloc = maDataBlocs.data01[liInd];
         if (0==(liInd%2)) lsStr+='<tr class="b">';

         if (1==(liInd%2)) lsStr+='<tr class="a">';

         lsStr+='<td>'+monBloc.ligne.c1+'</td>';
         lsStr+='<td>'+monBloc.ligne.c2+'</td>';
         lsStr+='</tr>';
      }
      lsStr+='</table><br />';
      var theDivBloc01 = document.getElementById("theDivBloc01");  

      theDivBloc01.innerHTML = lsStr;

   } else {
   }
}
function genererBloc02() {
   var lsStr ='';
   if (typeof(maDataBlocs)!='undefined'&& typeof(maDataBlocs.data02)!='undefined'  && 0<maDataBlocs.data02.length) {
      lsStr+='<h3><a name="complexity_of_methods">Complexity of methods</a></h3><br />';
      leEntry.push('Complexity of methods')
      for (var liInd=0; liInd<maDataBlocs.data02.length; liInd++) {
         var monBloc = maDataBlocs.data02[liInd].classe;
         lsStr+='<table border="0" class="bodyTable">';
         lsStr+='<tr class="b">';
         lsStr+='<th>Module / class or interface : '+monBloc.nomclasse+'</th>';
         if (null!=monBloc.link && monBloc.link!='') {
            lsStr+='<th><a href="'+calculerUrl('link',monBloc.link)+'">Link to details</a></th></tr></table>';
         } else {
            lsStr+='<th></th></tr></table>';
         }
         lsStr+='<table border="1" class="bodyTable">';
         lsStr+='<tr class="b">';
         lsStr+='<th>Nature</th>';
         lsStr+='<th>Name of function/method</th>';
         lsStr+='<th>McCABE complexity</th>';
         lsStr+='<th>Lines of code / NCSS</th></tr>';
         var mesMeth = monBloc.methodes;
         for (var liIndJ=0; liIndJ<mesMeth.length; liIndJ++) {
            if (0==(liIndJ%2)) lsStr+='<tr class="b">';
            if (1==(liIndJ%2)) lsStr+='<tr class="a">';
            lsStr+='<td>'+mesMeth[liIndJ].ligne.c1+'</td>';
            if (mesMeth[liIndJ].ligne.c5link) {
               lsStr+='<td><a href ="'+calculerUrl('link',mesMeth[liIndJ].ligne.c5link)+'">'+mesMeth[liIndJ].ligne.c2+'</a></td>';
            } else {
               lsStr+='<td>'+mesMeth[liIndJ].ligne.c2+'</td>';
            }
            lsStr+='<td align="right">'+mesMeth[liIndJ].ligne.c3+'</td>';
            lsStr+='<td align="right">'+mesMeth[liIndJ].ligne.c4+'</td>';
            lsStr+='</tr>';
         }
         lsStr+='</table><br />';
      }
      //console.log("genererBloc02 lsStr "+lsStr);

      var theDivBloc02 = document.getElementById("theDivBloc02");  

      theDivBloc02.innerHTML = lsStr;

   } else {
   }
}
function genererBloc03() {
   console.log("genererBloc03() lireFichier start");

   var lsStr ='';
   if (typeof(maDataBlocs)!='undefined'&& typeof(maDataBlocs.data03)!='undefined' && maDataBlocs.data03.length>0) {
      if (paramProjectKey!=null) {

         lsStr+='<img src="'+maDataBlocs.data03[0].ligneplantuml+'b64'+'" alt = "Hardcopy image">';

      } else {

         lsStr+='<object data="'+maDataBlocs.data03[0].ligneplantuml+'" alt = "Hardcopy image">';

      }

      var theDivBloc03 = document.getElementById("theDivBloc03");  

      theDivBloc03.innerHTML = lsStr;

   } else {

   }

}
function genererBloc04() {
   var lsStr ='';
   if (typeof(maDataBlocs)!='undefined') {
      //console.log("genererBloc04 lsStr "+lsStr);

      var theDivBloc04 = document.getElementById("theDivBloc04");  

      theDivBloc04.innerHTML = lsStr;

   } else {
   }
}
function genererBloc05() {
   var lsStr ='';
   if (typeof(maDataBlocs)!='undefined' && typeof(maDataBlocs.data05)!='undefined' && 0<maDataBlocs.data05.length) {
      lsStr+='<h3><a name="table_of_webtrend">Table of Webtrend</a></h3><br />';
      leEntry.push('Table of Webtrend')
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>WebTrend tags</th>';
      lsStr+='</tr>';
      lsStr+='</table>';
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>line</th>';
      lsStr+='<th>onlick</th>';
      lsStr+='<th>id</th>';
      lsStr+='<th>title</th>';
      lsStr+='<th>class</th>';
      lsStr+='<th>href</th>';
      lsStr+='<th>target</th>';
      lsStr+='<th>tmstagpage</th>';
      lsStr+='<th>tmstagzone</th>';
      lsStr+='<th>tmstagnom</th>';
      lsStr+='</tr>';
      for (var liInd=0; liInd<maDataBlocs.data05.length; liInd++) {
         var monBloc = maDataBlocs.data05[liInd];
         if (0==(liInd%2)) lsStr+='<tr class="b">';

         if (1==(liInd%2)) lsStr+='<tr class="a">';

         lsStr+='<td><a href ="'+calculerUrl('link',monBloc.ligne.c1link)+'">'+monBloc.ligne.c1+'</a></td>';
         lsStr+='<td>'+monBloc.ligne.cwebtrend_onclick+'</td>';
         lsStr+='<td>'+monBloc.ligne.cwebtrend_id+'</td>';
         lsStr+='<td>'+monBloc.ligne.cwebtrend_title+'</td>';
         lsStr+='<td>'+monBloc.ligne.cwebtrend_class+'</td>';
         lsStr+='<td>'+monBloc.ligne.cwebtrend_href+'</td>';
         lsStr+='<td>'+monBloc.ligne.cwebtrend_target+'</td>';
         lsStr+='<td>'+monBloc.ligne.cwebtrend_tmstagpage+'</td>';
         lsStr+='<td>'+monBloc.ligne.cwebtrend_tmstagzone+'</td>';
         lsStr+='<td>'+monBloc.ligne.cwebtrend_tmstagnom+'</td>';
         lsStr+='</tr>';
      }
      lsStr+='</table><br />';
      var theDivBloc05 = document.getElementById("theDivBloc05");  

      theDivBloc05.innerHTML = lsStr;

   } else {
   }
}
function genererBloc06() {
   var lsStr ='';
   if (typeof(maDataBlocs)!='undefined' && typeof(maDataBlocs.data06)!='undefined' && 0<maDataBlocs.data06.length) {
      lsStr+='<h3><a name="table_of_html_form">Table of Html Form</a></h3><br />';
      leEntry.push('Table of Html Form')
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>Html form</th>';
      lsStr+='</tr>';
      lsStr+='</table>';
      for (var liInd=0; liInd<maDataBlocs.data06.length; liInd++) {
         var monBloc = maDataBlocs.data06[liInd].htmlform;
         if (0==(liInd%2)) lsStr+='<tr class="b">';
         if (1==(liInd%2)) lsStr+='<tr class="a">';
         lsStr+='<table border="1" class="bodyTable">';
         lsStr+='<tr class="b">';
         lsStr+='<th>line</th>';
         lsStr+='<th>name</th>';
         lsStr+='<th>method</th>';
         lsStr+='<th>action</th>';
         lsStr+='<th>id</th>';
         lsStr+='</tr>';
         lsStr+='<td><a href ="'+calculerUrl('link',monBloc.form_linelink)+'">'+monBloc.form_line+'</a></td>';
         lsStr+='<td>'+monBloc.form_name+'</td>';
         lsStr+='<td>'+monBloc.form_method+'</td>';
         lsStr+='<td>'+monBloc.form_action+'</td>';
         lsStr+='<td>'+monBloc.form_id+'</td>';
         lsStr+='</tr>';
         lsStr+='</table>';
         lsStr+='<table border="1" class="bodyTable">';
         lsStr+='<tr class="b">';
         lsStr+='<th>inputs for the form</th>';
         lsStr+='</tr>';
         lsStr+='</table>';
         if (monBloc.form_inputs!='undefined') {
            if (0==(liInd%2)) lsStr+='<tr class="b">';
            if (1==(liInd%2)) lsStr+='<tr class="a">';
            lsStr+='<table border="1" class="bodyTable">';
            lsStr+='<tr class="b">';
            lsStr+='<th>line</th>';
            lsStr+='<th>type</th>';
            lsStr+='<th>name</th>';
            lsStr+='<th>id</th>';
            lsStr+='<th>value</th>';
            lsStr+='</tr>';
            for (var liIndJ=0; liIndJ<monBloc.form_inputs.length; liIndJ++) {
               var monBlocInput = monBloc.form_inputs[liIndJ].form_input;
               if (0==(liInd%2)) lsStr+='<tr class="b">';
               if (1==(liInd%2)) lsStr+='<tr class="a">';
               lsStr+='<td><a href ="'+calculerUrl('link',monBlocInput.input_linelink)+'">'+monBlocInput.input_line+'</a></td>';
               lsStr+='<td>'+monBlocInput.input_type+'</td>';
               lsStr+='<td>'+monBlocInput.input_name+'</td>';
               lsStr+='<td>'+monBlocInput.input_id+'</td>';
               lsStr+='<td>'+monBlocInput.input_value+'</td>';
               lsStr+='</tr>';
               if (monBlocInput.input_encodee!='undefined' && null!=monBlocInput.input_encodee) {
                  lsStr+='<tr>';
                  lsStr+='<td></td>';
                  lsStr+='<td></td>';
                  lsStr+='<td>Taille encodee '+monBlocInput.input_encodee+'</td>';
                  lsStr+='<td>Taille decodee '+monBlocInput.input_decodee+'</td>';
                  lsStr+='<td>'+monBlocInput.input_dec+'</td>';
                  lsStr+='</tr>';
               }
            }
            lsStr+='</table>';
         }
         lsStr+='<br />';
      }
      var theDivBloc06 = document.getElementById("theDivBloc06");  

      theDivBloc06.innerHTML = lsStr;

   } else {
   }
}
function genererBloc07() {
   var lsStr ='';
   if (typeof(maDataBlocs)!='undefined' && typeof(maDataBlocs.data07)!='undefined' && 0<maDataBlocs.data07.length) {
      lsStr+='<h3><a name="cms_mention_reference">CMS Mention Reference</a></h3><br />';
      leEntry.push('CMS Mention Reference')
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>CMS:MentionReference</th>';
      lsStr+='</tr>';
      lsStr+='</table>';
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>line</th>';
      lsStr+='<th>IndentifiantMention</th>';
      lsStr+='<th>ID</th>';
      lsStr+='<th>AssociatedMentionsLegalesControlID</th>';
      lsStr+='</tr>';
      for (var liInd=0; liInd<maDataBlocs.data07.length; liInd++) {
         var monBloc = maDataBlocs.data07[liInd];
         if (0==(liInd%2)) lsStr+='<tr class="b">';

         if (1==(liInd%2)) lsStr+='<tr class="a">';

         lsStr+='<td><a href ="'+calculerUrl('link',monBloc.ligne.c1link)+'">'+monBloc.ligne.c1+'</a></td>';
         lsStr+='<td>'+monBloc.ligne.c2+'</td>';
         lsStr+='<td>'+monBloc.ligne.c3+'</td>';
         lsStr+='<td>'+monBloc.ligne.c4+'</td>';
         lsStr+='</tr>';
      }
      lsStr+='</table>';
      var theDivBloc07 = document.getElementById("theDivBloc07");  

      theDivBloc07.innerHTML = lsStr;

   } else {
   }
}
function genererBloc08() {
   var lsStr ='';
   if (typeof(maDataBlocs)!='undefined' && typeof(maDataBlocs.data08)!='undefined' && 0<maDataBlocs.data08.length) {
      lsStr+='<h3><a name="table_of_headers">Table of Headers</a></h3><br />';
      leEntry.push('Table of Headers')
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>Headers</th>';
      lsStr+='</tr>';
      lsStr+='</table>';
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>size</th>';
      lsStr+='<th>content</th>';
      lsStr+='</tr>';
      for (var liInd=0; liInd<maDataBlocs.data08.length; liInd++) {
         var monBloc = maDataBlocs.data08[liInd];
         if (0==(liInd%2)) lsStr+='<tr class="b">';

         if (1==(liInd%2)) lsStr+='<tr class="a">';

         lsStr+='<td>'+monBloc.ligne.c1+'</td>';
         lsStr+='<td>'+monBloc.ligne.c2+'</td>';
         lsStr+='</tr>';
      }
      lsStr+='</table><br />';
      var theDivBloc08 = document.getElementById("theDivBloc08");  

      theDivBloc08.innerHTML = lsStr;

   } else {
   }
}
function genererBloc09() {
   var lsStr ='';
   if (typeof(maDataBlocs)!='undefined' && typeof(maDataBlocs.data09a)!='undefined' && 0<maDataBlocs.data09a.length) {
      lsStr+='<h3><a name="security_risk_sequences">Security risk sequences</a></h3><br />';
      leEntry.push('Security risk sequences')
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>Security risk sequences</th></tr>';
      lsStr+='</table>';
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>Seq</th>';
      lsStr+='<th>Nb of steps</th>';
      lsStr+='<th>Nb of risks</th>';
      lsStr+='<th>First and last step, or first and last method</th>';
      lsStr+='<th>Secu 1</th>';
      lsStr+='<th>Secu 2</th>';
      lsStr+='<th>Secu 3</th>';
      lsStr+='<th>Secu 4</th>';
      lsStr+='<th>Sanitized ?</th></tr>';
      for (var liInd=0; liInd<maDataBlocs.data09a.length; liInd++) {
         var monBloc = maDataBlocs.data09a[liInd];
         var lsColor;if (monBloc.ligne.secu4!='Ok') lsColor = ' style="color : red"'; else lsColor='';
         if (0==(liInd%2)) lsStr+='<tr class="b"'+lsColor+'>';

         if (1==(liInd%2)) lsStr+='<tr class="a"'+lsColor+'>';

         lsStr+='<td><a href="'+calculerUrl('link',monBloc.ligne.c1bis)+'">No '+monBloc.ligne.c2+'</a></td>';
         lsStr+='<td>'+monBloc.ligne.c3+'</td>';
         lsStr+='<td>'+monBloc.ligne.c4+'</td>';
         if (monBloc.ligne.c6.length>0) {
            lsStr+='<td style="'+monBloc.ligne.c6+'">'+monBloc.ligne.c5+'</td>';
         } else {
            lsStr+='<td>'+monBloc.ligne.c5+'</td>';
         }
         var lsColor1;if (monBloc.ligne.secu1!='Ok') lsColor1 = ' style="color : red"'; else lsColor1='';
         var lsColor2;if (monBloc.ligne.secu2!='Ok') lsColor2 = ' style="color : red"'; else lsColor2='';
         var lsColor3;if (monBloc.ligne.secu3!='Ok') lsColor3 = ' style="color : red"'; else lsColor3='';
         var lsColor4;if (monBloc.ligne.secu4!='Ok') lsColor4 = ' style="color : red"'; else lsColor4='';
         lsStr+='<td'+lsColor1+'>'+monBloc.ligne.secu1+'</td>';
         lsStr+='<td'+lsColor2+'>'+monBloc.ligne.secu2+'</td>';
         lsStr+='<td'+lsColor3+'>'+monBloc.ligne.secu3+'</td>';
         lsStr+='<td'+lsColor4+'>'+monBloc.ligne.secu4+'</td>';
         lsStr+='<td>'+monBloc.ligne.c7+'</td>';
         lsStr+='</tr>';
      }
      lsStr+='</table><br />';
      var theDivBloc09 = document.getElementById("theDivBloc09");  

      theDivBloc09.innerHTML = lsStr;

   } else {
   }
}
function genererBloc10() {
   var lsStr ='';
   if (typeof(maDataBlocs)!='undefined'&& typeof(maDataBlocs.data10)!='undefined'  && 0<maDataBlocs.data10.length) {
      lsStr+='<h3><a name="security_risk_on_methods_for_binary">Security risk on methods for binary</a></h3><br />';
      leEntry.push('Security risk on methods for binary')
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>Method</th>';
      lsStr+='<th>Risk</th>';
      lsStr+='<th>Message</th>';
      lsStr+='</tr>';
      maDataBlocs.data10.sort(function(a,b){
         var liInt;
         if (a.ligne.c1 < b.ligne.c1) liInt = -1;
         if (a.ligne.c1 > b.ligne.c1) liInt = 1;
         if (a.ligne.c1 == b.ligne.c1) liInt = 0;
         return liInt;
      });
      for (var liInd=0; liInd<maDataBlocs.data10.length; liInd++) {
         var monBloc = maDataBlocs.data10[liInd];
         if (monBloc.ligne.c2!='') {
            if (0==(liInd%2)) lsStr+='<tr class="b">';
            if (1==(liInd%2)) lsStr+='<tr class="a">';
            var lsColor ='';
            if (monBloc.ligne.c2=='true') lsColor = ' style="color : red"'; else lsColor='';
            lsStr+='<td'+lsColor+'>'+monBloc.ligne.c1+'</td>';
            lsStr+='<td'+lsColor+'>'+monBloc.ligne.c2+'</td>';
            lsStr+='<td'+lsColor+'>'+monBloc.ligne.c3+'</td>';
            lsStr+='</tr>';
         }
      }
      lsStr+='</table><br />';
      var theDivBloc10 = document.getElementById("theDivBloc10");
      theDivBloc10.innerHTML = lsStr;
   } else {
   }
}
function genererBloc11() {
   var lsStr ='';
   if (typeof(maDataBlocs)!='undefined'&& typeof(maDataBlocs.data11)!='undefined'  && 0<maDataBlocs.data11.length) {
      lsStr+='<h3><a name="security_risk_on_classes_for_binary">Security risk on classes for binary</a></h3><br />';
      leEntry.push('Security risk on classes for binary')
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>Class name</th>';
      lsStr+='<th>Secu 1</th>';
      lsStr+='<th>Secu 2</th>';
      lsStr+='<th>Secu 3</th>';
      lsStr+='<th>Secu synthese</th>';
      lsStr+='</tr>';
      maDataBlocs.data11.sort(function(a,b){

         var liInt; 

         if (a.ligne.c1 < b.ligne.c1) liInt = -1;

         if (a.ligne.c1 > b.ligne.c1) liInt = 1;

         if (a.ligne.c1 == b.ligne.c1) liInt = 0;

         return liInt;

      });
      for (var liInd=0; liInd<maDataBlocs.data11.length; liInd++) {
         var monBloc = maDataBlocs.data11[liInd];
         if (0==(liInd%2)) lsStr+='<tr class="b">';

         if (1==(liInd%2)) lsStr+='<tr class="a">';

         lsStr+='<td style="'+monBloc.ligne.c5color+'"><a href ="'+calculerUrl('link',monBloc.ligne.c1link)+'">'+monBloc.ligne.c1+'</a></td>';
         lsStr+='<td style="'+monBloc.ligne.c2color+'">'+monBloc.ligne.c2+'</td>';
         lsStr+='<td style="'+monBloc.ligne.c3color+'">'+monBloc.ligne.c3+'</td>';
         lsStr+='<td style="'+monBloc.ligne.c4color+'">'+monBloc.ligne.c4+'</td>';
         lsStr+='<td style="'+monBloc.ligne.c5color+'">'+monBloc.ligne.c5+'</td>';
         lsStr+='</tr>';
      }
      lsStr+='</table><br />';
      var theDivBloc11 = document.getElementById("theDivBloc11");  

      theDivBloc11.innerHTML = lsStr;

   } else {
   }
}
function genererBloc14() {
   var lsStr ='';
   if (typeof(maDataBlocs)!='undefined' && typeof(maDataBlocs.data14)!='undefined' && 0<maDataBlocs.data14.length) {
      lsStr+='<h3><a name="table_of_utags">Table of Utags</a></h3><br />';
      leEntry.push('Table of Utags')
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>Utag tags</th>';
      lsStr+='</tr>';
      lsStr+='</table>';
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>line</th>';
      lsStr+='<th>btn_save_panier</th>';
      lsStr+='<th>canal</th>';
      lsStr+='<th>compte_rattache</th>';
      lsStr+='<th>couleur</th>';
      lsStr+='<th>domaine</th>';
      lsStr+='<th>id_visite</th>';
      lsStr+='<th>mode</th>';
      lsStr+='<th>ns_visite</th>';
      lsStr+='<th>profil_compte</th>';
      lsStr+='<th>segment</th>';
      lsStr+='<th>serveur</th>';
      lsStr+='<th>sous_univers</th>';
      lsStr+='<th>statut_compte</th>';
      lsStr+='<th>statut_loggue</th>';
      lsStr+='<th>terminal_seul</th>';
      lsStr+='<th>titre_page</th>';
      lsStr+='<th>type_page</th>';
      lsStr+='<th>univers_affichage</th>';
      lsStr+='<th>univers_rattachement</th>';
      lsStr+='</tr>';
      for (var liInd=0; liInd<maDataBlocs.data14.length; liInd++) {
         var monBloc = maDataBlocs.data14[liInd];
         if (0==(liInd%2)) lsStr+='<tr class="b">';

         if (1==(liInd%2)) lsStr+='<tr class="a">';

         lsStr+='<td><a href ="'+calculerUrl('link',monBloc.ligne.c1link)+'">'+monBloc.ligne.c1+'</a></td>';
         lsStr+='<td>'+monBloc.ligne.cutag_btn_save_panier+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_canal+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_compte_rattache+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_couleur+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_domaine+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_id_visite+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_mode+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_ns_visite+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_profil_compte+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_segment+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_serveur+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_sous_univers+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_statut_compte+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_statut_loggue+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_terminal_seul+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_titre_page+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_type_page+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_univers_affichage+'</td>';
         lsStr+='<td>'+monBloc.ligne.cutag_univers_rattachement+'</td>';
         lsStr+='</tr>';
      }
      lsStr+='</table><br />';
      var theDivBloc14 = document.getElementById("theDivBloc14");  

      theDivBloc14.innerHTML = lsStr;

   } else {
   }
}
function genererBloc12() {
   var lsStr ='';
   if (typeof(maDataBlocs)!='undefined' && typeof(maDataBlocs.data12a)!='undefined' && typeof(maDataBlocs.data12b)!='undefined' && (0<maDataBlocs.data12a.length || 0<maDataBlocs.data12b.length)) {
      lsStr+='<h3><a name="risks_on_resources_and_deadlocks">Risks on resources and deadlocks</a></h3><br />';
      leEntry.push('Risks on resources and deadlocks')
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>Deadlock risks Ressources definition</th>';
      lsStr+='</tr>';
      for (var liInd=0; liInd<maDataBlocs.data12a.length; liInd++) {
         var monBloc = maDataBlocs.data12a[liInd];
         if (0==(liInd%2)) lsStr+='<tr class="b">';

         if (1==(liInd%2)) lsStr+='<tr class="a">';

         lsStr+='<td>'+monBloc.ligne+'</td>';
         lsStr+='</tr>';
      }
      lsStr+='</table>';
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>Deadlock risks Sequences definition</th>';
      lsStr+='</tr>';
      lsStr+='</table>';
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>Sequence</th>';
      lsStr+='<th>Step</th>';
      lsStr+='</tr>';
      for (var liInd=0; liInd<maDataBlocs.data12b.length; liInd++) {
         var monBloc = maDataBlocs.data12b[liInd];
         if (0==(liInd%2)) lsStr+='<tr class="b">';

         if (1==(liInd%2)) lsStr+='<tr class="a">';

         lsStr+='<td>No '+monBloc.sequence.noseq+'</td>';
         lsStr+='<td></td>';
         lsStr+='</tr>';
         for (var liIndJ=0; liIndJ<monBloc.sequence.pas.length; liIndJ++) {
            if (0==(liIndJ%2)) lsStr+='<tr class="b">';

            if (1==(liIndJ%2)) lsStr+='<tr class="a">';

            lsStr+='<td></td>';
            lsStr+='<td>'+monBloc.sequence.pas[liIndJ].ligne+'</td>';
            lsStr+='</tr>';
         }
      }
      lsStr+='</table><br />';
      var theDivBloc12 = document.getElementById("theDivBloc12");  

      theDivBloc12.innerHTML = lsStr;

   } else {
   }
}
function genererBloc13() {
   var lsStr ='';
   if (typeof(maDataBlocs)!='undefined' && typeof(maDataBlocs.data13a)!='undefined' && typeof(maDataBlocs.data13b)!='undefined') {
      lsStr+='<h3><a name="rules_violations">Rules violations</a></h3><br />';
      leEntry.push('Rules violations')
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>Criticity class</th>';
      lsStr+='<th>Rule</th>';
      lsStr+='<th>Description</th>';
      lsStr+='<th>Nb of violations</th>';
      lsStr+='</tr>';
      for (var liInd=0; liInd<maDataBlocs.data13a.length; liInd++) {
         var monBloc = maDataBlocs.data13a[liInd];
         if (0==(liInd%2)) lsStr+='<tr class="b">';

         if (1==(liInd%2)) lsStr+='<tr class="a">';

         lsStr+='<td>'+monBloc.ligne.c1+'</td>';
         lsStr+='<td>'+monBloc.ligne.c2+'</td>';
         lsStr+='<td>'+monBloc.ligne.c3+'</td>';
         lsStr+='<td>'+monBloc.ligne.c4+'</td>';
         lsStr+='</tr>';
      }
      lsStr+='</table>';
      lsStr+='<table border="1" class="bodyTable">';
      lsStr+='<tr class="b">';
      lsStr+='<th>Line start</th>';
      lsStr+='<th>Criticity class</th>';
      lsStr+='<th>Rule</th>';
      lsStr+='</tr>';
      maDataBlocs.data13b.sort(function(a,b){

         var liInt; 

         if (a.ligne.c1 < b.ligne.c1) liInt = -1;

         if (a.ligne.c1 > b.ligne.c1) liInt = 1;

         if (a.ligne.c1 == b.ligne.c1) liInt = 0;

         return liInt;

      });
      for (var liInd=0; liInd<maDataBlocs.data13b.length; liInd++) {
         var monBloc = maDataBlocs.data13b[liInd];
         if (0==(liInd%2)) lsStr+='<tr class="b">';

         if (1==(liInd%2)) lsStr+='<tr class="a">';

         lsStr+='<td><a href ="'+calculerUrl('link',monBloc.ligne.c1link)+'">'+monBloc.ligne.c1+'</a></td>';
         lsStr+='<td>'+monBloc.ligne.c2+'</td>';
         lsStr+='<td>'+monBloc.ligne.c3+'</td>';
         lsStr+='</tr>';
      }
      lsStr+='</table><br />';
      var theDivBloc13 = document.getElementById("theDivBloc13");  

      theDivBloc13.innerHTML = lsStr;

   } else {
   }
}
function genererBloc15() {
   console.log("genererBloc15() lireFichier start");

   var lsStr='';
   lsStr+='<h3><a name="functions_algorithms">Functions algorithms</a></h3><br />';
   leEntry.push('Functions algorithms')
   if (typeof(maDataBlocs)!='undefined'&& typeof(maDataBlocs.data15)!='undefined' ) {
         lsStr+='<img src="'+maDataBlocs.data15.fichierplantumlsvg+'" alt = "Hardcopy image">';

      var theDivBloc15 = document.getElementById("theDivBloc15");  

      theDivBloc15.innerHTML = lsStr;

   } else {

   }

   console.log("genererBloc15() lireFichier end");

}
console.log('leInstrStr 99 main end');
