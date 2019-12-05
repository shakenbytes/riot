# CONTRIBUTION

[BE NICE!][code-of-conduct]

All the contributions start with an [issue][new-issue]. Since we depend on other people's availability, we want to make sure we are working on the most important things.

We usually go live on [Twitch][twitch-channel], but feel free to open a [pull request][new-pr] if you already got assigned to an issue.

## How Do
* [Project Setup](#project-setup).
* Found a bug or thinking on a feature? [Let us know][new-issue].
* Want to solve a bug or add a feature? Make sure to [open an issue][new-issue], asign it to yourself, follow the [development guidelines](#development-guidelines) and when done [create a pull request][new-pr].

## Project setup

We're really happy you want to contribute to the project! ❤️ The following steps will get you up and running:

1. Fork and clone the repo
1. Install the required dependencies:
    ``` sh
    $ npm install
    ```
1. Start the dev verver:
    ```sh
    $ npm run dev
    ```

## Development guidelines

Guides mentioned in [How Do](#how-do) are a resume of the development life-cycle. Following we have a more detailed set of steps for development:

1. Branch from `master` using a semantic branch name.
1. Do the work required to satisfy the issue. If you identify work that is unrelated to the issue, please [create a new issue][new-issue] and do the work on a separate branch.
1. Submit your pull request to merge back into `master`.
    * Any change which would affect current development should be documented in the description.
    * PRs with an issue should be include that issue's number in the title. IE: `[#33] Fix bug`
    * Assign the PR to yourself.
    * When the PR is ready to be merged, A review should be requested from the [`shakenbytes/riot` team][shakenbytes-devs].

> ## TIPS
>
> ### Solving bugs
> 
> If you find a bug please [create an issue][new-issue] and describe how to reproduce it. Also associate any [pull request][new-pr] you work on to that bug as mentioned in the [development guidelines](#development-guidelines).
> 
> 
> ### Adding features
> 
> Before adding any features [an issue needs to be created][new-issue] where the details of the feature need to be explain along with how to test it.
>
> ### Target the original `master` branch repo
> Keep your `master` branch pointing at the original repository and make pull requests from branches on your fork. To do this, run:
>
> ```sh
> git remote add upstream https://github.com/shakenbytes/riot.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will:
> - Add the original repository as a "remote" called "upstream".
> - Fetch the git information from that remote.
> - Set your local `master` branch to use the `upstream/master`  branch whenever you run `git pull`.
>
> At that point, you can create all of your branches from this `master` branch. Whenever you want to update your version of `master`, do a regular `git pull`.

<!-- Important links -->
[code-of-conduct]: CODE_OF_CONDUCT.md
[new-issue]: https://github.com/shakenbytes/riot/issues/new/choose
[new-pr]: https://github.com/shakenbytes/riot/compare/develop...develop
[shakenbytes-devs]: https://github.com/orgs/shakenbytes/people
[twitch-channel]: https://www.twitch.tv/shakenbytes
<!-- NOTE: This file used https://github.com/nostalgic-css/NES.css/blob/develop/CONTRIBUTING.md document as a blueprint -->