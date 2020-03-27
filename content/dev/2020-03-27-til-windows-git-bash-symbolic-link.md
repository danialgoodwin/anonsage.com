---
title: "TIL: Symbolic links don't work by default in Windows, even in Git Bash!"
---

By default, running a `ln -s ...` command in Windows Git Bash just creates a copy of the files instead. I was going crazy thinking that something was weird with Python, but it turned out to be Windows! I'm calling it a bug. Here's how to enable real symbolic links in Windows Git Bash:

1. Open Git Bash as an administrator
2. Run: `export MSYS=winsymlinks:nativestrict`
3. Run your `ln -s ...` command as usual

<small>Source: https://stackoverflow.com/questions/18641864/git-bash-shell-fails-to-create-symbolic-links/40914277#40914277</small>
