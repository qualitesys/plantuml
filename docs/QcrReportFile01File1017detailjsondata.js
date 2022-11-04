console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/creole/Sea.java 23 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.creole.Sea"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.creole.Sea" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/creole/Sea.java.html#19"
 , "c1" : "Sea"
 , "c2" : "Sea(StringBounder)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/creole/Sea.java.html#23"
 , "c1" : "void"
 , "c2" : "add(Atom)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/creole/Sea.java.html#31"
 , "c1" : "Position"
 , "c2" : "getPosition(Atom)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/creole/Sea.java.html#35"
 , "c1" : "void"
 , "c2" : "doAlign()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/creole/Sea.java.html#45"
 , "c1" : "void"
 , "c2" : "translateMinYto(double)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/creole/Sea.java.html#54"
 , "c1" : "void"
 , "c2" : "exportAllPositions(Map<Atom,Position>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/creole/Sea.java.html#58"
 , "c1" : "double"
 , "c2" : "getMinY()"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/creole/Sea.java.html#71"
 , "c1" : "double"
 , "c2" : "getMaxY()"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/creole/Sea.java.html#84"
 , "c1" : "double"
 , "c2" : "getHeight()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/creole/Sea.java.html#88"
 , "c1" : "MinMax"
 , "c2" : "update(MinMax)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00095"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/creole/Sea.java.html#95"
 , "c1" : "double"
 , "c2" : "getWidth()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.svg" }

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
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
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
 , "c4" : "3"
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
 , "c1" : "00013"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class Sea contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method add arguments Atom  atom"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument atom is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method net.sourceforge.plantuml.creole.Sea.add@POLYN159552 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method getPosition arguments Atom  atom"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00037] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00038] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00040] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method translateMinYto arguments double  newValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00048] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00049] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method exportAllPositions arguments Map&lt;Atom ,Position &gt;  destination"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument destination is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method net.sourceforge.plantuml.creole.Sea.getMinY@POLYN161864 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method net.sourceforge.plantuml.creole.Sea.getMaxY@POLYN162426 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method update arguments MinMax  minMax"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00031] Public method getPosition is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00058] Public method getMinY is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00071] Public method getMaxY is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00084] Public method getHeight is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#88"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00088] Public method update is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00045] Public method translateMinYto is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.html#54"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00054] Public method exportAllPositions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/creole/Sea.java.svg" }

};
console.log('leListeStr 99 main end');
