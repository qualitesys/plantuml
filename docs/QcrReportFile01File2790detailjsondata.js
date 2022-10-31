console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java 77 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "XmlDiagramTransformer"
 , "c2" : "net.sourceforge.plantuml.xmi.XmiDescriptionDiagram"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.xmi.XmiDescriptionDiagram" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#36"
 , "c1" : "XmiDescriptionDiagram"
 , "c2" : "XmiDescriptionDiagram(DescriptionDiagram)"
 , "c3" : "6"
 , "c4" : "26"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#81"
 , "c1" : "void"
 , "c2" : "addElement(IEntity;Element)"
 , "c3" : "5"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#94"
 , "c1" : "String"
 , "c2" : "forXMI(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#98"
 , "c1" : "String"
 , "c2" : "forXMI(Display)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#102"
 , "c1" : "void"
 , "c2" : "addLink(Link)"
 , "c3" : "8"
 , "c4" : "28"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00153"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#153"
 , "c1" : "Element"
 , "c2" : "createEntityNode(IEntity)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00179"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#179"
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
   {"ligne" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
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
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00030] The class XmiDescriptionDiagram contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#36"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00036] The argument diagram is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00069] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00073] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  '1.0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  'XMI' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  'xmi.version' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  '1.1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  'xmlns:UML' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  'href://org.omg/UML/1.3' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  'XMI.header' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  'XMI.metamodel' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  'xmi.name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  'UML' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  'xmi.version' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  '1.3' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  'XMI.content' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  'UML:Model' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  'PlantUML' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  'UML:Namespace.ownedElement' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.XmiDescriptionDiagram@POLYN175793 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method addElement arguments IEntity  tobeAdded|Element  container"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument container is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addElement@POLYN178537 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method forXMI arguments String  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.forXMI@POLYN179310 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.forXMI@POLYN179310 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method forXMI arguments Display  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.forXMI@POLYN179488 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.forXMI@POLYN179488 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.forXMI@POLYN179488 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method addLink arguments Link  link"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#102"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00102] The argument link is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'ass' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'UML:Association' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'namespace' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'UML:Association.connection' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'UML:AssociationEnd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'end' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'association' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'type' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'UML:AssociationEnd.participant' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'composite' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'aggregate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'UML:AssociationEnd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'end' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'association' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'type' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'UML:AssociationEnd.participant' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'composite' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.addLink@POLYN179714 the MagicNumber/String  'aggregate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00153] For method createEntityNode arguments IEntity  entity"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#153"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00153] The argument entity is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.createEntityNode@POLYN183403 the MagicNumber/String  'UML:Component' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.createEntityNode@POLYN183403 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.createEntityNode@POLYN183403 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.createEntityNode@POLYN183403 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.createEntityNode@POLYN183403 the MagicNumber/String  'namespace' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.createEntityNode@POLYN183403 the MagicNumber/String  'UML:Classifier.feature' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#179"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00179] For method transformerXml arguments OutputStream  os"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiDescriptionDiagram.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method net.sourceforge.plantuml.xmi.XmiDescriptionDiagram.transformerXml@POLYN184201 the MagicNumber/String  'yes' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
