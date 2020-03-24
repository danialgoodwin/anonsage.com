---
title: How to change the functionality of Caps Lock key
tags:
- AutoHotkey
---
Don't use or like the caps lock key? Then, you can map it to any other key or functionality.

I've chosen to use the AutoHotkey scripting language rather than another tool or editing the Windows registry. AutoHotkey is great for quickly adding and changing key mappings. Just download and install to begin using.

My goal was to map the caps lock key to the enter key. So, I created a file called `map-caps-to-enter.ahk` and put in the following code:

```bash
Capslock::
    SetCapsLockState, off
    Send, {ENTER}
return
```

Basically, that code says when the capslock key is pressed, run the following instructions: set caps lock off, then send the ENTER key to the computer. Then the instructions are over when "return" is written. There's no limit to the number of instructions that can be added.

Here's another example that does the same thing, except that it is mapping caps lock to escape, along with a few more tricks that may be needed in a more complicated environment (like running other AHK scripts):

```bash
Capslock::MyFunctionName

MyFunctionName::
    SetCapsLockState, off
    Suspend On
    Send, {ESC}
    Suspend Off
return
```

Basically, instead of running the instructions directly, pressing caps will call a function that runs the instructions. Both of the "suspend" lines just suspends/prevents other code from running.

Thanks to this source for pointing me in the right direction. Also, more ways of changing the mappings are shown: [vim.fandom.com/wiki/Map_caps_lock_to_escape_in_Windows](https://vim.fandom.com/wiki/Map_caps_lock_to_escape_in_Windows)
