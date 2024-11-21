
## Guide for contributors

Follows:

- [Github Flow][gflo] for contributions.
- [Conventional Commits][ccom] for commit messages.
- ~[Semver][semv]~, this isn't published.

## style

5 guidelines, not to be taken literally.  

If it's a bugfix, dont bother following any of them, 
just open a PR and I'll clean it up.
 
Summarised to one sentence:

> Don't bloat; write decent tests. move on.

1. Treat dependencies as you would treat a mosquito infected with malaria.
2. Stay minimal. Very, very minimal.
     1. Keeping it simple is as important as making it correct.
     2. Treat dependencies like you would treat a malaria-infected mosquitio. 
        (it's the 4th time it dive-bombed your left ear)
     3. Fewer files, less code, fewer rules, fewer features. 
        Check yourself in the mirror every now and then. 
        Why do you have a husky folder in a project where you're the only 
        contributor? Seriously, why?
     4. 90% correct, very simple `>` 95% correct & simple `>` 100% correct & 
      complex.
3. Avoid state mutations, prefer [pure function calls][pure]
    1. Use one iteration per step. Don't jam multiple steps in one `.map`.
    2. ~~Some~~A lot of cases call for [OOP][oop]. Use just enough to accurately 
      model the core of the domain. Prefer functional concepts for the rest.
      At the very least, do not violate the [Liskov principle][lsp].
4. Use a `concise` style. Abbreviate. If the declaration is next to the usage
   site, use one-letter shorthands. No semicolons.
5. 90% test coverage is enough, but:
   1. aim for [DAMP][damp] tests. Forget about [DRY][dry].
   2. the tests are the actual and only authoritative documentation:
      ideally, the test report could double [as the spec][spec]. 
     
      If you pulled a random high-schooler and gave him 20 euros
      to *read the test report and guess what this is* supposed to be doing,
      would he have any chance of figuring it out?
   3. test only the result itself & move on, how it was obtained is none of 
      the tests business.

"This style guide inspired me to create the iPod"
 Steve Jobs, 2002
 
  
[damp]: https://testing.googleblog.com/2019/12/testing-on-toilet-tests-too-dry-make.html
[pure]: https://en.wikipedia.org/wiki/Pure_function
[spec]: https://www.merriam-webster.com/dictionary/specification
[semv]: https://semver.org/
[ccom]: https://www.conventionalcommits.org/en/about/
[gflo]: https://docs.github.com/en/get-started/using-github/github-flow
[oop]: https://en.wikipedia.org/wiki/Object-oriented_programming
[dry]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[lsp]: https://en.wikipedia.org/wiki/Liskov_substitution_principle
