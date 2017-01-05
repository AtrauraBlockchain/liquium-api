# Liquium API 

[![node](http://img.shields.io/badge/node-6.3.1-brightgreen.svg)]()

Liquium is an Open Source polling framework based in Smart Contracts running in the Ethereum network which allows to perform liquid democracy.

We've built a template for organizations which want to integrate a public, fair and transparent polling system, so they can modify it for their own context just forking this and its brother repositories.

You can know more about Liquium in our [wiki](https://github.com/AtrauraBlockchain/liquium-apo/wiki/About-Liquium).

## Ethereum Gateway for the Liquium Mobile App

This repository contains a [Node.js](https://nodejs.org/) server which acts as a gateway for the Liquium Mobile App. Because of hardware limitations, a mobile app can't host an Ethereum client yet, so we've developed this server to let the smartphone build and sign its own transactions and send them to the server to put them in the Ethereum Blockchain.

This server does not host any voter accounts, which are hosted in the mobile app itself, so an instance of this server gets corrupted anybody could vote for an app voter in a malicious way. Besides that, we've to remind that the unique way to be sure that the voting content seen is the correct is looking directly inside the Ethereum Blockchain, and not using this kind of servers, but in our case, we can't do that for the app because we're not able to run an Ethereum client in a smartphone.

## How to run the server

You can find the steps to [run your own Liquium API server](https://github.com/AtrauraBlockchain/liquium-api/wiki/How-to-run-your-own-Liquium-API-server) in our [wiki](https://github.com/AtrauraBlockchain/liquium-api/wiki).

## API Documentation

You can find the [API Documentation](https://github.com/AtrauraBlockchain/liquium-api/wiki/API-Documentation) in our [wiki](https://github.com/AtrauraBlockchain/liquium-api/wiki) too.


![banner](https://s30.postimg.org/rd8670hi9/Pasted_image_at_2017_01_03_04_52_PM_1.png)
