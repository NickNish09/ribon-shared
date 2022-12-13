import { decode, encode } from 'base-64';
export * from './hooks';
export * from './services';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}
