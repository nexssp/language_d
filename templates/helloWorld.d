// Nexss Programmer 2.x template for D Language
import std.stdio;
import std.json;
import std.compiler;
import std.conv;

void main()
{
    foreach (const line; stdin.byLine(KeepTerminator.yes))
    {
        JSONValue nexssStdin = parseJSON(line);

        nexssStdin["helloFromD"] = name ~ " " ~ version_major.to!string ~ "."
            ~ version_minor.to!string;

        writeln(nexssStdin.toString());
    }
}
