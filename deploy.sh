#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build:prod

# 进入生成的文件夹
cd ./dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
git config --global user.email "taoxiang"
git config --global user.name "thawsoar@gmail.com"

git init
git add *

git commit -m 'Travis CI Auto Builder Deploy'
# git push --force --quiet git@github.com:Thawsoar/vue-cms.git master:deploy
git push -f -q https://${GH_TOKEN}@g${GH_REF} master:deploy

sh -o "StrictHostKeyChecking no" root@47.105.40.207 'cd /data/www/middle && rm -rf ./* && git clone -b deploy https://github.com/Thawsoar/vue-cms.git && mv vue-cms dist'

cd -