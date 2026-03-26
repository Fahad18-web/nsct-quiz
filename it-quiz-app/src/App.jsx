import React, { useState, useEffect, useMemo } from 'react';
import { BookOpen, CheckCircle, XCircle, ChevronRight, ChevronLeft, Play, RotateCcw, List, Menu, X } from 'lucide-react';

// Escaped the backticks in your original text so it plays nicely with JavaScript template literals
const RAW_QUIZ_DATA = `
# Computer Networks and Cloud Computing

## 1. Data Communication

1. Data communication is the process of:  
   A) Storing data  
   B) Processing data  
   C) Transmitting data between devices ✓  
   D) Encrypting data

2. The basic components of data communication include sender, receiver, medium, protocol and:  
   A) File  
   B) Message ✓  
   C) Port  
   D) Memory

3. Which transmission mode allows communication in both directions simultaneously?  
   A) Simplex  
   B) Half Duplex  
   C) Full Duplex ✓  
   D) Broadcast

4. The physical path through which data travels is called:  
   A) Protocol  
   B) Node  
   *(Answer not explicitly given; likely "Medium")*

5. Which of the following is an example of guided media?  
   A) Radio waves  
   B) Infrared  
   C) Twisted pair cable ✓  
   D) Microwave

6. Bandwidth refers to:  
   A) Storage capacity  
   B) Amount of data transmitted per second ✓  
   C) Network security  
   D) Data compression

7. Noise in communication systems refers to:  
   A) High speed data  
   B) Unwanted signal interference ✓  
   C) Packet loss  
   D) Data encryption

8. Latency is the:  
   A) Network speed  
   B) Delay in data transmission ✓  
   C) Packet size  
   D) Protocol type

9. Which device is used to convert digital signals into analog signals?  
   A) Router  
   B) Switch  
   C) Modem ✓  
   D) Repeater

10. Error detection technique commonly used in networks is:  
    A) FTP  
    B) TCP  
    C) CRC ✓  
    D) SMTP

## 2. Computer Networks

11. A computer network is:  
    A) Single computer system  
    B) Collection of interconnected computers ✓  
    C) Internet connection  
    D) Software program

12. LAN stands for:  
    A) Large Area Network  
    B) Local Area Network ✓  
    C) Logical Access Network  
    D) Limited Area Network

13. Which topology connects all devices to a central hub?  
    A) Ring  
    B) Bus  
    C) Star ✓  
    D) Mesh

14. The global system of interconnected networks is called:  
    A) LAN  
    B) WAN  
    *(Answer: Internet, but not listed; likely WAN is closest)*

15. Which device connects different networks together?  
    A) Hub  
    B) Switch  
    C) Router ✓  
    D) Repeater

16. MAN stands for:  
    A) Major Area Network  
    B) Metropolitan Area Network ✓  
    C) Micro Area Network  
    D) Main Access Network

17. Which topology has highest reliability?  
    A) Bus  
    B) Star  
    C) Mesh ✓  
    D) Ring

18. The OSI model has:  
    A) 5 layers  
    B) 6 layers  
    C) 7 layers ✓  
    D) 8 layers

19. Which network type covers large geographical areas?  
    A) LAN  
    B) WAN ✓  
    C) PAN  
    D) CAN

20. A device that connects multiple devices in a LAN is:  
    A) Router  
    B) Switch ✓  
    C) Modem  
    D) Gateway

## 3. Data Link Layer

21. Data link layer is responsible for:  
    A) Routing  
    B) Node to node delivery ✓  
    C) Encryption  
    D) Application services

22. The unit of data at Data Link Layer is called:  
    A) Packet  
    B) Frame ✓  
    C) Bit  
    D) Segment

23. MAC address operates at:  
    A) Network layer  
    B) Transport layer  
    C) Data Link Layer ✓  
    D) Application layer

24. Ethernet is a protocol of:  
    A) Transport layer  
    B) Data Link Layer ✓

25. Error detection method used in Data Link Layer is:  
    A) HTTP  
    B) CRC ✓  
    C) FTP  
    D) SMTP

26. The MAC address length is:  
    A) 32 bits  
    B) 48 bits ✓  
    C) 64 bits  
    D) 128 bits

27. ARP protocol works between:  
    A) Application & Network layer  
    B) Network & Data Link Layer ✓  
    C) Transport & Application  
    D) Physical & Application

28. Flow control ensures:  
    A) Encryption  
    B) Sender does not overwhelm receiver ✓  
    C) Packet routing  
    D) Addressing

29. Switch mainly operates at:  
    A) Physical layer  
    B) Data Link Layer ✓  
    C) Network layer  
    D) Transport layer

30. Error control includes:  
    A) Encryption  
    B) Detection and correction of errors ✓  
    C) Compression  
    D) Fragmentation

## 4. Network Layer

31. Network layer is responsible for:  
    A) Encryption  
    B) Routing packets ✓  
    C) Data formatting  
    D) Email services

32. The unit of data in Network layer is:  
    A) Frame  
    B) Segment  
    C) Packet ✓  
    D) Bit

33. IP stands for:  
    A) Internet Process  
    B) Internet Protocol ✓  
    C) Internal Protocol  
    D) Integrated Packet

34. IPv4 address length is:  
    A) 32 bits ✓  
    B) 64 bits

35. IPv6 address length is:  
    A) 32 bits  
    B) 64 bits  
    C) 128 bits ✓  
    D) 256 bits

36. Router works at:  
    A) Physical layer  
    B) Data link layer  
    C) Network layer ✓  
    D) Transport layer

37. ICMP is used for:  
    A) File transfer  
    B) Error reporting ✓  
    C) Encryption  
    D) Authentication

38. Path determination is done by:  
    A) Hub  
    B) Switch  
    C) Router ✓  
    D) Bridge

39. Packet forwarding is function of:  
    A) Application layer  
    B) Network layer ✓  
    C) Data link layer  
    D) Transport layer

40. IP address uniquely identifies:  
    A) Network cable  
    B) Device on network ✓  
    C) Router port  
    D) Protocol

## 5. Transport Layer

41. Transport layer ensures:  
    A) Routing  
    B) End to end communication ✓  
    C) Switching  
    D) Encryption

42. Two main protocols of transport layer are:  
    A) HTTP & FTP  
    B) TCP & UDP ✓  
    C) ARP & ICMP  
    D) SMTP & POP

43. TCP is:  
    A) Connectionless  
    B) Connection oriented ✓  
    C) Unreliable  
    D) Fastest protocol

44. UDP is:  
    A) Connectionless protocol ✓  
    B) Reliable protocol

45. Data unit at transport layer is:  
    A) Frame  
    B) Packet  
    C) Segment ✓  
    D) Bit

46. Port numbers are used for:  
    A) Routing  
    B) Process identification ✓  
    C) Encryption  
    D) Switching

47. TCP provides:  
    A) No reliability  
    B) Reliable transmission ✓  
    C) No flow control  
    D) No error checking

48. UDP is commonly used for:  
    A) File transfer  
    B) Email  
    C) Streaming and gaming ✓  
    D) Database access

49. Multiplexing occurs at:  
    A) Physical layer  
    B) Transport layer ✓  
    C) Network layer  
    D) Application layer

50. Which layer controls congestion?  
    A) Application  
    B) Network  
    C) Transport ✓  
    D) Data link

## 6. Application Layer

51. Application layer provides services to:  
    A) Network devices  
    B) End users ✓  
    C) Routers  
    D) Switches

52. Which protocol is used for web browsing?  
    A) FTP  
    B) SMTP  
    C) HTTP ✓  
    D) POP3

53. FTP stands for:  
    A) File Transfer Program  
    B) File Transfer Protocol ✓  
    C) Fast Transfer Protocol  
    D) File Transmission Process

54. SMTP is used for:  
    A) File transfer  
    B) Web browsing  
    *(Answer: sending email)*

55. POP3 protocol is used for:  
    A) Sending email  
    B) Receiving email ✓  
    C) Encrypting email  
    D) Routing email

56. DNS stands for:  
    A) Data Name System  
    B) Domain Name System ✓  
    C) Digital Network System  
    D) Domain Network Server

57. DNS converts:  
    A) MAC to IP  
    B) Domain name to IP address ✓  
    C) IP to MAC  
    D) URL to file

58. Telnet is used for:  
    A) File transfer  
    B) Remote login ✓  
    C) Email service  
    D) Encryption

59. HTTP operates at:  
    A) Network layer  
    B) Transport layer  
    C) Application layer ✓  
    D) Data link layer

60. HTTPS provides:  
    A) Faster browsing  
    B) Secure web communication ✓  
    C) Data compression  
    D) Email service

## 7. Wireless Networks

61. Wireless communication uses:  
    A) Cables  
    B) Radio waves ✓  
    C) Fiber optics  
    D) Copper wires

62. Wi-Fi stands for:  
    A) Wireless File  
    B) Wireless Fiber  
    C) Wireless Fidelity ✓  
    D) Wide Fiber

63. Bluetooth is mainly used for:  
    A) Long distance communication  
    B) Short range communication ✓  
    C) Satellite communication  
    D) Internet routing

64. The standard for Wi-Fi is:  
    A) IEEE 802.11 ✓  
    B) IEEE 802.3

65. Cellular networks mainly use:  
    A) Routers  
    B) Base stations ✓  
    C) Switches  
    D) Bridges

66. 5G stands for:  
    A) Fifth Generation mobile network ✓  
    B) Fifth Generation wireless technology  
    C) Fifth Global network  
    D) Fifth Grid network

67. WLAN stands for:  
    A) Wide LAN  
    B) Wireless Local Area Network ✓  
    C) Wireless Logical Area Network  
    D) Wired LAN

68. Access point in Wi-Fi network:  
    A) Stores data  
    B) Connects wireless devices to network ✓  
    C) Encrypts data  
    D) Routes packets

69. Signal interference in wireless networks causes:  
    A) Faster speed  
    B) Reduced performance ✓  
    C) Stronger signals  
    D) More bandwidth

70. NFC is mainly used for:  
    A) Internet routing  
    B) Contactless payments ✓  
    C) Email transfer  
    D) File compression

## 8. Cloud Computing

71. Cloud computing provides:  
    A) Local storage  
    B) Internet-based computing services ✓  
    C) Offline computing  
    D) Hardware devices

72. Which company provides cloud services?  
    A) Microsoft  
    B) Amazon  
    C) Google  
    D) All of these ✓

73. SaaS stands for:  
    A) Software and System  
    B) Software as a Service ✓  
    C) Storage as Service  
    D) System as Service

74. PaaS stands for:  
    A) Platform and Software  
    B) Platform as a Service ✓

75. IaaS stands for:  
    A) Internet as a Service  
    B) Infrastructure as a Service ✓  
    C) Interface as a Service  
    D) Integration as a Service

76. Example of SaaS is:  
    A) AWS  
    B) Google Docs ✓  
    C) Virtual Machine  
    D) Storage server

77. Cloud deployment model accessible to everyone is:  
    A) Private cloud  
    B) Hybrid cloud  
    C) Public cloud ✓  
    D) Local cloud

78. Hybrid cloud combines:  
    A) LAN & WAN  
    B) Public and Private cloud ✓  
    C) SaaS & PaaS  
    D) Web & mobile

79. Main benefit of cloud computing:  
    A) High hardware cost  
    B) Scalability ✓  
    C) Local storage only  
    D) Offline processing

80. Virtualization is used in:  
    A) LAN  
    B) Cloud computing ✓  
    C) FTP  
    D) HTTP

## 9. Network Security (Network Perspective)

81. Network security protects:  
    A) Hardware only  
    B) Software only  
    C) Data and network resources ✓  
    D) Printer devices

82. Firewall is used to:  
    A) Speed up network  
    B) Block unauthorized access ✓  
    C) Store data  
    D) Compress files

83. Encryption converts:  
    A) Data to image  
    B) Plain text to cipher text ✓  
    C) Image to data  
    D) Data to signal

84. Decryption converts:  
    A) Cipher text to image  
    B) Cipher text to plain text ✓

85. SSL stands for:  
    A) Secure System Layer  
    B) Secure Sockets Layer ✓  
    C) Security Server Layer  
    D) Secure Signal Layer

86. Phishing attack aims to:  
    A) Improve network  
    B) Steal user information ✓  
    C) Speed internet  
    D) Encrypt files

87. VPN stands for:  
    A) Virtual Private Node  
    B) Virtual Private Network ✓  
    C) Verified Private Network  
    D) Visual Private Network

88. Antivirus software protects against:  
    A) Hardware failure  
    B) Malware ✓  
    C) Network cables  
    D) Internet speed issues

89. Authentication ensures:  
    A) Data compression  
    B) Identity verification ✓  
    C) Packet routing  
    D) Encryption only

90. IDS stands for:  
    A) Intrusion Detection System ✓  
    B) Internet Data System  
    C) Internal Data Security  
    D) Integrated Detection Service

## 10. Next Generation Networks

91. Next Generation Networks (NGN) are based on:  
    A) Analog systems  
    B) IP-based communication ✓  
    C) Cable networks  
    D) Satellite systems

92. 5G network provides:  
    A) Low speed  
    B) High speed and low latency ✓  
    C) Only voice calls  
    D) Only SMS

93. IoT stands for:  
    A) Internet of Technology  
    B) Internet of Things ✓  
    C) Internal Object Technology  
    D) Integrated Online Technology

94. IoT devices communicate through:  
    A) Manual signals  
    B) Internet connectivity ✓

95. Smart cities use:  
    A) Traditional networks  
    B) IoT and advanced networks ✓  
    C) Dial‑up connection  
    D) Analog communication

96. Edge computing processes data:  
    A) In cloud center only  
    B) Near the data source ✓  
    C) On router only  
    D) In ISP only

97. Software Defined Networking (SDN) separates:  
    A) Hardware & software  
    B) Control plane and data plane ✓  
    C) Router & switch  
    D) LAN & WAN

98. Network Function Virtualization (NFV) replaces:  
    A) Software  
    B) Hardware network devices with virtual ones ✓  
    C) Operating systems  
    D) Databases

99. 6G research focuses on:  
    A) Slower networks  
    B) Ultra-high speed communication ✓  
    C) Analog signals  
    D) Dial-up internet

100. Smart devices in NGN communicate using:  
     A) Offline storage  
     B) Internet protocols ✓  
     C) Paper records  
     D) Analog cables

---

# Programming (C++ / Java / Python)

## 1. Programming Fundamentals

1. A program is:  
   A) Hardware device  
   B) Set of instructions for computer ✓  
   C) Network protocol  
   D) Database

2. Programming language used to write instructions for computers is:  
   A) HTML  
   B) C++ ✓  
   C) HTTP  
   D) DNS

3. The process of finding and fixing errors in a program is called:  
   A) Compiling  
   B) Executing  
   C) Debugging ✓  
   D) Designing

4. Which of the following is a high level language?  
   A) Assembly  
   B) Machine code  
   *(Answer: C++ or Python – not listed, but likely "C++" from context)*

5. Compiler converts:  
   A) Machine code to English  
   B) High level code to machine code ✓  
   C) Binary to decimal  
   D) Data to information

6. Algorithm is:  
   A) Programming language  
   B) Step by step solution to a problem ✓  
   C) Software tool  
   D) Data structure

7. Flowchart is used to:  
   A) Store data  
   B) Represent algorithm graphically ✓  
   C) Execute program  
   D) Compile program

8. Interpreter executes program:  
   A) Whole program at once  
   B) Line by line ✓  
   C) After compilation  
   D) Without code

9. Which language is widely used for AI and ML?  
   A) C  
   B) Java  
   C) Python ✓  
   D) Pascal

10. Syntax error occurs when:  
    A) Program rules are violated ✓  
    B) Hardware fails  
    C) Network disconnects  
    D) Memory is full

## 2. Data Types & Variables

11. Variable is used to:  
    A) Store program  
    B) Store data value ✓  
    C) Connect network  
    D) Execute program

12. Which data type stores integer numbers?  
    A) float  
    B) char  
    C) int ✓  
    D) string

13. Which data type stores decimal numbers?  
    A) int  
    B) char  
    C) float ✓  
    D) bool

14. A variable name cannot start with:  
    A) Letter  
    B) Underscore  
    *(Answer: number)*

15. Boolean data type stores:  
    A) Numbers  
    B) Characters  
    C) True or False ✓  
    D) Strings

16. In C++, character data type is:  
    A) int  
    B) char ✓  
    C) bool  
    D) float

17. In Python, variable declaration requires:  
    A) Data type first  
    B) No explicit data type ✓  
    C) Semicolon  
    D) Pointer

18. Which of the following is valid variable name?  
    A) 1value  
    B) value1 ✓  
    C) #value  
    D) @value

19. String data type stores:  
    A) Integers  
    B) Boolean values  
    C) Text data ✓  
    D) Binary numbers

20. Which symbol is used for assignment in most languages?  
    A) ==  
    B) = ✓  
    C) !=  
    D) <=

## 3. Operators & Expressions

21. Operator is used to:  
    A) Store data  
    B) Perform operations on variables ✓  
    C) Execute program  
    D) Compile code

22. Which operator is used for addition?  
    A) -  
    B) * C) + ✓  
    D) /

23. Which operator is used for equality comparison?  
    A) =  
    B) == ✓  
    C) !=  
    D) <=

24. Logical AND operator is:  
    A) ||  
    B) && ✓

25. Which operator returns remainder?  
    A) /  
    B) * C) % ✓  
    D) +

26. Unary operator works on:  
    A) Two operands  
    B) One operand ✓  
    C) Three operands  
    D) Multiple operands

27. Relational operators are used for:  
    A) Arithmetic calculation  
    B) Comparing values ✓  
    C) Memory allocation  
    D) Input output

28. Expression is:  
    A) Variable name  
    B) Combination of variables and operators ✓  
    C) Programming language  
    D) Flowchart symbol

29. Logical OR operator is:  
    A) &&  
    B) || ✓  
    C) !  
    D) ==

30. Which operator is used for multiplication?  
    A) +  
    B) -  
    C) * ✓  
    D) /

## 4. Control Structures

31. Control structures are used to:  
    A) Store data  
    B) Control flow of program execution ✓  
    C) Connect networks  
    D) Compile code

32. Which statement is used for decision making?  
    A) for  
    B) while  
    C) if ✓  
    D) break

33. Which loop executes at least once?  
    A) for  
    B) while  
    C) do-while ✓  
    D) if

34. Which loop is best when number of iterations is known?  
    A) while  
    B) for ✓

35. Which statement is used to exit a loop?  
    A) continue  
    B) break ✓  
    C) return  
    D) goto

36. The continue statement:  
    A) Stops program  
    B) Skips current iteration ✓  
    C) Ends loop  
    D) Ends program

37. Switch statement is used for:  
    A) Looping  
    B) Multiple selection ✓  
    C) File handling  
    D) Input output

38. Nested loop means:  
    A) Loop inside condition  
    B) Loop inside another loop ✓  
    C) Loop outside function  
    D) Infinite loop

39. Infinite loop means:  
    A) Loop with error  
    B) Loop that never ends ✓  
    C) Loop with condition  
    D) Loop with break

40. Condition in if statement must return:  
    A) Integer  
    B) Character  
    C) Boolean value ✓  
    D) String

## 5. Functions / Methods

41. Function is:  
    A) Variable  
    B) Block of reusable code ✓  
    C) Operator  
    D) Loop

42. Function helps in:  
    A) Increasing errors  
    B) Code reusability ✓  
    C) Slower execution  
    D) Hardware control

43. A function without return value is called:  
    A) Parameter function  
    B) Void function ✓  
    C) Recursive function  
    D) Inline function

44. Parameters are:  
    A) Values passed to function ✓  
    B) Output values

45. Recursion means:  
    A) Loop repetition  
    B) Function calling itself ✓  
    C) Function deletion  
    D) Function compilation

46. Main function is:  
    A) Optional  
    B) Starting point of program ✓  
    C) Ending point  
    D) Loop function

47. Return statement is used to:  
    A) End program  
    B) Send value back to caller ✓  
    C) Repeat function  
    D) Print output

48. Function definition contains:  
    A) Only name  
    B) Actual code of function ✓  
    C) Function call  
    D) Variable

49. Function call means:  
    A) Creating function  
    B) Executing function ✓  
    C) Deleting function  
    D) Storing function

50. Library functions are:  
    A) User created  
    B) Predefined functions ✓  
    C) Hardware functions  
    D) Network functions

## 6. Input / Output Handling

51. Input means:  
    A) Display data  
    B) Receive data from user ✓  
    C) Delete data  
    D) Process data

52. Output means:  
    A) Display result to user ✓  
    B) Receive data  
    C) Store data  
    D) Compile program

53. In C++, input is taken using:  
    A) printf  
    B) cin ✓  
    C) cout  
    D) scanf

54. In C++, output is displayed using:  
    A) cin  
    B) scanf  
    *(Answer: cout)*

55. In Python, input is taken using:  
    A) print()  
    B) input() ✓  
    C) read()  
    D) write()

56. In Python, output is displayed using:  
    A) print() ✓  
    B) input()  
    C) cout  
    D) echo

57. Standard input device is:  
    A) Monitor  
    B) Keyboard ✓  
    C) Printer  
    D) Speaker

58. Standard output device is:  
    A) Keyboard  
    B) Mouse  
    C) Monitor ✓  
    D) Scanner

59. File input means:  
    A) Reading from network  
    B) Reading from file ✓  
    C) Writing to file  
    D) Deleting file

60. File output means:  
    A) Writing data to file ✓  
    B) Reading from file  
    C) Closing file  
    D) Encrypting file

## 7. Arrays & Collections

61. Array stores:  
    A) Different data types  
    B) Multiple values of same type ✓  
    C) Only strings  
    D) Only numbers

62. Array index usually starts from:  
    A) 1  
    B) 0 ✓  
    C) -1  
    D) 2

63. Array size means:  
    A) Memory size  
    B) Number of elements ✓  
    C) Data type  
    D) Index value

64. Accessing array element requires:  
    A) Loop  
    B) Function  
    *(Answer: index)*

65. Multidimensional array means:  
    A) Single list  
    B) Array of arrays ✓  
    C) Character array  
    D) Boolean array

66. In Python, dynamic array structure is:  
    A) Tuple  
    B) Set  
    C) List ✓  
    D) String

67. Collection stores:  
    A) Only numbers  
    B) Group of objects ✓  
    C) Single variable  
    D) Boolean values

68. Linked list is:  
    A) Static structure  
    B) Dynamic data structure ✓  
    C) Array structure  
    D) File structure

69. Array memory allocation is:  
    A) Dynamic  
    B) Static ✓  
    C) Random  
    D) Virtual

70. Array elements are stored in:  
    A) Random locations  
    B) Contiguous memory locations ✓  
    C) Files  
    D) Network

## 8. Object-Oriented Programming (OOP)

71. OOP stands for:  
    A) Object Output Programming  
    B) Object Oriented Programming ✓  
    C) Online Object Programming  
    D) Organized Programming

72. Object is:  
    A) Data type  
    B) Instance of class ✓  
    C) Function  
    D) Operator

73. Class is:  
    A) Blueprint for objects ✓  
    B) Variable  
    C) Function  
    D) Loop

74. Encapsulation means:  
    A) Hiding data  
    B) Binding data and methods together ✓

75. Inheritance allows:  
    A) Data deletion  
    B) Class to inherit properties of another class ✓  
    C) Function creation  
    D) Loop execution

76. Polymorphism means:  
    A) Single form  
    B) Many forms of same function ✓  
    C) Multiple loops  
    D) Multiple variables

77. Abstraction means:  
    A) Data storage  
    B) Hiding implementation details ✓  
    C) Printing data  
    D) Executing code

78. Constructor is:  
    A) Function to destroy object  
    B) Function to initialize object ✓  
    C) Function to print object  
    D) Function to delete object

79. Destructor is used to:  
    A) Create object  
    B) Initialize object  
    C) Destroy object ✓  
    D) Copy object

80. Method is:  
    A) Variable  
    B) Function inside class ✓  
    C) Operator  
    D) Loop

## 9. Exception Handling

81. Exception is:  
    A) Syntax error  
    B) Runtime error ✓  
    C) Logic error  
    D) Network error

82. Exception handling prevents:  
    A) Program execution  
    B) Program crash ✓  
    C) Compilation  
    D) Memory allocation

83. Try block contains:  
    A) Output code  
    B) Code that may cause exception ✓  
    C) Loop code  
    D) Input code

84. Catch block is used to:  
    A) Handle exception ✓  
    B) Print data

85. Finally block executes:  
    A) Sometimes  
    B) Always ✓  
    C) Only on error  
    D) Never

86. Throw keyword is used to:  
    A) Catch exception  
    B) Generate exception ✓  
    C) Ignore exception  
    D) Delete exception

87. Multiple catch blocks handle:  
    A) One error  
    B) Different types of errors ✓  
    C) Input errors  
    D) Network errors

88. Exception handling improves:  
    A) Speed only  
    B) Program reliability ✓  
    C) Memory only  
    D) Network only

89. Runtime errors occur:  
    A) During compilation  
    B) During program execution ✓  
    C) During coding  
    D) During design

90. Exception handling is part of:  
    A) Hardware design  
    B) Programming language features ✓  
    C) Networking  
    D) Database

## 10. Debugging & Testing

91. Debugging means:  
    A) Writing program  
    B) Finding and fixing errors ✓  
    C) Deleting program  
    D) Running program

92. Testing means:  
    A) Writing code  
    B) Checking program correctness ✓  
    C) Designing program  
    D) Compiling program

93. Unit testing tests:  
    A) Whole system  
    B) Individual component ✓  
    C) Network  
    D) Database

94. Integration testing tests:  
    A) Single module  
    B) Combined modules ✓

95. System testing tests:  
    A) Individual function  
    B) Complete system ✓  
    C) Single variable  
    D) Loop

96. Bug means:  
    A) Program feature  
    B) Error in program ✓  
    C) Loop statement  
    D) Data type

97. Test case contains:  
    A) Data only  
    B) Input and expected output ✓  
    C) Program code  
    D) Hardware

98. Logging helps in:  
    A) Data storage  
    B) Debugging program ✓  
    C) File deletion  
    D) Network connection

99. Optimization improves:  
    A) Program errors  
    B) Program performance ✓  
    C) Network speed only  
    D) Memory errors

100. Best practice in programming is:  
     A) No comments  
     B) Clear and readable code ✓  
     C) Long variable names only  
     D) No testing

---

# Data Structures & Algorithms

## 1. Foundations of Data Structures & Algorithms

1. Data structure is:  
   A) Programming language  
   B) Method of organizing data ✓  
   C) Computer network  
   D) Operating system

2. Algorithm is:  
   A) Programming language  
   B) Step-by-step procedure to solve a problem ✓  
   C) Data storage method  
   D) Hardware device

3. Which characteristic is important for a good algorithm?  
   A) Complexity  
   B) Ambiguity  
   C) Efficiency ✓  
   D) Randomness

4. Time complexity measures:  
   A) Memory usage  
   B) Execution time of algorithm ✓

5. Space complexity refers to:  
   A) Execution time  
   B) Memory used by algorithm ✓  
   C) CPU speed  
   D) Input size

6. Which notation is used to represent algorithm complexity?  
   A) Binary notation  
   B) Big O notation ✓  
   C) Hexadecimal notation  
   D) Decimal notation

7. Best case complexity refers to:  
   A) Worst performance  
   B) Minimum time required ✓  
   C) Maximum memory  
   D) Average time

## 2. Linear Data Structures

8. Which is a linear data structure?  
   A) Tree  
   B) Graph  
   C) Array ✓  
   D) Network

9. Array elements are stored in:  
   *(Answer: contiguous memory)*

10. Linked list stores elements using:  
    A) Index  
    B) Pointers ✓  
    C) Arrays  
    D) Hash keys

11. Stack follows:  
    A) FIFO  
    B) LIFO ✓  
    C) Random order  
    D) Circular order

12. Queue follows:  
    A) LIFO  
    B) FIFO ✓  
    C) Random order  
    D) Circular order

13. Push operation is used in:  
    A) Queue  
    B) Stack ✓  
    C) Tree  
    D) Graph

14. Dequeue operation removes element from:  
    A) Stack  
    B) Queue ✓

## 3. Non-Linear Data Structures

15. Which is non-linear data structure?  
    A) Array  
    B) Stack  
    C) Tree ✓  
    D) Queue

16. Tree consists of:  
    A) Nodes only  
    B) Edges only  
    C) Nodes and edges ✓  
    D) Data only

17. Root node is:  
    A) Leaf node  
    B) Topmost node of tree ✓  
    C) Middle node  
    D) Last node

18. Binary tree node has maximum:  
    A) 1 child  
    B) 2 children ✓  
    C) 3 children  
    D) 4 children

19. Leaf node is:  
    A) Root node  
    *(Answer: node with no children)*

20. Graph consists of:  
    A) Nodes only  
    B) Edges only  
    C) Vertices and edges ✓  
    D) Data blocks

## 4. Searching Algorithms

21. Linear search checks:  
    A) Only first element  
    B) Only last element  
    C) Each element sequentially ✓  
    D) Random elements

22. Binary search works on:  
    A) Unsorted array  
    B) Sorted array ✓  
    C) Linked list  
    D) Graph

23. Binary search complexity is:  
    A) O(n)  
    B) O(log n) ✓  
    C) O(n²)  
    D) O(1)

24. Linear search complexity is:  
    A) O(n) ✓  
    B) O(log n)  
    C) O(n²)  
    D) O(1)

25. Binary search repeatedly divides:  
    A) Array into three parts  
    B) Array into two halves ✓  
    C) Array into four parts  
    D) Array into five parts

## 5. Sorting Algorithms

26. Sorting means:  
    A) Searching data  
    B) Arranging data in order ✓  
    C) Deleting data  
    D) Encrypting data

27. Bubble sort compares:  
    A) Random elements  
    B) Adjacent elements ✓  
    C) First and last  
    D) Middle elements

28. Selection sort selects:  
    A) Largest element  
    B) Minimum element in each pass ✓

29. Insertion sort works like:  
    A) Sorting playing cards ✓  
    B) Binary search  
    C) Graph traversal  
    D) Tree traversal

30. Quick sort uses:  
    A) Queue  
    B) Stack  
    C) Divide and conquer ✓  
    D) Greedy method

31. Merge sort complexity is:  
    A) O(n²)  
    B) O(n log n) ✓  
    C) O(n)  
    D) O(log n)

## 6. Hashing

32. Hashing is used for:  
    A) Sorting  
    B) Fast data retrieval ✓  
    C) Graph traversal  
    D) Tree traversal

33. Hash function maps:  
    A) Key to index ✓

34. Collision occurs when:  
    A) Key missing  
    B) Two keys map to same index ✓  
    C) Table empty  
    D) Table full

35. Collision resolution technique:  
    A) Binary search  
    B) Merge sort  
    C) Open addressing ✓  
    D) DFS

## 7. Tree Algorithms

36. Tree traversal means:  
    A) Deleting nodes  
    B) Visiting nodes of tree ✓  
    C) Adding nodes  
    D) Sorting nodes

37. Preorder traversal order is:  
    A) Left Right Root  
    B) Root Left Right ✓  
    C) Left Root Right  
    D) Right Root Left

38. Inorder traversal order is:  
    A) Root Left Right  
    B) Left Root Right ✓  
    C) Right Left Root  
    D) Root Right Left

39. Postorder traversal order is:  
    A) Root Left Right  
    B) Left Root Right  
    C) Left Right Root ✓  
    D) Right Root Left

## 8. Graph Algorithms

40. Graph traversal methods are:  
    A) Sorting methods  
    B) BFS and DFS ✓  
    C) Searching methods  
    D) Hashing methods

41. BFS stands for:  
    A) Binary First Search  
    B) Breadth First Search ✓  
    C) Branch First Search  
    D) Best First Search

42. DFS stands for:  
    A) Data First Search  
    B) Depth First Search ✓

43. BFS uses:  
    A) Stack  
    B) Queue ✓  
    C) Array  
    D) Tree

44. DFS uses:  
    A) Stack ✓  
    B) Queue  
    C) Graph  
    D) Hash table

## 9. Algorithm Design Techniques

45. Divide and conquer technique divides problem into:  
    A) One part  
    B) Smaller subproblems ✓  
    C) Random problems  
    D) Complex problems

46. Greedy algorithm makes:  
    A) Random choice  
    B) Best local choice ✓  
    C) Worst choice  
    D) Slow choice

47. Dynamic programming solves problems using:  
    *(Answer: overlapping subproblems and optimal substructure)*

48. Recursion means:  
    A) Loop execution  
    B) Function calling itself ✓  
    C) Memory allocation  
    D) Data storage

## 10. Advanced Data Structures

49. Heap is used in:  
    A) Graph traversal  
    B) Priority queue ✓  
    C) Linear search  
    D) File system

50. Max heap stores:  
    A) Smallest value at root  
    B) Largest value at root ✓  
    C) Random value  
    D) Middle value

51. Min heap stores:  
    A) Largest value  
    B) Smallest value at root ✓  
    C) Random value  
    D) Last value

## 11. String Algorithms

52. String is:  
    A) Number  
    B) Sequence of characters ✓  
    C) Boolean value  
    D) Integer

53. String searching algorithm:  
    A) BFS  
    B) KMP algorithm ✓  
    C) Merge sort  
    D) Heap sort

54. Pattern matching means:  
    A) Sorting strings  
    B) Finding substring in text ✓  
    C) Deleting string  
    D) Compressing string

## 12. Complexity & Optimization

55. Best case complexity is:  
    A) Maximum time  
    B) Minimum time required ✓  
    C) Average time  
    D) Infinite time

56. Worst case complexity is:  
    A) Minimum time  
    B) Maximum time required ✓

57. Average case complexity is:  
    A) Minimum time  
    B) Maximum time  
    C) Expected time ✓  
    D) Random time

58. O(1) complexity means:  
    A) Linear time  
    B) Logarithmic time  
    C) Constant time ✓  
    D) Quadratic time

59. O(n²) complexity means:  
    A) Constant time  
    B) Linear time  
    C) Quadratic time ✓  
    D) Logarithmic time

60. Algorithm optimization improves:  
    A) Errors  
    B) Efficiency and performance ✓  
    C) Complexity  
    D) Size

61. Stack overflow occurs when:  
    A) Stack empty  
    B) Stack is full ✓  
    C) Queue empty  
    D) Heap empty

62. Queue underflow occurs when:  
    A) Queue full  
    B) Queue empty ✓  
    C) Stack empty  
    D) Heap full

63. Circular queue improves:  
    A) Memory usage  
    B) Queue efficiency ✓  
    C) Sorting speed  
    D) Graph traversal

64. Doubly linked list contains:  
    A) One pointer  
    B) Two pointers ✓  
    C) Three pointers  
    D) No pointer

65. Binary search tree property:  
    A) All nodes equal  
    B) Left < Root < Right ✓  
    C) Root smallest  
    D) Root largest

66. Height of tree means:  
    A) Number of edges  
    B) Longest path from root to leaf ✓  
    C) Number of nodes  
    D) Number of leaves

67. Balanced tree improves:  
    *(Answer: search performance)*

68. Adjacency matrix represents:  
    A) Tree  
    B) Graph ✓  
    C) Stack  
    D) Queue

69. Adjacency list is used to represent:  
    A) Graph efficiently ✓  
    B) Tree  
    C) Stack  
    D) Queue

70. Dijkstra algorithm finds:  
    A) Sorting order  
    B) Shortest path ✓  
    C) Tree traversal  
    D) Graph deletion

71. Minimum spanning tree algorithm:  
    A) BFS  
    B) Kruskal algorithm ✓  
    C) DFS  
    D) Linear search

72. Prim's algorithm is used for:  
    A) Searching  
    B) Sorting  
    *(Answer: Minimum spanning tree)*

73. Topological sorting applies to:  
    A) Tree  
    B) Directed acyclic graph ✓  
    C) Stack  
    D) Queue

74. Greedy algorithms are used in:  
    A) Huffman coding ✓  
    B) Optimal solution problems  
    C) Random search  
    D) Linked list

75. Recursive algorithm uses:  
    A) Queue  
    B) Function calls stack ✓  
    C) Hash table  
    D) Graph

---

# Operating Systems

## 1. Introduction to Operating Systems

1. What is the main purpose of an Operating System?  
   A) Compile programs  
   B) Design applications  
   C) Create databases  
   D) Manage hardware and software resources ✓

2. An operating system acts as:  
   A) Hardware component  
   B) Interface between user and hardware ✓  
   C) Database system  
   D) Programming language

3. Which of the following is an example of an operating system?  
   A) Microsoft Word  
   B) Google Chrome  
   C) Linux ✓  
   D) Adobe Photoshop

4. Which type of OS allows multiple users to use the system simultaneously?  
   A) Batch OS  
   B) Multi-user OS ✓  
   C) Single-user OS  
   D) Embedded OS

5. Which component of the operating system interacts directly with hardware?  
   A) Kernel ✓  
   B) Shell  
   C) Compiler  
   D) Loader

6. Which of the following operating systems is open-source?  
   A) Windows  
   B) macOS  
   C) Linux ✓  
   D) iOS

7. Which feature allows multiple programs to run at the same time?  
   A) Buffering  
   B) Multiprogramming ✓  
   C) Spooling  
   D) Paging

8. Which OS is commonly used for real-time applications?  
   A) Network OS  
   B) Distributed OS  
   C) Real-Time OS (RTOS) ✓  
   D) Batch OS

9. GUI stands for:  
   A) Global User Internet  
   B) Graphical User Interface ✓  
   C) General Utility Interface  
   D) Graphic Universal Internet

10. CLI stands for:  
    A) Control Link Interface  
    B) Command Line Interface ✓  
    C) Computer Logic Interface  
    D) Command Level Internet

## 2. Operating System Structures

11. Which OS structure places all services in one large program?  
    A) Monolithic structure ✓  
    B) Layered structure  
    C) Client-server structure  
    D) Virtual machine structure

12. In a layered OS structure, each layer:  
    A) Works independently  
    B) Uses services of the layer below it ✓  
    C) Directly accesses hardware  
    D) Works only with users

13. Which structure improves modularity and debugging?  
    A) Monolithic structure  
    B) Layered structure ✓  
    C) Simple structure  
    D) Batch structure

14. The shell in an operating system provides:  
    A) Memory management  
    B) Disk management  
    C) User command interface ✓  
    D) Security control

15. Which architecture keeps only minimal functions in the kernel?  
    A) Monolithic  
    B) Microkernel ✓  
    C) Hybrid  
    D) Layered

## 3. Process Management

16. A process is defined as:  
    A) Program stored on disk  
    B) Program in execution ✓  
    C) Program compiled  
    D) Program deleted

17. Which structure stores information about a process?  
    A) Process Table  
    B) Process Control Block (PCB) ✓  
    C) Memory Block  
    D) File Table

18. Which process state means the process is currently executing?  
    A) Ready  
    B) Waiting  
    C) Running ✓  
    D) Suspended

19. When a process waits for I/O it enters:  
    A) Ready state  
    B) Waiting/Blocked state ✓  
    C) Running state  
    D) Terminated state

20. Context switching occurs when:  
    A) CPU switches from one process to another ✓  
    B) Memory increases  
    C) Disk reads a file  
    D) Program compiles

## 4. CPU Scheduling

21. CPU scheduling is used to:  
    A) Manage memory  
    B) Allocate CPU to processes ✓  
    C) Manage files  
    D) Control devices

22. Which scheduling algorithm serves processes in order of arrival?  
    A) FCFS ✓  
    B) SJF  
    C) Round Robin  
    D) Priority

23. Which algorithm selects the process with shortest execution time?  
    A) FCFS  
    B) Shortest Job First (SJF) ✓  
    C) Round Robin  
    D) Priority

24. Round Robin scheduling uses:  
    A) Priority levels  
    B) Time quantum ✓  
    C) FIFO queue  
    D) Memory pages

25. Priority scheduling executes:  
    A) Longest job first  
    B) Highest priority process first ✓  
    C) Smallest memory process  
    D) Random process

## 5. Thread Management

26. A thread is:  
    A) Heavyweight process  
    B) Lightweight process ✓  
    C) Memory unit  
    D) File structure

27. Multithreading allows:  
    A) Multiple CPUs  
    B) Multiple threads within one process ✓  
    C) Multiple disks  
    D) Multiple users

28. Threads share:  
    A) CPU registers only  
    B) Process memory space ✓  
    C) Separate memory  
    D) Disk storage

29. Which library provides thread support in many systems?  
    A) POSIX Threads ✓  
    B) TCP  
    C) HTTP  
    D) SQL

30. Thread creation improves:  
    A) Performance and responsiveness ✓  
    B) Disk storage  
    C) Security  
    D) Graphics

## 6. Concurrency & Synchronization

31. Concurrency means:  
    A) One process running  
    B) Multiple processes executing simultaneously ✓  
    C) Only CPU running  
    D) Only disk running

32. Critical section refers to:  
    A) Shared resource accessing code ✓  
    B) CPU register  
    C) Disk block  
    D) Memory page

33. Race condition occurs when:  
    A) Multiple processes access shared data simultaneously ✓  
    B) CPU fails  
    C) Disk crashes  
    D) Memory increases

34. Semaphore is used for:  
    A) Process synchronization ✓  
    B) File storage  
    C) Memory allocation  
    D) Disk scheduling

35. Mutual exclusion ensures:  
    A) Only one process accesses shared resource at a time ✓  
    B) Multiple CPUs work together  
    C) Multiple users login  
    D) Files are encrypted

## 7. Deadlocks

36. Deadlock occurs when:  
    A) CPU crashes  
    B) Processes wait indefinitely for resources ✓  
    C) Memory is full  
    D) Disk fails

37. Which condition is required for deadlock?  
    A) Mutual exclusion  
    B) Hold and wait  
    C) No preemption  
    D) All of the above ✓

38. Deadlock prevention works by:  
    A) Breaking one necessary condition ✓  
    B) Increasing RAM  
    C) Increasing CPU speed  
    D) Deleting processes

39. Deadlock detection involves:  
    A) Checking circular wait ✓  
    B) Increasing memory  
    C) Formatting disk  
    D) Restarting OS

40. Banker's Algorithm is used for:  
    A) Deadlock avoidance ✓  
    B) Disk scheduling  
    C) Memory allocation  
    D) File management

## 8. Memory Management

41. Memory management is responsible for:  
    A) Allocating memory to processes ✓  
    B) Managing files  
    C) Managing CPU  
    D) Managing printers

42. Paging divides memory into:  
    A) Pages and frames ✓  
    B) Segments only  
    C) Blocks only  
    D) Files

43. Virtual memory allows:  
    A) Programs larger than physical memory ✓  
    B) Faster CPU  
    C) Larger disk  
    D) Faster network

44. LRU page replacement replaces:  
    A) First page  
    B) Least recently used page ✓  
    C) Random page  
    D) Largest page

45. Thrashing occurs when:  
    A) Excessive paging reduces performance ✓  
    B) CPU overheads  
    C) Disk crashes  
    D) Files delete automatically

## 9. File System Management

46. File system is used to:  
    A) Store and organize files ✓  
    B) Manage CPU  
    C) Manage network  
    D) Manage memory

47. Which structure organizes files hierarchically?  
    A) Tree structure ✓  
    B) Circular structure  
    C) Linear structure  
    D) Random structure

48. File attributes include:  
    A) Name  
    B) Size  
    C) Type  
    D) All of the above ✓

49. A directory is used to:  
    A) Organize files ✓  
    B) Compile programs  
    C) Manage CPU  
    D) Encrypt memory

50. Which file access method reads records sequentially?  
    A) Sequential access ✓  
    B) Random access  
    C) Indexed access  
    D) Direct access

## 10. Secondary Storage Management

51. Secondary storage is used for:  
    A) Permanent data storage ✓  
    B) Temporary storage  
    C) CPU operations  
    D) Memory registers

52. Example of secondary storage:  
    A) RAM  
    B) Cache  
    C) Hard Disk ✓  
    D) Register

53. Disk scheduling algorithm that serves nearest request first:  
    A) FCFS  
    B) SSTF ✓  
    C) SCAN  
    D) LOOK

54. SCAN algorithm is also called:  
    A) Elevator algorithm ✓  
    B) Random algorithm  
    C) Priority algorithm  
    D) FIFO algorithm

55. Disk fragmentation causes:  
    A) Slower file access ✓  
    B) Faster processing  
    C) Larger RAM  
    D) Higher CPU speed

## 11. Input / Output Systems

56. I/O system manages:  
    A) Data transfer between devices and memory ✓  
    B) CPU scheduling  
    C) Memory paging  
    D) File deletion

57. Buffering is used to:  
    A) Store temporary data ✓  
    B) Increase CPU speed  
    C) Encrypt data  
    D) Delete files

58. Spooling stands for:  
    A) Simultaneous Peripheral Operations Online ✓  
    B) System Programming Output Line  
    C) Sequential Program Operation Logic  
    D) System Peripheral Online Link

59. Device driver is:  
    A) Software controlling hardware devices ✓  
    B) Hardware device  
    C) CPU component  
    D) Memory unit

60. Interrupt is used to:  
    A) Notify CPU of events ✓  
    B) Store files  
    C) Increase memory  
    D) Schedule processes

## 12. Protection & Security

61. Protection in OS ensures:  
    A) Secure resource access ✓  
    B) Faster CPU  
    C) Larger disk  
    D) Better graphics

62. Authentication verifies:  
    A) User identity ✓  
    B) File type  
    C) Disk size  
    D) CPU speed

63. Authorization determines:  
    A) User permissions ✓  
    B) File size  
    C) Network speed  
    D) CPU usage

64. Encryption is used for:  
    A) Data confidentiality ✓  
    B) Faster processing  
    C) File compression  
    D) Disk formatting

65. Malware refers to:  
    A) Malicious software ✓  
    B) Hardware failure  
    C) Network cable  
    D) CPU instruction

---

# Software Engineering

## 1. Introduction to Software Engineering

1. Software Engineering is defined as:  
   A) Writing programs only  
   B) Applying engineering principles to software development ✓  
   C) Designing hardware  
   D) Installing software

2. The main goal of Software Engineering is:  
   A) Increase hardware cost  
   B) Produce reliable and efficient software ✓  
   C) Reduce RAM  
   D) Increase CPU speed

3. Which of the following is NOT a software characteristic?  
   A) Software is developed  
   B) Software does not wear out  
   C) Software is intangible  
   D) Software rusts like hardware ✓

4. Software crisis refers to:  
   A) Lack of programmers  
   B) Difficulty in developing reliable software ✓  
   C) Lack of computers  
   D) Low internet speed

## 2. Software Process Models

5. The Waterfall model is:  
   A) Linear sequential model ✓  
   B) Circular model  
   C) Random model  
   D) Parallel model

6. Which model focuses on risk analysis?  
   A) Waterfall  
   B) Spiral ✓  
   C) Incremental  
   D) Agile

7. The Incremental model delivers software:  
   A) In one phase  
   B) In small functional parts ✓  
   C) Randomly  
   D) Only at the end

8. Which model is best for large complex projects?  
   A) Spiral model ✓  
   B) Waterfall  
   C) Prototype  
   D) Linear model

## 3. Agile Software Development

9. Agile development emphasizes:  
   A) Documentation only  
   B) Flexibility and customer collaboration ✓  
   C) Hardware design  
   D) Fixed requirements

10. Scrum is a:  
    A) Programming language  
    B) Agile framework ✓  
    C) Database system  
    D) Operating system

11. In Scrum, short development cycles are called:  
    *(Answer: sprints)*

## 4. Software Requirements Engineering

12. Requirement gathering is also called:  
    A) Requirement elicitation ✓  
    B) Requirement coding  
    C) Requirement execution  
    D) Requirement deletion

13. Functional requirements describe:  
    A) System behavior and functions ✓  
    B) Hardware cost  
    C) Team management  
    D) Disk capacity

14. Non-functional requirements describe:  
    A) System performance and quality ✓  
    B) System functions  
    C) Algorithms  
    D) Program code

15. SRS stands for:  
    A) Software Requirement Specification ✓  
    B) Software Runtime System  
    C) Software Resource Service  
    D) System Requirement Software

## 5. Software Project Management

16. Software project management focuses on:  
    A) Planning and controlling software projects ✓  
    B) Hardware installation  
    C) Coding only  
    D) Disk management

17. Gantt chart is used for:  
    A) Scheduling project tasks ✓  
    B) Designing databases  
    C) Testing software  
    D) Writing code

18. Project scope defines:  
    A) Project boundaries and objectives ✓  
    B) Hardware speed  
    C) Memory size  
    D) Disk storage

19. Risk management helps to:  
    A) Identify and reduce project risks ✓  
    B) Increase project cost  
    C) Delay project completion  
    D) Reduce team members

## 6. Software Design

20. Software design converts:  
    A) Code into requirements  
    B) Requirements into design ✓  
    C) Programs into hardware  
    D) Data into memory

21. High-level design focuses on:  
    A) System architecture ✓  
    B) Coding syntax  
    C) Memory allocation  
    D) File storage

22. Low-level design focuses on:  
    A) Detailed module design ✓  
    B) Hardware circuits  
    C) Network cables  
    D) Disk structure

23. Modularity improves:  
    A) Maintainability ✓  
    B) CPU speed  
    C) Disk storage  
    D) Network bandwidth

## 7. Software Architecture

24. Software architecture describes:  
    A) Structure of software components ✓  
    B) Programming syntax  
    C) Hardware circuits  
    D) CPU instructions

25. Client-server architecture includes:  
    A) Client and server systems ✓  
    B) CPU and RAM  
    C) Hardware circuits  
    D) Network cables

26. Layered architecture organizes system into:  
    A) Layers ✓  
    B) Files  
    C) Threads  
    D) Processes

## 8. User Interface Design

27. UI design focuses on:  
    A) User interaction with software ✓  
    B) CPU performance  
    C) Disk storage  
    D) Network protocols

28. Good UI design improves:  
    A) User experience ✓  
    B) Hardware cost  
    C) CPU speed  
    D) Disk capacity

29. GUI stands for:  
    A) Graphical User Interface ✓  
    B) General User Internet  
    C) Global Utility Interface  
    D) Graphic Universal Internet

## 9. Software Implementation & Coding

30. Implementation phase involves:  
    A) Writing program code ✓  
    B) Designing hardware  
    C) Managing memory  
    D) Installing OS

31. Debugging means:  
    A) Removing errors from code ✓  
    B) Writing new programs  
    C) Deleting files  
    D) Testing hardware

32. Source code is:  
    A) Human-readable program code ✓  
    B) Machine code  
    C) Binary code  
    D) Hardware code

## 10. Software Testing

33. Software testing is used to:  
    A) Find errors in software ✓  
    B) Increase RAM  
    C) Reduce disk size  
    D) Design hardware

34. Unit testing tests:  
    A) Individual program modules ✓  
    B) Whole system  
    C) Hardware components  
    D) Network systems

35. Integration testing tests:  
    A) Combined modules ✓  
    B) Single function  
    C) Hardware drivers  
    D) Disk sectors

36. System testing tests:  
    A) Complete system ✓  
    B) Individual module  
    C) CPU only  
    D) Memory only

## 11. Software Maintenance & Evolution

37. Software maintenance occurs:  
    A) After software deployment ✓  
    B) Before coding  
    C) Before testing  
    D) Before design

38. Corrective maintenance fixes:  
    A) Software bugs ✓  
    B) Hardware faults  
    C) Disk failures  
    D) CPU errors

39. Adaptive maintenance updates software for:  
    A) New environments ✓  
    B) New hardware circuits  
    C) Disk storage  
    D) CPU architecture

## 12. Software Quality Assurance

40. SQA ensures:  
    A) Software quality ✓  
    B) CPU speed  
    C) Disk storage  
    D) Network speed

41. Quality assurance focuses on:  
    A) Process improvement ✓  
    B) Hardware performance  
    C) Disk management  
    D) Network protocols

42. ISO standards help in:  
    A) Maintaining quality ✓  
    B) Increasing RAM  
    C) Reducing CPU speed  
    D) Disk formatting

## 13. Software Metrics & Measurement

43. Software metrics measure:  
    A) Software characteristics ✓  
    B) Hardware design  
    C) Network cables  
    D) CPU temperature

44. LOC metric means:  
    A) Lines of Code ✓  
    B) Level of Control  
    C) Line of CPU  
    D) Logical Operation Code

## 14. Software Configuration Management

45. SCM stands for:  
    A) Software Configuration Management ✓  
    B) System Control Method  
    C) Software Control Model  
    D) System Configuration Method

46. Version control is used to:  
    A) Manage code changes ✓  
    B) Increase CPU speed  
    C) Reduce RAM  
    D) Delete files

## 15. Software Risk Management

47. Risk in software project means:  
    A) Potential problem ✓  
    B) Hardware upgrade  
    C) Network connection  
    D) CPU failure

48. Risk mitigation means:  
    A) Reducing risk impact ✓  
    B) Increasing project cost  
    C) Deleting requirements  
    D) Stopping project

## 16. Software Security Engineering

49. Software security focuses on:  
    A) Protecting software from attacks ✓  
    B) Increasing CPU speed  
    C) Increasing disk space  
    D) Hardware design

50. Encryption protects:  
    A) Data confidentiality ✓  
    B) CPU speed  
    C) Disk structure  
    D) Hardware devices

51. Software ethics refers to:  
    A) Professional responsibility ✓  
    B) Hardware management  
    C) Disk maintenance  
    D) Network routing

52. CASE tools help in:  
    A) Automating software development ✓  
    B) Hardware design  
    C) Disk storage  
    D) CPU scheduling

53. Prototype model is used when:  
    A) Requirements are unclear ✓  
    B) Requirements are fixed  
    C) Hardware is limited  
    D) Network is slow

54. Black box testing focuses on:  
    A) Functionality ✓  
    B) Code structure  
    C) Hardware circuits  
    D) Memory blocks

55. White box testing focuses on:  
    A) Internal code structure ✓  
    B) User interface  
    C) Network speed  
    D) Disk storage

56. Refactoring improves:  
    A) Code structure ✓  
    B) Hardware speed  
    C) Disk storage  
    D) CPU frequency

57. Software reuse reduces:  
    A) Development time ✓  
    B) CPU speed  
    C) Disk capacity  
    D) Memory size

58. Requirement validation ensures:  
    A) Correct requirements ✓  
    B) Faster coding  
    C) Hardware performance  
    D) Disk allocation

59. Traceability links:  
    A) Requirements with design and code ✓  
    B) CPU with RAM  
    C) Disk with memory  
    D) Hardware with network

60. Coupling refers to:  
    A) Dependency between modules ✓  
    B) CPU connection  
    C) Disk sectors  
    D) Memory blocks

61. Cohesion refers to:  
    A) Strength within a module ✓  
    B) Network communication  
    C) Hardware links  
    D) Disk speed

62. Software lifecycle includes:  
    A) All development stages ✓  
    B) CPU processes  
    C) Network layers  
    D) Hardware modules

63. Deployment means:  
    A) Releasing software for use ✓  
    B) Writing code  
    C) Testing modules  
    D) Designing UI

64. Maintenance cost is usually:  
    A) Highest in lifecycle ✓  
    B) Lowest in lifecycle  
    C) Zero  
    D) Constant

65. Requirement ambiguity causes:  
    A) Project failures ✓  
    B) CPU overheating  
    C) Disk failure  
    D) Network slowdown

66. Code review helps to:  
    A) Detect errors early ✓  
    B) Increase RAM  
    C) Format disks  
    D) Reduce CPU speed

67. Software documentation helps:  
    A) Understanding system ✓  
    B) Increasing hardware speed  
    C) Reducing disk space  
    D) Deleting files

68. Testing improves:  
    A) Software reliability ✓  
    B) Hardware capacity  
    C) Disk storage  
    D) Network bandwidth

69. Verification ensures:  
    A) Software built correctly ✓  
    B) Software built quickly  
    C) Hardware works  
    D) Network connects

---

# Web Development

## 1. Introduction to Web Development

1. Web development refers to:  
   A) Designing hardware  
   B) Creating websites and web applications ✓  
   C) Managing databases only  
   D) Building networks

2. Which of the following is used to view websites?  
   A) Compiler  
   B) Browser ✓  
   C) Database  
   D) Server

3. Example of a web browser:  
   A) MySQL  
   B) Chrome ✓  
   C) Linux  
   D) Python

4. Web applications run on:  
   A) Web browsers ✓  
   B) CPU registers  
   C) RAM only  
   D) Disk controllers

## 2. Web Architecture & Protocols

5. HTTP stands for:  
   A) Hyper Transfer Text Protocol  
   B) HyperText Transfer Protocol ✓  
   C) High Transfer Text Program  
   D) Hyper Tool Transfer Protocol

6. HTTPS provides:  
   A) Secure communication ✓  
   B) Faster internet  
   C) Larger websites  
   D) Free hosting

7. Client-server architecture means:  
   A) Server requests data  
   B) Client requests services from server ✓  
   C) Client stores all data  
   D) Server runs browser

8. URL stands for:  
   A) Uniform Resource Locator ✓  
   B) Universal Resource Link  
   C) Uniform Routing Link  
   D) User Resource Location

## 3. HTML Fundamentals

9. HTML stands for:  
   A) Hyper Trainer Markup Language  
   B) HyperText Markup Language ✓  
   C) HighText Machine Language  
   D) Hyper Tool Markup Language

10. HTML is used to:  
    A) Style webpages  
    B) Structure webpage content ✓  
    C) Store data  
    D) Manage servers

11. Which HTML tag defines a paragraph?  
    A) \`<p>\` ✓  
    B) \`<h1>\`  
    C) \`<div>\`  
    D) \`<span>\`

12. Which tag is used to create a hyperlink?  
    A) \`<img>\`  
    B) \`<link>\`  
    C) \`<a>\` ✓  
    D) \`<href>\`

## 4. CSS Fundamentals

13. CSS stands for:  
    A) Computer Style Sheets  
    B) Cascading Style Sheets ✓  
    C) Creative Style System  
    D) Color Style System

14. CSS is used to:  
    A) Structure web pages  
    B) Style web pages ✓  
    C) Store data  
    D) Manage servers

15. Which property changes text color?  
    A) font-style  
    B) text-color  
    C) color ✓  
    D) font-weight

16. Which CSS property controls text size?  
    A) font-size ✓  
    B) text-size  
    C) font-weight  
    D) size

## 5. Advanced CSS & Responsive Design

17. Responsive design means:  
    A) Websites adapt to different screen sizes ✓  
    B) Websites load faster  
    C) Websites store data  
    D) Websites run offline

18. Which CSS layout system uses rows and columns?  
    A) Grid ✓  
    B) Inline  
    C) Block  
    D) Static

19. Media queries are used for:  
    A) Responsive design ✓  
    B) Database queries  
    C) Server requests  
    D) API calls

## 6. JavaScript Fundamentals

20. JavaScript is used to:  
    A) Add interactivity to websites ✓  
    B) Manage hardware  
    C) Design circuits  
    D) Store data

21. JavaScript runs in:  
    A) Browser ✓  
    B) CPU  
    C) Hard disk  
    D) BIOS

22. Which keyword declares a variable in JavaScript?  
    *(Answer: var, let, const)*

## 7. Advanced JavaScript

23. Function in JavaScript is:  
    A) Block of reusable code ✓  
    B) CSS style  
    C) HTML tag  
    D) Database query

24. Arrow functions were introduced in:  
    *(Answer: ES6)*

## 8. Frontend Frameworks & Libraries

25. Which is a popular JavaScript library?  
    A) React ✓  
    B) MySQL  
    C) Linux  
    D) Apache

26. Angular is a:  
    A) Frontend framework ✓  
    B) Database  
    C) Server  
    D) Operating system

27. Vue.js is used for:  
    A) Building user interfaces ✓  
    B) Managing databases  
    C) Creating hardware  
    D) Network security

## 9. Backend Development Fundamentals

28. Backend development handles:  
    A) Server-side logic ✓  
    B) Webpage styling  
    C) Browser display  
    D) HTML tags

29. Backend languages include:  
    A) JavaScript  
    B) Python  
    C) PHP  
    D) All of the above ✓

## 10. Server-Side Programming

30. Server-side code runs on:  
    A) Web server ✓  
    B) Browser  
    C) CPU register  
    D) Hard disk

31. Example of server-side language:  
    A) PHP ✓  
    B) HTML  
    C) CSS  
    D) XML

## 11. Databases for Web Applications

32. Database stores:  
    A) Structured data ✓  
    B) Images only  
    C) Programs only  
    D) Hardware components

33. MySQL is a:  
    A) Database management system ✓  
    B) Programming language  
    C) Web browser  
    D) Operating system

34. SQL is used to:  
    A) Query databases ✓  
    B) Style webpages  
    C) Design UI  
    D) Control CPU

## 12. Web Security

35. HTTPS protects:  
    A) Data transmission ✓  
    B) CPU speed  
    C) Disk storage  
    D) Browser memory

36. XSS stands for:  
    A) Cross Site Scripting ✓  
    B) Cross System Security  
    C) Extended Security System  
    D) XML Secure Script

37. SQL Injection attacks:  
    A) Databases ✓  
    B) CPU  
    C) Disk drives  
    D) Network cables

## 13. Web Performance & Optimization

38. Website performance depends on:  
    A) Loading speed ✓  
    B) CPU temperature  
    C) Disk color  
    D) Monitor size

39. Caching helps to:  
    A) Improve loading speed ✓  
    B) Increase RAM size  
    C) Reduce network cables  
    D) Delete files

## 14. Web Testing & Debugging

40. Web testing checks:  
    A) Website functionality ✓  
    B) Hardware design  
    C) CPU frequency  
    D) Disk storage

41. Debugging means:  
    A) Removing errors ✓  
    B) Creating database  
    C) Designing UI  
    D) Installing OS

## 15. Deployment & Hosting

42. Web hosting stores websites on:  
    A) Server ✓  
    B) Browser  
    C) CPU register  
    D) RAM

43. Domain name identifies:  
    A) Website address ✓  
    B) CPU speed  
    C) Disk storage  
    D) Database size

## 16. Web APIs & Integration

44. API stands for:  
    A) Application Programming Interface ✓  
    B) Advanced Program Integration  
    C) Application Process Integration  
    D) Automatic Programming Interface

45. APIs allow:  
    A) Communication between applications ✓  
    B) Faster CPU speed  
    C) Disk formatting  
    D) Hardware installation

## 17. Modern Web Development Practices

46. Version control example:  
    A) Git ✓  
    B) HTML  
    C) CSS  
    D) HTTP

47. DevOps focuses on:  
    A) Development and operations collaboration ✓  
    B) Hardware manufacturing  
    C) Disk management  
    D) CPU scheduling

48. GET request is used to:  
    A) Retrieve data ✓  
    B) Delete data  
    C) Update data  
    D) Encrypt data

49. POST request is used to:  
    A) Send data to server ✓  
    B) Delete files  
    C) Read files  
    D) Run scripts

50. Cookies store:  
    A) User data ✓  
    B) CPU instructions  
    C) Disk sectors  
    D) RAM blocks

51. Local storage is used to:  
    A) Store data in browser ✓  
    B) Store data in CPU  
    C) Store data in RAM only  
    D) Store data in BIOS

52. DOM stands for:  
    A) Document Object Model ✓  
    B) Data Object Method  
    C) Document Online Method  
    D) Data Operation Model

53. DOM allows JavaScript to:  
    A) Modify webpage content ✓  
    B) Control CPU  
    C) Format disk  
    D) Encrypt data

54. CDN stands for:  
    A) Content Delivery Network ✓  
    B) Computer Data Network  
    C) Central Data Node  
    D) Content Data Node

55. CDN improves:  
    A) Website speed ✓  
    B) CPU temperature  
    C) Disk errors  
    D) RAM size

56. Frontend development focuses on:  
    A) User interface ✓  
    B) Server logic  
    C) Database queries  
    D) Network routing

---

# AI / Machine Learning and Data Analytics

## 1. Introduction to AI, ML & Data Analytics

1. Artificial Intelligence (AI) refers to:  
   A) Human intelligence  
   B) Machine ability to perform intelligent tasks ✓  
   C) Hardware design  
   D) Database management

2. Machine Learning is a subset of:  
   A) Networking  
   B) Artificial Intelligence ✓  
   C) Operating Systems  
   D) Cyber Security

3. Data analytics is used to:  
   A) Analyze data for insights ✓  
   B) Build hardware  
   C) Design networks  
   D) Increase RAM

4. AI systems are designed to:  
   A) Mimic human intelligence ✓  
   B) Increase disk size  
   C) Reduce memory  
   D) Format computers

## 2. Mathematical Foundations

5. Which field is essential for Machine Learning?  
   A) Linear Algebra ✓  
   B) Chemistry  
   C) Biology  
   D) Geography

6. Probability is used to:  
   A) Measure uncertainty ✓  
   B) Increase CPU speed  
   C) Store files  
   D) Create networks

7. Statistics helps in:  
   A) Data analysis ✓  
   B) Hardware installation  
   C) Disk formatting  
   D) CPU scheduling

## 3. Python for AI & Data Analytics

8. Python is commonly used for:  
   A) AI and data analysis ✓  
   B) Hardware design  
   C) Disk management  
   D) Network cables

9. NumPy library is used for:  
   A) Numerical computing ✓  
   B) Web browsing  
   C) Image editing  
   D) Network routing

10. Pandas library is used for:  
    A) Data analysis ✓  
    B) Game development  
    C) CPU design  
    D) Disk storage

11. Matplotlib is used for:  
    A) Data visualization ✓  
    B) Database management  
    C) Operating systems  
    D) Encryption

## 4. Data Collection & Pre-processing

12. Data preprocessing involves:  
    A) Cleaning and transforming data ✓  
    B) Designing hardware  
    C) Installing software  
    D) Network configuration

13. Missing data handling is part of:  
    A) Data preprocessing ✓  
    B) Database creation  
    C) Coding  
    D) Deployment

14. Normalization is used to:  
    A) Scale data values ✓  
    B) Increase RAM  
    C) Store data  
    D) Encrypt files

## 5. Exploratory Data Analysis (EDA)

15. EDA helps to:  
    A) Understand dataset patterns ✓  
    B) Increase CPU speed  
    C) Design hardware  
    D) Format disks

16. Histogram is used to:  
    A) Show data distribution ✓  
    B) Store files  
    C) Execute programs  
    D) Manage networks

## 6. Supervised Learning

17. Supervised learning uses:  
    A) Labeled data ✓  
    B) Unlabeled data  
    C) Random data  
    D) No data

18. Classification predicts:  
    A) Categories ✓  
    B) Continuous values  
    C) Hardware faults  
    D) Network traffic

19. Regression predicts:  
    A) Continuous values ✓  
    B) Classes only  
    C) Hardware speed  
    D) Disk capacity

20. Example of supervised algorithm:  
    A) Decision Tree ✓  
    B) K-Means  
    C) PCA  
    D) Apriori

## 7. Ensemble Learning

21. Ensemble learning combines:  
    A) Multiple models ✓  
    B) Multiple CPUs  
    C) Multiple disks  
    D) Multiple users

22. Random Forest is:  
    A) Ensemble algorithm ✓  
    B) Database system  
    C) Programming language  
    D) Web framework

## 8. Unsupervised Learning

23. Unsupervised learning uses:  
    A) Unlabeled data ✓  
    B) Labeled data  
    C) Hardware devices  
    D) Network cables

24. Clustering groups:  
    A) Similar data points ✓  
    B) CPUs  
    C) Files  
    D) Users

25. K-Means is a:  
    A) Clustering algorithm ✓  
    B) Regression algorithm  
    C) Encryption algorithm  
    D) Sorting algorithm

## 9. Model Evaluation & Validation

26. Model evaluation measures:  
    A) Model performance ✓  
    B) Disk capacity  
    C) CPU temperature  
    D) Network speed

27. Accuracy measures:  
    A) Correct predictions ✓  
    B) Disk storage  
    C) Memory usage  
    D) CPU power

28. Cross-validation is used to:  
    A) Evaluate model reliability ✓  
    B) Increase RAM  
    C) Manage networks  
    D) Store files

## 10. Feature Engineering & Selection

29. Feature engineering means:  
    A) Creating useful features ✓  
    B) Designing hardware  
    C) Formatting disks  
    D) Writing programs

30. Feature selection helps to:  
    A) Reduce irrelevant data ✓  
    B) Increase RAM  
    C) Store files  
    D) Increase CPU speed

## 11. Deep Learning Fundamentals

31. Deep learning uses:  
    A) Neural networks ✓  
    B) Disk storage  
    C) CPU scheduling  
    D) Network cables

32. Neural networks are inspired by:  
    A) Human brain ✓  
    B) Hard disks  
    C) Databases  
    D) Servers

## 12. Advanced Deep Learning

33. CNN is used mainly for:  
    A) Image processing ✓  
    B) Database queries  
    C) Network routing  
    D) Disk management

34. RNN is used for:  
    A) Sequential data ✓  
    B) Static data  
    C) Disk storage  
    D) CPU scheduling

## 13. Natural Language Processing (NLP)

35. NLP deals with:  
    A) Human language processing ✓  
    B) Hardware design  
    C) Disk formatting  
    D) CPU registers

36. Chatbots use:  
    A) NLP ✓  
    B) Networking  
    C) Hardware  
    D) Operating systems

## 14. Computer Vision

37. Computer vision focuses on:  
    A) Image understanding ✓  
    B) Disk reading  
    C) CPU design  
    D) Network routing

38. Face recognition uses:  
    A) Computer vision ✓  
    B) Databases  
    C) Operating systems  
    D) Networking

## 15. Big Data Analytics (Introductory)

39. Big data refers to:  
    A) Very large datasets ✓  
    B) Large monitors  
    C) High CPU speed  
    D) Big hardware

40. Hadoop is used for:  
    A) Big data processing ✓  
    B) CPU scheduling  
    C) Disk formatting  
    D) UI design

## 16. Model Deployment & MLOps Basics

41. Model deployment means:  
    A) Making model available for use ✓  
    B) Training model  
    C) Cleaning data  
    D) Designing UI

42. MLOps focuses on:  
    A) Managing ML lifecycle ✓  
    B) Managing disks  
    C) Managing CPUs  
    D) Managing networks

## 17. AI Ethics, Security & Privacy

43. AI ethics focuses on:  
    A) Responsible AI use ✓  
    B) Faster CPU  
    C) Disk storage  
    D) Network speed

44. Bias in AI means:  
    A) Unfair predictions ✓  
    B) Faster predictions  
    C) Larger models  
    D) Smaller datasets

45. Overfitting occurs when:  
    A) Model learns training data too well ✓  
    B) Model learns nothing  
    C) Model runs faster  
    D) Model uses less RAM

46. Underfitting occurs when:  
    A) Model fails to learn patterns ✓  
    B) Model learns everything  
    C) Model runs faster  
    D) Model stores data

47. Training data is used to:  
    A) Train ML model ✓  
    B) Test model  
    C) Deploy model  
    D) Delete model

48. Test data is used to:  
    A) Evaluate model ✓  
    B) Train model  
    C) Build model  
    D) Store model

49. Precision measures:  
    A) Correct positive predictions ✓  
    B) Disk usage  
    C) CPU load  
    D) Memory speed

50. Recall measures:  
    A) Correctly identified positives ✓  
    B) Disk errors  
    C) CPU cycles  
    D) Network traffic

51. Gradient descent is used for:  
    A) Optimization ✓  
    B) Networking  
    C) Disk scheduling  
    D) UI design

52. Dataset consists of:  
    A) Data samples ✓  
    B) Hardware components  
    C) Network cables  
    D) CPU registers

53. Label in dataset represents:  
    A) Output variable ✓  
    B) Input feature  
    C) Disk sector  
    D) CPU instruction

54. Feature represents:  
    A) Input variable ✓  
    B) Output result  
    C) CPU speed  
    D) Disk storage

55. Model training adjusts:  
    A) Model parameters ✓  
    B) Disk capacity  
    C) CPU frequency  
    D) Network speed

56. Neural network layers include:  
    A) Input, hidden, output ✓  
    B) Disk, CPU, RAM  
    C) Server, client  
    D) File, directory

57. Activation function introduces:  
    A) Non-linearity ✓  
    B) Disk speed  
    C) CPU cycles  
    D) Network delay

58. Data visualization helps:  
    A) Understand data ✓  
    B) Increase RAM  
    C) Increase CPU speed  
    D) Reduce storage

59. AI applications include:  
    A) Speech recognition ✓  
    B) Hardware repair  
    C) Disk formatting  
    D) Network cables

60. Autonomous cars use:  
    A) AI ✓  
    B) Databases  
    C) Operating systems  
    D) Networking

---

# Cyber Security

## 1. Introduction to Cyber Security

1. What is the primary goal of cyber security?  
   a) Speeding up network traffic  
   b) Protecting systems and data from attacks ✓  
   c) Installing software updates  
   d) Improving battery life

2. Which of the following is considered a cyber threat?  
   a) Firewall  
   b) Malware ✓  
   c) VPN  
   d) Backup

3. Cybersecurity attacks can be classified as:  
   a) Physical and Logical ✓  
   b) Digital and Analog  
   c) Hardware only  
   d) None of the above

4. Which of the following is an example of a social engineering attack?  
   a) Phishing ✓  
   b) SQL Injection  
   c) Cross-site scripting  
   d) Man-in-the-middle

5. Confidentiality, Integrity, and Availability (CIA) are part of:  
   a) Cyber Laws  
   b) Security Principles ✓  
   c) Operating Systems  
   d) Database Models

## 2. Security Fundamentals & Principles

6. The principle of least privilege means:  
   a) Giving all access to all users  
   b) Providing minimum access necessary to perform a task ✓  
   c) Sharing passwords  
   d) Disabling security

7. Defense-in-depth is:  
   a) Using a single security layer  
   b) Using multiple layers of security ✓  
   c) Ignoring minor threats  
   d) Encrypting only emails

8. Authentication ensures:  
   a) User identity verification ✓  
   b) Data recovery  
   c) Malware detection  
   d) Network speed

9. Integrity in security ensures:  
   a) Data is not altered unauthorizedly ✓  
   b) Data is encrypted  
   c) Data is always backed up  
   d) Password complexity

10. Availability in security principles means:  
    a) Data can be accessed when needed ✓  
    b) Data is hidden from everyone  
    c) Data is never stored  
    d) Data is encrypted

## 3. Cryptography Basics

11. Which of the following is symmetric encryption?  
    a) AES ✓  
    b) RSA  
    c) ECC  
    d) SHA-256

12. Public key cryptography is also known as:  
    a) Symmetric key  
    b) Asymmetric key ✓  
    c) Hashing  
    d) Encoding

13. Which algorithm is used for hashing?  
    a) SHA-256 ✓  
    b) AES  
    c) RSA  
    d) DES

14. Digital signatures ensure:  
    b) Authenticity and integrity ✓  
    a) Confidentiality only  
    c) Faster data transmission  
    d) Password protection

15. Which of the following is an example of asymmetric encryption?  
    a) DES  
    b) RSA ✓  
    c) AES  
    d) 3DES

## 4. Network Security

16. A firewall is used to:  
    a) Filter incoming and outgoing traffic ✓  
    b) Store passwords  
    c) Encrypt emails  
    d) Backup files

17. VPN stands for:  
    a) Virtual Private Network ✓  
    b) Verified Public Network  
    c) Virtual Public Node  
    d) Visual Private Node

18. What is the main purpose of IDS (Intrusion Detection System)?  
    a) Detect unauthorized network activity ✓  
    b) Encrypt traffic  
    c) Block websites  
    d) Backup data

19. HTTPS ensures:  
    a) Data is encrypted during transmission ✓  
    b) Faster internet speed  
    c) Malware scanning  
    d) Server backup

20. Which attack involves intercepting communication between two parties?  
    a) Phishing  
    b) Man-in-the-middle ✓  
    c) SQL Injection  
    d) DoS

## 5. Operating System Security

21. Which OS feature restricts unauthorized access to resources?  
    a) File permissions ✓  
    b) Disk formatting  
    c) Screen saver  
    d) Task scheduler

22. Patch management in OS security refers to:  
    a) Updating software to fix vulnerabilities ✓  
    b) Deleting old files  
    c) Encrypting user data  
    d) Monitoring traffic

23. User authentication in OS is implemented by:  
    a) Username and password ✓  
    b) File compression  
    c) Disk partitioning  
    d) CPU scheduling

24. Antivirus software protects OS by:  
    a) Detecting and removing malware ✓  
    b) Encrypting the OS  
    c) Optimizing memory  
    d) Increasing CPU speed

25. OS hardening means:  
    a) Reducing vulnerabilities and configuring securely ✓  
    b) Upgrading hardware  
    c) Installing more applications  
    d) Increasing system speed

## 6. Web Application Security

26. SQL Injection attacks target:  
    a) Databases through input fields ✓  
    b) Network routers  
    c) Operating systems  
    d) Web servers physically

27. Cross-Site Scripting (XSS) allows attackers to:  
    a) Inject malicious scripts into web pages ✓  
    b) Encrypt web traffic  
    c) Backup databases  
    d) Authenticate users

28. HTTPS ensures:  
    a) Faster website loading  
    b) Secure communication between browser and server ✓  
    c) Web server optimization  
    d) SQL injection prevention

29. Which header helps prevent clickjacking?  
    a) X-Frame-Options ✓  
    b) Content-Type  
    c) User-Agent  
    d) Accept-Encoding

30. Input validation in web applications helps:  
    a) Prevent injection attacks ✓  
    b) Improve server speed  
    c) Encrypt user data  
    d) Increase browser cache

## 7. Malware & Attack Techniques

31. Which of the following is malware that demands ransom?  
    a) Virus  
    b) Worm  
    c) Ransomware ✓  
    d) Spyware

32. A worm differs from a virus because it:  
    a) Requires human action  
    b) Self-replicates without user intervention ✓  
    c) Only encrypts files  
    d) Is harmless

33. Trojans are malicious programs that:  
    a) Appear legitimate but contain harmful code ✓  
    b) Encrypt files automatically  
    c) Spread only via email  
    d) Monitor network traffic

34. DoS attack stands for:  
    a) Data on Security  
    b) Denial of Service ✓  
    c) Direct Operating System  
    d) Distributed OS

35. Phishing attacks usually aim to:  
    a) Steal sensitive information ✓  
    b) Delete malware  
    c) Update antivirus  
    d) Encrypt network traffic

## 8. Authentication & Access Control

36. Multi-factor authentication requires:  
    a) Two or more verification methods ✓  
    b) Only username  
    c) Only password  
    d) CAPTCHA only

37. Which is an example of biometric authentication?  
    a) Password  
    b) Fingerprint ✓  
    c) PIN  
    d) Security question

38. Role-Based Access Control (RBAC) assigns permissions based on:  
    a) User role ✓  
    b) IP address  
    c) Time of access  
    d) Hardware type

39. A session token is used to:  
    a) Maintain user authentication state ✓  
    b) Encrypt emails  
    c) Detect malware  
    d) Block network attacks

40. Which of the following is a preventive control in access management?  
    a) Audit log  
    b) Alert system  
    c) Strong password policy ✓  
    d) Malware scanner

## 9. Secure Software Development

41. Secure coding practices help prevent:  
    a) Vulnerabilities and exploits ✓  
    b) Faster CPU performance  
    c) Disk fragmentation  
    d) Software updates

42. Input validation prevents:  
    a) SQL injection and XSS ✓  
    b) Faster compilation  
    c) Memory leaks  
    d) Disk errors

43. Code reviews primarily aim to:  
    a) Identify security flaws ✓  
    b) Increase memory usage  
    c) Speed up deployment  
    d) Optimize CPU usage

44. Threat modeling is used to:  
    a) Identify potential security risks ✓  
    b) Design database schema  
    c) Encrypt network traffic  
    d) Backup files

45. Which of the following is part of the SDLC security phase?  
    a) UI design  
    b) Security testing ✓  
    c) Disk partitioning  
    d) VPN setup

## 10. Wireless & Mobile Security

46. WPA3 is used for:  
    *(Answer: securing Wi-Fi networks)*

47. Mobile device management (MDM) primarily ensures:  
    a) Security and policy enforcement on devices ✓  
    b) Faster mobile network  
    c) Better camera quality  
    d) Battery optimization

48. A rogue access point is:  
    a) An unauthorized Wi-Fi hotspot ✓  
    b) A secure VPN  
    c) Firewall configuration  
    d) Mobile antivirus

49. SIM card swapping attacks target:  
    a) Mobile authentication and OTPs ✓  
    b) Wi-Fi encryption  
    c) Mobile GPS  
    d) OS patch updates

## 11. Cloud & Virtualization Security

50. Shared responsibility model means:  
    a) Both provider and customer share security duties ✓  
    b) Provider only is responsible  
    c) Customer only is responsible  
    d) No one is responsible

51. Virtual machines improve security by:  
    a) Isolating workloads ✓  
    b) Encrypting all emails  
    c) Faster CPU processing  
    d) Disk compression

52. Cloud access security broker (CASB) is used for:  
    a) Monitoring and enforcing security policies ✓  
    b) Encrypting hard drives  
    c) Backing up OS  
    d) Faster networking

53. Multi-tenancy in cloud requires:  
    a) Strong isolation between users ✓  
    b) Faster CPU  
    c) Firewall on laptops  
    d) Antivirus updates

54. Which is a common cloud security threat?  
    a) Password expiration  
    b) Data breaches ✓  
    c) Printer malfunction  
    d) Monitor flickering

## 12. Digital Forensics

55. Digital forensics focuses on:  
    a) Investigating cybercrimes using digital evidence ✓  
    b) Encrypting emails  
    c) Software patching  
    d) Network monitoring

56. Chain of custody ensures:  
    a) Evidence integrity is maintained ✓  
    b) Faster disk access  
    c) Malware removal  
    d) Firewall updates

57. Which tool is commonly used in forensic analysis?  
    a) MS Word  
    b) EnCase ✓  
    c) Photoshop  
    d) VLC Player

58. Live forensics is performed on:  
    a) Systems that are powered on ✓  
    b) Printed documents  
    c) Archived backups only  
    d) Network routers

59. The main goal of forensic imaging is:  
    a) Create an exact copy of digital media ✓  
    b) Encrypt files  
    c) Delete malware  
    d) Update OS

## 13. Incident Response & Management

60. First step in incident response is:  
    a) Identification of the incident ✓  
    b) Recovery  
    c) Reporting  
    d) Root cause analysis

61. Containment in incident response means:  
    a) Limiting the impact of an incident ✓  
    b) Updating antivirus  
    c) Encrypting data  
    d) Installing patches

62. Lessons learned phase aims to:  
    a) Improve future response ✓  
    b) Encrypt logs  
    c) Increase bandwidth  
    d) Delete evidence

63. Which team handles incidents in organizations?  
    a) CSIRT (Computer Security Incident Response Team) ✓  
    b) HR team  
    c) Marketing team  
    d) IT helpdesk

64. A post-incident report includes:  
    a) Impact, cause, and mitigation steps ✓  
    b) Only passwords  
    c) Hardware specs  
    d) Printer logs

## 14. Security Monitoring & Auditing

65. Security monitoring helps in:  
    a) Detecting suspicious activity ✓  
    b) Encrypting data  
    c) Optimizing CPU  
    d) Backing up files

66. SIEM stands for:  
    a) Security Information and Event Management ✓  
    b) Secure Internet Email Management  
    c) System Integration Event Model  
    d) Security Internal Encryption Method

67. Audit trails are important for:  
    a) Tracking user and system activity ✓  
    b) Disk defragmentation  
    c) Encrypting emails  
    d) Installing updates

68. Log analysis helps to:  
    a) Identify patterns and anomalies ✓  
    b) Speed up internet  
    c) Encrypt hard drives  
    d) Backup databases

69. Which of the following is preventive monitoring?  
    a) Reviewing logs after an attack  
    b) Implementing real-time intrusion alerts ✓  
    c) Deleting old files  
    d) Disk formatting

## 15. Cyber Laws & Ethics

70. GDPR is concerned with:  
    a) Data privacy and protection ✓  
    b) CPU optimization  
    c) Firewall configuration  
    d) Malware detection

71. Intellectual property protection in cyberspace ensures:  
    a) Legal rights for digital content ✓  
    b) Faster downloads  
    c) Network backup  
    d) VPN access

72. Unauthorized hacking is classified as:  
    a) Illegal activity ✓  
    b) Ethical practice  
    c) System upgrade  
    d) Security testing

73. Cyber ethics includes:  
    a) Responsible and legal online behavior ✓  
    b) Encrypting all files  
    c) Ignoring user privacy  
    d) Installing malware

74. Which law governs electronic transactions in India?  
    a) IT Act 1999  
    b) Information Technology Act 2000 ✓  
    c) Cyber Crime Act 2010  
    d) Digital Security Act 2005

## 16. Emerging Trends in Cyber Security

75. AI in cybersecurity is used for:  
    a) Threat detection and anomaly analysis ✓  
    b) Disk defragmentation  
    c) Printer management  
    d) Speeding up browsers

76. Blockchain can enhance security by:  
    a) Providing tamper-proof transactions ✓  
    b) Encrypting passwords only  
    c) Speeding network traffic  
    d) Defragmenting disks

77. Zero Trust Security principle means:  
    a) Never trust, always verify ✓  
    b) Trust all internal users  
    c) Encrypt only emails  
    d) Use firewall only

78. Quantum cryptography is emerging for:  
    a) Highly secure communication ✓  
    b) Faster CPU processing  
    c) Mobile device management  
    d) Disk backup

79. Threat intelligence platforms provide:  
    a) Data on emerging threats and attack patterns ✓  
    b) Antivirus updates only  
    c) OS hardening  
    d) Wi-Fi optimization

---

# Databases

## 1. Introduction to Database Systems

1. A database is:  
   a) A collection of organized data ✓  
   b) A single file  
   c) A type of operating system  
   d) A computer virus

2. DBMS stands for:  
   a) Database Management System ✓  
   b) Data Backup Management System  
   c) Digital Binary Management Software  
   d) Database Memory Storage

3. Which of the following is a benefit of using a database?  
   a) Requires manual data entry  
   b) Avoids data redundancy ✓  
   c) Slower data retrieval  
   d) More hardware usage

4. In databases, CRUD stands for:  
   a) Create, Delete, Update, Deploy  
   b) Create, Read, Update, Delete ✓  
   c) Copy, Run, Upload, Delete  
   d) Calculate, Read, Use, Drop

5. A flat file database is:  
   a) Non-relational and simple ✓  
   b) Highly normalized  
   c) Distributed  
   d) Cloud-based

## 2. Database System Architecture

6. The three-tier architecture includes:  
   a) Client, Server, Firewall  
   b) Presentation, Logic, Data ✓  
   c) Input, Output, Storage  
   d) Application, OS, Hardware

7. In DBMS architecture, the internal level is responsible for:  
   a) Physical storage of data ✓  
   b) User interface  
   c) Application logic  
   d) Data validation

8. The external level of DBMS shows:  
   a) User views of the data ✓  
   b) Disk structure  
   c) SQL syntax  
   d) Memory allocation

9. Conceptual schema defines:  
   a) Logical structure of the entire database ✓  
   b) Physical memory  
   c) User interface  
   d) Indexing method

10. DBMS architecture helps in:  
    a) Data abstraction and independence ✓  
    b) Encrypting passwords  
    c) Optimizing CPU only

## 3. Data Models

11. Which of the following is a common data model?  
    a) Relational ✓

12. Hierarchical data model organizes data as:  
    a) Tree structure ✓  
    b) Table format  
    c) Graph network  
    d) Flat file

13. Network data model represents data using:  
    a) Tables only  
    b) Nodes and edges ✓  
    c) Arrays  
    d) XML

14. Object-oriented data models store data as:  
    a) Objects ✓  
    b) Rows only  
    c) Columns only  
    d) Files only

## 4. Relational Database Concepts

15. In a relational database, data is stored in:  
    a) Tables ✓  
    b) Files  
    c) Trees  
    d) Graphs

16. Each row in a table is called:  
    a) Tuple ✓  
    b) Column  
    c) Schema  
    d) Key

17. A column in a table is called:  
    a) Attribute ✓  
    b) Record  
    c) Tuple  
    d) Table

18. Primary key ensures:  
    a) Uniquely identifies each row ✓  
    b) Data is encrypted  
    c) Data is redundant  
    d) Disk is optimized

19. Foreign key is used to:  
    a) Maintain referential integrity ✓  
    b) Encrypt data

## 5. Relational Algebra & Calculus

20. Which operation is not part of relational algebra?  
    a) Select  
    b) Project  
    c) Join  
    d) Encrypt ✓

21. The SELECT operation is used to:  
    a) Retrieve rows based on condition ✓  
    b) Delete tables  
    c) Create schema  
    d) Encrypt data

22. The PROJECT operation retrieves:  
    a) Specific columns from a table ✓  
    b) Rows only  
    c) Full database  
    d) Index entries

23. Join operation combines:  
    a) Two or more tables based on a related attribute ✓  
    b) Two indexes  
    c) Columns only  
    d) Databases physically

24. Relational calculus is:  
    a) Non-procedural query language ✓  
    b) Physical storage method  
    c) Indexing technique  
    d) Transaction method

## 6. Structured Query Language (SQL)

25. Which SQL statement retrieves data from a table?  
    a) SELECT ✓  
    b) INSERT  
    c) UPDATE  
    d) DELETE

26. To remove all records from a table, we use:  
    a) DROP  
    b) TRUNCATE  
    c) DELETE ✓  
    d) ALTER

27. To add a new row in a table, we use:  
    a) INSERT INTO ✓  
    b) SELECT  
    c) UPDATE  
    d) ALTER

28. To change existing data, we use:  
    a) SELECT  
    b) UPDATE ✓  
    c) DELETE  
    d) DROP

29. SQL WHERE clause is used to:  
    a) Filter records based on a condition ✓

## 7. Advanced SQL

30. A subquery is:  
    a) A query inside another query ✓  
    b) A query that deletes all tables  
    c) An index  
    d) A database view

31. SQL JOIN is used to:  
    a) Combine rows from two or more tables ✓  
    b) Encrypt data  
    c) Backup tables  
    d) Delete rows

32. Which of the following is a type of JOIN?  
    a) INNER JOIN ✓  
    b) SELECT JOIN  
    c) TABLE JOIN  
    d) DROP JOIN

33. Aggregate functions in SQL include:  
    a) SUM, COUNT, AVG ✓  
    b) SELECT, DELETE  
    c) INSERT, UPDATE  
    d) JOIN, MERGE

34. A view in SQL is:  
    a) Virtual table derived from a query ✓  
    b) Physical table only  
    c) Index  
    d) Stored procedure

## 8. Database Design & Normalization

35. The main goal of normalization is:  
    a) Reduce data redundancy ✓  
    b) Increase disk space  
    c) Slow down queries  
    d) Encrypt tables

36. First Normal Form (1NF) requires:  
    a) No repeating groups in a table ✓  
    b) No null values  
    c) Foreign keys only  
    d) Backup of tables

37. Second Normal Form (2NF) eliminates:  
    a) Redundant tables  
    b) Partial dependencies ✓  
    c) Duplicate databases  
    d) Disk fragmentation

38. Third Normal Form (3NF) removes:  
    a) Partial dependencies  
    b) Transitive dependencies ✓  
    c) Primary keys  
    d) Foreign keys

39. A functional dependency is:  
    a) Relationship where one attribute determines another ✓  
    b) Relationship between databases  
    c) Disk allocation  
    d) Query optimization

## 9. Transaction Management

40. A database transaction is:  
    a) A unit of work performed on the database ✓  
    b) Disk allocation method  
    c) SQL query only  
    d) User authentication

41. ACID property 'A' stands for:  
    a) Atomicity ✓  
    b) Accessibility  
    c) Accuracy  
    d) Authorization

42. Atomicity ensures:  
    a) All steps in a transaction succeed or none ✓  
    b) Data is encrypted  
    c) Indexes are maintained  
    d) Queries are optimized

43. Consistency in transactions ensures:  
    a) Database moves from one valid state to another ✓  
    b) Disk is defragmented  
    c) CPU is optimized  
    d) Network traffic reduced

44. Durability ensures:  
    a) Changes are permanent after commit ✓  
    b) Changes are temporary  
    c) Data is deleted  
    d) Transactions are rolled back

## 10. Concurrency Control

45. Concurrency control prevents:  
    a) Conflicts from simultaneous transactions ✓  
    b) Data encryption  
    c) Disk failure  
    d) Network attacks

46. Which technique is used for concurrency control?  
    *(Answer: locking, timestamping, etc.)*

47. Optimistic concurrency control assumes:  
    a) Conflicts are rare ✓  
    b) Conflicts happen frequently  
    c) Disk is fragmented

## 11. Recovery Management

48. Database recovery is needed after:  
    a) System crash or failure ✓  
    b) Normal query  
    c) Table creation  
    d) Data retrieval

49. A log file records:  
    a) Changes made by transactions ✓  
    b) Disk layout  
    c) Index order  
    d) Network traffic

50. Checkpointing helps:  
    a) Reduce recovery time ✓  
    b) Encrypt database  
    c) Backup queries  
    d) Optimize CPU

51. Rollback restores:  
    a) Database to previous consistent state ✓  
    b) Network speed  
    c) Disk space  
    d) Passwords

52. Recovery techniques include:  
    a) Encryption  
    b) Rollback, Rollforward ✓  
    c) Indexing  
    d) SQL queries

## 12. Indexing & File Organization

53. Indexing in databases helps:  
    a) Speed up data retrieval ✓  
    b) Reduce disk space  
    c) Encrypt data  
    d) Backup database

54. Which of the following is a type of index?  
    a) Primary file  
    b) B-Tree ✓  
    c) Flat file  
    d) Hash table only

55. Clustered index:  
    a) Determines physical order of data ✓  
    b) Only encrypts columns  
    c) Compresses data  
    d) Backups table

56. Hashing helps in:  
    a) Direct access to records ✓  
    b) Encrypting files  
    c) Transaction rollback  
    d) Disk defragmentation

57. File organization impacts:  
    a) Query performance ✓  
    b) CPU speed only  
    c) Network latency  
    d) Password security

## 13. Query Processing & Optimization

58. Query optimization aims to:  
    a) Minimize resource usage ✓  
    b) Encrypt database  
    c) Backup tables  
    d) Increase table size

59. Execution plan in DBMS shows:  
    a) How a query will be executed ✓  
    b) Disk fragmentation  
    c) Network traffic  
    d) CPU scheduling

60. Which operator retrieves rows from tables in a query?  
    a) SELECT ✓  
    b) INSERT  
    c) UPDATE  
    d) DELETE

61. Indexing improves:  
    a) Query performance ✓  
    b) Disk backup speed  
    c) Password encryption  
    d) CPU temperature

62. Cost-based optimization considers:  
    a) Estimated resource usage of query ✓  
    b) Disk location only  
    c) CPU cores  
    d) Network latency

## 14. Database Security

63. Which of the following is a database security threat?  
    a) SQL Injection ✓  
    b) Disk defragmentation  
    c) Network backup  
    d) Memory optimization

64. Role-based access control (RBAC) helps:  
    a) Grant permissions based on user role ✓  
    b) Encrypt passwords only  
    c) Backup tables  
    d) Optimize CPU

65. Encryption in databases secures:  
    a) Data at rest and in transit ✓  
    b) Only table names  
    c) Only queries  
    d) CPU performance

66. Auditing in DBMS helps:  
    a) Track database activity ✓  
    b) Encrypt queries  
    c) Backup disk  
    d) Network speed

67. SQL injection can be prevented using:  
    a) Prepared statements and input validation ✓  
    b) Backup  
    c) Disk defragmentation  
    d) Indexing

## 15. Distributed Databases

68. Distributed database stores data:  
    a) Across multiple sites ✓  
    b) In a single table  
    c) Only in cloud  
    d) Only in memory

69. A replica in distributed databases:  
    a) Copy of data at another site ✓  
    b) Backup software  
    c) Index only  
    d) Transaction log

70. Data fragmentation improves:  
    a) Query performance ✓  
    b) CPU usage  
    c) Encryption  
    d) Disk formatting

71. Consistency in distributed databases ensures:  
    a) All replicas have the same data ✓  
    b) Faster queries only  
    c) CPU optimization  
    d) Disk backup

72. CAP theorem stands for:  
    a) Consistency, Availability, Partition tolerance ✓  
    b) Cache, Access, Performance  
    c) Compute, Archive, Process  
    d) Control, Authentication, Policy

## 16. NoSQL & Modern Databases

73. NoSQL databases are suitable for:  
    a) Large-scale, unstructured data ✓  
    b) Only relational data  
    c) Encryption only  
    d) Disk formatting

74. Which of the following is a document-based NoSQL database?  
    a) MySQL  
    b) MongoDB ✓  
    c) Oracle  
    d) PostgreSQL

75. Key-value stores store data as:  
    a) Key-value pairs ✓  
    b) Tables only  
    c) Objects only  
    d) SQL queries

76. Column-family databases include:  
    a) Cassandra ✓  
    b) MySQL  
    c) SQLite  
    d) Access

77. NoSQL databases are:  
    a) Schema-less or flexible schema ✓  
    b) Always relational  
    c) Only for SQL queries  
    d) Disk-only

## 17. Data Warehousing & Data Mining (Introductory)

78. Data warehouse stores:  
    a) Historical and integrated data for analysis ✓  
    b) Only real-time data  
    c) Only encrypted data  
    d) Only indexes

79. ETL process stands for:  
    a) Extract, Transform, Load ✓  
    b) Encrypt, Transfer, Lock  
    c) Execute, Test, Launch  
    d) Enter, Track, Log

80. Data mining is used to:  
    a) Discover patterns and insights ✓  
    b) Encrypt tables  
    c) Backup databases  
    d) Disk defragmentation

81. OLAP is used for:  
    a) Multidimensional analysis ✓  
    b) Data entry  
    c) Disk management  
    d) Query logs

82. Dimensional modeling uses:  
    a) Fact and dimension tables ✓  
    b) Only SQL views  
    c) No indexing  
    d) Flat files

---

# Problem Solving And Analytical Skills

## 1. Introduction to Problem Solving

1. Problem solving primarily involves:  
   a) Finding a solution to a challenge ✓  
   b) Writing code only  
   c) Memorizing data  
   d) Optimizing hardware

2. A well-defined problem has:  
   a) Clear goals and constraints ✓  
   b) Random outcomes  
   c) No solution  
   d) Undefined input

3. Which is a key step in problem solving?  
   a) Ignoring the problem  
   b) Analyzing the problem ✓  
   c) Using a single guess  
   d) Memorizing answers

4. Problem-solving skills are important for:  
   a) Decision-making and innovation ✓  
   b) Formatting disks  
   c) Installing OS only  
   d) Encrypting data

5. Effective problem-solving often starts with:  
   a) Understanding the problem ✓  
   b) Writing code immediately  
   c) Ignoring constraints  
   d) Random trial and error

## 2. Problem Understanding & Analysis

6. Analyzing a problem helps in:  
   a) Identifying root causes ✓  
   b) Encrypting solutions  
   c) Formatting disks  
   d) Ignoring constraints

7. Problem decomposition involves:  
   a) Breaking a problem into smaller parts ✓  
   b) Deleting files  
   c) Encrypting data  
   d) Compressing memory

8. Defining inputs and outputs helps in:  
   a) Understanding problem requirements ✓  
   b) Installing software  
   c) Formatting database  
   d) Running malware

9. Identifying constraints ensures:  
   a) Solutions are feasible ✓  
   b) CPU runs faster  
   c) Network is optimized  
   d) Disk space is increased

10. Flowcharts are used to:  
    a) Visualize problem steps ✓

## 3. Logical Reasoning Fundamentals

11. Deductive reasoning moves from:  
    a) General principles to specific cases ✓  
    b) Specific to general  
    c) Random trial  
    d) Disk defragmentation

12. Inductive reasoning involves:  
    a) Random guessing  
    b) Generalizing from specific cases ✓  
    c) Encrypting data  
    d) Formatting memory

13. Syllogisms are used in:  
    a) Logical reasoning ✓  
    b) Database indexing  
    c) CPU scheduling  
    d) Network routing

14. Logical operators include:  
    a) AND, OR, NOT ✓  
    b) SELECT, INSERT  
    c) Encrypt, Decrypt  
    d) Backup, Restore

15. Logical reasoning helps in:  
    a) Making valid conclusions ✓  
    b) Formatting disks  
    c) Installing OS  
    d) Encrypting files

## 4. Algorithms & Flow Control

16. An algorithm is:  
    a) Step-by-step procedure to solve a problem ✓  
    b) Random guess  
    c) Backup plan  
    d) Disk format method

17. Flowcharts represent:  
    a) Algorithmic steps visually ✓  
    b) Disk structure  
    c) SQL queries  
    d) CPU scheduling

18. Which control structure repeats a set of instructions?  
    a) Sequence  
    b) Decision  
    c) Loop ✓  
    d) Function

19. Conditional statements use:  
    a) IF-ELSE structures ✓  
    b) Disk blocks  
    c) SQL joins  
    d) Indexes

20. Pseudocode is used to:  
    *(Answer: design algorithms in plain language)*

## 5. Data Representation & Abstraction

21. Binary representation is used because:  
    a) Computers operate using 0s and 1s ✓  
    b) Easier to read for humans  
    c) Encrypts data  
    d) Backups files

22. Abstraction helps in:  
    a) Hiding complex details ✓  
    b) Encrypting network  
    c) Formatting memory  
    d) Installing OS

23. High-level programming languages provide:  
    a) Abstraction from hardware ✓  
    b) CPU optimization  
    c) Disk compression  
    d) SQL queries

24. Data types include:  
    a) Integer, Float, String ✓  
    b) Tables, Columns  
    c) Indexes  
    d) Networks

25. Representing information visually is:  
    a) Data visualization ✓  
    b) Encryption  
    c) Disk defragmentation  
    d) SQL query

## 6. Pattern Recognition & Generalization

26. Pattern recognition helps in:  
    a) Identifying regularities in data ✓  
    b) Encrypting data  
    c) Formatting disks  
    d) Query optimization

27. Generalization involves:  
    a) Applying known patterns to new problems ✓  
    b) Encrypting passwords  
    c) Disk backup  
    d) Network speed

28. Sequences and series are examples of:  
    a) Patterns ✓  
    b) Disk blocks  
    c) CPU registers  
    d) SQL statements

29. Recognizing trends in data is:  
    a) Pattern analysis ✓  
    b) SQL query  
    c) Disk indexing  
    d) Memory allocation

30. Pattern recognition is crucial in:  
    a) Machine learning and AI ✓  
    b) Disk formatting  
    c) CPU overclocking  
    d) Firewall rules

## 7. Mathematical & Quantitative Reasoning

31. Ratio and proportion help in:  
    a) Solving quantitative problems ✓  
    b) Encrypting data  
    c) Formatting memory  
    d) Disk indexing

32. Percentages are used for:  
    a) Comparing values quantitatively ✓  
    b) Encrypting files  
    c) Query optimization  
    d) CPU allocation

33. Probability measures:  
    a) Likelihood of an event ✓  
    b) Disk space usage  
    c) Memory speed  
    d) SQL queries

34. Algebra helps in:  
    a) Solving equations ✓  
    b) Encrypting data  
    c) Disk backup  
    d) CPU optimization

35. Quantitative reasoning aids in:  
    a) Making numerical decisions ✓  
    b) Formatting disks  
    c) Encrypting network  
    d) Indexing tables

## 8. Algorithmic Thinking

36. Algorithmic thinking focuses on:  
    a) Step-by-step problem solving ✓  
    b) Disk formatting  
    c) Encrypting files  
    d) Network setup

37. Breaking down a problem is:  
    a) Decomposition ✓  
    b) Abstraction  
    c) Encryption  
    d) Indexing

38. Reusing solutions in new problems is:  
    a) Generalization ✓  
    b) Backup  
    c) CPU scheduling  
    d) Query optimization

39. Optimization in algorithmic thinking aims to:  
    a) Improve efficiency ✓  
    b) Encrypt data  
    c) Format disks  
    d) Backup files

## 9. Critical Thinking & Decision Making

40. Critical thinking involves:  
    a) Evaluating information logically ✓  
    b) Encrypting data  
    c) Disk backup  
    d) CPU scheduling

41. Decision making requires:  
    a) Choosing the best solution ✓  
    b) Formatting disks  
    c) SQL queries  
    d) Network setup

42. Considering pros and cons helps in:  
    a) Informed decisions ✓  
    b) Encrypting files  
    c) Disk indexing  
    d) CPU optimization

43. Logical evaluation supports:  
    a) Critical thinking ✓  
    b) SQL queries  
    c) Disk formatting  
    d) Encryption

44. Risk assessment is part of:  
    a) Decision making ✓  
    b) Disk backup  
    c) CPU cooling  
    d) Network routing

## 10. Debugging & Error Analysis

45. Debugging helps to:  
    a) Identify and fix errors ✓  
    b) Encrypt data  
    c) Format disks  
    d) Backup files

46. Syntax errors are:  
    a) Violations of language rules ✓  
    b) Disk errors  
    c) CPU errors  
    d) Firewall errors

47. Logical errors occur when:  
    a) Program does not behave as intended ✓  
    b) Disk fails  
    c) Network crashes  
    d) Encryption fails

48. Runtime errors appear:  
    a) During program execution ✓  
    b) Before compilation  
    c) After formatting  
    d) During encryption

49. Testing helps to:  
    a) Identify defects and verify correctness ✓  
    b) Encrypt files  
    c) Optimize CPU  
    d) Backup data

## 11. Complexity & Efficiency Awareness

50. Time complexity measures:  
    a) Execution time of an algorithm ✓  
    b) Disk usage  
    c) Memory encryption  
    d) Network speed

51. Space complexity measures:  
    a) Memory required by an algorithm ✓  
    b) Disk speed  
    c) CPU temperature  
    d) Network latency

52. Big O notation represents:  
    a) Upper bound of algorithm complexity ✓  
    b) Encryption strength  
    c) Disk allocation  
    d) CPU usage

53. Efficient algorithms:  
    a) Use minimal resources ✓  
    b) Encrypt data  
    c) Backup files  
    d) Format disks

54. Optimizing algorithms reduces:  
    a) Time and memory usage ✓  
    b) Disk size  
    c) Network speed  
    d) SQL queries

## 12. Problem Solving Using Programming

55. Programming helps to:  
    a) Automate problem solving ✓  
    b) Format disks  
    c) Encrypt network  
    d) Backup database

56. Loops in programming help to:  
    a) Repeat instructions efficiently ✓  
    b) Encrypt files  
    c) Backup data  
    d) Format disks

57. Functions support:  
    a) Modular and reusable code ✓  
    b) Disk formatting  
    c) Encrypt data  
    d) CPU scheduling

58. Conditional statements enable:  
    a) Decision-making in programs ✓  
    b) Disk optimization  
    c) Network routing  
    d) Backup

59. Debugging code ensures:  
    a) Correct program behavior ✓  
    b) Disk backup  
    c) Encryption  
    d) CPU overclocking

## 13. Data-Driven Problem Solving

60. Data-driven decisions rely on:  
    a) Analyzing data patterns ✓  
    b) Guesswork  
    c) Disk speed  
    d) CPU temperature

61. Data visualization helps in:  
    a) Interpreting patterns ✓  
    b) Encrypting files  
    c) Disk defragmentation  
    d) CPU optimization

62. Metrics and KPIs support:  
    a) Measuring performance ✓  
    b) Backup  
    c) Encryption  
    d) Network speed

63. Using past data for predictions is:  
    a) Data-driven analysis ✓  
    b) Disk indexing  
    c) SQL queries  
    d) CPU usage

64. Insights from data help to:  
    a) Make informed decisions ✓  
    b) Encrypt data  
    c) Format disks  
    d) Backup files

## 14. Creative & Innovative Thinking

65. Creativity in problem solving involves:  
    a) Generating new ideas ✓  
    b) Formatting disks  
    c) Encrypting files  
    d) Backup

66. Brainstorming sessions are used for:  
    a) Idea generation ✓  
    b) Disk optimization  
    c) SQL queries  
    d) CPU scheduling

67. Innovation is:  
    a) Applying creative ideas effectively ✓  
    b) Formatting memory  
    c) Encrypting network  
    d) Disk backup

68. Thinking outside the box encourages:  
    a) Novel solutions ✓  
    b) Disk defragmentation  
    c) CPU optimization  
    d) SQL queries

69. Combining ideas leads to:  
    a) Innovative solutions ✓  
    b) Disk formatting  
    c) Encryption  
    d) Backup

## 15. Real-World Problem Solving

70. Real-world problems are often:  
    a) Complex and multi-faceted ✓  
    b) Simple and linear  
    c) Always solved by SQL  
    d) Only CPU related

71. Context analysis helps to:  
    a) Understand real-world constraints ✓  
    b) Encrypt files  
    c) Format disks  
    d) Backup

72. Prioritizing solutions ensures:  
    a) Most effective outcomes ✓  
    b) Disk optimization  
    c) CPU speed  
    d) SQL queries

73. Testing solutions in practice helps:  
    a) Verify effectiveness ✓  
    b) Encrypt data  
    c) Format disks  
    d) Backup

74. Real-world problem solving requires:  
    a) Adaptability and critical thinking ✓  
    b) Disk formatting  
    c) Network optimization  
    d) SQL queries

## 16. Communication & Documentation of Solutions

75. Documentation helps to:  
    a) Share solutions with others ✓  
    b) Encrypt files  
    c) Format disks  
    d) Backup database

76. Clear explanation ensures:  
    a) Solutions are understood ✓  
    b) Disk optimization  
    c) CPU scheduling  
    d) SQL query

77. Visual diagrams help to:  
    a) Represent ideas clearly ✓  
    b) Encrypt data  
    c) Backup files  
    d) Disk formatting

78. Comments in code help:  
    a) Explain logic for future readers ✓  
    b) Encrypt database  
    c) Format memory  
    d) Optimize CPU

79. Reporting outcomes is essential for:  
    a) Evaluation and improvement ✓  
    b) Disk backup  
    c) CPU speed  
    d) SQL queries
`;

