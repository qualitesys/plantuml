console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java 9 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "net.sourceforge.plantuml.ugraphic.UGraphicStencil"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.ugraphic.UGraphicStencil" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html#47"
 , "c1" : "UGraphic"
 , "c2" : "create(UGraphic;Stencil;UStroke)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html#51"
 , "c1" : "UGraphic"
 , "c2" : "create(UGraphic;XDimension2D)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html#55"
 , "c1" : "Stencil"
 , "c2" : "getRectangleStencil(XDimension2D)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html#67"
 , "c1" : "UGraphicStencil"
 , "c2" : "UGraphicStencil(UGraphic;Stencil;UStroke)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html#74"
 , "c1" : "AbstractUGraphicHorizontalLine"
 , "c2" : "copy(UGraphic)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html#79"
 , "c1" : "void"
 , "c2" : "drawHline(UGraphic;UHorizontalLine;UTranslate)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method create arguments UGraphic  ug|Stencil  stencil|UStroke  defaultStroke"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method create arguments UGraphic  ug|XDimension2D  dim"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method getRectangleStencil arguments XDimension2D  dim"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument dim is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method net.sourceforge.plantuml.ugraphic.UGraphicStencil.getRectangleStencil@POLYN157740 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method copy arguments UGraphic  ug"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method drawHline arguments UGraphic  ug|UHorizontalLine  line|UTranslate  translate"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html#79"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00079] The argument line is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.html#79"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00079] The argument translate is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/ugraphic/UGraphicStencil.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
