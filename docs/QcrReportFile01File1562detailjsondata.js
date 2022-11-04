console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/oregon/MagicTable.java 86 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.xml" 
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
 , "c5" : "00028"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#28"
 , "c1" : "int[]"
 , "c2" : "getNeighbours(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#35"
 , "c1" : "int[]"
 , "c2" : "getNeighboursSlow(int)"
 , "c3" : "9"
 , "c4" : "31"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#78"
 , "c1" : "List<Integer>"
 , "c2" : "getAllFree()"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#88"
 , "c1" : "List<Integer>"
 , "c2" : "getAllUsed()"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#98"
 , "c1" : "boolean"
 , "c2" : "isUsuable(int)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00110"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#110"
 , "c1" : "void"
 , "c2" : "burnNumber(int)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00120"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#120"
 , "c1" : "int"
 , "c2" : "getRandomFree(Random)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00141"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#141"
 , "c1" : "int"
 , "c2" : "size(Random;MagicTable)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00154"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#154"
 , "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "4"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00179"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#179"
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
   {"ligne" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.svg" }

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
"data11" : [
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
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
 , "c1" : "00011"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class MagicTable contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method getNeighbours arguments int  nb"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighbours@POLYN172808 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method getNeighboursSlow arguments int  nb"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  36 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.oregon.MagicTable.getNeighboursSlow@POLYN173208 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.oregon.MagicTable.getAllFree@POLYN176074 the MagicNumber/String  10000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method net.sourceforge.plantuml.oregon.MagicTable.getAllFree@POLYN176074 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method net.sourceforge.plantuml.oregon.MagicTable.getAllFree@POLYN176074 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method net.sourceforge.plantuml.oregon.MagicTable.getAllUsed@POLYN176660 the MagicNumber/String  10000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method net.sourceforge.plantuml.oregon.MagicTable.getAllUsed@POLYN176660 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method isUsuable arguments int  nb"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method net.sourceforge.plantuml.oregon.MagicTable.isUsuable@POLYN177231 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method net.sourceforge.plantuml.oregon.MagicTable.isUsuable@POLYN177231 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method net.sourceforge.plantuml.oregon.MagicTable.isUsuable@POLYN177231 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method net.sourceforge.plantuml.oregon.MagicTable.isUsuable@POLYN177231 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method net.sourceforge.plantuml.oregon.MagicTable.isUsuable@POLYN177231 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method burnNumber arguments int  nb"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method net.sourceforge.plantuml.oregon.MagicTable.burnNumber@POLYN177721 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method getRandomFree arguments Random  rnd"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method net.sourceforge.plantuml.oregon.MagicTable.getRandomFree@POLYN178239 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00141] For method size arguments Random  rnd|MagicTable  mt"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#141"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00141] The argument mt is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method net.sourceforge.plantuml.oregon.MagicTable.size@POLYN178742 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method net.sourceforge.plantuml.oregon.MagicTable.size@POLYN178742 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method net.sourceforge.plantuml.oregon.MagicTable.size@POLYN178742 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00154] For method main arguments String[]  args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00166] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN179289 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN179289 the MagicNumber/String  49 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN179289 the MagicNumber/String  200000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN179289 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN179289 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN179289 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN179289 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN179289 the MagicNumber/String  3600 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN179289 the MagicNumber/String  'Estimated duration = ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN179289 the MagicNumber/String  ' h' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN179289 the MagicNumber/String  'v=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN179289 the MagicNumber/String  'mt=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN179289 the MagicNumber/String  'Duration = ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN179289 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method net.sourceforge.plantuml.oregon.MagicTable.main@POLYN179289 the MagicNumber/String  60 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#179"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00179] For method main2 arguments String[]  args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00183] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00185] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00185] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN181125 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN181125 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN181125 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN181125 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN181125 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN181125 the MagicNumber/String  'v=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN181125 the MagicNumber/String  'mt=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN181125 the MagicNumber/String  'Duration = ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN181125 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method net.sourceforge.plantuml.oregon.MagicTable.main2@POLYN181125 the MagicNumber/String  60 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#35"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00035] Public method getNeighboursSlow is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#78"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00078] Public method getAllFree is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#88"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00088] Public method getAllUsed is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#98"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00098] Public method isUsuable is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00120] Public method getRandomFree is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00141] Public method size is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00110] Public method burnNumber is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00154] Public method main is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.html#179"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00179] Public method main2 is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/oregon/MagicTable.java.svg" }

};
console.log('leListeStr 99 main end');
