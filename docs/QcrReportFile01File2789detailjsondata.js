console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java 76 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "XmlDiagramTransformer"
 , "c2" : "net.sourceforge.plantuml.xmi.XmiDescriptionDiagram"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.xmi.XmiDescriptionDiagram" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#70"
 , "c1" : "XmiDescriptionDiagram"
 , "c2" : "XmiDescriptionDiagram(DescriptionDiagram)"
 , "c3" : "6"
 , "c4" : "26"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00115"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#115"
 , "c1" : "void"
 , "c2" : "addElement(IEntity;Element)"
 , "c3" : "5"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00128"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#128"
 , "c1" : "String"
 , "c2" : "forXMI(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00132"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#132"
 , "c1" : "String"
 , "c2" : "forXMI(Display)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00136"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#136"
 , "c1" : "void"
 , "c2" : "addLink(Link)"
 , "c3" : "8"
 , "c4" : "28"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00187"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#187"
 , "c1" : "Element"
 , "c2" : "createEntityNode(IEntity)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00213"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#213"
 , "c1" : "void"
 , "c2" : "transformerXml(OutputStream)"
 , "c3" : "1"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.svg" }

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
 , "c4" : "4"
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
 , "c4" : "64"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#70"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00070] The argument diagram is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00103] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00107] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  '1.0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  'XMI' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  'xmi.version' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  '1.1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  'xmlns:UML' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  'href://org.omg/UML/1.3' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  'XMI.header' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  'XMI.metamodel' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  'xmi.name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  'UML' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  'xmi.version' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  '1.3' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  'XMI.content' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  'UML:Model' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  'PlantUML' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  'UML:Namespace.ownedElement' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN187709 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00115] For method addElement arguments IEntity  tobeAdded|Element  container"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#115"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00115] The argument container is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addElement@POLYN190465 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method forXMI arguments String  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.forXMI@POLYN191240 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.forXMI@POLYN191240 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method forXMI arguments Display  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.forXMI@POLYN191418 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.forXMI@POLYN191418 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.forXMI@POLYN191418 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method addLink arguments Link  link"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#136"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00136] The argument link is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'ass' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'UML:Association' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'namespace' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'UML:Association.connection' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'UML:AssociationEnd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'end' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'association' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'type' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'UML:AssociationEnd.participant' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'composite' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'aggregate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'UML:AssociationEnd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'end' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'association' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'type' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'UML:AssociationEnd.participant' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'composite' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN191644 the MagicNumber/String  'aggregate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00187] For method createEntityNode arguments IEntity  entity"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#187"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00187] The argument entity is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.createEntityNode@POLYN195347 the MagicNumber/String  'UML:Component' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.createEntityNode@POLYN195347 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.createEntityNode@POLYN195347 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.createEntityNode@POLYN195347 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.createEntityNode@POLYN195347 the MagicNumber/String  'namespace' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.createEntityNode@POLYN195347 the MagicNumber/String  'UML:Classifier.feature' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#213"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00213] For method transformerXml arguments OutputStream  os"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.transformerXml@POLYN196149 the MagicNumber/String  'yes' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
