import std.stdio;
import std.json;

void main()
{
    foreach (const line; stdin.byLine(KeepTerminator.yes))
    {
        JSONValue nexssStdin = parseJSON(line);

        nexssStdin["test"] = "test";

        writeln(nexssStdin.toString());
    }
}
