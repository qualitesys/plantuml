function doTraiter() {

   console.log('doTraiter01 start');

   var lsStr = '';

   lsStr+='<table border="0" class="bodyTable"><tr class="b"><th>File name</th><th>Compare .qre</th><th>Compare .xml</th></tr>';

   for (var liInd=0; liInd<maDataBlocs.data00.length; liInd++) {

      if (0==(liInd%2)) lsStr+="<tr class='b'>";

      if (1==(liInd%2)) lsStr+="<tr class='a'>";

      lsStr+='<td>'+maDataBlocs.data00[liInd].ligne.fic+'</td>';

      lsStr+='<td><a href="'+maDataBlocs.data00[liInd].ligne.fic1+'">'+maDataBlocs.data00[liInd].ligne.OKKO1+'</a></td>';

      lsStr+='<td><a href="'+maDataBlocs.data00[liInd].ligne.fic2+'">'+maDataBlocs.data00[liInd].ligne.OKKO2+'</a></td>';

      lsStr+='</tr>';

      
   }

   lsStr+='</table>';

   var theDivMainAnchor = document.getElementById("theDivMainAnchor");

   theDivMainAnchor.innerHTML = lsStr;

   console.log('doTraiter99 end');

}

