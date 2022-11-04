console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java 77 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "XmlDiagramTransformer"
 , "c2" : "net.sourceforge.plantuml.xmi.XmiStateDiagram"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.xmi.XmiStateDiagram" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#36"
 , "c1" : "XmiStateDiagram"
 , "c2" : "XmiStateDiagram(StateDiagram)"
 , "c3" : "6"
 , "c4" : "26"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#86"
 , "c1" : "void"
 , "c2" : "addState(IEntity;Element)"
 , "c3" : "5"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00101"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#101"
 , "c1" : "String"
 , "c2" : "forXMI(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00105"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#105"
 , "c1" : "String"
 , "c2" : "forXMI(Display)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00109"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#109"
 , "c1" : "void"
 , "c2" : "addLink(Link)"
 , "c3" : "8"
 , "c4" : "28"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00163"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#163"
 , "c1" : "Element"
 , "c2" : "createEntityNode(IEntity)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00203"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#203"
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
   {"ligne" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.svg" }

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
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00030] The class XmiStateDiagram contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#36"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00036] The argument diagram is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00070] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00076] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  '1.0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  'XMI' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  'xmi.version' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  '1.1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  'xmlns:UML' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  'href://org.omg/UML/1.3' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  'XMI.header' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  'XMI.metamodel' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  'xmi.name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  'UML' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  'xmi.version' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  '1.3' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  'XMI.content' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  'UML:Model' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  'PlantUML' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  'UML:Namespace.ownedElement' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.XmiStateDiagram@POLYN176675 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method addState arguments IEntity  tobeAdded|Element  container"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#86"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00086] The argument container is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addState@POLYN179509 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method forXMI arguments String  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.forXMI@POLYN180354 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.forXMI@POLYN180354 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method forXMI arguments Display  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.forXMI@POLYN180532 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.forXMI@POLYN180532 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.forXMI@POLYN180532 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method addLink arguments Link  link"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#109"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00109] The argument link is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'ass' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'UML:Association' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'namespace' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'UML:Association.connection' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'UML:AssociationEnd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'end' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'association' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'type' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'UML:AssociationEnd.participant' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'composite' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'aggregate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'UML:AssociationEnd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'end' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'association' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'type' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'UML:AssociationEnd.participant' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'composite' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'aggregation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.addLink@POLYN180758 the MagicNumber/String  'aggregate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method createEntityNode arguments IEntity  entity"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#163"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00163] The argument entity is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.createEntityNode@POLYN184573 the MagicNumber/String  'UML:State' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.createEntityNode@POLYN184573 the MagicNumber/String  'xmi.id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.createEntityNode@POLYN184573 the MagicNumber/String  'name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.createEntityNode@POLYN184573 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.createEntityNode@POLYN184573 the MagicNumber/String  'namespace' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.createEntityNode@POLYN184573 the MagicNumber/String  'UML:Classifier.feature' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#203"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00203] For method transformerXml arguments OutputStream  os"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method net.sourceforge.plantuml.xmi.XmiStateDiagram.transformerXml@POLYN185371 the MagicNumber/String  'yes' should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/xmi/XmiStateDiagram.java.svg" }

};
console.log('leListeStr 99 main end');
