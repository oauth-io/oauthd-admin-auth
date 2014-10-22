oauthd admin auth
=================

This is the admin auth plugin for oauthd. oauthd is the open source version of OAuth.io's core, allowing you to easily integrate over 100 different OAuth providers, and use their APIs.

This plugin allows you to authenticate in oauthd as a single admin user, who has all the rights overs the managed applications. It adds the  authentication endpoint `/signin` which allows signup and signin, and middlewares `env.middlewares.auth.needed` and `env.middlewares.auth.optional` which allow you to filter access to various endpoints.

For more information, please check out [oauthd's repository](https://github.com/oauth-io/oauthd).

Installation
------------

To install this plugin in an oauthd instance, just run the following command (you need to have oauthd installed):

```sh
$ oauthd plugins install https://github.com/oauth-io/oauthd-admin-auth.git
```

If you want to install a specific version or branch of this plugin, just run:

```sh
$ oauthd plugins install https://github.com/oauth-io/oauthd-admin-auth.git#branch_or_tag
```