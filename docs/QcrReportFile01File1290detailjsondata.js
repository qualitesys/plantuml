console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/error/PSystemErrorUtils.java 17 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.error.PSystemErrorUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.error.PSystemErrorUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#15"
 , "c1" : "PSystemError"
 , "c2" : "buildV2(UmlSource;ErrorUml;List<String>;List<StringLocated>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#23"
 , "c1" : "PSystemError"
 , "c2" : "merge(Collection<PSystemError>)"
 , "c3" : "8"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#51"
 , "c1" : "PSystemErrorV2"
 , "c2" : "mergeV2(List<PSystemErrorV2>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#60"
 , "c1" : "boolean"
 , "c2" : "isDiagramError(Class<?extendsDiagram>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
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
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00013"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class PSystemErrorUtils contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#15"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00015] For method buildV2 arguments UmlSource  source|ErrorUml  singleError|List&lt;String &gt;  debugLines|List&lt;StringLocated &gt;  list"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method merge arguments Collection&lt;PSystemError &gt;  ps"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument ps is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00039] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00040] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method net.sourceforge.plantuml.error.PSystemErrorUtils.merge@POLYN153007 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method net.sourceforge.plantuml.error.PSystemErrorUtils.merge@POLYN153007 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method net.sourceforge.plantuml.error.PSystemErrorUtils.merge@POLYN153007 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method net.sourceforge.plantuml.error.PSystemErrorUtils.merge@POLYN153007 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method net.sourceforge.plantuml.error.PSystemErrorUtils.merge@POLYN153007 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method net.sourceforge.plantuml.error.PSystemErrorUtils.merge@POLYN153007 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method net.sourceforge.plantuml.error.PSystemErrorUtils.merge@POLYN153007 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method mergeV2 arguments List&lt;PSystemErrorV2 &gt;  errorsV2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method net.sourceforge.plantuml.error.PSystemErrorUtils.mergeV2@POLYN154397 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method net.sourceforge.plantuml.error.PSystemErrorUtils.mergeV2@POLYN154397 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/error/PSystemErrorUtils.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method isDiagramError arguments Class&lt;?  extends Diagram &gt;  type"
}} 
]
};
console.log('leListeStr 99 main end');
