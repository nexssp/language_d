import std.stdio, std.json;
 
void main() {
    auto j = parseJSON(`{ "foo": 1, "bar": [10, "apples"] }`);
    writeln(toJSON(&j)); 
}


import std.stdio;
import std.conv : to;
import std.algorithm.iteration : map;

auto list = stdin.byLine.map!(a => a.to!int);