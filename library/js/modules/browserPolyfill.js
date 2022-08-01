/* eslint-disable */
import '@babel/polyfill';
import 'isomorphic-fetch';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

if ( typeof NodeList.prototype.forEach === 'undefined' ) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}