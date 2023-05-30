console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/oregon/MagicTable.java 85 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.oregon.MagicTable"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.oregon.MagicTable" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#62"
 , "c1" : "int[]"
 , "c2" : "getNeighbours(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#69"
 , "c1" : "int[]"
 , "c2" : "getNeighboursSlow(int)"
 , "c3" : "9"
 , "c4" : "31"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00112"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#112"
 , "c1" : "List&lt;Integer&gt;"
 , "c2" : "getAllFree()"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00122"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#122"
 , "c1" : "List&lt;Integer&gt;"
 , "c2" : "getAllUsed()"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00132"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#132"
 , "c1" : "boolean"
 , "c2" : "isUsuable(int)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00144"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#144"
 , "c1" : "void"
 , "c2" : "burnNumber(int)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00154"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#154"
 , "c1" : "int"
 , "c2" : "getRandomFree(Random)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00175"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#175"
 , "c1" : "int"
 , "c2" : "size(Random;MagicTable)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00188"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#188"
 , "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "4"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00213"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#213"
 , "c1" : "void"
 , "c2" : "main2(String[])"
 , "c3" : "4"
 , "c4" : "14"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.svg" }

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
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "63"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method getNeighbours arguments int  nb"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighbours@POLYN182676 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method getNeighboursSlow arguments int  nb"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  36 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN183076 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method net.sourceforge.plantuml.oregon.MagicTable.getAllFree@POLYN185964 the MagicNumber/String  10000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method net.sourceforge.plantuml.oregon.MagicTable.getAllFree@POLYN185964 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method net.sourceforge.plantuml.oregon.MagicTable.getAllFree@POLYN185964 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method net.sourceforge.plantuml.oregon.MagicTable.getAllUsed@POLYN186552 the MagicNumber/String  10000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method net.sourceforge.plantuml.oregon.MagicTable.getAllUsed@POLYN186552 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method isUsuable arguments int  nb"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method net.sourceforge.plantuml.oregon.MagicTable.isUsuable@POLYN187125 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method net.sourceforge.plantuml.oregon.MagicTable.isUsuable@POLYN187125 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method net.sourceforge.plantuml.oregon.MagicTable.isUsuable@POLYN187125 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method net.sourceforge.plantuml.oregon.MagicTable.isUsuable@POLYN187125 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method net.sourceforge.plantuml.oregon.MagicTable.isUsuable@POLYN187125 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method burnNumber arguments int  nb"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method net.sourceforge.plantuml.oregon.MagicTable.burnNumber@POLYN187615 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00154] For method getRandomFree arguments Random  rnd"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method net.sourceforge.plantuml.oregon.MagicTable.getRandomFree@POLYN188133 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#175"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00175] For method size arguments Random  rnd|MagicTable  mt"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#175"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00175] The argument mt is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method net.sourceforge.plantuml.oregon.MagicTable.size@POLYN188638 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method net.sourceforge.plantuml.oregon.MagicTable.size@POLYN188638 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method net.sourceforge.plantuml.oregon.MagicTable.size@POLYN188638 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#188"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00188] For method main arguments String[]  args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00200] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN189189 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN189189 the MagicNumber/String  49 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN189189 the MagicNumber/String  200000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN189189 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN189189 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN189189 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN189189 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN189189 the MagicNumber/String  3600 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN189189 the MagicNumber/String  'Estimated duration = ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN189189 the MagicNumber/String  ' h' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN189189 the MagicNumber/String  'v=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN189189 the MagicNumber/String  'mt=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN189189 the MagicNumber/String  'Duration = ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN189189 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN189189 the MagicNumber/String  60 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#213"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00213] For method main2 arguments String[]  args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00217] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00219] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00219] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN191041 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN191041 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN191041 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN191041 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN191041 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN191041 the MagicNumber/String  'v=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN191041 the MagicNumber/String  'mt=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN191041 the MagicNumber/String  'Duration = ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN191041 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN191041 the MagicNumber/String  60 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00069] Public method getNeighboursSlow is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00112] Public method getAllFree is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00122] Public method getAllUsed is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00132] Public method isUsuable is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00154] Public method getRandomFree is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#175"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00175] Public method size is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#144"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00144] Public method burnNumber is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00188] Public method main is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#213"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00213] Public method main2 is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
