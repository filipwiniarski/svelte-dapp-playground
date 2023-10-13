Place for pages/layouts. Use (foo) syntax for folder names to create a group.
You can use it to make shared layouts, for example: auth screens, login, logout etc...

Use layout.svelte file to specify layout for the group.
Weird but kind of handy. I don't like that layout has to do with project structure.

You can also make a full (app) a group. In case we need to change top level layout.
You can fall back to a specific layout, eg. +page@(foo).svelte

IMHO This should be a bad practice to change hierarchy, very easy to make spaghetti.
Will see in practice.

Use reusable layouts instead - prioritize those over grouping and hierarchy changes.