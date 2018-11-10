Javascript project

Implement the search and publication of domains through apis.is. 
http://apis.is/isnic?domain=hi.is searches for e.g. the information about hi.is and returns an item, for example:

{
  "results": [
    {
    "domain": "hi.is",
    "registrantname": "Háskóli Íslands",
    "address": "Sæmundargötu 2",
    "city": "Reykjavík",
    "postalCode": "101",
    "country": "IS",
    "phone": "",
    "registered": "11. December 1986",
    "expires": "11. December 2018",
    "lastChange": "29. November 2017"
    }
  ]
}


An HTML and CSS foundation is provided with an appearance that should not be edited.

The search shall:
Only allow to search if value in <input> is not a empty, otherwise the message will be displayed: Domain must be a string (Lén verður að vera strengur)
Publish the message Searching for domain(Leita að léni) ... along with image loading.gif while searching, see .loading class

Error handling:
If an error occurs at apis.is or a connection, an error should be displayed to retrieve data
If no domain name is found, display: Domain is not registered(Lén er ekki skráð)

All domains found must be displayed:
Lén (domain)
Skráð (registered)
Seinast breytt (lastChange)
Rennur út (expires)
If data is defined, it should also display:

Skráningaraðili (registrantname)
Netfang (email)
Heimilisfang (address)
Land (country)
Dates must be published as ISO 8601 Dates (YYYY-MM-DD).

Implement the JavaScript functionality within the model given.

The website is in Icelandic but I have translated the words so it should not be difficult to understand what is going on. A demo video is also included to see how it should work.