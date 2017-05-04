# DCAIT-Project
Master Module

------------------------------
Getting started:
  1. Create a local folder
  2. Navigate to folder in command line
  3. git clone ...

------------------------------
Good to know:
  - always branch from dev
  - review existing pull-request (require changes if needed)

------------------------------
General workflow:
  1. checkout dev
  2. git pull (get all changes that might have happened)
  3. On github lock for a task
  4. create a branch for that task
  5. do the task
  6. save work and make it accessible
  7. create a pull request for your branch

-------------------------------
git commands:

create branch:
  git checkout -b brachchname
change to existing branch:
  git checkout branchname
view all existing branches:
  git branch
get changes:
  1. go to dev branch
  2. git pull
save work and make it accessible:
  1. git add .
  2. git commit -m "Commit message"
  -> is saved now
  3. git push
get your status:
  git status
delete a branch with nothing to commit:
  git branch -d branchname
delete a branch with still has commits:
  git branch -D branchname
solve merge conflicts:
  1. checkout your branch
  2. git merge dev
  3. solve merge conflicts in files
  4. git add .
  5. git commit -m "solved merge conflicts"
  6. git push
  7. new pull request
