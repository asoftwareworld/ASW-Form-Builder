# Contributing to Form Builder

We would love for you to contribute to Form Builder and help make it ever better!
As a contributor, here are the guidelines we would like you to follow:

 - [Code of Conduct](#coc)
 - [Question or Problem?](#question)
 - [Issues and Bugs](#issue)
 - [Feature Requests](#feature)
 - [Submission Guidelines](#submit-pr)
 - [Coding Rules](#rules)

## <a name="coc"></a> Code of Conduct
Help us keep Form Builder open and inclusive. Please read and follow our [Code of Conduct][coc].

## <a name="question"></a> Got a Question or Problem?

Please do not open issues for general support questions as we want to keep GitHub issues for bug reports and feature requests. You've got much better chances of getting your question answered on [StackOverflow](https://stackoverflow.com/questions/tagged/asw-form-builder) where the questions should be tagged with tag `asw-form-builder`.

StackOverflow is a much better place to ask questions since:

- there are thousands of people willing to help on StackOverflow
- questions and answers stay available for public viewing so your question / answer might help someone else
- StackOverflow's voting system assures that the best answers are prominently visible.

To save your and our time, we will be systematically closing all the issues that are requests for general support and redirecting people to StackOverflow.


## <a name="issue"></a> Found an Issue?
If you find a bug in the source code or a mistake in the documentation, you can help us by
[submitting an issue](#submit-issue) to our [GitHub Repository][github]. Including an issue 
reproduction (via CodePen, JsBin, Plunkr, etc.) is the absolute best way to help the team quickly
diagnose the problem. Screenshots are also helpful.

You can help the team even more and [submit a Pull Request](#submit-pr) with a fix.

## <a name="feature"></a> Want a Feature?
You can *request* a new feature by [submitting an issue](#submit-issue) to our [GitHub 
Repository][github]. If you would like to *implement* a new feature, please submit an issue with
a proposal for your work first, to be sure that we can use it. 
Please consider what kind of change it is:

* For a **Major Feature**, first open an issue and outline your proposal so that it can be
discussed. This will also allow us to better coordinate our efforts, prevent duplication of work,
and help you to craft the change so that it is successfully accepted into the project.
* **Small Features** can be crafted and directly [submitted as a Pull Request](#submit-pr).

### <a name="submit-issue"></a> Submitting an Issue
Before you submit an issue, search the archive, maybe your question was already answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue.
Help us to maximize the effort we can spend fixing issues and adding new
features by not reporting duplicate issues.  Providing the following information will increase the
chances of your issue being dealt with quickly:

* **Overview of the Issue** - if an error is being thrown a non-minified stack trace helps
* **Form Builder Versions** - which versions of Form Builder are affected
    (e.g. 1.1.1)
* **Motivation for or Use Case** - explain what are you trying to do and why the current behavior
    is a bug for you
* **Browsers and Operating System** - is this a problem with all browsers?
* **Reproduce the Error** - provide a live example (using [CodePen][codepen], [JsBin][jsbin],
    [Plunker][plunker], etc.) or a unambiguous set of steps
* **Screenshots** - Due to the visual nature of Form Builder, screenshots can help the team
    triage issues far more quickly than a text description.
* **Related Issues** - has a similar issue been reported before?
* **Suggest a Fix** - if you can't fix the bug yourself, perhaps you can point to what might be
    causing the problem (line of code or commit)

You can file new issues by providing the above information [here](https://github.com/asoftwareworld/ASW-Form-Builder/issues/new).


### <a name="submit-pr"></a> Submitting a Pull Request (PR)
Before you submit your Pull Request (PR) consider the following guidelines:

* Search [GitHub](https://github.com/asoftwareworld/ASW-Form-Builder/pulls) for an open or closed PR
  that relates to your submission. You don't want to duplicate effort.
* Please sign our [Contributor License Agreement (CLA)](#cla) before sending PRs.
  We cannot accept code without this.
* Make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch master
     ```

* Create your patch, **including appropriate test cases**.
* Follow our [Coding Rules](#rules).
* Test your changes with our supported browsers and screen readers.
* Run the full Form Builder test suite, as described in the [developer documentation][dev-doc],
  and ensure that all tests pass.
* Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit). Adherence to these conventions
  is necessary because release notes are automatically generated from these messages.

     ```shell
     git commit -a
     ```
  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Push your branch to GitHub:

    ```shell
    git push my-fork my-fix-branch
    ```

* In GitHub, send a pull request to `components:master`.
* If we suggest changes then:
  * Make the required updates.
  * Re-run the Form Builder test suites to ensure tests are still passing.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull
    Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as
    follows:

    ```shell
    git push my-fork --delete my-fix-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```

## <a name="rules"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs (unit-tests).
* All public API methods **must be documented**. (Details TBD).



[coc]: https://github.com/asoftwareworld/ASW-Form-Builder/blob/master/CODE_OF_CONDUCT.md
[corporate-cla]: http://code.google.com/legal/corporate-cla-v1.0.html
[dev-doc]: https://github.com/asoftwareworld/ASW-Form-Builder/blob/master/DEV_ENVIRONMENT.md
[github]: https://github.com/asoftwareworld/ASW-Form-Builder
[gitter]: https://gitter.im/angular/components
[individual-cla]: http://code.google.com/legal/individual-cla-v1.0.html
[js-style-guide]: https://google.github.io/styleguide/jsguide.html
[codepen]: http://codepen.io/
[jsbin]: http://jsbin.com/
[jsfiddle]: http://jsfiddle.net/
[plunker]: http://plnkr.co/edit
[runnable]: http://runnable.com/
[stackoverflow]: http://stackoverflow.com/
