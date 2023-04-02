#<p style="text-align: center;">**Architectural Pattern**</p>

<p align="center">
 <img src="https://user-images.githubusercontent.com/54281955/205369482-48740dd9-ae92-4e8d-87ab-2c5f0a5087f5.png"/></p>


The model is worked as  client-server architecture, which  is a distributed 
application framework dividing tasks between servers and clients, 
which either reside in the same system or communicate through a computer
 network or the Internet .
The client relies on sending a request to 
another program in order to access a service made available
 by a server.
<p align="center">
 <img src="https://user-images.githubusercontent.com/54281955/205369624-556a5f60-077d-4460-bdf6-a452d6988ec9.png"/></p>

How does it work?
---
In three-layer architecture, the Presentation layer doesn’t communicate directly with the Data Access layer. The Business Logic
 layer works as a bridge between the Presentation layer and the Data Access layer. The three-layer architecture works as follows:
The Presentation layer is the only class that is directly interacted with the user. It is mainly used for presenting/collecting data
 from users, then passes them to the Business Logic layer for further processing.
After receiving information from the Presentation layer, the Business Logic layer does some business logic on the data. During this process, this layer may
 retrieve or update some data from the application database. However, this layer doesn’t take responsibility for accessing the database;
 it sends requests to the next layer, the Data Access layer.
The Data Access layer receives requests from the Business Logic layer and builds some queries to the database to handle these requests. 
Once the execution gets done, it sends the result back to the Business Logic layer.
The Business Logic layer gets responses from the Data Access layer, then completes the process and sends the result to the Presentation Layer.
The Presentation layer gets the responses and presents them to users via UI components.




