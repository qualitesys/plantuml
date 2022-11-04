console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java 29 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractEntityDiagram"
 , "c2" : "net.sourceforge.plantuml.descdiagram.DescriptionDiagram"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.descdiagram.DescriptionDiagram" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#20"
 , "c1" : "DescriptionDiagram"
 , "c2" : "DescriptionDiagram(UmlSource;Map<String,String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00025"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#25"
 , "c1" : "Ident"
 , "c2" : "cleanIdent(Ident)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#42"
 , "c1" : "ILeaf"
 , "c2" : "getOrCreateLeaf(Ident;Code;LeafType;USymbol)"
 , "c3" : "5"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#71"
 , "c1" : "boolean"
 , "c2" : "isUsecase()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#83"
 , "c1" : "void"
 , "c2" : "makeDiagramReady()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00095"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#95"
 , "c1" : "String"
 , "c2" : "checkFinalError()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "22"
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
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method cleanIdent arguments Ident  ident"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument ident is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.cleanIdent@POLYN163794 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.cleanIdent@POLYN163794 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.cleanIdent@POLYN163794 the MagicNumber/String  '\'([:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.cleanIdent@POLYN163794 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.cleanIdent@POLYN163794 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.cleanIdent@POLYN163794 the MagicNumber/String  '\'([:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.cleanIdent@POLYN163794 the MagicNumber/String  '()' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.cleanIdent@POLYN163794 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.cleanIdent@POLYN163794 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method getOrCreateLeaf arguments Ident  ident|Code  code|LeafType  type|USymbol  symbol"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument ident is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument code is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.getOrCreateLeaf@POLYN164946 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.getOrCreateLeaf@POLYN164946 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.getOrCreateLeaf@POLYN164946 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.getOrCreateLeaf@POLYN164946 the MagicNumber/String  '\'([:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.getOrCreateLeaf@POLYN164946 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.getOrCreateLeaf@POLYN164946 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.getOrCreateLeaf@POLYN164946 the MagicNumber/String  '\'([:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.getOrCreateLeaf@POLYN164946 the MagicNumber/String  '()' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.getOrCreateLeaf@POLYN164946 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.getOrCreateLeaf@POLYN164946 the MagicNumber/String  '\'([:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.getOrCreateLeaf@POLYN164946 the MagicNumber/String  '\'([:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00073] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00074] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.isUsecase@POLYN167715 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.descdiagram.DescriptionDiagram.isUsecase@POLYN167715 the MagicNumber/String  false should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/descdiagram/DescriptionDiagram.java.svg" }

};
console.log('leListeStr 99 main end');
