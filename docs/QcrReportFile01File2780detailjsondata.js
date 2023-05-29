console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/wire/WPrint.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/wire/WPrint.java 6 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.wire.WPrint"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.wire.WPrint" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/wire/WPrint.java.html#58"
 , "c1" : "WPrint"
 , "c2" : "WPrint(ISkinParam;UTranslate;HColor;Display)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/wire/WPrint.java.html#65"
 , "c1" : "HColor"
 , "c2" : "getBlack()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/wire/WPrint.java.html#69"
 , "c1" : "TextBlock"
 , "c2" : "getTextBlock()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/wire/WPrint.java.html#75"
 , "c1" : "UChange"
 , "c2" : "getPosition()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/wire/WPrint.java.html#79"
 , "c1" : "void"
 , "c2" : "drawMe(UGraphic)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/wire/WPrint.java.html#83"
 , "c1" : "double"
 , "c2" : "getHeight(StringBounder)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/wire/WPrint.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wire/WPrint.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.wire.WPrint.WPrint@POLYN162464 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wire/WPrint.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method net.sourceforge.plantuml.wire.WPrint.getTextBlock@POLYN163087 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wire/WPrint.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method drawMe arguments UGraphic  ug"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wire/WPrint.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method getHeight arguments StringBounder  stringBounder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wire/WPrint.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00083] Public method getHeight is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wire/WPrint.java.html#79"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00079] Public method drawMe is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/wire/WPrint.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
