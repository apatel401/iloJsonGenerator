import React from "react";
import ReactDOM from "react-dom";
import "../css/index.css";
import ILOJsonBuilder from './components/ILOJsonBuilder'
import ProviderComponent from "./components/Provider";

console.group('%%%PACKAGE_NAME%%% v%%%PACKAGE_VERSION%%%');/*RemoveLogging:skip*/
console.log('using React v' + React.version);/*RemoveLogging:skip*/
console.log('using ReactDOM v' + ReactDOM.version);/*RemoveLogging:skip*/
console.groupEnd();/*RemoveLogging:skip*/
console.log(navigator.userAgent.indexOf('Mac'))



ReactDOM.render(
  <ProviderComponent>
    <ILOJsonBuilder />
  </ProviderComponent>
  ,
  document.getElementById('interactive-images-container')
);