
# 4-editor_setup.md

The reactjs.org site and the book seem to favor [VS Code](https://code.visualstudio.com/) aka. Visual Studio.

I will be using vim, and fortunately it's on the list!

# References

These are the references I'm using for this part of the process:

- React docs [Editor Setup](https://beta.reactjs.org/learn/editor-setup)
- [vim.org](https://www.vim.org/)
- Found this link a while back, and have been keeping it around since then, for possible use at a future time
  - Not sure where I found this link, but it looks like what I want, so I'm glad I kept it around
  - [Babeljs.io page for editors and syntax highlighting](https://babeljs.io/docs/editors)

# Updating My `~/.vimrc`

Quoting from the [Babeljs.io page for editors and syntax highlighting](https://babeljs.io/docs/editors),
under the **Vim** heading:

> Install the vim-javascript plugin, which brings both improved syntax highlighting and indentation support for JavaScript to Vim.
> Another option is to use yajs.vim with es.next.syntax.

## 1. First Try

The first sentence links to
[https://github.com/pangloss/vim-javascript](https://github.com/pangloss/vim-javascript)

And the `README.md` for this page says to run this command to "Install with native package manager":

```
git clone https://github.com/pangloss/vim-javascript.git ~/.vim/pack/vim-javascript/start/vim-javascript
```

Giving this a try ... well it doesn't seem to do anything, and the most recent update to it is 6 months ago.

A link inside the repo's `ISSUE_TEMPLATE.md` file points to here:
[https://github.com/mxw/vim-jsx](https://github.com/mxw/vim-jsx).

## 2. A Deprecated Repo

The `README.md` file in [https://github.com/mxw/vim-jsx](https://github.com/mxw/vim-jsx)
says it is deprecated, and says:

> the community seems to have settled on
> [MaxMEllon/vim-jsx-pretty](https://github.com/MaxMEllon/vim-jsx-pretty)
> as the syntax package of choice.

## 3. MaxMEllon/vim-jsx-pretty

Although the most recent update to the
[MaxMEllon/vim-jsx-pretty](https://github.com/MaxMEllon/vim-jsx-pretty)
repo was 2 years ago, let's give it a whirl!

### Looking at the `README.md` file:

Rather than doing the whole vim-plug plugin manager thing, let's try to install it
"Using Vim8's package manager" by running these commands

```
mkdir -p ~/.vim/pack/vim-jsx-pretty/start
cd $_
git clone git@github.com:MaxMEllon/vim-jsx-pretty.git
```

## 4. `:syntax on`

These sources don't tell you that you need to turn the feature on.

Enter `:syntax on` in the editor, and *voila!*

Better yet, of course, is to add it to the end of my `~/.vimrc` file!

I verified that this uses the `vim-jsx-pretty` plugin, by moving it off to the side and seeing
only minimal highlighting as a result!!

