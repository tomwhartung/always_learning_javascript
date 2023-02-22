
# 2a-minimal_toolchain-update_node_to_lts_version.md

How to make sure node is kept up-to-date.

# Reference

Following the advice in this article, dated 2022-06-28:

- [Update Node.js version in Ubuntu](https://learnubuntu.com/update-node-js/)

# Updating Node.js

**Method 2 is definitely the way to go!**

Then it will get updated along with everything else when I run system updates!
Picking the **LTS** version.

Note that the process calls for first uninstalling what I have!

Run as `root`:
```
apt-get remove nodejs
```

Run as `tomh`:
```
node -v                      # v10.19.0
sudo apt-get remove nodejs
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -      # note the **lts**
sudo apt-get install nodejs
node -v                      # v18.14.2
npm -v                       # 9.5.0 - previously 6.14.4 (see 1-basics.md)
```