const parseData = (text) => {
  const lines = text.split('\n');
  const categories = [];
  let curCat = null;
  let curSub = null;
  let curQ = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line === '---') continue;

    if (line.startsWith('# ')) {
      curCat = { title: line.replace('# ', '').trim(), subcategories: [] };
      categories.push(curCat);
      curSub = null;
      curQ = null;
    } else if (line.startsWith('## ')) {
      curSub = { title: line.replace('## ', '').trim(), questions: [] };
      if (curCat) curCat.subcategories.push(curSub);
      curQ = null;
    } else if (/^\d+\./.test(line)) {
      curQ = {
        id: line.split('.')[0],
        text: line.replace(/^\d+\.\s*/, ''),
        options: [],
        correctAnswerIndex: null,
        explanation: null
      };
      if (curSub) curSub.questions.push(curQ);
    } else if (/^[A-Za-z]\)/.test(line)) {
      if (curQ) {
        const isCorrect = line.includes('✓');
        const optText = line.replace(/^[A-Za-z]\)\s*/, '').replace('✓', '').trim();
        curQ.options.push(optText);
        if (isCorrect) {
          curQ.correctAnswerIndex = curQ.options.length - 1;
        }
      }
    } else if (line.startsWith('*(') || line.startsWith('*(Answer:')) {
      if (curQ) {
        curQ.explanation = line.replace(/^\*\(/, '').replace(/\)\*$/, '').trim();
      }
    } else {
      if (curQ && curQ.options.length === 0) {
        // Handle multiline question text
        curQ.text += '\n' + line;
      }
    }
  }
  return categories;
};

