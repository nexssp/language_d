import std.stdio;
import std.json;
import std.conv : to;
import std.algorithm.iteration : map;

void main()
{
    foreach (const line; stdin.byLine(KeepTerminator.yes))
    {
        JSONValue nexssStdin = parseJSON(line);

        nexssStdin["test"] = "test";

        writeln(nexssStdin.toString());
    }
}
