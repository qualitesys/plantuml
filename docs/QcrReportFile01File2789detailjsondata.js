console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java 48 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.xml" 
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
 , "c5" : "00016"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#16"
 , "c1" : "XmiClassDiagramStar"
 , "c2" : "XmiClassDiagramStar(ClassDiagram)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#33"
 , "c1" : "void"
 , "c2" : "addLink(Link)"
 , "c3" : "10"
 , "c4" : "31"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#91"
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
   {"ligne" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.svg" }

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
 , "c1" : "00016"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#16"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00016] The argument classDiagram is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00020] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.XmiClassDiagramStar@POLYN164705 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method addLink arguments Link  link"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#33"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00033] The argument link is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00038] The same method call link.getType() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'ass' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'UML:Association' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'namespace' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'UML:Association.connection' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'UML:AssociationEnd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'end' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'association' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'type' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'UML:AssociationEnd.participant' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'composite' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'aggregate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'UML:AssociationEnd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'end' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'association' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'type' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'UML:AssociationEnd.participant' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'composite' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addLink@POLYN165391 the MagicNumber/String  'aggregate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method addExtension arguments Link  link|String  assId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#91"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00091] The argument link is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN169495 the MagicNumber/String  'UML:Generalization' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN169495 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN169495 the MagicNumber/String  'namespace' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN169495 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN169495 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN169495 the MagicNumber/String  'child' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN169495 the MagicNumber/String  'parent' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN169495 the MagicNumber/String  'child' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method net.sourceforge.plantuml.xmi.XmiClassDiagramStar.addExtension@POLYN169495 the MagicNumber/String  'parent' should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/xmi/XmiClassDiagramStar.java.svg" }

};
console.log('leListeStr 99 main end');