export default function App() {
  const [categories, setCategories] = useState([]);
  const [activeCatIdx, setActiveCatIdx] = useState(null);
  const [activeSubIdx, setActiveSubIdx] = useState(null);

  const [quizState, setQuizState] = useState('idle'); // 'idle', 'playing', 'results'
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [answers, setAnswers] = useState({}); // { questionIndex: selectedOptionIndex }
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Auto-close sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const parsed = parseData(RAW_QUIZ_DATA);
    setCategories(parsed);
  }, []);

  const handleSubcategorySelect = (catIdx, subIdx) => {
    setActiveCatIdx(catIdx);
    setActiveSubIdx(subIdx);
    setQuizState('idle');
    setAnswers({});
    setCurrentQIdx(0);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const startQuiz = () => setQuizState('playing');
  
  const handleAnswerSelect = (optIdx) => {
    if (quizState !== 'playing') return;
    setAnswers(prev => ({ ...prev, [currentQIdx]: optIdx }));
  };

  const handleNext = () => {
    if (currentQIdx < currentSub.questions.length - 1) {
      setCurrentQIdx(prev => prev + 1);
    } else {
      setQuizState('results');
    }
  };

  const handlePrev = () => {
    if (currentQIdx > 0) setCurrentQIdx(prev => prev - 1);
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentQIdx(0);
    setQuizState('idle');
  };

  const currentCat = activeCatIdx !== null ? categories[activeCatIdx] : null;
  const currentSub = activeSubIdx !== null && currentCat ? currentCat.subcategories[activeSubIdx] : null;
  const currentQ = currentSub && quizState === 'playing' ? currentSub.questions[currentQIdx] : null;

  const score = useMemo(() => {
    if (quizState !== 'results' || !currentSub) return 0;
    let s = 0;
    currentSub.questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswerIndex && answers[idx] !== undefined) s++;
    });
    return s;
  }, [quizState, currentSub, answers]);

  return (
    <div className="flex h-[100dvh] bg-slate-50 font-sans text-slate-800">
      
      {/* Mobile Overlay */}
      {!isSidebarOpen && (
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-600 text-white rounded-lg shadow-md"
        >
          <Menu size={20} />
        </button>
      )}

      {/* Sidebar Backdrop Overlay */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden fixed inset-0 bg-slate-900/50 z-30 transition-opacity"
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-indigo-50">
            <h1 className="text-lg font-bold text-indigo-900 flex items-center gap-2">
              <BookOpen size={20} className="text-indigo-600" />
              IT Quiz Explorer
            </h1>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-1 text-slate-500 hover:bg-indigo-100 rounded">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
            {categories.map((cat, cIdx) => (
              <div key={cIdx}>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {cat.title}
                </h2>
                <ul className="space-y-1">
                  {cat.subcategories.map((sub, sIdx) => {
                    const isActive = activeCatIdx === cIdx && activeSubIdx === sIdx;
                    return (
                      <li key={sIdx}>
                        <button
                          onClick={() => handleSubcategorySelect(cIdx, sIdx)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-150 flex items-center gap-2 ${
                            isActive 
                            ? 'bg-indigo-600 text-white font-medium shadow-sm' 
                            : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-700'
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-transparent'}`} />
                          <span className="truncate">{sub.title}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-[100dvh] overflow-hidden bg-slate-50">
        {!currentSub ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <List size={48} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Select a Topic to Begin</h2>
            <p className="text-slate-500 max-w-md">Choose a category from the sidebar to test your knowledge on various IT and programming competencies.</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="bg-white border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm z-10 lg:pl-6 pl-16">
              <div>
                <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">{currentCat.title}</p>
                <h2 className="text-xl font-bold text-slate-800 mt-0.5">{currentSub.title}</h2>
              </div>
              <div className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full inline-flex items-center gap-2 w-fit">
                {currentSub.questions.length} Questions
              </div>
            </div>

            {/* Quiz Content Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex justify-center">
              <div className="w-full max-w-3xl">
                
                {quizState === 'idle' && (
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <BookOpen size={40} className="text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Ready to test your knowledge?</h3>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                      This quiz contains {currentSub.questions.length} multiple-choice questions focusing on {currentSub.title}. 
                    </p>
                    <button 
                      onClick={startQuiz}
                      className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 hover:shadow-lg transition-all active:scale-95"
                    >
                      <Play size={20} fill="currentColor" />
                      Start Quiz
                    </button>
                  </div>
                )}

                {quizState === 'playing' && currentQ && (
                  <div className="animate-in fade-in duration-300">
                    {/* Progress Bar */}
                    <div className="mb-8">
                      <div className="flex justify-between text-sm font-semibold text-slate-500 mb-2">
                        <span>Question {currentQIdx + 1} of {currentSub.questions.length}</span>
                        <span>{Math.round(((currentQIdx + 1) / currentSub.questions.length) * 100)}%</span>
                      </div>
                      <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                          style={{ width: `${((currentQIdx + 1) / currentSub.questions.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Question Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-6">
                      <h3 className="text-lg sm:text-xl font-medium text-slate-800 mb-8 leading-relaxed whitespace-pre-wrap">
                        {currentQ.text}
                      </h3>
                      
                      {currentQ.options.length > 0 ? (
                        <div className="space-y-3">
                          {currentQ.options.map((opt, oIdx) => {
                            const isSelected = answers[currentQIdx] === oIdx;
                            return (
                              <button
                                key={oIdx}
                                onClick={() => handleAnswerSelect(oIdx)}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 group ${
                                  isSelected 
                                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-sm' 
                                    : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                                }`}
                              >
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                                  isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300 group-hover:border-indigo-400'
                                }`}>
                                  {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                                </div>
                                <span className="text-base sm:text-lg">{opt}</span>
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl text-amber-800">
                          <p className="font-medium mb-2">Note on this question:</p>
                          <p className="italic">{currentQ.explanation}</p>
                          <p className="text-sm mt-4 text-amber-600">(This question doesn't have standard multiple choice options in the source text. Click Next to continue).</p>
                        </div>
                      )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={handlePrev}
                        disabled={currentQIdx === 0}
                        className="px-6 py-3 rounded-xl font-medium text-slate-600 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                      >
                        <ChevronLeft size={20} /> Previous
                      </button>
                      <button
                        onClick={handleNext}
                        className="px-6 py-3 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md transition-all flex items-center gap-2"
                      >
                        {currentQIdx === currentSub.questions.length - 1 ? 'Finish Quiz' : 'Next Question'} <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                )}

                {quizState === 'results' && (
                  <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 pb-12">
                    {/* Score Summary */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center mb-8 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">Quiz Completed!</h3>
                      <p className="text-slate-500 mb-8">{currentSub.title}</p>
                      
                      <div className="flex justify-center items-center gap-4 mb-8">
                        <div className="text-6xl font-black text-indigo-600">{score}</div>
                        <div className="text-3xl text-slate-300 font-light">/</div>
                        <div className="text-4xl font-bold text-slate-400">{currentSub.questions.length}</div>
                      </div>
                      
                      <button 
                        onClick={resetQuiz}
                        className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 hover:bg-slate-200 px-6 py-3 rounded-xl font-bold transition-colors"
                      >
                        <RotateCcw size={18} /> Retake Quiz
                      </button>
                    </div>

                    {/* Detailed Review */}
                    <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                      <CheckCircle className="text-emerald-500" /> Detailed Review
                    </h4>
                    
                    <div className="space-y-6">
                      {currentSub.questions.map((q, idx) => {
                        const userAnswerIdx = answers[idx];
                        const isCorrect = userAnswerIdx === q.correctAnswerIndex;
                        const hasNoOptions = q.options.length === 0;
                        const isUnanswered = userAnswerIdx === undefined;

                        return (
                          <div key={idx} className={`bg-white rounded-xl shadow-sm border p-6 ${
                            hasNoOptions ? 'border-slate-200' : 
                            isCorrect ? 'border-emerald-200' : 'border-rose-200'
                          }`}>
                            <div className="flex gap-4">
                              <div className="mt-1">
                                {hasNoOptions ? (
                                  <BookOpen className="text-slate-400" size={24} />
                                ) : isCorrect ? (
                                  <CheckCircle className="text-emerald-500" size={24} />
                                ) : (
                                  <XCircle className="text-rose-500" size={24} />
                                )}
                              </div>
                              <div className="flex-1">
                                <p className="font-semibold text-slate-800 mb-4 whitespace-pre-wrap">{idx + 1}. {q.text}</p>
                                
                                {q.options.length > 0 && (
                                  <div className="space-y-2 mb-4">
                                    {q.options.map((opt, oIdx) => {
                                      const isUsersChoice = userAnswerIdx === oIdx;
                                      const isActualCorrect = q.correctAnswerIndex === oIdx;
                                      
                                      let optStyle = "bg-slate-50 border-slate-100 text-slate-600";
                                      if (isActualCorrect) optStyle = "bg-emerald-50 border-emerald-200 text-emerald-800 font-medium";
                                      else if (isUsersChoice && !isCorrect) optStyle = "bg-rose-50 border-rose-200 text-rose-800";

                                      return (
                                        <div key={oIdx} className={`p-3 rounded-lg border ${optStyle} flex items-center justify-between`}>
                                          <span>{opt}</span>
                                          {isActualCorrect && <CheckCircle size={16} className="text-emerald-500" />}
                                          {isUsersChoice && !isCorrect && <XCircle size={16} className="text-rose-500" />}
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}

                                {isUnanswered && !hasNoOptions && (
                                  <p className="text-sm font-medium text-amber-600 mb-2">You skipped this question.</p>
                                )}

                                {q.explanation && (
                                  <div className="mt-4 p-4 bg-indigo-50 rounded-lg text-sm text-indigo-900 border border-indigo-100 flex gap-3">
                                    <BookOpen size={18} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                      <span className="font-semibold block mb-1">Source Note:</span>
                                      {q.explanation}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}