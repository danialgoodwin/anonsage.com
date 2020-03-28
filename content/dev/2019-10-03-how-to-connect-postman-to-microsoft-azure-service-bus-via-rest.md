---
title: How to connect Postman to Microsoft Azure Service Bus via REST
tags:
- Microsoft
- Azure
- Postman
---

The title says it all, so let's jump right in! Hopefully, I haven't missed any steps, but it's possible. So, let me know if there are any issues or if there are any steps that I should clarify.

1. Create Azure Service Bus
    1. In portal.azure.com, create a new 'Service Bus' resource (choose the 'Standard' pricing tier or higher if you want to use Service Bus Topics)
    2. Navigate to the resource after it is created, then add a 'Queue' or 'Topic' entity
    3. After the entity is created, navigate into it for details that you will need in the next step, like 'Queue URL' and 'Topic URL'
1. Create SAS token
    1. Create a new C# project with the following code:
    
            using System;
            using System.Globalization;
            using System.Security.Cryptography;
            using System.Text;
            using System.Web;
            
            class MainClass
            {
            
                static readonly string queueOrTopicUrl = "TODO"; // Format: "https://<service bus namespace>.servicebus.windows.net/<topic name or queue>/messages";
                static readonly string signatureKeyName = "TODO";
                static readonly string signatureKey = "TODO";
                static readonly TimeSpan timeToLive = TimeSpan.FromDays(1);
            
                public static void Main(string[] args)
                {
                    var token = GetSasToken(queueOrTopicUrl, signatureKeyName, signatureKey, timeToLive);
                    Console.WriteLine("Authorization: " + token);
                }
            
                public static string GetSasToken(string resourceUri, string keyName, string key, TimeSpan ttl)
                {
                    var expiry = GetExpiry(ttl);
                    string stringToSign = HttpUtility.UrlEncode(resourceUri) + "\n" + expiry;
                    HMACSHA256 hmac = new HMACSHA256(Encoding.UTF8.GetBytes(key));
                    var signature = Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes(stringToSign)));
                    var sasToken = String.Format(CultureInfo.InvariantCulture, "SharedAccessSignature sr={0}&sig={1}&se={2}&skn={3}",
                    HttpUtility.UrlEncode(resourceUri), HttpUtility.UrlEncode(signature), expiry, keyName);
                    return sasToken;
                }
            
                private static string GetExpiry(TimeSpan ttl)
                {
                    TimeSpan expirySinceEpoch = DateTime.UtcNow - new DateTime(1970, 1, 1) + ttl;
                    return Convert.ToString((int)expirySinceEpoch.TotalSeconds);
                }
            
            }
            
    2. In the code, update the fields:
        - `queueUrl`: Find this value in Azure Portal > your Service Bus Namespace > 'Queues' or 'Topics', then click on the specific entity, then copy the value for 'Queue URL' or 'Topic URL'
        - `signatureKeyName`: Find this value in Azure Portal > your Service Bus Namespace > 'Shared access policies', then under the 'Policy' column
        - `signatureKey`: Find this value after clicking on the key from above, then use either 'Primary Key' or 'Secondary Key'
    3. Run the code. Save the output for the next step 'Setup Postman'
2. Setup Postman
    1. REST type: POST
    2. URL: `https://<service namespace>.servicebus.windows.net/<topic name or queue>/messages` (Ex: `https://myservicebus.servicebus.windows.net/my-topic/messages`)
    3. Headers:
        - Authorization: `SharedAccessSignature sr=https%3a%2f%2f<service namespace>.servicebus.windows.net%2f<topic name or queue>%2fmessages&sig=<signature hash>&se=<expiry time>&skn=<signature key name>` (Ex: `SharedAccessSignature sr=https%3a%2f%2fmyservicebus.servicebus.windows.net%2fmy-topic%2fmessages&sig=z4C.....3d&se=1570147127&skn=RootManageSharedAccessKey`)
            - Note: It is required that the URL is encoded
        - Content-Type: application/xml
    4. Body: Set to 'raw' and add something similar to the following: `<string xmlns="http://schemas.microsoft.com/2003/10/Serialization/">This is an example message.</string>`
3. In Postman, click 'Send'!
    - The response status will be '201 Created' if completed successfully



## Helpful Resources:
- [Azure Service Bus REST API](https://docs.microsoft.com/en-us/rest/api/servicebus/)
- https://docs.microsoft.com/en-us/rest/api/servicebus/send-message-to-queue
    - This source mentions authorization must be either a WRAP token or SAS token. I take this as the reason I wasn't able to get a regular JWT bearer token working, which does work with Resource Management API.
- https://stackoverflow.com/questions/50914924/send-msg-to-azure-service-bus-que-via-rest
- https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-sas
    - Note: There's a note there about using OAuth 2.0 instead of SAS, but I haven't gotten the OAuth method working yet.
- Helpful for using Resource Management via Postman: [Azure REST APIs with Postman](https://blog.jongallant.com/2017/11/azure-rest-apis-postman/)
- [Azure AD (Active Directory) error codes](https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes)

I ran into a few issues when learning about connecting Postman with Azure Service Bus via REST. Just about all articles where out-of-date or had some wrong information in it. I'll just summarize a few of the issues here:
- In REST requests, the `resource` parameter has been removed and changed to `scope`, and they have completely different values. More info: 
- Other protocol changes: https://docs.microsoft.com/en-us/azure/active-directory/develop/azure-ad-endpoint-comparison#protocol-changes
