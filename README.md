### Creating a Hugo Site and Deploying it to Github Pages

1. Create a GitHub repository called [githubusername].github.io

2. Install requirements on you local machine
    - [Hugo](https://gohugo.io/installation/) (Use the extended edition if you need need Sass)
    - [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

3. Create your site and a first page
    ```console
        ~$ hugo new site githubusername_hugo
        ~$ cd githubusername_hugo
        ~/githubusername_hugo$ hugo new posts/index.md
     ```

4. Create README.md
    #### **[githubusername_hugo/README.md]**'s content:

    ```md
        Live at [https://githubusername.github.io](https://githubusername.github.io)
    ```

 5. Try locally (don't forget to set drafts to false in each of your post files or use hugo -D to also build drafts)
    ```console
         ~/githubusername_hugo$ hugo server
    ```
       - navigate to <http://localhost:1313/>

6. Create and publish Hugo's dynamitically created pages to Github and optinally a custom them and other static content
    ```console
        ~/githubusername-hugo$ hugo
        ~/githubusername-hugo$ git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod # chosen theme
        ~/githubusername-hugo$ git submodule add --depth=1 https://github.com/mdxe/days_since.git static/days_since
        ~/githubusername-hugo$ cd public
        ~/githubusername-hugo/public$ git config --global alias.here '!git init . && git add . && git commit --allow-empty -m "Initialize repository"'
        ~/githubusername_hugo/public$ git here
        ~/githubusername_hugo/public$ git branch -M main
        ~/githubusername_hugo/public$ git remote add origin git@github.com:githubusername/githubusername.github.io.git
        ~/githubusername_hugo/public$ git push -u origin main
    ```
 Note: You might need to go to https://github.com/githubusername/githubusername.github.io, click *Settings*, select *Pages* in the *Code and Security section*. Then select *Deploy from a branch* as the source and select *main* as the branch.  Also checkout your config file at ~$ githubusername-hugo/config.toml.