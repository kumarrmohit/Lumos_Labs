# Lumos_Labs
===========================================================================================================================
Global api- https://easy-gold-scallop-hose.cyclic.app/nfts (it is authenticate for getting into it first you need to login)
===========================================================================================================================
First step- (These all below mentioned endPoints are authenticated, when user try to use this API , user will recive a message that "PLEASE LOGIN FIRST".:-

○ https://easy-gold-scallop-hose.cyclic.app/nfts: Get a list of all NFTs.
○ https://easy-gold-scallop-hose.cyclic.app/nfts/[id]: Get a single NFT by ID.
○ https://easy-gold-scallop-hose.cyclic.app/nfts: Create a new NFT.
○ https://easy-gold-scallop-hose.cyclic.app/nfts/[id]: Update an existing NFT.
○ https://easy-gold-scallop-hose.cyclic.app/nfts/[id]: Delete an existing NFT.

============================================================================================================================

 HOW TO AUTHENTICATE:-
==========================================
 STEP-1:-
 First sigup by registering your details:-
========================================== 
 global server- https://easy-gold-scallop-hose.cyclic.app/users/register
         or
 local server-localhost:3000/users/register
 
 (need to post this data for registering, as per schema):-
 for eg:-
 {
   "email":abc@gmail.com,
   "password:"abc
 }
==============================================
STEP-2:-
===============================================
After registering this data will be stored in Mongodb Atlas, now you can login:-

Second step of login:-
global server-https://easy-gold-scallop-hose.cyclic.app/users/login
                or
Local server-localhost:3000/users/login

==================================================================================================================================================
Note: after posting login details, you will recive a bcerypt token, now you can update it in headers as authentication , now your all api will work
==================================================================================================================================================
 
 
 
 
   

