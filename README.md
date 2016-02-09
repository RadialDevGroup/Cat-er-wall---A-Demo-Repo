# Cat-er-wall - A Demo Repo
This is a demo project created for a presentation to the NoCo Javascript
meetup February 8, 2016.

It is designed to illustrate:

 - Using the react-rails gem to quickly pull React into your project
 - Converting old-style form controls to AJAXy React Awesomeness
 - Converting entire views to React
 - Basic Mixin extraction

There are several branches at each major stage of the process as well as commits within each to show the smaller steps:

 - `0` - Original rails project
 - `1` - Basic component
 - `2` - Entire table rendered in React

## Setup

```
$ bundle install
$ bundle exec ./bin/setup
```

Edit `config/database.yml` as necessary

```
$ bundle exec rake db:setup
```

```
  $ bundle exec rails server
```

## Contact
Marshall Smith<br>
Radial Development Group<br>
marshall@radialdevgroup.com

Radial Development Group is a Loveland based software development consultancy specializing in custom cloud and mobile applications.  We would love to talk to you about better processes for making better software.  Drop us a line.
