console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java 15 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.xmi.XmiSequenceDiagram"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.xmi.XmiSequenceDiagram" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00013"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#13"
 , "c1" : "void"
 , "c2" : "build()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#17"
 , "c1" : "XmiSequenceDiagram"
 , "c2" : "XmiSequenceDiagram(SequenceDiagram;Document)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#23"
 , "c1" : "Element"
 , "c2" : "createElement(String;String[][])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#27"
 , "c1" : "Element"
 , "c2" : "setAttribute(Element;String;String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#32"
 , "c1" : "Element"
 , "c2" : "setAttributes(Element;String[][])"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#39"
 , "c1" : "String"
 , "c2" : "getDisplayString(Display)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#43"
 , "c1" : "String"
 , "c2" : "getXmiId(String;Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
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
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method createElement arguments String  tag|String[][]  attributes"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method setAttribute arguments Element  element|String  name|String  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument element is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method setAttributes arguments Element  element|String[][]  attributes"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument element is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.xmi.XmiSequenceDiagram.setAttributes@POLYN154055 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.xmi.XmiSequenceDiagram.setAttributes@POLYN154055 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method getDisplayString arguments Display  display"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#39"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00039] The argument display is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method net.sourceforge.plantuml.xmi.XmiSequenceDiagram.getDisplayString@POLYN154438 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method getXmiId arguments String  tag|Object  object"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument tag is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument object is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method net.sourceforge.plantuml.xmi.XmiSequenceDiagram.getXmiId@POLYN154629 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00013"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.html#13"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00013] Public method build is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/xmi/XmiSequenceDiagram.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
