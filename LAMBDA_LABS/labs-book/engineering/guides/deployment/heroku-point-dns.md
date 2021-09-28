# Heroku PointDNS

Heroku doesn't offer nameservers. This means we must use a 3rd party DNS provider in order to assign a custom domain to an app. There are a number of ways to do this; the method described here is compatible with the Lambda Labs domain name process.

## Objective

Establish a path to adding a custom domain for projects hosted on Heroku for free while remaining Labs Compliant.

{% hint style="info" %}
Heroku requires a credit card on file to activate PointDNS \(as well as to support more than 3-4 apps at a time\). PointDNS is free but it does need to be an actual credit card. The card will not be charged; it doesn't even have to have any funds available.
{% endhint %}

### Technologies

* heroku cli
* PointDNS add-on

### References

[Installing Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

[PointDNS](https://devcenter.heroku.com/articles/pointdns)

[Heroku docs on custom domains](https://devcenter.heroku.com/articles/custom-domains)

{% hint style="info" %}
**DNS** stands for **Dynamic Name System**.

Domain names are resolved using what is known as nameservers. Nameservers are servers that match domain names with targets \(IP addresses\). Nameservers allow users to visit [google.com](http://google.com) from anywhere in the world and be connected to a google server geographically close to the user. The actual IP address can changes, but the domain name doesn't.
{% endhint %}

## Getting Started

1. Find a domain on Namecheap that cost less than $15/year
2. Add the PointDNS Add-on to the production Heroku app \(see Notes on PointDNS\)

   > `> heroku addons:create pointdns:developer -a app-name-fe-prod`

3. Add the domain to the Heroku app to get the **DNS target**

   > `> heroku domains:add example.com -a app-name-fe-prod`

4. Keep the terminal open. You will need the **DNS target** which will look something like this

   > tranquil-brook-randomString.herokudns.com

5. Log into PointDNS from Heroku by clicking on the PointDNS Add-on in the Heroku dashboard
6. Click on the domain
7. Edit the CNAME record
   * Name should be the domain name you entered on Step 3
   * Data is the DNS target you created on Step 3
8. Click on Nameservers, copy 4 nameservers
9. Send a message to your SL with the Domain to be purchased using the template

   below and 4 nameservers from the PointDNS pool

10. After your SL submits the request, your domain will be purchased in 1-3 days

### Template for Custom Domain Requests

Use this template for submitting custom domain requests to your SL.

#### Example

```text
Domain Name:
Name Servers:
1.
2.
3.
4.
```

