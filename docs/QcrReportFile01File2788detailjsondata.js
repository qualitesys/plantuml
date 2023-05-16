console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java 48 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "XmiClassDiagramAbstractXmlDiagramTransformer"
 , "c2" : "net.sourceforge.plantuml.xmi.XmiClassDiagramStar"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.xmi.XmiClassDiagramStar" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#50"
 , "c1" : "XmiClassDiagramStar"
 , "c2" : "XmiClassDiagramStar(ClassDiagram)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#67"
 , "c1" : "void"
 , "c2" : "addLink(Link)"
 , "c3" : "10"
 , "c4" : "31"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00125"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#125"
 , "c1" : "void"
 , "c2" : "addExtension(Link;String)"
 , "c3" : "6"
 , "c4" : "10"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "41"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
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
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument classDiagram is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00054] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.XmiClassDiagramStar@POLYN167725 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method addLink arguments Link  link"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#67"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00067] The argument link is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00072] The same method call link.getType() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'ass' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'UML:Association' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'namespace' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'UML:Association.connection' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'UML:AssociationEnd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'end' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'association' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'type' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'UML:AssociationEnd.participant' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'composite' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'aggregate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'UML:AssociationEnd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'end' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'association' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'type' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'UML:AssociationEnd.participant' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'composite' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN168411 the MagicNumber/String  'aggregate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00125] For method addExtension arguments Link  link|String  assId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#125"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00125] The argument link is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN172515 the MagicNumber/String  'UML:Generalization' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN172515 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN172515 the MagicNumber/String  'namespace' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN172515 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN172515 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN172515 the MagicNumber/String  'child' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN172515 the MagicNumber/String  'parent' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN172515 the MagicNumber/String  'child' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN172515 the MagicNumber/String  'parent' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
