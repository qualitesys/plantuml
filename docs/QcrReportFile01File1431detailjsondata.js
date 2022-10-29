console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/hcl/HclSource.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/hcl/HclSource.java 4 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/hcl/HclSource.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Iterable<Character>"
 , "c2" : "net.sourceforge.plantuml.hcl.HclSource"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.hcl.HclSource" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00013"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/hcl/HclSource.java.html#13"
 , "c1" : "void"
 , "c2" : "add(String)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00021"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/hcl/HclSource.java.html#21"
 , "c1" : "Iterator<Character>"
 , "c2" : "iterator()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/hcl/HclSource.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/hcl/HclSource.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00009"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/hcl/HclSource.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class HclSource contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00013"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/hcl/HclSource.java.html#13"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00013] For method add arguments String  line"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00013"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/hcl/HclSource.java.html#13"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00013] The argument line is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/hcl/HclSource.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00014] In method net.sourceforge.plantuml.hcl.HclSource.add@POLYN147303 the MagicNumber/String  '#' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
