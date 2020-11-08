Introduction
------------

Url Shortner contains two method one is for creting ashort Url and one is to get the short url.


Project Guidelines
------------------

* *Simple* - Get started fast
* *Lightweight* - Small file and memory footprint

Quick Start
---------------
**Use configs in your code:**

```js
{
 "mongoURI": "your mongo connection string", 
}
```


**Start your app server:**

```shell
$ git clone 
$ cd urlshort
$ npm install
$ npm run dev
```
**Api Information:**
Create short Url
```shell
http://localhost:4400/v1/create
```
Body `application/json`

```js 
    {
    "longUrl": "https://www.zee5.com/zee5originals/details/bicchoo-ka-khel/0-6-3064"
    }
```
Get short Url
```shell
http://localhost:4400/v1/{shortURL}
```

Running in this configuration, the `port` and `dbName` elements of `dbConfig`
will come from the `default.json` file


Contributors
------------
<table id="contributors"><tr><td><img src=https://avatars2.githubusercontent.com/u/6408450?s=460&u=1c63c011dfdc919bc21845d2fd7c6ba7ff16eada&v=4><a href="https://github.com/v-bc-vivek">Vivek Gupta</a></td>
</tr></table>

License
-------

[MIT license](https://raw.githubusercontent.com/lorenwest/node-config/master/LICENSE).
