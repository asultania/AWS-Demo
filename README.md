# AMS
Angular AMS solution

== Installation procedure == Internal use only:

** Software requirements: **
sudo yum update
sudo yum install mongodb mongo-server
sudo yum start mongod 
sudo yum enable mongod
sudo yum install git
sudo yum install npm
cd /var/www/html/
sudo mkdir server
sudo mkdir client

GRUNT RUNS OUT OF CALL STACK SIZE: Run:

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

//Clone Install:
root folder;
npm install -g npm
npm install -g grunt-cli
npm install -g bower
npm install -g yo
npm install -g generator-angular
/server folder;
npm install

client folder;
bower install

//FULL INSTALL:
** install components in server**
go to su OR: set umask to 022.
npm install -g npm
npm install -g grunt-cli
npm install -g bower
npm install -g yo
npm install -g generator-angular
*in /html/server
npm init
npm install --save express
npm install --save mongoose ~3.8.25
npm install --save node-restful
npm install --save method-override
npm install --save body-parser
npm install --save lodash
npm install --save multer


**install client files **
*in/hmtl/client
yo angular
yo angular:route _something_
bower install --save restangular
bower install ng-file-upload --save
bower install ng-file-upload-shim --save
*CRUD if required:
yo angular:route _something_-add --uri=create/_something_
yo angular:route _something_-view --uri=_something_/:id
yo angular:route _something_-delete --uri=_something_/:id/delete
yo angular:route _something_-edit --uri=_something_/:id/edit

== Updated: 
FWS 22
dnf install npm, mongo-db, mongo-server. Enable mongod (restart often required)
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
npm install -g npm, npm install -g bower, -g grunt-cli
clone the repo
in Client, first npm install
then bower install and opt for angular 1.30 option (1.4.4 at this time)
