# Project Github Search
This is a react frontend page which you can search git repositories.
> Live demo [_here_](https://github-search-ebon.vercel.app/).

## Contents
* [Instructions to run the code or setup the app](#Instructions)
* [what I have done in the coding challenge](#What-I-Have-Done-In-The-Coding-Challenge)
* [Any further improvements you could make](#Improvements)
* [Any problems you faced](#Problems)

## Instructions
Available on [_DockerHub_](https://hub.docker.com/r/rinzielinh/github-search)
Command lines: 
docker pull rinzielinh/github-search
docker run -dp 3000:3000 rinzielinh/github-search

Or can use directly on [_Vercel_](https://github-search-ebon.vercel.app/)

## What I have done in the coding challenge
I have fetched from GitHub API to get reponse per page (sets of 25), order by stargazers_count from high to low. Users can click on name of repositories to visit that github page or name/ avatar of author to visit the author's github. Also users can click on stargazers number to see lists of stargazers or the same the fork. 
When users move to next page, it will fetch API to get data from the second page.
There is a select to choose rate by order ( From "High to Low" or "Low to High").

## Improvements
I can make the layout better if I have more times and to show more details about each results.

## Problems
At first I try to show the Watch_count of repositories but it's showing the same number with stargazers_count (which it should be different)

When users pull docker image from DockerHub, should run in in port 3000. Otherwise, it will face a [_problem_](https://github.com/vitejs/vite/issues/4259) that the page keeps refreshing. 