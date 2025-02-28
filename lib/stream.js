"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Writable = require('stream').Writable;
var util = require('util');
function StreamWrapper(parser) {
    Writable.call(this);
    this._parser = parser;
}
exports.StreamWrapper = StreamWrapper;
util.inherits(StreamWrapper, Writable);
StreamWrapper.prototype._write = function write(chunk, encoding, callback) {
    this._parser.feed(chunk.toString());
    callback();
};
//# sourceMappingURL=stream.js.map